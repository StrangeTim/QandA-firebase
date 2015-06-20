import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    doneEditing: function() {
      this.set('isEditing', false);
    },
    delete: function() {
      this.get('model').destroyRecord().then( function() {
        this.transitionToRoute('drinks');
      });
    }
  }
});
