/* Write a function that finds the largest possible product of any three numbers
 * from an array.
 *
 * Example:
 * largestProductOfThree([2, 1, 3, 7]) === 42
 *
 * Extra credit: Make your function handle negative numbers.
 */


var largestProductOfThree = function(array) {
  // Input: Array of integers
  // Output: An integer, consisting for the largest product of three numbers
  // Constraints: 
  // Edge Cases: Negative numbers, array less than 3 

  // Declare a variable to hold the largest product
  let largestProduct = 1;
  // Sort the array using the .sort(function(a,b) {return b > a})
  array = array.sort(function(a,b){return b > a});
  // Multiply the first three numbers using a for loop
  for (let i = 0; i < 3; i++) {
    largestProduct *= array[i];
  }
  // Return largestProduct
  return largestProduct;
};
