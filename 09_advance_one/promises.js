/*const promiseOne = new Promise((resolve, reject) => {
  //Do an async task
  // DB calls, crptography, network
  setTimeout(() => {
    console.log("Async task is compelete");
    resolve();
  }, 1000);
);

promiseOne.then(() => {
  console.log("Promise consumed");
});*/

/*new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task is compelted");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Promise is consumed");
}); */

/*const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      username: "Chai",
      email: "chai@example.com",
    });
  }, 1000);
});

promiseThree.then((user) => {
  console.log(user);
}); */

/* 
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({
        username: "Damodar",
        email: "damodar@gmail.com",
      });
    } else {
      reject("ERROR: Something is wrong my lord");
    }
  });
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => console.log("The promise is either resolved or rejected"));*/

/*const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({
        username: "Damodar",
        email: "damodar@gmail.com",
        password: "123",
      });
    } else {
      reject("ERROR: JS went  wrong My Lord");
    }
  }, 1000);
});

const consumePromiseFive = async () => {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
};

consumePromiseFive()*/

/*const getAllUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:" + error);
  }
};
getAllUsers();*/

/*fetch("https://api.github.com/users/hiteshchoudhary")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));*/
