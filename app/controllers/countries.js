'use strict'
var Countries = require('../models/countries');

exports.find = (req, res) => {
  Countries.find({})
    .then(countries => {
      console.log('GET /countries');
      res.status(200).jsonp(countries);
    }).catch(err => res.send(500, err.message));
};