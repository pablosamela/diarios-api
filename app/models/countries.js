'use strict'
var mongoose = require('mongoose');4
var Schema = mongoose.Schema;

var countries = new Schema({
    name: { type: String },
    continent: { type: Object },
    machineName: { type: String }
});

module.exports = mongoose.model('countries', countries);