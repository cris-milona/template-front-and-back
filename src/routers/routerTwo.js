const express = require('express');

const router = new express.Router();

router.get('/', (req, res) => {
  res.send('Router two');
});

module.exports = router;
