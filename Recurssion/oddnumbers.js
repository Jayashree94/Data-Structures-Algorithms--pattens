const oddnumbers = (n) => {
  let isOdd = arr[n] % 2 != 0;
  if (n == 0) {
    if (isOdd) {
      return arr[n];
    } else {
      return 0;
    }
  }

  if (isOdd) {
    return arr[n] + oddnumbers(n - 1);
  } else {
    return 0 + oddnumbers(n - 1);
  }
};
let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(oddnumbers(arr.length - 1));
