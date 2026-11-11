
const StokBeras = require('../models/StokBeras');

// Menambahkan data stok beras
const createStokBeras = async (req, res) => {
    const {
        kodeBatch,
        varietas,
        beratKg,
        kualitas,
        asal,
        lumbungId
    } = req.body;

    const stokBeras = await StokBeras.create({
        kodeBatch,
        varietas,
        beratKg,
        kualitas,
        asal,
        lumbungId
    });

    res.status(201).json(stokBeras);
};

// Menampilkan seluruh stok beras
const getAllStokBeras = async (req, res) => {
    const filter = {};

    if (req.query.kualitas !== undefined) {
        filter.kualitas = req.query.kualitas;
    }

    const stokBeras = await StokBeras.find(filter)
        .select('kodeBatch varietas beratKg kualitas');

    res.status(200).json(stokBeras);
};

// Menampilkan satu stok beras berdasarkan ID
const getStokBerasById = async (req, res) => {
    const stokBeras = await StokBeras.findById(req.params.id)
        .populate('lumbungId', 'kode nama');

    if (!stokBeras) {
        const error = new Error('Data stok beras tidak ditemukan');
        error.statusCode = 404;
        throw error;
    }

    res.status(200).json(stokBeras);
};

module.exports = {
    createStokBeras,
    getAllStokBeras,
    getStokBerasById
};
