async function locateScalpel(nest) {
  let current = nest.name;
  let next;
  while (true) {
    next = await anyStorage(nest, current, "scalpel");
    if (next === current) {
      return current;
    }
    current = next;
  }
}

function locateScalpel2(nest) {
  async function loop(current) {
    const next = await anyStorage(nest, current, "scalpel");
    if (next === current) {
      return current;
    } else {
      return loop(next);
    }
  }
  return loop(nest.name);
}

locateScalpel(bigOak).then(console.log);
// → Butcher's Shop
locateScalpel2(bigOak).then(console.log);
// → Butcher's Shop
