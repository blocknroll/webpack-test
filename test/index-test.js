const assert = require('chai').assert;
require('./example1-test.js');
require('./example2-test.js');

describe('the test bundle', function () {
  it('is wired up', function () {
    assert(true);
  });
});
