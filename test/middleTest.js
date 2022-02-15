/*
const middle = require('../middle');

console.log(middle([1])); // => []
console.log(middle([1, 2]));

console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5]));

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));

*/

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [] for [1]", () => {
    assert.equal(middle([]), [1]);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.equal(middle([2]), [1, 2, 3]); 
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.equal(middle([1, 2, 3, 4]), [2, 3]); 
  });

});