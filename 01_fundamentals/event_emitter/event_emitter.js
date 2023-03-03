const EventEmitter = require('events');

const customEmitter = new EventEmitter();

customEmitter.on('response', (name, id) => {
  console.log('data received');
  console.log('=> ~ customEmitter.on ~ name:', name);
  console.log('=> ~ customEmitter.on ~ id:', id);
});
customEmitter.on('response', () => {
  console.log('some other data');
});

customEmitter.emit('response', 'john', 23);
