// for of

const arr = [1, 2, 3, 4, 5];

for (const i of arr) {
  // console.log(i);
}

const greetings = "hello world";

for (const i of greetings) {
  //   console.log(i);
}

// Maps (data type)
//only unique value not duplicate values accpetable
const map = new Map();
map.set("IN", "india");
map.set("USA", "united");
map.set("PAK", "zihadi");
map.set("PAK", "zihadi");

// console.log(map);

for (const [key, value] of map) {
  console.log(`${key} :- ${value}`);
}

const myObject = {
  game1: "NFS",
  game2: "Spiderman",
};
/*The for...of loop is used to iterate over iterable objects such as arrays, strings, maps, and sets. 
However, it doesn't work directly with plain objects. For iterating over the properties of an object, 
 you can use the for...in loop or Object.entries() in combination with for...of.*/
// for (const [key,value] of myObject) {
//     console.log(`${key} :- ${value}`);
// }
