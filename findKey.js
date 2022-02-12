/*
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);
*/

//findkey takes in an object and a callback. it should scan the object and return the first key when the callback returns a truthy value

const findKey = function(obj, callback) {

  for(key in obj) {
    console.log(obj[key]);
    console.log(callback(obj[key])) 
  }

}


const obj1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}

let conditionVal = 2;

const assertEqual = function(actual, expected) {
  for (key in actual){
    if (actual[key] === expected){
      console.log(actual[key]);
      console.log(`✅✅✅ Assertion Passed: ${actual[key]} === ${expected}`);
    } else {
      console.log(actual[key]);
      console.log(`🛑🛑🛑 Assertion Failed:  ${actual[key]} !== ${expected}`);
    }
  }

};

assertEqual(obj1, conditionVal);

console.log(findKey(obj1, x => x.stars === conditionVal))

