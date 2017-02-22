function test(a: number = 1) {
    a++;
    if (a === 2) {
        test(a);
    }
    console.log(a);
}

test();