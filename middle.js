
const middle = function (list) {
  let middle = list.length / (2);
  let outputList = [];
  if (list.length === 1 || list.length === 2) {
    return [];
  }
  
  if (list.length % 2 === 0) {
    outputList.push(list[middle - 1]);
    outputList.push(list[middle]);
    return outputList;
  }
  
  if (list.length % 3 === 0 || list.length % 5 === 0) {
    outputList.push(list[Math.floor(middle)]);
    return outputList;
  }
}


module.exports = middle;