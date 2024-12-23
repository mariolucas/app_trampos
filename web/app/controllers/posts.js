import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PostsController extends Controller {
  @service router;

  @action
  async deletePost(post) {
    try {
      await post.destroyRecord();
      this.router.transitionTo('posts');
    } catch (error) {
      console.error('Erro ao excluir o post:', error);
    }
  }

  @action
  async editPost(post) {
  }
}
