'use strict';
const http = require('http');

let count = 0;
const server = http.createServer((request, response)=>{
    response.write(`你是第${count++}次访问该网站`);
    response.end();
})

server.listen(2080, (error)=>{
    if(error) {
        throw error;
    }

    console.log(`启动2080端口监听node server`)
})
