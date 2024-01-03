const express = require('express');
const Note = require('../models/Note');
const router = express.Router();

// Middleware to verify the token
const verifyToken = require('../middleware/verifyToken');

// Search notes
router.get('/', verifyToken, async (req, res) => {
    try {
        const searchTerm = req.query.q;

        // Basic validation
        if (!searchTerm) {
            return res.status(400).json({ message: 'Search term is required' });
        }

        // Perform a text search on the Note collection
        const notes = await Note.find({
            $text: { $search: searchTerm },
            createdBy: req.user._id // Ensure that users can only search their own notes
        });

        res.json(notes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
