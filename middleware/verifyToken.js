const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.header('Authorization');

    // Check for the presence of the token
    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; // Add the decoded user data to the request object
        next(); // Proceed to the next middleware/route handler
    } catch (ex) {
        // If token is invalid or expired
        res.status(400).send('Invalid token.');
    }
};

module.exports = verifyToken;
