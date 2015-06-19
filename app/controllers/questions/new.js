import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addQuestion: function() {
      var newQuestion = this.store.createRecord('question', {
        user: this.get('name'),
        questionText: this.get('questionText'),
        questionBody: this.get('questionBody')
      });

      newQuestion.save().then(function() {
        newQuestion.setProperties({
          name: '',
          questionText: '',
          questionBody: ''
        });
      });
    }
  }
});
