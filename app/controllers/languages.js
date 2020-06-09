'use strict'
var Languages = require('../models/languages');

exports.find = (req, res) => {
  Languages.find({})
    .then(languages => {
      console.log('GET /languages');
      res.status(200).jsonp(languages);
    }).catch(err => res.send(500, err.message));
};