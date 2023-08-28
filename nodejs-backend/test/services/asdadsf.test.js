const assert = require('assert');
const app = require('../../src/app');

describe('\'asdadsf\' service', () => {
  it('registered the service', () => {
    const service = app.service('asdadsf');

    assert.ok(service, 'Registered the service (asdadsf)');
  });
});
