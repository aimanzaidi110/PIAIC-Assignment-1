"use strict";
// Scenario 1 - Modify Array with Methods
let initialArray = [1, 2, 3, 4, 5];
// push: Add new elements to the end of the array.
initialArray.push(6, 7);
console.log("After push:", initialArray); // Output: [1, 2, 3, 4, 5, 6, 7]
// pop: Remove the last element from the array.
initialArray.pop();
console.log("After pop:", initialArray); // Output: [1, 2, 3, 4, 5, 6]
// shift: Remove the first element from the array.
initialArray.shift();
console.log("After shift:", initialArray); // Output: [2, 3, 4, 5, 6]
// unshift: Add new elements to the beginning of the array.
initialArray.unshift(0, 1);
console.log("After unshift:", initialArray); // Output: [0, 1, 2, 3, 4, 5, 6]
// Scenario 2 - Subarray Creation
// splice: Create a subarray by removing elements from the original array.
let removedElements = initialArray.splice(2, 3);
console.log("Subarray created by splice:", initialArray); // Output: [0, 1, 5, 6]
console.log("Removed elements:", removedElements); // Output: [2, 3, 4]
// Reset the array for the next scenario
initialArray = [0, 1, 2, 3, 4, 5, 6];
// slice: Create a subarray without modifying the original array.
let subArray = initialArray.slice(2, 5);
console.log("Subarray created by slice:", subArray); // Output: [2, 3, 4]
console.log("Original array remains unchanged:", initialArray); // Output: [0, 1, 2, 3, 4, 5, 6]
