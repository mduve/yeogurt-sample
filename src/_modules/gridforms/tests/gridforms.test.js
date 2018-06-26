'use strict';

var Gridforms = require('../gridforms');

describe('Gridforms View', function() {

  beforeEach(function() {
    this.gridforms = new Gridforms();
  });

  it('Should run a few assertions', function() {
    expect(this.gridforms);
  });

});
