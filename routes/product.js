var express = require('express');
var router = express.Router();

var database = require('../database');
const config = require('../config').noPasswordConfig;

/* GET users listing. */
router.get('/', async function(req, res, next) {
  let db = await database.getInstance(config);
  try {
    // Return a list of product
    const products = await db.query('SELECT TOP (10) ProductID,Name FROM [SalesLT].[Product]');
    console.log(`products: ${JSON.stringify(products)}`);
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: error?.message });
  }
  db.disconnect();
});

module.exports = router;
