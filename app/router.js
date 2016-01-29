import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('playlist', function() {
    this.route('play', {  path: ':videoid' });
  });

  this.route('search', function() {
    this.route('results');
  });

  this.route('about');
});

export default Router;
