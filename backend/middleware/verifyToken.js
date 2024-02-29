
const jwt = require('jsonwebtoken');
require('dotenv').config()


module.exports.verifyClient = (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1] || '';
    if (!token) return res.status(401).json({ message: 'Access denied' });
    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if (verified.user.role !== 'Client') return res.status(403).json({ message: 'Access denied' });
        
        req.user = verified.user;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
}

module.exports.verifyPersonnel = (req, res, next) => {
    
    const token = req.header('Authorization').split(' ')[1] || '';
    if (!token) return res.status(401).json({ message: 'Access denied' });
    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
        if (verified.user.role !== 'Student') return res.status(403).json({ message: 'Access denied' });

        req.user = verified.user;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
}
