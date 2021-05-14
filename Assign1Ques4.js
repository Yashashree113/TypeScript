"use strict";
var names = [{ Name: 'Tom' }, { Name: 'Ivan' }, { Name: 'Jerry' }];
var Name, length;
var obj = { Name: Name, length: length };
var output = names.map(function (value) {
    obj[value.Name] = value.Name;
    length = value.Name.length;
    return obj;
});
console.log(output);
