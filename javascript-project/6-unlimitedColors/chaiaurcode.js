//generate a random color

const randomColor = () => {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = () => {
  // intervalId = setInterval(() => {
  //   document.body.style.backgroundColor = randomColor();
  // }, 200);

  const changeBgColor = () => {
    document.body.style.backgroundColor = randomColor();
  };

  if (!intervalId) {
    intervalId = setInterval(changeBgColor, 1000);
  }
};

const stopChangingColor = () => {
  clearInterval(intervalId);
  intervalId = null;
};

document.querySelector("#start").addEventListener("click", startChangingColor);

document.querySelector("#stop").addEventListener("click", stopChangingColor);
