let arrays = [[1, 2, 3], [4, 5], [6], 7];

// console.log(arrays.flatMap((ele) => ele)); //alternate way

const flattenedArray = arrays.reduce((acc, cur) => acc.concat(cur), []);
console.log(flattenedArray);

//for multiple nested array

// const flatten = (arr) => {
//     let flatArr = [];
//     for (const ele of arr) {
//       if (Array.isArray(ele)) {
//         flatArr = flatArr.concat(flatten(ele));
//         continue;
//       }
//       flatArr.push(ele);
//     }
//     return flatArr;
//   };
