'use strict'
var Entities = require('../models/entities');

//GET - Return all Entities in the DB
exports.find = (req, res) => {
  Entities.find({})
    .then(entities => {
      console.log('GET /entities/all');
      return res.status(200).jsonp(entities);
    }).catch(err => res.send(500, err.message));
};

//GET - Return a entity with specified ID
exports.findById = (req, res) => {
  Entities.findById(req.params.id)
    .then(entities => {
      console.log('GET /api/entities/' + req.params.id);
      return res.status(200).jsonp(entities);
    }).catch(err => {
      console.log(err);
      return res.status(500).send(err.message)
    });
};


//GET - Return entities by language
exports.findByLanguage = (req, res) => {
  Entities.find({ 'language': req.params.id })
    .then(entities => {
      console.log('GET /api/entities/language/' + req.params.id);
      res.status(200).jsonp(entities);
    }).catch(err => {
      console.log(err);
      res.status(500).send(err.message);
    });
};

//GET - Return entities by language
exports.findByCountry = function (req, res) {
  Entities.find({ 'country': req.params.id })
    .then(entities => {
      console.log('GET /api/entities/country/' + req.params.id);
      res.status(200).jsonp(entities);
    }).catch(err => res.send(500, err.message));
};

//GET - Return entities by language
exports.findByCategory = function (req, res) {
  Entities.find({ 'category': req.params.id })
    .then(entities => {
      console.log('GET /api/entities/category/' + req.params.id);
      res.status(200).jsonp(entities);
    }).catch(err => res.send(500, err.message));
};