'use strict';

var Listviews = require('../listviews');

describe('Listviews View', function() {

  beforeEach(function() {
    this.listviews = new Listviews();
  });

  it('Should run a few assertions', function() {
    expect(this.listviews);
  });

});
