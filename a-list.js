const arrayToList = (arr) => {
  return {
    value: arr[0],
    rest: arr.length > 1 ? arrayToList(arr.slice(1)) : null,
  };
};

const listToArray = (list) => {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
};

const prepend = (element, list) => ({
  value: element,
  list,
});

const nth = (list, number) => {
  if (!list?.value) return;
  if (number === 0) return list.value;

  return nth(list.rest, number - 1);
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 2));
// → 20
