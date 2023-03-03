const { readFile } = require('fs');

console.log('started first task');

readFile('./package.json', 'utf8', (err, result) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(result);
  // nodejs will start next task, won't wait for it
  console.log('completed first task');
});

console.log('starting next task');
