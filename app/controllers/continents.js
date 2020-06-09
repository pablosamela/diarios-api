'use strict'
var Continents = require('../models/continents');

exports.find = (req, res) => {
  Continents.find({})
    .then(continents => {
      console.log('GET /continents');
      res.status(200).jsonp(continents);
    }).catch(err => res.send(500, err.message));
};