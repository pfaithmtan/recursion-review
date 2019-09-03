// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node) {
  if (node === undefined) {
    node = document.body;
  }

  var result = [];
  var arrayList = node.classList;

  // console.log(arrayList);

  if (arrayList !== undefined) {
    arrayList.forEach(function(ele) {
      if (ele === className) {
        result.push(node);
      }
    });
  }

  if (node.hasChildNodes) {
    const childNodeArr = node.childNodes;

    childNodeArr.forEach(function(ele) {
      getElementsByClassName(className, ele);
    });
  }

  return result;
  // your code here
  //if node is undefined...
  //node = document.body

  //declare result array
  //iterate through node.classlist (an 'array' of classlist)
  //for each ele, if equals to ClassName
  //push element into result

  //check if node has childNodes...
  //for each childNodes...
  //yes: getElementbyClassName(className, childnode);

  //return result

};
