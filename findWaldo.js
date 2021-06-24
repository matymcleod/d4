// The original function
// const findWaldo = function(names, found) {
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (name === "Waldo") {
//       found();   // execute callback
//     }
//   }
// }

// const actionWhenFound = function() {
//   console.log("Found him!");
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


////////////////////////////////////////////////
// EXERCISE 1 - Modify the callback function in the previous example so that it accepts a single argument index and logs it. The problem should therefore output something like "Found Waldo at index 2!".

// const findWaldo = function(names, found) {
//   for (let i = 0; i < names.length; i++) {
//     let name = names[i];
//     if (name === "Waldo") {
//       found(i);   // execute callback
//     }
//   }
// }

// const actionWhenFound = function(index) {
//   console.log(`Found Waldo at index ${index}!`);
// }

// findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);


////////////////////////////////////////////////////
// EXERCISE 2 -  USE FOR EACH TO LOOP THROUGH ARRAY

const findWaldo = function(names, found) {
  names.forEach((name, index) => {
    if (name === "Waldo") {
      found(index);   // execute callback
    }
  })
}

const actionWhenFound = function(index) {
  console.log(`Found Waldo at index ${index}!`);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);