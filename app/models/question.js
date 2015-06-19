import DS from 'ember-data';

var at = DS.attr;

export default DS.Model.extend({
  user: at('string'),
  questionText: at('string'),
  questionBody: at('string'),
  answers: DS.hasMany('answer', {async: true})
});
