"use strict";
var order = {
    id: 1,
    title: "Dress",
    price: 1500,
    placeorder: function () {
        var copy = Object.assign(order);
        console.log(copy);
    },
    getprice: function () {
        var copy_new = Object.assign(order);
        console.log(copy_new);
    }
};
