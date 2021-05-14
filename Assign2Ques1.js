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
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var _a, e_1, _b;
var fibonacci = (_a = {},
    _a[Symbol.iterator] = function () {
        var n1 = 0, n2 = 1, value;
        return {
            next: function () {
                var _a;
                // The next line performs parallel assignment using destructuring.
                // It is equivalent to value = n1; n1 = n2; n2 = n1 + n2;
                _a = __read([n1, n2, n1 + n2], 3), value = _a[0], n1 = _a[1], n2 = _a[2];
                // The next line is equivalent to return {value: value};
                return { value: value };
            }
        };
    },
    _a);
try {
    // Note that "let" could be used in place of "const" on the next line,
    // but "const" is more correct here because each iteration
    // gets a new binding for the loop variable n
    // and it is not modified in the loop body.
    for (var fibonacci_1 = __values(fibonacci), fibonacci_1_1 = fibonacci_1.next(); !fibonacci_1_1.done; fibonacci_1_1 = fibonacci_1.next()) {
        var n = fibonacci_1_1.value;
        if (n > 100)
            break;
        console.log(n);
        // outputs 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, and 89
    }
}
catch (e_1_1) { e_1 = { error: e_1_1 }; }
finally {
    try {
        if (fibonacci_1_1 && !fibonacci_1_1.done && (_b = fibonacci_1.return)) _b.call(fibonacci_1);
    }
    finally { if (e_1) throw e_1.error; }
}
