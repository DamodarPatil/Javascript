const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["shaktiman", "naagraj"];

// console.log(myArr[1])
// console.log(myHeros[1]);

// Array methods

// myArr.push(6) //for add element
// myArr.push(7)
// myArr.pop() // for remove element

// myArr.unshift(11)
// myArr.unshift(12)
// myArr.shift()

// console.log(myArr.includes(5))
// console.log(myArr.indexOf(5))

const newArr = myArr.join();
// console.log(typeof myArr);
// console.log(typeof newArr)

console.log("A ", myArr);

const arr1 = myArr.slice(1, 3);
console.log(arr1);
console.log("B ", myArr);

const arr2 = myArr.splice(1, 5);
console.log(arr2);
console.log("C ", myArr);


