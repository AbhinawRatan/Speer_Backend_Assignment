const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

const verifyToken = require('../middleware/verifyToken');

router.get('/', verifyToken, async (req, res) => {
    try {
        const notes = await Note.find({ createdBy: req.user._id });
        res.json(notes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/:id', verifyToken, async (req, res) => {
    try {
        const note = await Note.findOne({ _id: req.params.id, createdBy: req.user._id });
        if (!note) return res.status(404).send('Note not found');
        res.json(note);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/', verifyToken, async (req, res) => {
    try {
        const newNote = new Note({
            title: req.body.title,
            content: req.body.content,
            createdBy: req.user._id
        });

        const savedNote = await newNote.save();
        res.status(201).json(savedNote);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Update an existing note
router.put('/:id', verifyToken, async (req, res) => {
    try {
        const updatedNote = await Note.findOneAndUpdate(
            { _id: req.params.id, createdBy: req.user._id },
            req.body,
            { new: true }
        );
        if (!updatedNote) return res.status(404).send('Note not found');
        res.json(updatedNote);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// Delete a note
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const deletedNote = await Note.findOneAndDelete({ _id: req.params.id, createdBy: req.user._id });
        if (!deletedNote) return res.status(404).send('Note not found');
        res.json({ message: 'Note deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
