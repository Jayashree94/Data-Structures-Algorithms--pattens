const removeDuplicates = (arr) => {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x++;
      arr[x] = arr[i];
    }
  }
  return x+1;
};

console.log(removeDuplicates([1, 2, 3, 3, 3, 3, 4, 5, 5, 6, 6, 7]));
