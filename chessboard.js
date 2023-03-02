const size = 8;

let grid = "";
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    grid += (i + j) % 2 === 0 ? " " : "#"; // ternary op for character selection
  }
  grid += "\n";
}
console.log(grid);
