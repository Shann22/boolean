alert("Hello from JS!");

// Part I
// Write down what the following statements will return. Try to figure this out before putting the commands in the chrome console.

// 1. 2 == “2”;
// 2. 2 === 2;
// 3. 10 % 3;
// 4. 10 % 3 === 1;
// 5. true && false;
// 6. false || true;
// 7. true || false;

// 1. true
// 2. true
// 3. 1
// 4. true
// 5. false
// 6. true
// 7. true

// Part II
// Answer the following questions about this code block:

// let isLearning = true;
// if(isLearning){
//   console.log("Keep it up!");
// } else {
//   console.log("Pretty sure you are learning....");
// }
// 1. What should the above code console.log?
// 2. Why do we not need to specify if(isLearning === true)? Why does if(isLearning) work on its own?

// 1. Keep it up!
// 2. Since true is a “truthy” value, we can let the if statement turn the expression into a value that is true or false. True will evaluate into a truthy value

// let firstVariable;
// let secondVariable = "";
// let thirdVariable = 1;
// let secretMessage = "Shh!";

// if(firstVariable){
//   console.log("first");
// } else if(firstVariable || secondVariable){
//   console.log("second");
// } else if(firstVariable || thirdVariable){
//   console.log("third");
// } else {
//   console.log("fourth");
// }
// 1. What should the above code console.log? Why?
// 2. What is the value of firstVariable when it is initialized?
// 3. Is the value of firstVariable a “truthy” value? Why?
// 4. Is the value of secondVariable a “truthy” value? Why?
// 5. Is the value of thirdVariable a “truthy” value? Why?

// 1. The code should console.log “Third” because the thirdVariable is truthy. Even though the firstVariable is falsey, the or statement is only looking for one truthy statement.
// 2. undefined
// 3. No, undefined is a falsey value
// 4. No, empty strings are falsey values as well
// 5. Yes, all numbers except for 0 are truthy

// Part III
// 1. Research Math.random [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
// Write an if statement that console.log’s “Over 0.5” if Math.random returns a number greater than 0.5.

// Otherwise console.log “Under 0.5”.

// 2. What is a falsey value? List all the falsey values in JavaScript.

// 1.
// if (Math.random() > 0.5) {
//     console.log("Over 0.5");
// } else {
//     console.log("Under 0.5");
// }

// 2. 0, "", false, null, undefined, NaN