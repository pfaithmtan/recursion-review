// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here

  //var commaIdx
  // write helper function for primitives -- takes element as parameter
  // check if element starts with quote and ends with quote
  // if true, return as the element
  // check if elements equals to 'null'
  // if true, return as null
  // check if element is 'true' -- return true
  // check if element is 'false' -- return false
  // check Number(element) is not undefined -- convert to number

  // write helper function to get elements -- takes whole string without brackets
  // if first element starts with a quote then
  // ...find index of quote from index 1
  // ...find index of comma from second quote -- declare variable commaIdx
  // ...slice from 0 to commaIdx
  // commaIdx = indexOf comma
  // slice from 0 to index of comma -- return what we slice

  // if starts '[' and ends ']', then it's an array
  // var result []
  //...var allElements = slice from idx1 to json.length - 2
  //...var element = getElements(allElements)
  //...var convertedElement = convertPrimitive(element)
  //...result.push(convertedElement)
  //...var nextSet = '[' + slice(comma to the end)
  //...result = result.concat(parseJSON(nextSet))

  // if starts '{' and ends '}', then it's an obj
};
