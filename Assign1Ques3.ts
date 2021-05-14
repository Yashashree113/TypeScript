declare interface ObjectConstructor {
    assign(...objects: Object[]): Object;
}
const order= {
    id: 1,
    title: "Dress",
    price: 1500,
placeorder(){
    
    const copy= Object.assign(order);
    console.log(copy);
},
getprice(){
    const copy_new= Object.assign(order);
    console.log(copy_new);
}
}

