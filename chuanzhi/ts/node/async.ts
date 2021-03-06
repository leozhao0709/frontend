let sleep = (time) => {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
            // // 模拟出错了，返回 ‘error’
            // reject('error');
        }, time);
    });
};

let start = async function () {
    try {
        console.log("start");
        await sleep(3000); // 这里得到了一个返回错误
        // 所以以下代码不会被执行了
        console.log("end");
    } catch (err) {
        console.log(err); // 这里捕捉到错误 `error`
    }
};

start();