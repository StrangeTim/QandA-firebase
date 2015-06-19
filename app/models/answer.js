import DS from 'ember-data';

var at = DS.attr;

export default DS.Model.extend({
  question: DS.belongsTo('question', {async: true}),
  answerBody: at('string'),
});
