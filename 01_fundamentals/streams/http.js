const http = require('http');
const fs = require('fs');

http
  .createServer((req, res) => {
    // const text = fs.readFileSync('./lorem_ipsum.txt', 'utf8');
    // res.end(text);

    const fileStream = fs.createReadStream('./lorem_ipsum.txt', 'utf8');
    fileStream.on('open', () => {
      fileStream.pipe(res);
    });
    fileStream.on('error', (err) => {
      res.end(err);
      console.error(err);
    });
  })
  .listen(5000);
