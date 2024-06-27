//Immediately Invoked function Expressions (IIFE)

(function chai() {
  console.log(`DB CONNECTED`);
})();

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})(`hitesh`);


//  Understanding IIFE (Immediately Invoked Function Expression)

// An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. It is a design pattern that includes two main parts:

// 1. Function Expression:
//    ```javascript
//    (function () { /* code */ })
//    ```

// 2. Immediately Invoked:
//    ```javascript
//    (function () { /* code */ })();
//    ```

// Why Use IIFE?

// 1. Avoiding Global Scope Pollution:
//    - In JavaScript, variables defined inside a function are local to that function. By using an IIFE, you can create a local scope for your variables, preventing them from polluting the global scope.
//    - Example:
//      ```javascript
//      (function() {
//        var localVariable = 'I am local';
//        console.log(localVariable);
//      })();
//      // localVariable is not accessible here
//      ```

// 2. Private Variables and Methods:
//    - Variables and functions inside an IIFE cannot be accessed from outside, providing a way to create private variables and methods.
//    - Example:
//      ```javascript
//      (function() {
//        var privateVar = 'private';
//        function privateMethod() {
//          console.log(privateVar);
//        }
//        privateMethod();
//      })();
//      // privateVar and privateMethod are not accessible here
//      ```

// 3. Isolated Code Execution:
//    - If you need to execute some code immediately without affecting the surrounding code or without any external interference, IIFE is a good choice.
//    - Example:
//      ```javascript
//      (function() {
//        console.log('This code runs immediately and is isolated.');
//      })();
//      ```

// Examples in Your Code:

// 1. First IIFE:
//    ```javascript
//    (function chai() {
//      console.log(`DB CONNECTED`);
//    })();
//    ```
//    - This IIFE prints "DB CONNECTED" to the console immediately when the script runs.

// 2. Second IIFE with Parameter:
//    ```javascript
//    ((name) => {
//      console.log(`DB CONNECTED TWO ${name}`);
//    })(`hitesh`);
//    ```
//    - This IIFE accepts a parameter `name` and prints "DB CONNECTED TWO hitesh" to the console immediately when the script runs.

// Summary:

// Using an IIFE helps in keeping the code modular, avoiding conflicts in the global scope, and creating private, isolated code blocks that execute immediately. This is particularly useful in larger applications and libraries where maintaining clean and conflict-free global scope is essential.

