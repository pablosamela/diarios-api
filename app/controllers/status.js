'use strict'
var Status = require('../models/status');

exports.find = (req, res) => {
  Status.find({})
    .then(status => {
      console.log('GET /status');
      res.status(200).jsonp(status);
    }).catch(err => res.send(500, err.message));
};