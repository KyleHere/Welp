const express = require('express')
const router = express.Router();
const asyncHandler = require('express-async-handler');

const { Review } = require('../../db/models/review');

// router.get('/:id', asyncHandler(async (req,res) => {
//   const review = await Review.findAll
// }))
