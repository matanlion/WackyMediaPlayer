/* Represents the play route 
Enables playing youtube video by id*/

import Ember from 'ember';

export default Ember.Route.extend({

	//model hook - video item that matched query params
	model: function(params) {
		var playlist = this.modelFor('application')
		var videoItem = playlist.videoItems.findBy('videoId', params.videoid);
		return videoItem;
	}
});
