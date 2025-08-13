const findMaxVowelConsonant = (s) => {
  let map = {};

  for (let char of s) {
    map[char] = (map[char] || 0) + 1;
  }
  console.log(map);

  let vowel = ["a", "e", "i", "o", "u"];
  let maxVowel = 0;
  let maxConsonant = 0;
  for (let [index, val] of Object.entries(map)) {
    if (vowel.includes(index)) {
      maxVowel = Math.max(maxVowel, val);
    } else {
      maxConsonant = Math.max(maxConsonant, val);
    }
  }
  return maxVowel + maxConsonant;
};

console.log(findMaxVowelConsonant("successes"));
