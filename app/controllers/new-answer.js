import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['question'],
  actions: {
    addAnswer: function() {
      var question = this.get('controllers.question.model');

      var newAnswer = this.store.createRecord('answer', {
        user: this.get('user'),
        answerBody: this.get('answerBody'),
      });

      newAnswer.save().then(function() {
        question.get('answers').pushObject(newAnswer);

        question.save().then(function() {
          question.setProperties({
            user: '',
            text: ''
          });
        });
      });

      this.transitionToRoute('questions');
    }
  }
});
