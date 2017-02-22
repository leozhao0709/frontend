declare let c: number;

function test() {
    a = 2;
    let c = "333";
    console.log(a, c);
}

test();
let a = 1;
console.log(a);
let b = 2;
a = b;
console.log(a);
export {a};