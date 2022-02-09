


const assertArraysEqual = function (list1, list2) {
  let isArraySame = true;
  let len = 0;
  if (list1 > list2) {
    len = list1.length;
  } else {
    len = list2.length;
  }
  for (let i = 0; i < len; i++) {
    if (list1[i] !== list2[i]){
      isArraySame = false;
    }
  }
  if (isArraySame) {
    return `✅✅✅ Assertion Passed: ${list1} === ${list2}`;
  } else {
    return `🛑🛑🛑 Assertion Failed:  ${list1} !== ${list2}`;
  }

}


const without = function (source, itemsToRemove) {
  let finalAr = [];
  for (let i = 0; i < source.length; i++) {
    if (source[i] === itemsToRemove[i]) {
      //do nothing
    } else {
      finalAr.push(source[i]);
    }
  }
  return finalAr;
};

console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3"], [1, 2, "3"]));


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"]));