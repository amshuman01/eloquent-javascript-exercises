const countChar = (string, character) => {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === character) count++;
  }
  return count;
};

const countBs = (str) => {
  return countChar(str, "B");
};
