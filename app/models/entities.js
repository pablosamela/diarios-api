'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var entities = new Schema({
    country: { type: Object },
    category: { type: Object },
    language: { type: Object },
    name: { type: String },
    description: { type: String },
    url: { type: String },
    status: { type: Object },
    machineName: {type: String }
});

module.exports = mongoose.model('entities', entities);