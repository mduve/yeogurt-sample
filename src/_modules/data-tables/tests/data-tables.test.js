'use strict';

var DataTables = require('../data-tables');

describe('DataTables View', function() {

  beforeEach(function() {
    this.dataTables = new DataTables();
  });

  it('Should run a few assertions', function() {
    expect(this.dataTables);
  });

});
