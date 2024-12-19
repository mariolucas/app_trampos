import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class PostsController extends Controller {
  @action
  async deletePost(post) {
    try {
      await post.destroyRecord();
      this.notify.success('Post excluído com sucesso!');
    } catch (error) {
      console.error('Erro ao excluir o post:', error);
      this.notify.error('Não foi possível excluir o post.');
    }
  }

  @action
  async editPost(post) {
    console.log(post);
  }
}
