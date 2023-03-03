const range = (start, end, step = start < end ? 1 : -1) => {
  let array = [];

  if (end > start) for (let i = start; i <= end; i += step) array.push(i);
  else for (let i = start; i >= end; i += step) array.push(i);
  return array;
};

const sum = (arr) => arr.reduce((sumN, num) => (sumN += num), 0);

console.log(range(1, 10));
console.log(...range(5, -1));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(...range(5, -2, -2));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
