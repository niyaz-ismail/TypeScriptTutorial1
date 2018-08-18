class Person{
    private firstName:string;
    protected middleName:string;
    public lastName:string;
    readonly age:number;//like final keyword you can changed when created and inside constructor
    /*constructor (){

    }*/
    greet(){
        console.log("Hi There");
    }
}

class Programmer extends Person{
  greet(){
      console.log("Hello World");
  }
  output(){
    this.greet();
    super.greet();
  }
}


var prog:Programmer=new Programmer();
prog.output();

var prog2:Person=new Programmer();
prog.greet();
