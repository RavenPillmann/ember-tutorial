import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

// This function maps the URLs to route handlers
Router.map(function() {
  this.route('about'); // for /about
  this.route('contact'); // for /contact
  this.route('rentals', function() {
    this.route('show', { path: '/:rental_id' });
  });
});

export default Router;
