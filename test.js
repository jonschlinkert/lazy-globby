/* deps: mocha */
var assert = require('assert');
var lazyGlobby = require('./');

describe('lazyGlobby', function () {
  it('should:', function () {
    assert.equal(typeof lazyGlobby, 'function');
    assert.equal(lazyGlobby().hasOwnProperty('sync'), true);
  });
});
