/*
 Pseudocode:
 // Define an asynchronous function using the async keyword
    // Simulate an asynchronous operation with a Promise that resolves after 4 second
    // Return an object with a message property having value "Data fetched successfully"

 // Call the asynchronous function using await
    // Under try block
        // Print "Fetching data..."
        // Call getData and wait for the data to be fetched using await
        // Log the message property of the returned object to the console
    //Under catch block
        // Log any errors to the console concatinating "Error fetching data:" with the error

 // Call the startTask function to start the program
*/

/*

Define an asynchronous function named getData using the async keyword. This function does not have any parameters.
Inside the getData function, create a new Promise that uses setTimeout to simulate an asynchronous operation that resolves after 4 seconds. This is achieved using await with the setTimeout Promise to ensure that the function waits for the operation to complete before moving on.
The getData function returns an object with a message property indicating that the data was fetched successfully.
Define another async function named startTask that will call the getData function and handle the results and errors.
Inside the startTask function, use a try...catch block to handle potential errors.
Log “Fetching data…” to the console to indicate that the data retrieval process has started.
Use await to call the getData function, which waits for the asynchronous operation to complete.
If the Promise from getData resolves, the data variable will contain the returned object. Log the message property of the object to the console.
If there are any errors (e.g., if the Promise is rejected), they will be caught in the catch block, and an error message will be logged to the console.
Finally, call the startTask function to start the program. It will execute the asynchronous operations and handle the results or errors.
When you run this code, it will wait for 4 seconds (asynchronously) and then log "Data fetched successfully" to the console. If there were errors, they would be caught and logged.
Rewrite the same script using TypeScript in the index.ts file provided to you and try running it in your local IDE.

*/

// async function getData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ message: "Data fetched successfully!" });
//     }, 4000);
//   });
// }

// async function startTask() {
//   try {
//     console.log("Fetching data...");
//     const data = await getData();
//     console.log(data.message);
//   } catch (error) {
//     console.log("Error fetching data:", error);
//   }
// }

// startTask();
