"use strict";
exports.__esModule = true;
exports.sorted = void 0;
var sorted = function (numbers) {
    var result = numbers.sort(function (a, b) { return a - b; });
    console.log(result);
};
exports.sorted = sorted;
var numbers = [1, 5, 3, 7, 0, 5, 3, 6];
(0, exports.sorted)(numbers);
