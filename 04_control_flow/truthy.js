//falsy valus

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0",'false', " ", [], {}, function(){}

//Nullish Coalescing Operator (??): null undefined
//The Nullish Coalescing Operator (??) in JavaScript is a logical operator that returns the right-hand side operand when the left-hand side operand is null or undefined. Otherwise, it returns the left-hand side operand.
let val1;
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ?? 15
val1 = null ?? 10 ?? 20
console.log(val1)

