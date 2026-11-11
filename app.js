
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const lumbungRoutes = require('./routes/lumbungRoutes');
const stokBerasRoutes = require('./routes/stokBerasRoutes');

const {
    notFoundHandler,
    errorHandler
} = require('./middlewares/errorHandler');

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    methods: ['GET', 'POST']
}));

app.use(express.json());

// Routes
app.use('/lumbung', lumbungRoutes);
app.use('/stok-beras', stokBerasRoutes);

// Error handling harus paling akhir
app.use(notFoundHandler);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await connectDB();

    app.listen(PORT, () => {
        console.log(`Server berjalan di port ${PORT}`);
    });
};

startServer();
