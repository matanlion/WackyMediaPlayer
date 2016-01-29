import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		return this.modelFor('application');
	},
	actions: {
		RemoveFromPlaylist: function(videoItem) {
			var playlist = this.modelFor('application')
			playlist.Remove(videoItem);
			this.send('Notify',  videoItem.title + ' removed from playlist!', false);
		},
		PlayVideoRoute: function(params){
			var videoItem = params.videoItem;
			this.transitionTo('playlist.play', videoItem.videoId);
		}
	}
});