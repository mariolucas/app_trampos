import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostsRoute extends Route {
  @service store;

  async model() {
    try {
      return await this.store.findAll('post');
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return [];
    }
  }
}
