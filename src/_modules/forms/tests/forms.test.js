'use strict';

var Forms = require('../forms');

describe('Forms View', function() {

  beforeEach(function() {
    this.forms = new Forms();
  });

  it('Should run a few assertions', function() {
    expect(this.forms);
  });

});
