const fs = require("fs");
const path = require("path");
const iconv = require("iconv-lite");

fs.readFile(path.join(__dirname, "./lyrics/万水千山总是情.lrc"),(err, data)=>{
    console.log(iconv.decode(data, "GBK"));
});
