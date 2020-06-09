'use strict'
var express = require("express");
var bodyParser = require("body-parser");
var cors = require('cors');
var routes = require('./routes/routes');

var app = express();
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', [routes]);

module.exports = app;