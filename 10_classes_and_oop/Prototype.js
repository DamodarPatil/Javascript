let myName = "Damodar  ";
let mySurname = "Patil  ";

// console.log(myName.trim().length); //low iq vro

let myHeros = ["thor", "spiderman"];

let heroPower = {
  thor: "thunder",
  spiderman: "sling",

  getThorPower: function () {
    console.log(`Thor Power is ${this.thor}`);
  },
};

Object.prototype.damodar = function () {
  console.log(`Damodar is present in all objects`);
};

Array.prototype.heyDamodar = function () {
  console.log("Damodar says hello");
};

// heroPower.damodar();
// myHeros.damodar();
// myHeros.heyDamodar();
// heroPower.heyDamodar()

// inheritance

const User = {
  name: "chai",
  email: "chai@gmail.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

// modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher, TASupport);

let anotherUsername = "ChaiAurCode";

String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`True length is: ${this.trim().length}`);
};

anotherUsername.trueLength()
"damodar".trueLength()
"iceTea  ".trueLength()
