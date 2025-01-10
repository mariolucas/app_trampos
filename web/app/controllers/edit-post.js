import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class EditPostController extends Controller {
  @service router;

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
        this.router.transitionTo('posts');
      })
      .catch((error) => {
        console.error('Error saving post:', error);
      });
  }
}
