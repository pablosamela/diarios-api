'use strict'
var mongoose = require('mongoose');4
var Schema = mongoose.Schema;

var categories = new Schema({
    name: { type: String },
    machineName: { type: String }
});

module.exports = mongoose.model('categories', categories);