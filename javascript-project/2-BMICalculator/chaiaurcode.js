// const form = document.querySelector("form");

// form.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const height = parseInt(document.querySelector("#height").value);
//   const weight = parseInt(document.querySelector("#weight").value);
//   const result = document.querySelector("#results");

//   if (height == "" || height < 0 || isNaN(height)) {
//     result.textContent = `Please give a valid height ${height}`;
//   } else if (weight == "" || weight < 0 || isNaN(weight)) {
//     result.textContent = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);

//     // Create a new element for BMI category
//     const categoryElement = document.createElement("span");

//     // Determine BMI category and set text content
//     if (bmi < 18.6) {
//       categoryElement.textContent = `Underweight`;
//     } else if (bmi >= 18.6 && bmi <= 24.9) {
//       categoryElement.textContent = `Normal weight`;
//     } else {
//       categoryElement.textContent = `Overweight`;
//     }

//     // Clear previous content and add new elements
//     result.innerHTML = `<span>Your BMI is ${bmi} and you are </span>`;
//     result.appendChild(categoryElement);
//   }
// });

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

 
  if (height === "" || isNaN(height) || height < 0) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === "" || isNaN(weight) || weight < 0) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    // Show result
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    const weightGuide = document.createElement("div");

    if (bmi < 18.6) {
      weightGuide.innerText = "You are underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      weightGuide.innerText = "You are of normal weight";
    } else {
      weightGuide.innerText = "You are overweight";
    }

    results.parentNode.insertBefore(weightGuide, results.nextSibling);
  }
});
