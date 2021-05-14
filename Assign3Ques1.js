"use strict";
var p, c;
var p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(x);
    }, 1 * 1000);
});
var p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve(y);
    }, 2 * 1000);
});
Promise.all([p1, p2]).then(function (results) {
    var sum = results.reduce(function (p, c) { return p + c; });
    console.log("Sum:${sum}");
});
