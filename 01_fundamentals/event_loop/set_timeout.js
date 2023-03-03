console.log('first');

setTimeout(() => {
  // this will run at the end, only after nodejs is finished with other tasks
  // basically this callback get's offloaded
  console.log('second');
}, 0);

console.log('third');
