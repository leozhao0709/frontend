import * as path from "path";
import * as fs from "fs";
import * as iconv from "iconv-lite";
import * as readline from "readline";
import * as os from "os";

// fs.readFile(path.join(__dirname, "./lyrics/万水千山总是情.lrc"), (err, data) => {
//     // console.log(iconv.decode(data, "gbk"));
// });
const LINESEPARATOR = os.EOL;
let inputfilePath = path.join(__dirname, "./lyrics/万水千山总是情.lrc");
let outputfilePath = path.join(__dirname, "./lyrics/test.lrc");
let inputstream = fs.createReadStream(inputfilePath).pipe(iconv.decodeStream("gbk"));

let outputstream = fs.createWriteStream(outputfilePath);

let rl = readline.createInterface({
    input: inputstream
});

let fileLines: string[] = [];

rl.on("line", (line) => {
    fileLines.push(line + LINESEPARATOR);
});

rl.on("close", () => {
    for (let line of fileLines) {
        outputstream.write(line);
    }
});

