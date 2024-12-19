import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class PostsRoute extends Route {
  @service store;

  async model(params) {
    try {
      return await this.store.findRecord('post', params.id);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return [];
    }
  }
}
