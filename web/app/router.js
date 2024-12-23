import EmberRouter from '@ember/routing/router';
import config from 'posts/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('posts', { path: '/' });
  this.route('post', { path: '/post/:id' });
  this.route('new-post');
  this.route('edit-post', { path: '/edit-post/:post_id' });
});
