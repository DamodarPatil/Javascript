//singleton
// Object.create

//object literals
const dynamicKey = "email";
const mySym = Symbol("symbol1");

const JsUser = {
  name: "Damodar",
  "full name": "Damodar Patil",
  [dynamicKey]: "damodar18@gmail.com",
  [mySym]: "mykey1",
  age: 19,
  location: "Ahmedabad",
  email: "damodar18@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
  // greeting: () => {
  //   console.log("hello")
  // }
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(typeof JsUser[mySym]);
// console.log(typeof mySym);
// console.log(JsUser[dynamicKey]);

// JsUser.email = "d@gmail.com";
// Object.freeze(JsUser)
// JsUser.email = "daaaa@gmail.com";
// JsUser["location"] = "Surat"
// JsUser["age"] = 23
// console.log(JsUser)

/*// Freeze only the 'age' property
Object.defineProperty(JsUser, 'age', {
  writable: false,
  configurable: false
});

// Attempting to change properties
JsUser.email = "d@gmail.com";         // This change will take effect
JsUser["location"] = "Surat";         // This change will take effect
JsUser["age"] = 23;                   // This change will not take effect

console.log(JsUser);

// Trying to redefine the 'age' property will throw an error
try {
  Object.defineProperty(JsUser, 'age', {
    value: 25
  });
} catch (e) {
  console.error(e);
}*/
// JsUser.greeting()
JsUser.greeting = () => {
  console.log("heelo");
};

JsUser.greeting2 = () => {
  console.log("hello vro");
};
// console.log(JsUser.greeting())

// JsUser.greeting2 = () => {
//   console.log(`Dam, ${JsUser["name"]}`)
// }
JsUser.greeting2 = function () {
  console.log(`Dam, ${this.name}`);
};

console.log(JsUser.greeting2());


