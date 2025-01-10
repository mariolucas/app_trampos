import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NewPostController extends Controller {
  @service store;
  @service router;

  successMessage = null;
  errorMessage = null;

  @action
  updateTitle(event) {
    this.model.title = event.target.value;
  }

  @action
  updateContent(event) {
    this.model.content = event.target.value;
  }

  @action
  async savePost(event) {
    event.preventDefault();
    try {
      let post = this.store.createRecord('post', {
        title: this.model.title,
        content: this.model.content,
      });

      await post.save();

      this.set('successMessage', 'Post salvo com sucesso!');
      this.set('errorMessage', null);

      setTimeout(() => {
        this.set('successMessage', null);
      }, 5000);

      // Limpa campos
      this.set('model.title', '');
      this.set('model.content', '');

    } catch (error) {
      console.error('Erro ao salvar o post:', error);
      this.set('errorMessage', 'Erro ao salvar o post. Tente novamente mais tarde.');
      this.set('successMessage', null);

      setTimeout(() => {
        this.set('errorMessage', null);
      }, 5000);
    }
  }
}
