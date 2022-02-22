// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var result = [];

  var classChecker = function (input) {
    if (input.classList && input.classList.contains(className)) {
      result.push(input);
    }
    if (input.childNodes.length !== null) {
      var nodeList = input.childNodes;
      nodeList.forEach(function (item) {
        classChecker(item);
      });
    }
  };

  classChecker(document.body);  return result;
};
