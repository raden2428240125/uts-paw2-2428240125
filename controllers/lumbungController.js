
const Lumbung = require('../models/Lumbung');

// Menambahkan data lumbung
const createLumbung = async (req, res) => {
    const { kode, nama } = req.body;

    const lumbung = await Lumbung.create({
        kode,
        nama
    });

    res.status(201).json(lumbung);
};

// Menampilkan seluruh data lumbung
const getAllLumbung = async (req, res) => {
    const lumbungs = await Lumbung.find();

    res.status(200).json(lumbungs);
};

module.exports = {
    createLumbung,
    getAllLumbung
};
