// const { clearArr, getFirstItem } = require('./debug');
// const {
//   addToFrontOrBack,
//   reverseString,
//   newArrayFullOf,
//   insertIntoMiddle,
//   deleteFromMiddle,
//   isRightIndex,
//   roundAllNumsDown,
//   getAllYCoordinates,
// } = require('./from-scratch');
// const { uppercaseAll, destructureCoordinates } = require('./modify');

const arr1 = [1, 2, 3, 4]
const arr2 = [5, 6, 7, 8];
const bigArr1 = [arr1, arr2]; //pass by reference
const bigArr2 = [...bigArr1]; //pass by reference
arr1.push('oh dear'); //pushes into arr1, which barr1 and barr2 reference it which changes the arrays

//pass by value is making a copy, doesn't affect original.
//pass by reference uses the memory address and does effect the original.
// primitive data types pass by value
// objects pass by reference

console.log(bigArr1)
console.log(bigArr2)
