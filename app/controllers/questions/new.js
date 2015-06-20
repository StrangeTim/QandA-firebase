import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    addQuestion: function() {
      var newQuestion = this.store.createRecord('question', {
        user: this.get('user'),
        questionText: this.get('questionText'),
        questionBody: this.get('questionBody')
      });

      newQuestion.save().then(function() {
        newQuestion.setProperties({
          user: '',
          questionText: '',
          questionBody: ''
        }),
        this.transitionToRoute('questions');
      });
    }
  }
});
