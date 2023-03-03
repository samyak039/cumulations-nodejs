const { readFile, writeFile } = require('fs').promises;

const start = async () => {
  try {
    const first = await readFile('./first.txt', 'utf8');
    const second = await readFile('./second.txt', 'utf8');
    await writeFile(
      './result.txt',
      `Hello from another World!\n\tfirst: ${first}\tsecond: ${second}\n`,
      { flag: 'a' }
    );

    const result = await readFile('./result.txt', 'utf8');
    console.log('=> ~ start ~ result:', result);
  } catch (error) {}
};

start();
