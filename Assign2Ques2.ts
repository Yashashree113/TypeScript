let num=153;
function isArmstrong(_digit: number){
        let result = 0
        let digits = [...num.toString()]
        let power = digits.length;
        return{
           next: function(){
                digits.forEach((digit) => {
                    result+=Math.pow(parseInt(digit),power)
                  })
                  return result==num? 
                  {value:result,done:false}:
                  {value:undefined, done:true};
            
        }
    }
}
let Armstrong=isArmstrong(num);
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