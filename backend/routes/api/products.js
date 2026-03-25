/* eslint-env node */
/* global require, module */
const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
const { Product } = require('../../models/product');

// 7. Search product in database by query string
router.get('/', auth, async (req, res, next) => {
  try {
    const { search } = req.query;
    if (!search) {
      return res.status(400).json({ message: 'Search parameter is required' });
    }

    // Usually searching in "title.ua" or "title.ru" or "title.en".
    const products = await Product.find({
      $or: [
        { title: { $regex: search, $options: 'i' } },
        { "title.en": { $regex: search, $options: 'i' } },
        { "title.ru": { $regex: search, $options: 'i' } },
        { "title.ua": { $regex: search, $options: 'i' } }
      ]
    });

    res.json(products);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
