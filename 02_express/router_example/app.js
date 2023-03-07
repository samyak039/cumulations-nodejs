const compression = require('compression');
const express = require('express');

const app = express();
const PORT = 3939;

app.use(compression());
app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', require('./router/api/users'));
app.use('/api/products', require('./router/api/products'));

app.listen(PORT, () => {
  console.log('Server LISTENING...  port:', PORT);
});
