'use strict';

var Tabs = require('../tabs');

describe('Tabs View', function() {

  beforeEach(function() {
    this.tabs = new Tabs();
  });

  it('Should run a few assertions', function() {
    expect(this.tabs);
  });

});
