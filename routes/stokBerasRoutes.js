
const express = require('express');
const router = express.Router();

const {
    createStokBeras,
    getAllStokBeras,
    getStokBerasById
} = require('../controllers/stokBerasController');

router.post('/', createStokBeras);
router.get('/', getAllStokBeras);
router.get('/:id', getStokBerasById);

module.exports = router;
