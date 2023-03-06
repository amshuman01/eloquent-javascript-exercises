class MultiplicatorUnitFailure extends Error {
  constructor(message) {
    super(message);
    this.name = "MultiplicatorUnitFailure";
  }
}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  for (let i = 0; ; i++) {
    try {
      return primitiveMultiply(a, b);
    } catch (e) {
      if (e instanceof MultiplicatorUnitFailure) {
        console.error(
          `${e.message}... attempt ${i + 1} failed Trying again....`
        );
      } else {
        console.log(`${e.message} `);
      }
    }
  }
}

console.log(reliableMultiply(8, 8));
// → 64
