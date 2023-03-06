import SCRIPTS from "./additional-files/script.js";
// console.log(SCRIPTS);

function countBy(items, groupName) {
  let counts = []; // contains script name and their repetition on each chars
  for (let item of items) {
    let name = groupName(item); // script direction of each character or none if not found
    let known = counts.findIndex((c) => c.name == name); // check if script is already maintained
    if (known == -1) {
      counts.push({ name, count: 1 }); // if not, push script direction as name
    } else {
      counts[known].count++; // if known then increment count
    }
  }
  return counts;
}
//returns the script used
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    ) {
      return script; //if UniCode is found in range then return the script
    }
  }
  return null;
}
////////

function dominantDirection(text) {
  //counted collects different scripts used and their repetition in {name,count}
  let counted = countBy(text, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({ name }) => name != "none"); // filters directions != none

  if (counted.length == 0) return "ltr"; //if no script found for all chars

  return counted.reduce((acc, scriptD) =>
    acc.count > scriptD.count ? acc : scriptD
  ).name; // return the dominant direction
}

console.log(dominantDirection("Hello!"));
// // → ltr
console.log(dominantDirection("Hey, مساء الخير"));
// → rtl

console.log(Object.prototype);
