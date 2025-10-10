const uppercaseAll = (...words) => {
  let newArr = [];
  for (let word of words) {
    newArr.push(word.toUpperCase());
  }
  return newArr;
};

const destructureCoordinates = (coordinates) => {
  const [x, y] = coordinates;
  return `X is: ${x}, Y is: ${y}`; // no touching this line!
};

module.exports = {
  uppercaseAll,
  destructureCoordinates,
};
