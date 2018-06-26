'use strict';

var Subnav = require('../subnav');

describe('Subnav View', function() {

  beforeEach(function() {
    this.subnav = new Subnav();
  });

  it('Should run a few assertions', function() {
    expect(this.subnav);
  });

});
