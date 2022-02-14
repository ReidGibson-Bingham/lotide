const eqArrays = require('../eqArrays');

const assertEqual = require('../assertEqual');

console.log(assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true));
console.log(assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3]), true));

console.log(assertEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 5]), true));

console.log(assertEqual(eqArrays([], []), true));