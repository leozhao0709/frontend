import * as net from "net";
import * as os from "os";

const LINE_SEPARATOR = os.EOL;
const port = 2080;
const socket = net.connect({
    port: port
}, () => {
    console.log("connect to server!");

});
process.stdin.on("data", (chunk) => {
    socket.write(chunk.toString().trim());
});
socket.on("data", (data) => {
    console.log(data.toString());
    process.stdout.write("客户端: ");
    // socket.end();
});

socket.on("end", () => {
    console.log("disconnect from server");

});