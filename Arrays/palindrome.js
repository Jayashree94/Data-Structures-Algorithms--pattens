const palindrome = (x) => {
  if (x < 0) return false;
  let rev = 0;
  let rem = 0;
  let xCopy = x;
  console.log(xCopy);
  while (x > 0) {
    rem = x % 10;
    console.log(rem);
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
  }
  console.log(rev);

  return xCopy === rev ? true : false;
};

console.log(palindrome(123454321));
