// const tinderUser = new Object() //singleton
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIN = false;

// console.log(tinderUser);

const tinderUser1 = {
  email: "damodar@gmail.com",
  fullName: {
    userfullName: {
      firstName: "Damodar",
      lastName: "Patil",
    },
  },
};

// console.log(tinderUser1["fullName"]["userfullName"]["firstName"]);
// console.log(tinderUser1.fullName.userfullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// const obj4 = Object.assign({}, obj1, obj2, obj3);
// const obj4 = { ...obj1, ...obj2, ...obj3 };
// console.log(obj4);

const users = [
  {
    id: 1,
    email: "da@gmail.com",
  },
  {
    id: 2,
    email: "damamd@gmail.com",
  },
];

// console.log(users[1].email);
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIN"));

const course = {
  courseName: "js in hindi",
  price: "99",
  courseInstructor: "Hitesh",
};

const { courseInstructor: instructor } = course;

console.log(instructor);
