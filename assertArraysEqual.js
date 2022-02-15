const eqArrays = require("./eqArrays");


const assertArraysEqual = function (list1, list2) {
  /*let arrayIsSame = true;
  if (list1 > list2) {
    arrayIsSame = false;
  }
  for (let i = 0; i < list1.length; i++) {
    if (list1[i] !== list2[i]){
      arrayIsSame = false;
    }
  }*/
  if (eqArrays(list1, list2)) {
    return `✅✅✅ Assertion Passed: ${list1} === ${list2}`;
  } else {
    return `🛑🛑🛑 Assertion Failed:  ${list1} !== ${list2}`;
  }  
}

module.exports = assertArraysEqual;