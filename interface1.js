"use strict";
var employee = /** @class */ (function () {
    function employee() {
    }
    employee.prototype.getFullName = function () {
        return this.firstName + "  " + this.lastName;
    };
    return employee;
}());
var emp1 = new employee();
console.log(emp1.getFullName());
var obj1 = {
    firstName: "Niyaz",
    lastName: "Ismail",
    getFullName: function () { return "Hello World"; },
};
//this is called Duck
emp1 = obj1;
console.log(emp1.getFullName());
