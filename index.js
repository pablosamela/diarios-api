'use strict'
var mongoose = require('mongoose');
var app = require('./app/app');

var port = '3000';

exports.db = mongoose.connect('mongodb://localhost:27017/diarios', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('You are connected!');
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`)
    });
}).catch(err => console.log(err));
