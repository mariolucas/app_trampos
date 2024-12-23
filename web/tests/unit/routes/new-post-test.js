import { module, test } from 'qunit';
import { setupTest } from 'posts/tests/helpers';

module('Unit | Route | new-post', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:new-post');
    assert.ok(route);
  });
});
