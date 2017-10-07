function fast(target, name, descriptor) {
    target.speed = 20;
    let run = descriptor.value;
    descriptor.value = function() {
        // run();
        console.log(name);
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