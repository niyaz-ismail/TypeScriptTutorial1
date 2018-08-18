// optional value must be at the end and you can defined multiple option but just at the end
function add(a:number,b:number,c:number=1/*default value*/,d?:number/*optional value*/,e?:string):number{
    console.log(e);
  return a+b+c+d;
}

console.log(add(5,6,6,3,"niyaz"));
console.log(add(5,6));
//console.log(add(5));// error in typescript but correct in javascript
