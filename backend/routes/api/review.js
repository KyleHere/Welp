const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { Review } = require('../../db/models/review');

router.get('/', asyncHandler(async (req,res) => {
  const reviews = await Review.findAll();
  res.json(reviews)
}))

module.exports = router;
