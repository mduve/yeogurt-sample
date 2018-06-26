'use strict';

var Alerts = require('../alerts');

describe('Alerts View', function() {

  beforeEach(function() {
    this.alerts = new Alerts();
  });

  it('Should run a few assertions', function() {
    expect(this.alerts);
  });

});
