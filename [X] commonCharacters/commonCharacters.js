/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */



const commonCharacters = function(string1, string2) {
  // Input: Two strings
  // Output: A string, containing all characters that are in both strings
  // Constraints: Must be in the order that they appear, skip spaces and characters already listed,
  // Edge Cases: Capitals, punctuation

  // Declare an array to hold all common commonCharacters
  let commonCharacters = [];
  // Split string1 and string2 into an array
  string1 = string1.split('');
  string2 = string2.split('');
  // Loop through each char in string
  for(let i = 0; i < string1.length; i++) {
    let char = string1[i];
    // if the char in string1 is not within commonCharacters && char is within string2
    if (string2.indexOf(char) !== -1 && commonCharacters.indexOf(char) === -1) {
      // push into commonCharacters
      commonCharacters.push(char);
    }
  }
  return commonCharacters.join('');
  // join commonCharacters into an array
};
