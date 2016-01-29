import Ember from 'ember';

export default Ember.Route.extend({
	model: function(params) {
		var playlist = this.modelFor('application')
		var videoItem = playlist.videoItems.findBy('videoId', params.videoid);
		return videoItem;
	}
});
