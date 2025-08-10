const findLastLength = (s) => {
  let n = s.length - 1;
  let count = 0;
  while (n >= 0) {
    if (s[n] == " ") {
      --n;
    } else {
      break;
    }
  }

  while (n >= 0) {
    if (s[n] !== " ") {
      count++;
      n--;
    } else {
      break;
    }
  }

  return count;
};

console.log(findLastLength("   fly me to t the   moonlight   "));
