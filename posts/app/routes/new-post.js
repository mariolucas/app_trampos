import Route from '@ember/routing/route';

export default class NewPostRoute extends Route {
  model() {
    return {
      title: '',
      content: '',
    };
  }
}
