// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  // check if object
  if (typeof obj === 'object' && !Array.isArray(obj) && obj !== null) {
    console.log(typeof obj, obj);
    if (Object.keys(obj).length === 0) {
      return '{}';
    } else if (Object.keys(obj).length > 0) {
      var temp = [];
      Object.keys(obj).forEach(function (key) {
        if (typeof obj[key] !== 'function' && obj[key] !== undefined) {
          temp.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
        }
      });
      return '{' + temp + '}';
    }
  }

  // check if string
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }

  // check if number
  if (typeof obj === 'number') {
    return String(obj);
  }

  // check if array
  if (Array.isArray(obj)) {
    if (obj.length === 0) {
      return '[]';
    } else {
      var temp = [];
      _.each(obj, function(item) {
        temp.push(stringifyJSON(item));
      });
      return '[' + temp + ']';
    }
  }
  // check if null || empty || undefined
  if (typeof obj === undefined || obj === null) {
    console.log('when undefined or null: ', JSON.stringify(obj));
    return 'null';
  }

  // check if boolean
  if (typeof obj === 'boolean') {
    return String(obj);
  }


};
