import * as fs from "fs";
import * as path from "path";
import * as moment from "moment";

let dirPath = path.join(__dirname, process.argv[2] || "./");

fs.readdir(dirPath, (err, files) => {
    // console.log(files);
    files.forEach((file) => {
        fs.stat(path.join(dirPath, file), (err, status) => {
            console.log(`${moment(status.mtime).format("YYYY/MM/DD HH:mm")}\t${status.size}\t${file}`);
        });
    });
});
