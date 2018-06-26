'use strict';

var Badges = require('../badges');

describe('Badges View', function() {

  beforeEach(function() {
    this.badges = new Badges();
  });

  it('Should run a few assertions', function() {
    expect(this.badges);
  });

});
