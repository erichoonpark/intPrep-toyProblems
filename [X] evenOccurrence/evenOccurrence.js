/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one.
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  // Input: An array of integers
  // Output: An integer that is the first occurence of a number with an even number of occurences
  // Constraints:
  // Edge Cases: Negatives, floats, how to order (from least to greatest)?, zero

  // declare an object to hold all values in the array
    // Make the integer the key and # of occurences the value
  let values = {};

  // Loop through all integers in the array
  for (let i = 0; i < arr.length; i++) {
    if (!values.hasOwnProperty(arr[i])) {
      // set the integer as they key and the value to 1
      values[arr[i]] = 1;
    } else {
      // if the integer is a key in the obj then +1
      values[arr[i]]++;
    }
  }

  // For in loop to go through each property in the object
  for (let prop in values) {
    // if the value is % 2 (isEven)
    if(values[prop] % 2 === 0) {
      // return the key
      return prop;
    }
  }
};
