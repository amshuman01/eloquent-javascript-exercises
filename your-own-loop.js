const loop = (value, testF, updateF, bodyF) => {
  for (let i = value; testF(i); i = updateF(i)) {
    bodyF(i);
  }
};

loop(
  3,
  (n) => n > 0,
  (n) => n - 1,
  console.log
);
