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

  // Variale to hold the histoical longest run
  let max = [0,0];
  // Variable to hold current run
  let curr = [0,0];

  for (let i = 1; i < string.length; i++) {
    if(string[i-1] === string[i]) {
      curr[1] = i;
      // Compare if the current run is longer than previous max
      if(curr[1] - curr[0] > max[1] -max[0]) {
        max = curr;
      }
    } else {
      // If there is no run
      curr = [i,i];
    }
  }
  return max;
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
