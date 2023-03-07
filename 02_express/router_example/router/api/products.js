const express = require('express');
const products = require('../../data/products');

const router = express.Router();

router.get('/api/products', (req, res) => {
  res.status(200).json(products);
});

router.get('/api/products/:productId', (req, res) => {
  const { productId } = req.params;
  const singleProduct = products.find(
    (product) => product.id === Number(productId)
  );

  if (!singleProduct) {
    return res.status(200).json({ success: true, data: [] });
  }
  return res.json(singleProduct);
});

module.exports = router;
