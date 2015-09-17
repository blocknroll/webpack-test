const assert = require('chai').assert;
require('./example1.js');
require('./example2.js');

describe('the test bundle', function () {
  it('is wired up', function () {
    assert(true);
  });
});
