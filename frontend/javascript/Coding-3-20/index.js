// /*
//  Pseudocode:
//  Create a new Promise using the Promise constructor
//      Simulate an asynchronous operation
//          Generate the current timestamp
//          If the timestamp is even, call resolve with the value to fulfill the Promise
//          Otherwise, call reject with an error to reject the Promise
//      Set a timeout of 1 second to simulate an asynchronous operation

//  Chain the Promise using the then() and catch() methods
//      The Promise was fulfilled, log the value to the console
//      The Promise was rejected, log the error to the console
// */

// // JavaScript
// let myPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let current_timestamp = Date.now();
//     if (current_timestamp % 2 == 0) {
//       resolve("Timestamp is even");
//     } else {
//       reject(new Error("Timestamp is odd"));
//     }
//   }, 1000);
// });

// // This is where we consume the code from our promise using a .then syntax to chain the actions to follow. You can chain multiple promises with multiple .thens, if you need to:
// myPromise
//   .then((value) => {
//     /* what code to run once the promise has been fulfilled */
//     console.log(value);
//   })
//   .catch((error) => {
//     /* what code to run once the promise has declared its failure to complete the promise code */
//     console.log(error);
//   });
