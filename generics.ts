class Person{
     firstName:string;
     lastName:string;

    greet(){
        console.log("Hi There");
    }
}

class Maneger extends Person{

}
class Admin extends Person{

}

let maneger=new Maneger();
let admin=new Admin();

//this extends inside Generic mean just allow this class that extends Person
function personEcho <Type extends Person>(person:Type):Type{
    return person;
}
