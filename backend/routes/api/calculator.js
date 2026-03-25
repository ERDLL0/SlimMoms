/* eslint-env node */
/* global require, module */
const express = require('express');
const router = express.Router();
const auth = require('../../middlewares/auth');
const { Product } = require('../../models/product');
const { User } = require('../../models/user');

const calculateDailyRate = (weight, height, age, desiredWeight) => {
  return Math.round(10 * weight + 6.25 * height - 5 * age - 161 - 10 * (weight - desiredWeight));
};

// 5. Public: get daily calories and forbidden products
router.post('/public', async (req, res, next) => {
  try {
    const { weight, height, age, desiredWeight, bloodType = 1 } = req.body;

    const dailyRate = calculateDailyRate(weight, height, age, desiredWeight);
    
    // Using bloodType (1-4). Find products where groupBloodNotAllowed[bloodType] == true
    const notAllowed = await Product.find({
      [`groupBloodNotAllowed.${bloodType}`]: true
    }).limit(10); // limiting response to 10 for performance, usually mapped to titles

    const notAllowedProducts = notAllowed.map(p => p.title.en || p.title.ru || p.title.ua);

    res.json({
      dailyRate,
      notAllowedProducts
    });
  } catch (error) {
    next(error);
  }
});

// 6. Private: get daily calories, save to user DB
router.post('/private', auth, async (req, res, next) => {
  try {
    const { weight, height, age, desiredWeight, bloodType = 1 } = req.body;

    const dailyRate = calculateDailyRate(weight, height, age, desiredWeight);
    
    const notAllowed = await Product.find({
      [`groupBloodNotAllowed.${bloodType}`]: true
    }).limit(10);

    const notAllowedProducts = notAllowed.map(p => p.title.en || p.title.ua);

    const userDataObj = {
      weight, height, age, desiredWeight, bloodType, dailyRate, notAllowedProducts
    };

    // Save to user DB
    const updatedUser = await User.findByIdAndUpdate(req.user._id, {
      userData: userDataObj
    }, { new: true });

    res.json({
      dailyRate,
      notAllowedProducts,
      userData: updatedUser.userData
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
