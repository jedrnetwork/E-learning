const express = require('express');
const router = express.Router();
const { getAllExetats, createExetat, getExetat, updateExetat, deleteExetat } = require('../controllers/exetats');

router.route('/').get(getAllExetats).post(createExetat);
router.route('/:id').get(getExetat).patch(updateExetat).delete(deleteExetat)

module.exports = router