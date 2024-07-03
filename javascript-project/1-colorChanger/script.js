// const buttons = document.querySelectorAll(".button");
// const body = document.querySelector("body");
// const validIds = ["grey", "white", "blue", "yellow"];

// buttons.forEach((btn) => {
//   console.log(btn);
//   btn.addEventListener("click", (e) => {
//     console.log(e);
//     console.log(e.target);
//     if (validIds.includes(e.target.id)) {
//       body.style.backgroundColor = e.target.id;
//     }
//   });
// });


// const buttons = document.querySelectorAll(".button");
// const body = document.querySelector("body");
// buttons.forEach((btn) => {
//   console.log(btn);
//   btn.addEventListener("click", (e) => {
//     console.log(e);
//     console.log(e.target);
//     body.style.backgroundColor = e.target.id;
//   });
// });


const buttons = document.querySelectorAll("span.button");
const body = document.querySelector("body");

buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", (e) => {
    console.log(e);
    console.log(e.target);
    body.style.backgroundColor = e.target.id;
  });
});
