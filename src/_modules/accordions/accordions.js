'use strict';
var $ = require('jquery');

// Constructor
var Accordions = function() {

  this.name = 'accordions';
  console.log('%s module', this.name.toLowerCase());

  $(function() {
      //$('#accordion').collapse();
      //var bootstrap_enabled = (typeof $().modal == 'function');

  });

};

module.exports = Accordions;
