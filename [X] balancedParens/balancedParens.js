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
    // What degines a balanced parens?
    // Empty string
    // Must be able to keep track index of parens and closing parens
    // Declare a variable with all parens
  let stack = [];
  let open = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  }
  let close = {
    ')' : true,
    ']' : true,
    '}' : true
  }
  for(let i = 0; i < input.length; i++) {
    let character = input.charAt(i);
    if (open[character]) {
      stack.push(character);
    } else if (close[character]) {
      // Check if any other parens opens before closing another
      if(open[stack.pop()] !== character) return false;
    }
  }
  return stack.length === 0;
};
