class Person{
    firstName:string;
    lastName:string;

    constructor(firstName:string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }

    grtFullName(){
        return this.firstName +" "+ this.lastName ;
        
    }

}

var person1: Person=new Person("Niyaz","Ismail");
console.log(person1.grtFullName());
