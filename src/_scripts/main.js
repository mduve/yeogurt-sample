// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

var $ = require('jquery');
require('bootstrap');

//var Link = require('../_modules/link/link');
var Accordions = require('../_modules/badges/badges');
var Badges = require('../_modules/accordions/accordions');
var Modals = require('../_modules/modals/modals');

$(function() {
  console.log('Welcome to Yeogurt!');

  new Accordions(); // Activate Accordion modules logic
  new Badges(); // Activate Accordion modules logic
  new Modals(); // Activate Accordion modules logic
});
