// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (typeof obj === 'string') {
    return '"' + obj + '"';
  } else if (typeof obj === 'number' || typeof obj === 'boolean' || obj === null) {
    return "" + obj;
  }

  // your code goes here
  //base cases:
  //if starts with quote...
    //return '"' + obj + '"'
  //if typeof obj is number...
    //return "" + obj
  //if typeof obj is boolean...
    //return "" + obj
  //if item is null...
    //return "" + null

  //if item starts with [, ends with ]...
    //var result = [];
    //for each ele...
      //result.push(stringifyJSON(ele))
    //return '[' + result + ']'

  //if item starts with '{' ends with }...
    //var result = [];
    // for in ...
      //var pair = stringifyJSON(key) + ':' + stringifyJSON(obj[key])
      //result.push(pair)


};
