const descripter = Object.getOwnPropertyDescriptor(Math, "PI");

// console.log(Math.PI)

// console.log(Math.floor(Math.PI));

// console.log(descripter);

const myNewObject = {
  name: "ginger chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("Something is wrong");
  },
};

console.log(Object.getOwnPropertyDescriptor(myNewObject, "name"));

Object.defineProperty(myNewObject, 'name', {
    writable: false,
    enumerable: false,
    // configurable: false
})
// console.log(Object.getOwnPropertyDescriptor(myNewObject, "name"));

for (const [key, value] of Object.entries(myNewObject)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
