"use strict";
function test() {
    exports.a = a = 2;
    console.log(a);
}
test();
var a = 1;
exports.a = a;
console.log(a);
var b = 2;
exports.a = a = b;
console.log(a);
