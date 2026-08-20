/*
 Pseudocode:
 Create a new Promise using the Promise constructor
     Simulate an asynchronous operation
         Generate the current timestamp
         If the timestamp is even, call resolve with the value to fulfill the Promise
         Otherwise, call reject with an error to reject the Promise
     Set a timeout of 1 second to simulate an asynchronous operation

 Chain the Promise using the then() and catch() methods
     The Promise was fulfilled, log the value to the console
     The Promise was rejected, log the error to the console
*/

// TypeScript
// We can use Generics <string> to define what type of value the promise resolves to
let myPromise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    let current_timestamp: number = Date.now();
    if (current_timestamp % 2 == 0) {
      resolve("Timestamp is even");
    } else {
      reject(new Error("Timestamp is odd"));
    }
  }, 1000);
});

myPromise
  .then((value: string) => console.log(value))
  .catch((error: any) => console.log(error));
