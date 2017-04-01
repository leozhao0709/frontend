const path = require("path");

// const temp = path.join(__dirname, "./lyrics/血染的风采.lrc");

const temp = "./target";

console.log(path.basename(temp));
// console.log(path.basename(temp, "lrc"));
// console.log(path.delimiter);

// console.log(process.env.PATH.split(path.delimiter));
// console.log(path.dirname(temp));
// console.log(path.extname(temp));

// let obj = path.parse(temp);
// console.log(obj);
// console.log(path.format(obj));

//path.join()
// path.isAbsolute()

// let a = path.normalize("/Users/lzhao/Documents/my_git/frontend/node/baseAPI/lyrics/../lyrics");
// console.log(a);

// path.relative(from, to);
// console.log(path.relative(__dirname, "/Users/lzhao/Documents/my_git/frontend"));

// path.resolve([from...], to)
// console.log(path.resolve(__dirname, "../", "./", "code"));

// path.sep
// console.log(path.sep);

//path.win32
// path.posix