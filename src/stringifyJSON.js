// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // check if object
  if (typeof obj === 'object' && !Array.isArray(obj) && typeof obj !== null) {
    return 'Fill me in.';
  }

  // check if string
  if (typeof obj === 'string') {
    return 'Fill me in.';
  }

  // check if number
  if (typeof obj === 'number') {
    return 'Fill me in.';
  }

  // check if array
  if (Array.isArray(obj)) {
    return 'Fill me in.';
  }
  // check if null || empty || undefined
  if (typeof obj === undefined || typeof obj === null) {
    return 'Fill me in.';
  }

  // check if boolean
  if (typeof obj === 'boolean') {
    return 'Fill me in.';
  }


};
