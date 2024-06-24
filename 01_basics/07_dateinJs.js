// Dates

let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON);
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toUTCString());

// console.log(typeof myDate);

let myCreatedDate = new Date(2024, 9, 26);
// console.log(myCreatedDate.toDateString());

// let myCreatedDatee = new Date(2024, 5, 24, 5, 3);
let myCreatedDatee = new Date("10-26-2024");
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now() / 1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1)
// console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday: "long",
})