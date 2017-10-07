"use strict";
var fs = require("fs");
var path = require("path");
var moment = require("moment");
var dirPath = path.join(__dirname, process.argv[2] || "./");
fs.readdir(dirPath, function (err, files) {
    // console.log(files);
    files.forEach(function (file) {
        fs.stat(path.join(dirPath, file), function (err, status) {
            console.log(moment(status.mtime).format("YYYY/MM/DD HH:mm") + "\t" + status.size + "\t" + file);
        });
    });
});
