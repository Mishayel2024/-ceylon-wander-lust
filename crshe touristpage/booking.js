const express = require('express');
const router = express.Router();

router.get('/booking', (req, res) => {
    res.render('booking');
});

// Add booking and payment handling logic here

module.exports = router;
