// function performLongRunningTask(data) {
//   // Simulate a long-running synchronous task
//   for (let i = 0; i < 100; i++) {
//     // Some computation
//     console.warn("Running task " + i++);
//     i = i + 2;
//   }

//   // Process the data asynchronously after the long-running task
//   process.nextTick(() => {
//     console.log("Data processed:", data);
//   });
// }

// // Call the function multiple times with different data
// performLongRunningTask("Data 1");
// performLongRunningTask("Data 2");
// performLongRunningTask("Data 3");

// console.log("Tasks scheduled");
function sleep(milliseconds) {
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

// Usage example
sleep(1000)
  .then(() => {
    console.log("Slept for 1000 milliseconds");
  })
  .catch((error) => {
    console.error(error);
  });
(await sleep(2000))();
