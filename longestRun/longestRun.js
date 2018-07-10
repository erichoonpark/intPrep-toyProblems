/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  // Input: A string
  // Output: An array with the start and end indices of the longest run 
  // Constaints: Characters must be consecutive and identifical
  // Edge Cases: spaces, empty string

  // Need to determine a longest run of identifical characters
  // Get the start and end indices of that run

  // Case for empty string 
  if (string === "") {return null;}
  // Declare a storage object
  let chars = {};
  // Transform the string in an array 
  let stringArray = string.split('');
  // Store all characters within an object with the char as the key and its indice as a value
  for (let i = 0; i < stringArray.length; i++) {
    if(chars[stringArray[i]]) {
      chars[stringArray[i]].push(i);
    } else {
      chars[stringArray[i]] = [i];
    }
  }
  
  // The characters and their indices are now in an objects, chars
  // Check each keys array to see if they are consecutive
  for (let prop in chars) {
    if (chars[prop].length > 1) {

    }
  }
  // Using a variable, mostCons, return the char with the most consecutive chars

};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
