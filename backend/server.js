import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Basic Route
app.get('/', (req, res) => {
    res.send('API is running...');
});

import contactRoutes from './routes/contactRoutes.js';
app.use('/api/contact', contactRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
