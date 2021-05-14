"use strict";
/*let user_friends=[];

let add=function(x=1,y=5){
    console.log(x+y);
}
add();
add(20);
add(10,5);

let userFriends=function(username, ...user_friends){
    console.log(username);
    
    for(let i in user_friends){
        console.log(user_friends);
    
    }
}
userFriends("Cam","Mitchell","Phil");
userFriends("Jay","Joe");
*/
var printCapitalName = function () {
    var name = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        name[_i] = arguments[_i];
    }
    console.log(name);
    for (var i in name) {
        console.log(name[i].toUpperCase());
    }
};
