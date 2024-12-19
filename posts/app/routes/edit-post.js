import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class EditPostRoute extends Route {
  @service store;
  async model(params) {
    console.log(params);
    try {
      return this.store.findRecord('post', params.post_id);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
      return [];
    }
  }
}
