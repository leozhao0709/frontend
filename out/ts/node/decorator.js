var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function fast(target, name, descriptor) {
    target.speed = 20;
    var run = descriptor.value;
    descriptor.value = function () {
        // run();
        console.log("speed " + this.speed);
    };
    return descriptor;
}
var Rabbit = (function () {
    function Rabbit() {
    }
    Rabbit.prototype.run = function () {
        console.log("running~");
    };
    return Rabbit;
}());
__decorate([
    fast
], Rabbit.prototype, "run", null);
var bunny = new Rabbit();
bunny.run();
