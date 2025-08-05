const singleNumber = (arr) => {
  let hash = {};
  for (let i = 0; i < arr.length; i++) {
    if (!hash[arr[i]]) {
      hash[arr[i]] = 1;
    } else {
      hash[arr[i]]++;
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (hash[arr[i]] == 1) {
      return arr[i];
    }
  }
};

console.log(singleNumber([1, 3, 3, 4, 4, 1, 5, 5, 1, 1, 1, 7, 8, 8]));
