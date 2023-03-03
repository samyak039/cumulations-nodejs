const { createReadStream } = require('fs');

const stream = createReadStream('./lorem_ipsum.tt', {
  // highWaterMark: 99999,
  // encoding: 'utf8',
});

stream.on('data', (result) => {
  console.log('=> ~ stream.on ~ result:', result);
});

stream.on('error', (err) => {
  console.error('=> ~ stream.on ~ err:', err);
});
