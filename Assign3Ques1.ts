

let p,c;
const p1= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(x);
    }, 1*1000);
});
const p2= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(y);
    }, 2*1000);
});
Promise.all([p1,p2]).then(results=>{
    const sum=results.reduce((p,c) => p+c);
    console.log("Sum:${sum}");
});
