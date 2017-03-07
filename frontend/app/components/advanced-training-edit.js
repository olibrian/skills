import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    submit(changeset, event) {
      event.preventDefault();
      return changeset.save().then(
        advanced_training => this.sendAction('done')
      );
    },
    deleteAdvancedTrainings(advancedTraining) {
      advancedTraining.destroyRecord().then(
        advanced_training => this.sendAction('done')
      );
    },
    confirmDestroy(advancedTraining){
      this.send('deleteAdvancedTrainings', advancedTraining);
    }
  }
});