const gulp = require("gulp");
const plumber = require("gulp-plumber");
const sass = require("gulp-sass");
const connect = require("gulp-connect");
const notify = require("gulp-notify");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");
const minifyCss = require("gulp-minify-css");
const imagemin = require("gulp-imagemin");
const del = require("del");
const gutil = require("gulp-util");

gulp.task("autoprefixer", function () {
    var postcss      = require("gulp-postcss");
    var sourcemaps   = require("gulp-sourcemaps");
    var autoprefixer = require("autoprefixer");

    gulp.src("./src/*.css")
        .pipe(sourcemaps.init())
        .pipe(postcss([ autoprefixer() ]))
        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("./dest"))
        ;
});

const pipelog = notify.withReporter(() => {
    // console.log("Title:", options.title);
    // console.log("Message:", options.message);
    // callback();
});

// pipelog.logLevel(2);

gulp.task("copy-index", () => {
    return gulp.src(["./移动端/**", "!./移动端/**/{js,js/**}"])
            .pipe(gulp.dest("./gulp_test"));
});

gulp.task("copy-gulp", () => {
    gulp.src(["./gulpfile.js"])
        .pipe(gulp.dest("./gulp_test"));
});

gulp.task("watch", () => {
    gulp.watch("./gulpfile.js", ["copy-gulp"]);
});

gulp.task("sassTask", () => {
    // return gulp.watch(["./sass/test/**/*.scss"], () => {
        del.sync("./sass/test/stylesheets");
        gutil.log(gutil.colors.green("delete sass build files"));

        gulp.src(["./sass/test/sass/*.scss"])
            .pipe(pipelog("compile sass: <%= file.relative %>"))
            .pipe(sass({outputStyle: "expanded"}))
            .on("error", sass.logError)
            .pipe(gulp.dest("./sass/test/stylesheets"))
            .pipe(minifyCss())
            .pipe(rename({suffix: ".min"}))
            .pipe(gulp.dest("./sass/test/stylesheets"))
            // .pipe(debug({title: "compile sass"}))
            // .pipe(notify("compile sass: <%= file.relative %>"))
            .pipe(connect.reload())
            .pipe(pipelog({message: "server reload", onLast: true}))
            ;
    // });
});

gulp.task("watch-sass", ()=>{
    gulp.watch(["./sass/test/**/*.scss"], ["sassTask"]);
});

gulp.task("server", () => {
    connect.server({
        name: "server",
        root: "./sass/test",
        port: 9000,
        livereload: true
    })
    ;
});



gulp.task("scripts", () => {
    gulp.src(["./gulp_test/微金所案例/js/*.js"])
        .pipe(plumber())
        .pipe(concat("vendor.js"))
        .pipe(gulp.dest("./gulp_test/concat/js"))
        .pipe(uglify())
        .pipe(rename("vendor.min.js"))
        .pipe(gulp.dest("./gulp_test/concat/js"))
        ;
});

gulp.task("watch-scripts", () => {
    gulp.watch(["./gulp_test/微金所案例/js/*.js"], ["scripts"]);
});

gulp.task("image", ()=>{
    gulp.src(["./gulp_test/微金所案例/img/{**.jpg}"])
        .pipe(imagemin())
        .pipe(gulp.dest("./gulp_test/imagemin"))
        ;
});

gulp.task("default", ["server", "watch-sass"]);

// gulp.task("default", ["hello", "copy-index"], () => {
//     console.log("Hello World");
// });