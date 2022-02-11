const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`;
  }

};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };



const eqObjects = function(object1, object2) {
  let keys1 = Object.keys(object1);
  let keys2 = Object.keys(object2);
  let equal = true;
  if (keys1.length !== keys2.length) {
    equal = false;
  } else if (object1.a !== object2.a) {
    equal = false;
  } else if (object1.b !== object2.b) {
    equal = false;
  }
  return equal;
}


console.log(eqObjects(ab, ba));



/*

function objectValuesAreEqual(keyWrd, object1, object2) {

  let returnVal = false;
  if (object1[keyWrd] === object2[keyWrd]) {
    returnVal = true;
  }
  return returnVal;
}

const person1 = {
  hometown: "Georgia",
  shoe: "nike"
}

const person2 = {
  hometown: 'Alabama',
  shoe: "reebok"
}

console.log(objectValuesAreEqual('hometown', person1, person2));

*/