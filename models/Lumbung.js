const mongoose = require('mongoose');

const lumbungSchema = new mongoose.Schema({
    kode: {
        type: String,
        required: [true, 'Kode lumbung wajib diisi'],
        unique: true,
        uppercase: true,
        trim: true
    },
    nama: {
        type: String,
        required: [true, 'Nama lumbung wajib diisi'],
        trim: true
    }
});

module.exports = mongoose.model('Lumbung', lumbungSchema);