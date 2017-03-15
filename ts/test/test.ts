import * as moment from "moment";
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

let Jan = new Date(2017, 0, 31);
let Feb = moment(Jan).add(1, "month");

console.log(Feb);