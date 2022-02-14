const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`;
  }

};

const eqArrays = function (list1, list2) {
  let isArraySame = true;
  if (list1 > list2) {
    isArraySame = false;
  }
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]){
      isArraySame = false;
    }
  }
  return isArraySame;
}

module.exports = eqArrays;