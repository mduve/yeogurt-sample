'use strict';

var Steps = require('../steps');

describe('Steps View', function() {

  beforeEach(function() {
    this.steps = new Steps();
  });

  it('Should run a few assertions', function() {
    expect(this.steps);
  });

});
