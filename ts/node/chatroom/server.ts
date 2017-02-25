import * as net from "net";
import * as os from "os";

const LINE_SEPARATOR = os.EOL;

let clients: net.Socket[] = [];

const server = net.createServer((socket: net.Socket) => {

    clients.push(socket);
    console.log(`Welcome ${socket.remoteAddress}:${socket.remotePort} to 2080 chat room`);

    function boardcast(signal: any) {
        let username = signal.from;
        let message = signal.message;
        let address = signal.address;

        let sendMsg = {
            protocol: signal.protocol,
            from: username,
            message: message
        };

        clients.forEach((client) => {
            // console.log(`*${address.toString()}*`);
            // console.log(`*${socket.remoteAddress.substring(7)}:${socket.remotePort}*`);
            // console.log(address.toString().trim() !== `${socket.remoteAddress.substring(7)}:${socket.remotePort}`);
            if (address.toString() !== `${client.remoteAddress.substring(7)}:${client.remotePort}`) {
                client.write(JSON.stringify(sendMsg));
            }
        });
    }

    socket.on("data", (chunk) => {
        // chunk: {"protocol": "boardcast", "from": "zhangsan", "message": "abc", address: "127.0.0.1", "port": "65535"}
        try {
            let signal = JSON.parse(chunk.toString().trim());
            let protocol = signal.protocol.trim();
            // console.log(signal);
            switch (protocol) {
                case "boardcast":
                    boardcast(signal);
                    break;
                default:
                    socket.write("弄啥嘞!你要干的我干不了");
                    break;
            }

            let username = signal.username;
        } catch (error) {
            socket.write("弄啥咧!");
        }

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