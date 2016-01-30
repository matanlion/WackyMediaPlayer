/* Represents the playlist controller */

import Ember from 'ember';

export default Ember.Controller.extend({
	playlistName: '', //binded playlist name

	//checks if playlist is empty
	isEmpty: Ember.computed('model.videoItems.length', function() {
		var model = this.get('model');
		return model.videoItems.length == 0;
	})
});
