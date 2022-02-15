const eqArrays = require("./eqArrays");


const assertArraysEqual = function (list1, list2) {
 
  if (eqArrays(list1, list2)) {
    return `✅✅✅ Assertion Passed: ${list1} === ${list2}`;
  } else {
    return `🛑🛑🛑 Assertion Failed:  ${list1} !== ${list2}`;
  }  
}

module.exports = assertArraysEqual;