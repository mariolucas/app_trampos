import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class EditPostController extends Controller {
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
    this.model.save().then(() => {
      this.transitionToRoute('posts');
    });
  }

}
