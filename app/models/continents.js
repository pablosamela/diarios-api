'use strict'
var mongoose = require('mongoose');4
var Schema = mongoose.Schema;

var continents = new Schema({
    name: { type: String },
    machineName: { type: String }
});

module.exports = mongoose.model('continents', continents);