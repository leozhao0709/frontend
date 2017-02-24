import * as net from "net";
import * as os from "os";

const LINE_SEPARATOR = os.EOL;
const server = net.createServer((socket) => {
    // 当有客户端与我连接的时候出发
    console.log(`客户端 ${socket.remoteAddress}:${socket.remotePort} 进来了`);

    socket.write(`系统信息: 欢迎回来`);

    const autoReplyMsg = `系统信息: 你说啥`;
    socket.on("data", (chunk) => {
        console.log(`客户端: ${chunk.toString()}`);
        socket.write(autoReplyMsg);
        console.log(autoReplyMsg);
    });

    socket.on("end", () => {
        console.log(`${socket.remoteAddress}:${socket.remotePort} 离开了`);
    });
});

server.on("error", (err) => {
    throw err;
});

const port = 2080;
server.listen(port, (err) => {
    if (err) {
        console.log("端口备战");
        return false;
    }
    console.log(`服务器正常监听[${port}]端口`);
});