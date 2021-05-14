//let days: number;
class Account{
    a_id: number;
    b_name: string;
    balance: number;
    constructor(a:number, b:string, c:number){
        this.a_id=a;
        this.b_name=b;
        this.balance=c;   
    }
}
    
class SavingAccount extends Account{
    interest: number;
    disp_saving():void{
        //this.interest= this.balance*this.interest*(days/365);
        console.log("The saving account is:"+this.interest)
    }
    }
class CurrentAccount extends Account{
    cash_credit:number;
    disp_current():void{
        console.log("The current account is:"+this.cash_credit)
    }
    
}
const obj_saving= new SavingAccount(1,"Ameya",50000);
const obj_current= new CurrentAccount(1,"Ameya",10000);
const total_balance= this.interest+this.cash_credit;
obj_saving.disp_saving();
obj_current.disp_current();
console.log("Total balance is: "+total_balance);
