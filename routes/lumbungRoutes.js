
const express = require('express');
const router = express.Router();

const {
    createLumbung,
    getAllLumbung
} = require('../controllers/lumbungController');

router.post('/', createLumbung);
router.get('/', getAllLumbung);

module.exports = router;
