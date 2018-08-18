interface Person{
  firstName:string;
  lastName:string;
  getFullName():string;
}

class employee implements Person{
  firstName:string;
  lastName:string;
  getFullName():string {
      return this.firstName +"  "+ this.lastName ;
  }
}

var emp1:Person=new employee();

console.log(emp1.getFullName());

var obj1={
  firstName:"Niyaz",
  lastName:"Ismail",
  getFullName:()=> "Hello World",
}
//this is called Duck
emp1=obj1;

console.log(emp1.getFullName());
