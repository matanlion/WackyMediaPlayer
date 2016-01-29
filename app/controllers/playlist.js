import Ember from 'ember';

export default Ember.Controller.extend({
	isEmpty: Ember.computed('model.videoItems.length', function() {
		var model = this.get('model');
		return model.videoItems.length == 0;
	})
});
