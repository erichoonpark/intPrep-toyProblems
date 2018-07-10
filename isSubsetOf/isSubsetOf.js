/*
 * Make an array method that can return whether or not a context array is a
 * subset of an input array.  To simplify the problem, you can assume that neither
 * array will contain objects or arrays as elements within them.
 *
 *
 * var a = ['commit','push']
 * a.isSubsetOf(['commit','rebase','push','blame']) // true
 *
 * NOTE: You should disregard duplicates in the set.
 *
 * var b = ['merge','reset','reset']
 *
 * b.isSubsetOf(['reset','merge','add','commit']) // true
 *
 * See http://en.wikipedia.org/wiki/Subset for more on the definition of a
 * subset.
*/

/*
 * Extra credit: Make the method work for arrays that contain objects and/or arrays as elements.
*/

Array.prototype.isSubsetOf = function (arr) {
  // Inputs: An array of strings
  // Outputs: Boolean, determining whether the context array contains the input array
  // Constaints: The context array must contain all elements within the input array
  // Edge Cases: Objects and Arrays as elements

  // Declare a counter match variable that will keep track of how many times a match has occured
  // For each element in the arr, check if it exists within this
    // if (this.indexOf(arr[i]) !== -1)
      // match++
  // If match = arr.length
    // return true
  // else
    // return false

  let match = 0;
  for (let i = 0; i < this.length; i++) {
    if (arr.indexOf(this[i]) !== -1) {
      debugger;
      match++;
    }
  }

  if (match === this.length) {
    return true;
  } else {
    return false;
  }

};
