'use strict';

// Constructor
var Segment = function() {
  this.name = 'segment';
  console.log('%s module', this.name.toLowerCase());
};

module.exports = Segment;
