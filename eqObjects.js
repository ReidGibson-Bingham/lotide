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


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };

//console.log(eqObjects(ab, abc));

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
//console.log(eqObjects(cd, cd2)); 






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