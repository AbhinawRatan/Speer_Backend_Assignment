const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const authRoutes = require('./routes/auth');
const noteRoutes = require('./routes/notes');
const searchRoutes = require('./routes/search');

const rateLimit = require('express-rate-limit');

dotenv.config();

const app = express();

app.use(express.json()); 

// Rate Limiter Configuration
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, 
    max: 100 
});

app.use(limiter);

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

app.use('/api/auth', authRoutes);
app.use('/api/notes', noteRoutes);
app.use('/api/search', searchRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
