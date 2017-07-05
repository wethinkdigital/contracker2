'use strict';

const path = require('path');
const express = require('express');
var app = new express();

app.get('/', (req,res) => {
	res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/healthcheck', (req,res) => {
	res.status(200).send('ok');
});

const getRoutes = require(path.join(__dirname + '/api/getroutes'));
app.use('/get',getRoutes);

app.listen(8000);
