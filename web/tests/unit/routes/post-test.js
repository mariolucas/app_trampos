import { module, test } from 'qunit';
import { setupTest } from 'posts/tests/helpers';

module('Unit | Route | post', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:post');
    assert.ok(route);
  });
});
