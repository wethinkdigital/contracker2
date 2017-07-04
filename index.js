'use strict';

const express = require('express');
var app = new express();

app.get('/test', (req,res) => {
	res.send('testing');
});

app.listen(8000);
