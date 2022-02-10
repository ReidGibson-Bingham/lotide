const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`;
  }

};

/*
 letterFreq = {
   a: 1,
   h: 1, 
   e: 1, 
   l: 4,
   o: 1,
   y: 1, 
   ' ': 1,
   "'": 1
 }*/

function countLetters(sentence) {
  
  sentence = sentence.split('');
  let letterCount = {};
  let count = 0;

  for (let i = 0; i < sentence.length; i++){
    
    let myLetter = sentence[i];

    //if this is the second time seeing the letter, increment the corresponding key value by one

    if (myLetter in letterCount) {
      letterCount[myLetter]++;  
    }
    
    //if this is the first time seeing the letter, create or initialize the key and the value
    
    if (!(myLetter in letterCount)) {
      letterCount[myLetter] = 1;  
    }

  }
  
  return letterCount;
  
}

console.log(countLetters("hello y'all"));

//console.log(countLetters("hello y'all"));

