"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//let days: number;
var Account = /** @class */ (function () {
    function Account(a, b, c) {
        this.a_id = a;
        this.b_name = b;
        this.balance = c;
    }
    return Account;
}());
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SavingAccount.prototype.disp_saving = function () {
        //this.interest= this.balance*this.interest*(days/365);
        console.log("The saving account is:" + this.interest);
    };
    return SavingAccount;
}(Account));
var CurrentAccount = /** @class */ (function (_super) {
    __extends(CurrentAccount, _super);
    function CurrentAccount() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CurrentAccount.prototype.disp_current = function () {
        console.log("The current account is:" + this.cash_credit);
    };
    return CurrentAccount;
}(Account));
var obj_saving = new SavingAccount(1, "Ameya", 50000);
var obj_current = new CurrentAccount(1, "Ameya", 10000);
var total_balance = this.interest + this.cash_credit;
obj_saving.disp_saving();
obj_current.disp_current();
console.log("Total balance is: " + total_balance);
