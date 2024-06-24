//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const bigNumber = 3456543576654356754n

const score = 100;

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "batman"];
let myObj = {
  name: "Damodar",
  age: 22,
};

const myFunction = () => {
  console.log("DDD");
};
// console.log(typeof myFunction);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object 
*/
// https://262.ecma-international.org/5.1/#sec-11.4.3

// Stack memory(Primitive), Heap(Non-Primitive)

let myName = "Damodar";

let anotherName = myName;
anotherName = "Patil";

console.log(myName);
console.log(anotherName);
 
let userOne = {
  email: "dam@gmail.com",
  upi: "user@ybl",
};

let userTwo = userOne;

userTwo.email = "damodar@gmail.com";

console.log(userOne.email)
console.log(userTwo.email);
