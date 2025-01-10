import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class PostsController extends Controller {
  @service router;

  showModal = false;
  postToDelete = null;

  @action
  openConfirmDeleteModal(post) {
    this.set('postToDelete', post); // Armazena o post a ser excluído
    this.set('showModal', true);
  }

  @action
  closeModal() {
    this.set('showModal', false);
  }

  @action
  async deletePost() {
    if (this.postToDelete) {
      try {
        await this.postToDelete.destroyRecord();
        this.set('showModal', false);
        this.set('successMessage', 'Post excluído com sucesso!');
        this.router.transitionTo('posts');
      } catch (error) {
        console.error('Erro ao excluir o post:', error);
        this.set('errorMessage', 'Erro ao excluir o post. Tente novamente mais tarde.');

        setTimeout(() => {
          this.set('errorMessage', null);
        }, 5000);
      }
    }
  }

  @action
  async editPost(post) {}
}
