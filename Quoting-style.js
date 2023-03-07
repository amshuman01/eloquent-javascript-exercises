let text = "'I'm the cook,' he said, 'it's my job.'";
// Change this call.
console.log(text.replace(/(^|\W)'|'(\W|$)/g, `$1"$2`));
// console.log(/(^|\W)'|'(\W|$)/g.exec(text));
// → "I'm the cook," he said, "it's my job."
