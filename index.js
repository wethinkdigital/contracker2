'use strict';

const express = require('express');
var app = new express();

app.get('/', (req,res) => {
	res.send('index page');
});

app.get('/test', (req,res) => {
	res.send('testing');
});

app.listen(8000);
