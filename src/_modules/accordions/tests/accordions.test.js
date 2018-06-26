'use strict';

var Accordions = require('../accordions');

describe('Accordions View', function() {

  beforeEach(function() {
    this.accordions = new Accordions();
  });

  it('Should run a few assertions', function() {
    expect(this.accordions);
  });

});
