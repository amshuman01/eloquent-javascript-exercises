const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true;
  if (
    obj1 == null ||
    typeof obj1 != "object" ||
    obj2 == null ||
    typeof obj2 != "object"
  ) {
    return false;
  }
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false;
  let flag = true;

  for (const [key, value] of Object.entries(obj1)) {
    if (flag === false) return false;

    if (typeof value === "object") {
      flag = deepEqual(value, obj2[key]);
    } else if (obj2[key] !== value) {
      return false;
    }
  }

  return true;
};

let obj = { here: { is: "an" }, object: 2 };

console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// // → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// // → true
