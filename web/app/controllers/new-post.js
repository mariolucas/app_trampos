import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class NewPostController extends Controller {
  @service store;
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
  async savePost(event) {
    event.preventDefault();
    try {
      let post = this.store.createRecord('post', {
        title: this.model.title,
        content: this.model.content,
      });

      await post.save();
      this.router.transitionTo('posts');
    } catch (error) {
      console.error('Erro ao salvar o post:', error);
    }
  }
}
