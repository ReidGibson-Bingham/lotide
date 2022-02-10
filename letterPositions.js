

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


const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`;
  }

};

console.log(assertArraysEqual([0, 1, 2, 3], [0, 1, 2, 3]));

const letterPositions = function(sentence) {
  // the function should output an object with letters as keys, and the position in the array as the key values
  sentence = sentence.split('');
  const results = {};

  for (let i = 0; i < sentence.length; i++){
    
    letterKey = sentence[i];
    console.log(sentence[i]);
    

    //if this is the second time seeing the letter, increment the corresponding key value by one
    /*
    if (myLetter in results) {
      results[myLetter]++;  
    }
    
    //if this is the first time seeing the letter, create or initialize the key and the value
    
    if (!(myLetter in results)) {
      results[myLetter] = 1;  
    } */
    results[letterKey] = i;
    console.log(results);

  }

  return results;
}

console.log(assertArraysEqual(letterPositions("hello").e, [1]));