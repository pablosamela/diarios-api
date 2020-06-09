import mongoose = require('mongoose');
var app = require('./app/app');

var port = 3000;
var url = 'mongodb://localhost:27017/diarios';

exports.db = mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('You are connected!');
    app.listen(port, () => {
        console.log(`Servidor corriendo en http://localhost:${port}`)
    });
}).catch(err => console.log(err));
