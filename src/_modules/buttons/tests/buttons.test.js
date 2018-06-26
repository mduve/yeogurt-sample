'use strict';

var Buttons = require('../buttons');

describe('Buttons View', function() {

  beforeEach(function() {
    this.buttons = new Buttons();
  });

  it('Should run a few assertions', function() {
    expect(this.buttons);
  });

});
