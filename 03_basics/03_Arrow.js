const user = {
  username: "Damodar",
  price: 450,

  welcomeMessage: function () {
    console.log(`${this.username},welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "Damodar"
//     console.log(this.username);
// }

// chai()

// const addTwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addTwo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({ username: "hitesh" });

console.log(addTwo(3, 4));

//Example
// const myArray = [2, 5, 3, 7, 8];

// myArray.forEach();
