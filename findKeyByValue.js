const assertEqual = function(actual, expected) {
  
  if (actual === expected) {
    return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  } else {
    return `🛑🛑🛑 Assertion Failed:  ${actual} !== ${expected}`;
  }

};


/*
obj = {
  name: "reid",
  shoes: 'nike'
}

for (val in obj) {
  console.log(`${val} is ${obj[val]}`);
}


const object = { a: 1, b: 2, c: 3 };

for (const property in object) {
  console.log(`${property}: `);
}*/

const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};


function findKeyByValue(tvShow, val) {

  let output = undefined;
  for (genre in tvShow) {

    if (tvShow[genre] === val) {
      output = `${genre}`;
    }
  }
  return output;
};

console.log(findKeyByValue(bestTVShowsByGenre, 'Brooklyn Nine-N'));

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));