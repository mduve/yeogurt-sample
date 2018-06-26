'use strict';

var Loaders = require('../loaders');

describe('Loaders View', function() {

  beforeEach(function() {
    this.loaders = new Loaders();
  });

  it('Should run a few assertions', function() {
    expect(this.loaders);
  });

});
