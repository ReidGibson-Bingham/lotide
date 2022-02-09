

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

function isOdd(num) {
  if (num % 3 === 0 || num % 5 === 0 || num % 7 === 0 || num % 11 === 0 || num % 13 === 0 || num % 17 === 0) {
    return true;
  } else {
    return false;
  }
}

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const middle = function (list) {
  let middle = list.length / (2);
  let outputList = [];
  if (list.length === 1 || list.length === 2) {
    return [];
  }
  
  else if (isEven(list.length)) {
    outputList.push(list[middle - 1]);
    outputList.push(list[middle]);
    return outputList;
  }
  
  else if (isOdd(list.length)) {
    outputList.push(list[Math.floor(middle)]);
    return outputList;
  }
}


console.log(middle([1])); // => []
console.log(middle([1, 2]));


console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5]));

console.log(middle([1, 2, 3, 4]));
console.log(middle([1, 2, 3, 4, 5, 6]));