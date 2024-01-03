const express = require('express');
const authMiddleware = require('./middleware/authMiddleware');
const errorHandler = require('./middleware/errorHandler');
const notesRouter = require('./routes/notes');

const app = express();

app.use(express.json());

// Using the authMiddleware on the notes routes
app.use('/api/notes', authMiddleware, notesRouter);

// Using the errorHandler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
