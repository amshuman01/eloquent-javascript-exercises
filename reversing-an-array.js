const reverseArray = (arr) => {
  let array = [];
  for (let i = 0; i <= arr.length - 1; i++) array.unshift(arr[i]);
  return array;
};

const reverseArrayInPlace = (arr) => {
  const half = Math.floor(arr.length / 2);

  for (i = 0; i <= half; i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr;
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]
