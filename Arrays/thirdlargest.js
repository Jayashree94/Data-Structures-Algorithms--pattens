const thirdLargest = (arr) => {
  let first = -Infinity;
  let second = -Infinity;
  let third = -Infinity;
  for (let num of arr) {
    if (num > first) {
      third = second;
      second = first;
      first = num;
    } else if (num > second && num !== first) {
      third = second;
      second = num;
    } else if (num > third && num !== first && num !== second) {
      third = num;
    }
  }
  return third === -Infinity ? first : third;
};

console.log(thirdLargest([33, 55, 66, 33, 88, 22, 87]));
