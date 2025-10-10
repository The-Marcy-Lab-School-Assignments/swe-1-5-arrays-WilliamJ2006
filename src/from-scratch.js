const addToFrontOrBack = (arr, value, isFront) => {
  if (isFront) {
    arr.unshift(value);
  } else {
    arr.push(value);
  }
};

const reverseString = (string) => {
  let arr = string.split('');
  arr.reverse();
  return arr.join('');
};

const newArrayFullOf = (value, numOfValue) => {
  let newArr = new Array(numOfValue);
  return newArr.fill(value, 0, numOfValue);
};

const insertIntoMiddle = (arr, value) => {
  arr.splice(Math.floor(arr.length / 2), 0, value);
};

const deleteFromMiddle = (arr) => {
  arr.splice(Math.floor(arr.length / 2), 1)
};

const isRightIndex = (arr, value, index) => {
  if (arr.includes(value)) {
    if (arr.indexOf(value) === index) {
      return true;
    }
  }
  return false;
};

const roundAllNumsDown = (arr) => {
  let newArr = [];
  for (let roundedNums of arr) {
    newArr.push(Math.floor(roundedNums));
  }
  return newArr;
};

const getAllYCoordinates = (arrOfCoords) => {
  let newArr = [];
  for (let i = 0; i < arrOfCoords.length; i++) {
    newArr.push(arrOfCoords[i][1]);
  }
  return newArr;
};

module.exports = {
  addToFrontOrBack,
  reverseString,
  newArrayFullOf,
  insertIntoMiddle,
  deleteFromMiddle,
  isRightIndex,
  roundAllNumsDown,
  getAllYCoordinates,
};
