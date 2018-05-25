/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


const characterFrequency = function(string) {
  // Summary: Take a string and return a multi dimensional array that states the number of each char in the string
  // Input: String
  // Output: Multidimensional array that displays the frequency of each character
  // Constraints: The order must be alphabetical
  // Edge Cases: Capitals, special chars, multiple words

  // Declare an array for the result (result)
  let result = [];
  // Declare an object for the char (charObj)
  let charObj = {};
  // Convert the string into an array
  string = string.split('');
  // Loop through each character in the inputArr
  for (let i = 0; i < string.length; i++) {
    // if char doesn't exist in obj, create a new property with a value one
    if (!(charObj.hasOwnProperty(string[i]))) {
      charObj[string[i]] = 1;
    } else {
      // else increment the value by one
      charObj[string[i]] += 1;
    }
  }

  let allKeys = Object.keys(charObj);
  // Find all the keys of the object using Object.keys(charObj)
  // Store keys into a new var (keys)
  // Sort the keys within the keys array for alphabetical order
  allKeys = allKeys.sort()
  // Using a for loop or forEach, push each key and its corresponding value into the returnArr
  allKeys.forEach(function(element) {
    result[element] = charObj[element];
  })
  //
  return result;
};
