var abc = 321;
exports.setABC = function(abcValue) {
    abc = abcValue;
};
exports.getABC = function() {
    return abc;
};

exports.defaultABC = abc;
