// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return "" + obj;
  }

  if (Array.isArray(obj)) {
    const result = [];

    obj.forEach(function(el) {
      result.push(stringifyJSON(el));
    });

    return '[' + result + ']';
  }

  if (typeof obj === 'object') {
    const result = [];

    for (let key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        return '{}';
      }

      let pair = stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
      result.push(pair);
    }

    return '{' + result + '}';
  }
};
