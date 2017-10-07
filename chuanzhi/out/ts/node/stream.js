"use strict";
var fs = require("fs");
var path = require("path");
var fileName = path.join(__dirname, "./lyrics/血染的风采.mp3");
var outputPath = path.join(__dirname, "./lyrics/test.mp3");
var inputstream = fs.createReadStream(fileName);
var outputstream = fs.createWriteStream(outputPath);
inputstream.on("data", function (chunk) {
    outputstream.write(chunk);
});
inputstream.on("end", function () {
    console.log("finish copy");
});
