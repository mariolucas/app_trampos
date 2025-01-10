import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EditPostController extends Controller {
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
  savePost(event) {
    event.preventDefault();
    this.model
      .save()
      .then(() => {

        this.set('successMessage', 'Post editado com sucesso!');
        this.set('errorMessage', null);

        setTimeout(() => {
          this.set('successMessage', null);
        }, 5000);

        // this.router.transitionTo('posts');
      })
      .catch((error) => {
        console.error('Error saving post:', error);
        this.set('errorMessage', 'Erro ao editar o post. Tente novamente mais tarde.');
        this.set('successMessage', null);

        setTimeout(() => {
          this.set('errorMessage', null);
        }, 5000);
      });
  }
}
