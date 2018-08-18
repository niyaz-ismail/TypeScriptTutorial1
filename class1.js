"use strict";
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.grtFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Person;
}());
var person1 = new Person("Niyaz", "Ismail");
console.log(person1.grtFullName());
