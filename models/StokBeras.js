const mongoose = require('mongoose');

const stokBerasSchema = new mongoose.Schema({
    kodeBatch: {
        type: String,
        required: [true, 'Kode batch wajib diisi'],
        unique: true,
        trim: true
    },
    varietas: {
        type: String,
        required: [true, 'Varietas wajib diisi'],
        trim: true
    },
    beratKg: {
        type: Number,
        required: [true, 'Berat beras wajib diisi'],
        min: [0, 'Berat minimal 0']
    },
    kualitas: {
        type: String,
        required: [true, 'Kualitas wajib diisi'],
        trim: true
    },
    asal: {
        petani: {
            type: String,
            trim: true
        },
        daerah: {
            type: String,
            trim: true
        }
    },
    lumbungId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Lumbung',
        required: [true, 'Lumbung wajib dipilih']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('StokBeras', stokBerasSchema);