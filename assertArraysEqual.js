

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

console.log(assertArraysEqual([0, 1, 2, 3], [0, 1, 2, 3]));