"use strict";
var fs = require("fs");
var path = require("path");
exports.listCurrentDirFiles = function (directory, deepth) {
    if (deepth === void 0) { deepth = 1; }
    var currentDirectory = path.join(directory);
    // fs.readdir(currentDirectory, (error, files) => {
    //     files.forEach((file) => {
    //         fs.stat(path.join(currentDirectory, file), (err, stats) => {
    //             console.log(`${moment(stats.ctime)}\t${stats.size}\t${file}`);
    //             if (stats.isDirectory()) {
    //                 listCurrentDirFiles(path.join(currentDirectory, file));
    //             }
    //         });
    //     });
    // });
    var fileLists = fs.readdirSync(currentDirectory);
    fileLists.forEach(function (file) {
        var deep = deepth;
        var prefix = "│──";
        var deepPrefix = new Array(deep).join("|\t");
        var stats = fs.statSync(path.join(currentDirectory, file));
        console.log("" + deepPrefix + prefix + file);
        if (stats.isDirectory()) {
            deep += 1;
            exports.listCurrentDirFiles(path.join(currentDirectory, file), deep);
        }
    });
};
var currentDirectory = path.join(__dirname, process.argv[2] || "./");
exports.listCurrentDirFiles(currentDirectory);
