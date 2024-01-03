const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true, // Trims whitespace
        minlength: 3 // Minimum length
    },
    password: {
        type: String,
        required: true
    }
    // Add other fields as necessary, like email, createdDate, etc.
});

const User = mongoose.model('User', userSchema);

module.exports = User;
