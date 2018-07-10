/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  var storage = [];
  var storageLimit = 1000;
  result.insert = function(value) {
    // Declare a variable to hold the index from the hashing function
    let index = getIndexBelowMaxForKey(value, storageLimit);
    // If index if not null
    if (!storage[index]) {
      // Place value
      storage[index] = value;
    } else {
      // In the case of collisions:
      // Declare a variable to hold the previous value in the index
      let previousValue = storage[index];
      // Make the index an array
      storage[index] = [];
      // Push previous values into that array
      storage[index].push(previousValue);
      storage[index].push(value);
    }
  };

  result.retrieve = function(/*...*/ 
) {
    // TODO: implement `retrieve()`
  };

  result.remove = function(/*...*/ 
) {
    // TODO: implement `remove()`
  };

  return result;
};
