"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var num = 153;
function isArmstrong(_digit) {
    var result = 0;
    var digits = __spreadArray([], __read(num.toString()));
    var power = digits.length;
    return {
        next: function () {
            digits.forEach(function (digit) {
                result += Math.pow(parseInt(digit), power);
            });
            return result == num ?
                { value: result, done: false } :
                { value: undefined, done: true };
        }
    };
}
var Armstrong = isArmstrong(num);
console.log(Armstrong.next());
/*for(const n of isArmstrong){
    if(n>100) break;
    console.log(n);/*
    
}
/*function isArmstrong(num) {
    let digits = [...num.toString()]
    let result = 0
    let power = digits.length;
    digits.forEach((digit) => {
      result+=Math.pow(parseInt(digit),power)
    })
    if(result === num) return result
    //return "Not Armstrong"
  }
  
  console.log(isArmstrong(1634))*/ 
