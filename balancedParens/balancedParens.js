/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input) {
  // Summary: Check if an input has a balanced number and frequency of parentheses
  // Input: String
  // Output: boolean that determines if the parens are balanced
  // Constraints: Balanced parens means multiple things, some characteristics are:
    // Parens are [],{},()
    // Parens enclose one another
    // Parens can be balanced at center or individual
  // Edge Cases:

  // Must be an even number
  // Every parens must have a corresponding closing parens
  // Must be able to keep track index of parens and closing parens
  // Declare a variable with all parens
  let parens = ['(',')','[',']','{','}'];
  // Declare an obj to keep track of all parens and their location
  let parensObj = {};
  // Use a for loop to get through char of the input
   // If the char is a parens, store it into obj as an array with its location
   for(let i = 0; i < input.length; i++) {
     let character = input.charAt(i);
     if(parens.indexOf(character) !== -1) {
       parensObj[character] = i;
     }
   }
   return parensObj;
};
