const express = require('express');
const path = require('path');

const User = require('./models/user_model');
const users = require('./data/users_data');

const app = express();
const PORT = 3939;

app.set('view engine', 'ejs');
app.set('views', path.resolve('./view'));

app.use(express.static('./methods-public'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/users', require('./router/api/user_router'));

app.get('/', (req, res) => {
  return res.render('home', {
    users,
  });
});

app.listen(PORT, () => {
  console.log('=> Server LISTENING... port:', PORT);
});
