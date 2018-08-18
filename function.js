"use strict";
// optional value must be at the end and you can defined multiple option but just at the end
function add(a, b, c /*default value*/, d /*optional value*/, e) {
    if (c === void 0) { c = 1; }
    console.log(e);
    return a + b + c + d;
}
console.log(add(5, 6, 6, 3, "niyaz"));
console.log(add(5, 6));
//console.log(add(5));// error in typescript but correct in javascript
