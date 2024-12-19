import { module, test } from 'qunit';
import { setupTest } from 'posts/tests/helpers';

module('Unit | Route | edit-post', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:edit-post');
    assert.ok(route);
  });
});
