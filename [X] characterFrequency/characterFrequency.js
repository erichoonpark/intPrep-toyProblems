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
  // Declare an object for the char (charFreq)
  let charFreq = {};
  // Loop through each character in the inputArr
  for (let i = 0; i < string.length; i++) {
    let character = string.charAt(i);
    if (!charFreq[character]) {
      charFreq[character] = 1;
    } else {
      // else increment the value by one
      charFreq[character]++;
    }
  }

  for (let key in charFreq) {
    result.push([key, charFreq[key]]);
  }

  result.sort(function(a, b) {
   if (a[1] > b[1]) return -1;
   if (a[1] < b[1]) return 1;
   if (a[1] === b[1]) {
    if (a[0] < b[0]) return -1;
    if (a[0] > b[0]) return 1;
   }
   return 0;
  });

  return result;
};
