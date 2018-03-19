import * as net from "net";
import * as readline from "readline";
import * as os from "os";
const LINE_SEPARATOR = os.EOL;
const rl = readline.createInterface(process.stdin, process.stdout);

rl.question("what's your name? ", (answer) => {
    let name = answer.trim();

    if (!name) {
        throw new Error("没名字还来混");
    }

    let server = net.connect({ port: 2080 }, () => {
        console.log(`Welcome ${name} to 2080 chat room`);

        rl.setPrompt(name + "> ");

        rl.prompt();
        rl.on("line", (line) => {
            // chunk: {"protocol": "boardcast", "from": "zhangsan", "message": "abc", "address": "127.0.0.1:65535"}
            let send = { protocol: "boardcast", from: name, message: line, address: `${server.localAddress}:${server.localPort}` };
            server.write(JSON.stringify(send));

            rl.prompt();
        }).on("close", () => {
            rl.close();
        });
    });

    server.on("data", (chunk) => {
        // chunk: {"protocol": "boardcast", "from": "zhangsan", "message": "abc", "address": "127.0.0.1:65535"}
        try {
            let signal = JSON.parse(chunk.toString().trim());
            let protocol = signal.protocol.trim();
            switch (protocol) {
                case "boardcast":
                    console.log(`${LINE_SEPARATOR}${signal.from} > ${signal.message}`);
                    rl.prompt();
                    break;
                default:
                    server.write("弄啥嘞!你要干的我干不了");
                    break;
            }
        } catch (error) {
            server.write("弄啥咧!");
        }

    });
});