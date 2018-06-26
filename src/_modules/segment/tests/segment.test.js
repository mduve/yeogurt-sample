'use strict';

var Segment = require('../segment');

describe('Segment View', function() {

  beforeEach(function() {
    this.segment = new Segment();
  });

  it('Should run a few assertions', function() {
    expect(this.segment);
  });

});
