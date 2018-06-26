'use strict';

var Modals = require('../modals');

describe('Modals View', function() {

  beforeEach(function() {
    this.modals = new Modals();
  });

  it('Should run a few assertions', function() {
    expect(this.modals);
  });

});
