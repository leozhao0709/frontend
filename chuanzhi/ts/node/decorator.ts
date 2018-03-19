const fast = (target, name, descriptor) => {
    console.log(target);
    console.log('---------');
    console.log(name);
    console.log('---------');
    console.log(descriptor);
    console.log('---------');
    target.speed = 20;
    let run = descriptor.value;
    descriptor.value = function () {
        run();
        console.log(`speed ${this.speed}`);
    };
    return descriptor;
}

class Rabbit {
    @fast
    run() {
        console.log("running~");
    }
}

let bunny = new Rabbit();
bunny.run();