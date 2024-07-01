const myNums = [1, 2, 3];

const initialValue = 0;

// const newNums = myNums.reduce(
//   (accumulator, currentvalue) => accumulator + currentvalue,
//   initialValue
// );

// const newNums = myNums.reduce((accumulator, currentvalue) => {
//   return accumulator + currentvalue;
// }, initialValue);

// const myTotal = myNums.reduce((acc, current) => {
//   console.log(`acc: ${acc} and current: ${current}`);
//   return acc + current;
// }, 0);
const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const myTotal = shoppingCart.reduce((acc, pri) => acc + pri.price, 0);
// console.log(myTotal);


const data = [1,2,3,4,5,6,7,8,9,10];
const dataTotal = data.reduce((acc, pri) => acc + pri, 0);
console.log(dataTotal);

