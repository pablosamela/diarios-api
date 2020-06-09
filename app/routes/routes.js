'use strict'

var express = require('express');
var CategoriesController = require('../controllers/categories');
var ContinentsController = require('../controllers/continents');
var CountriesController = require('../controllers/countries');
var LanguagesController = require('../controllers/languages');
var StatusController = require('../controllers/status');
var EntitiesController = require('../controllers/entities');

var api = express.Router();
api.get('/entities/all', EntitiesController.find); 
api.get('/entities/one/:id', EntitiesController.findById);
api.get('/entities/languages/:id', EntitiesController.findByLanguage); 
api.get('/entities/countries/:id', EntitiesController.findByCountry); 
api.get('/entities/categories/:id', EntitiesController.findByCategory); 


api.get('/status', StatusController.find); 
api.get('/languages', LanguagesController.find); 
api.get('/countries', CountriesController.find); 
api.get('/categories', CategoriesController.find); 
api.get('/continents', ContinentsController.find); 

module.exports = api;