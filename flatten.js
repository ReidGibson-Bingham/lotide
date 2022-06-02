// import assertArraysEqual from "./assertArraysEqual";

// import eqArrays from "./eqArrays";


const rand = function () {
  return Math.random() * 1000;
}

const array = [rand(), rand(), [rand(), rand() ,rand(), rand()], [rand(), rand(), rand(), rand(), rand()]];

console.log("original array:", array);

const flatten = function (array) {

  const newArray = [];
  
  for (element in array) {
    if (array[element].length === undefined) {
      newArray.push(array[element]);  
    }
    else {
      for (let i = 0; i < array[element].length; i++) {
        newArray.push(array[element][i]);
      }
    }
  }

  return newArray;

}

console.log("flattened array: ", flatten(array));

console.log("test: ", flatten([1, 2, [3, 4], 5, [6]]));


