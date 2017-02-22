"use strict";
var path = require("path");
var fs = require("fs");
var iconv = require("iconv-lite");
var readline = require("readline");
var os = require("os");
var fileList_1 = require("./fileList");
var LINESEPARATOR = os.EOL;
var inputfilePath = path.join(__dirname, "./lyrics/万水千山总是情.lrc");
var outputfilePath = path.join(__dirname, "./lyrics/test.lrc");
var inputstream = fs.createReadStream(inputfilePath).pipe(iconv.decodeStream("gbk"));
var outputstream = fs.createWriteStream(outputfilePath);
var rl = readline.createInterface({
    input: inputstream
});
var fileLines = [];
rl.on("line", function (line) {
    fileLines.push(line + LINESEPARATOR);
});
rl.on("close", function () {
    for (var _i = 0, fileLines_1 = fileLines; _i < fileLines_1.length; _i++) {
        var line = fileLines_1[_i];
        outputstream.write(line);
    }
});
fileList_1.listCurrentDirFiles(__dirname);
