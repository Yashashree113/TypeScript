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


let printCapitalName=(...name)=>{
    console.log(name);
    for(let i in name){
        console.log(name[i].toUpperCase());
    }
}
