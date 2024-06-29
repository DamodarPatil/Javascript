const coding = ["js", "ruby", "java", "python", "cpp"];

coding.forEach((val) => {
  // console.log(val);
});

// function printMe(item){
//   console.log(item);
// }

// coding.forEach(printMe)

const myCoding = [
  {
    name: "Damodar",
    age: 20,
  },
  {
    name: "Devansh",
    age: 20,
  },
];

myCoding.forEach((item, index, arr) => {
  // console.log(item);
  // console.log(item.age);
  console.log(item, index, arr);
});
