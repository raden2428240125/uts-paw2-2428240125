const notFoundHandler = (req, res, next) => {
    res.status(404).json({
        message: 'Rute tidak ditemukan'
    });
};

const errorHandler = (err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({
            message: 'Format JSON tidak valid'
        });
    }

    if (err.name === 'CastError') {
        return res.status(400).json({
            message: 'ID tidak valid'
        });
    }

    if (err.name === 'ValidationError') {
        return res.status(400).json({
            message: 'Data tidak valid',
            detail: Object.values(err.errors).map(error => error.message)
        });
    }

    if (err.code === 11000) {
        return res.status(409).json({
            message: 'Data sudah terdaftar'
        });
    }

    const status = err.statusCode || err.status;

    if (status && status >= 400 && status < 500) {
        return res.status(status).json({
            message: err.message
        });
    }

    console.error(err);

    return res.status(500).json({
        message: 'Terjadi kesalahan pada server'
    });
};

module.exports = {
    notFoundHandler,
    errorHandler
};