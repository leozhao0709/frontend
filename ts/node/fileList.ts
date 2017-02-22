import * as fs from "fs";
import * as path from "path";
import * as moment from "moment";

let listCurrentDirFiles = (directory: string, deepth: number = 1) => {
    let currentDirectory = path.join(directory);

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

    let fileLists = fs.readdirSync(currentDirectory);
    fileLists.forEach((file) => {
        let deep = deepth;
        let prefix = "│──";
        let deepPrefix = new Array(deep).join("|\t");

        let stats = fs.statSync(path.join(currentDirectory, file));
        console.log(`${deepPrefix}${prefix}${file}`);
        if (stats.isDirectory()) {
            deep += 1;
            listCurrentDirFiles(path.join(currentDirectory, file), deep);
        }
    });
};

let currentDirectory = path.join(__dirname, process.argv[2] || "./");
listCurrentDirFiles(currentDirectory);