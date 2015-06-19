import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("home");
  this.resource("questions", function() {
    this.route('new');
    this.resource('question', {path: ':question_id'}, function() {
      this.resource('new-answer');
    });
  });
});

export default Router;
