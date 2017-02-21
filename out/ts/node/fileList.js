"use strict";
var fs = require("fs");
var path = require("path");
var dirPath = path.join(__dirname, process.argv[2] || "./");
fs.readdir(dirPath, function (err, files) {
    // console.log(files);
});
