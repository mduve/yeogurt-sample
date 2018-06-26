'use strict';

var Tooltips = require('../tooltips');

describe('Tooltips View', function() {

  beforeEach(function() {
    this.tooltips = new Tooltips();
  });

  it('Should run a few assertions', function() {
    expect(this.tooltips);
  });

});
