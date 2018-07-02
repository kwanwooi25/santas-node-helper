const fs = require('fs');

fs.readFile('./puzzle_1.txt', (err, data) => {
  console.time('puzzle_1');

  const instruction = data.toString();
  const ups = instruction.match(/\(/g).length;
  const downs = instruction.match(/\)/g).length;
  let destination = ups - downs;
  console.log(`destination: ${destination} floor`);

  console.timeEnd('puzzle_1');
});

fs.readFile('./puzzle_2.txt', (err, data) => {
  console.time('puzzle_2');

  

  console.timeEnd('puzzle_2');
});
