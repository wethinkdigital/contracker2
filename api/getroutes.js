'use strict';

var express = require('express');
var router = express.Router();

router.get('/', (req,res) => {
    res.send('API route found');
});

module.exports = router;