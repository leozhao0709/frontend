import * as fs from "fs";
import * as iconv from "iconv-lite";
import * as path from "path";

let fileName = path.join(__dirname, "./lyrics/血染的风采.mp3");
let outputPath = path.join(__dirname, "./lyrics/test.mp3");
let inputstream = fs.createReadStream(fileName);
let outputstream = fs.createWriteStream(outputPath);

inputstream.on("data", (chunk) => {
    outputstream.write(chunk);
});

inputstream.on("end", () => {
    console.log("finish copy");
});