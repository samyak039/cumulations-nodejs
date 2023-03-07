const express = require('express');
const path = require('path');

const products = require('./data/products');
console.log('=> ~ products:', products);
const users = require('./data/users');
console.log('=> ~ users:', users);

const app = express();
const PORT = 3939;

app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './index.html'));
});

app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});

app.get('/api/products/:productId', (req, res) => {
  const { productId } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );

  if (!singleProduct) {
    return res.status(200).json({ success: true, data: [] });
  }
  return res.json(singleProduct);
});

app.get('/api/users', (req, res) => {
  res.status(200).json(users);
});

app.get('/api/users/:userId', (req, res) => {
  const { userId } = req.params;
  const singleUser = users.find((user) => user.id === Number(userId));

  if (!singleUser) {
    return res.status(200).json({ success: true, data: [] });
  }
  return res.status(200).json(singleUser);
});

app.get('/api/users/search/q', (req, res) => {
  const { name } = req.query;

  let filteredUsers = [...users];
  if (name) {
    filteredUsers = filteredUsers.filter((user) => {
      return user.name.toLowerCase().startsWith(name.toLowerCase());
    });
  }

  if (filteredUsers.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  }
  return res.status(200).json(filteredUsers);
});

app.get('/api/users/address/q', (req, res) => {
  const { country, state, city } = req.query;

  const filteredUsers = filterUsersByAddress(country, state, city);

  if (filteredUsers.length < 1) {
    return res.status(200).json({ success: true, data: [] });
  } else return res.json(filteredUsers);
});

function filterUsersByAddress(country, state, city) {
  console.log('=> ~ filterUsersByAddress ~ country:', country);
  console.log('=> ~ filterUsersByAddress ~ state:', state);
  console.log('=> ~ filterUsersByAddress ~ city:', city);

  let filteredUsers = [...users];

  if (country)
    filteredUsers = filteredUsers.filter(
      (user) => user.address.country.toLowerCase() === country.toLowerCase()
    );
  if (state)
    filteredUsers = filteredUsers.filter(
      (user) => user.address.state.toLowerCase() === state.toLowerCase()
    );
  if (city)
    filteredUsers = filteredUsers.filter(
      (user) => user.address.city.toLowerCase() === city.toLowerCase()
    );

  return filteredUsers;
}

app.listen(PORT, () => {
  console.log('server listening on', PORT);
});
