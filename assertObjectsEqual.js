const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`;
  }

};

const eqArrays = function (list1, list2) {
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
  return isArraySame;
}


const eqObjects = function(object1, object2) {
  
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  let equal = true;
  if (keys1.length !== keys2.length) {
    equal = false;
  }/* else if (object1.b !== object2.b) {
    equal = false;
  } else if (object1.a !== object2.a) {
    equal = false;
  }*/
  /*for (let i = 0; i < keys1.length; i++) {
    console.log(object1);
    console.log(keys1);
    console.log(object1.keys1[]);
    if (object1.keys1[i] !== object2.keys1[i]) {
      equal = false;
    }
  }*/
  for(const key of keys1){
    if (object1[key.isArray] || object2[key.isArray]) {
      equal = eqArrays(object1[key], object2[key]);
    }
    if (object1[key] !== object2[key]) {
      equal = false;
    }
  }

  return equal;

}

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let actualKeys = Object.keys(actual)
  let statement =  `✅✅✅ Assertion Passed: ${actual} === ${expected}`
  for (const key of actualKeys){
    if (actual[key] !== expected[key]){
      statement = `🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`
    }
  } 
  return statement;
}

let object1 = {
  name: "carl",
  town: 'town1'
}

let object2 = {
  town: 'town1',
  name: "tarl"
}

console.log(`Example label: ${inspect(actual)}`);

console.log(assertObjectsEqual(object1,object2));