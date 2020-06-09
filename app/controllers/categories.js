'use strict'
var Categories = require('../models/categories');

exports.find = (req, res) => {
  Categories.find({})
    .then(category => {
      console.log('GET /category');
      res.status(200).jsonp(category);
    }).catch(err => res.send(500, err.message));
};