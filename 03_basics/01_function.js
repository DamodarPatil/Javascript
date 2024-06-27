// const addTwoNumbers = (number1, number2) => {
//   console.log(number1 + number2);
// };

// addTwoNumbers(3,4)

const addTwoNumbers = (number1, number2) => {
  //   let result = number1 + number2;
  //   return result;
  return number1 + number2;
};

const result = addTwoNumbers(3, 5);
// console.log("Result:" + result);

const loginUserName = (username) => {
  if (!username) {
    console.log("Please enter a username");
  }
  return `${username}`;
};

// console.log(loginUserName("Damodar"));
// const result1 = loginUserName("Damodar");
// console.log(result1);

const calculateCartPrice = (val1, val2, ...num1) => {
  return num1;
};

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "Damodar",
  price: 199,
};

const handleObject = (anyobject) => {
//   console.log(
//     `username is ${anyobject.username} and price is ${anyobject.price}`
//   );
};

// handleObject(user)
handleObject({
  username: "Devansh",
  price: 299,
});

const myNewArray = [200,400,100,600];

const returnSeconedValue = (getArray) => {
    return [getArray[1],getArray[2]]
}

console.log(returnSeconedValue(myNewArray));
console.log(returnSeconedValue([100,50,2,4]))