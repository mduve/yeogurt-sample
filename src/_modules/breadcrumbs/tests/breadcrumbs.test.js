'use strict';

var Breadcrumbs = require('../breadcrumbs');

describe('Breadcrumbs View', function() {

  beforeEach(function() {
    this.breadcrumbs = new Breadcrumbs();
  });

  it('Should run a few assertions', function() {
    expect(this.breadcrumbs);
  });

});
