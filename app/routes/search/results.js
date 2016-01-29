import Ember from 'ember';

export default Ember.Route.extend({
	model: function() {
		var a = this.modelFor('search');
		return this.modelFor('search');
	},
	actions: {
		AddToPlaylist: function(videoItem) {
			var playListRoute = this.modelFor('application');
			var isItemExists = playListRoute.videoItems.findBy('videoId',videoItem.videoId);
			playListRoute.Add(videoItem);
			this.send('Notify','Video Added!');
		},
		RemoveFromPlaylist: function(videoItem) {
			var playListRoute = this.modelFor('application');
			var isItemExists = playListRoute.videoItems.findBy('videoId',videoItem.videoId);
			playListRoute.Remove(videoItem);
			this.send('Notify', 'Video Removed!');

		},
		PlayVideo: function(params)
		{
			$('#playerModal').modal('show');
			var controller = this.get('controller');		
			controller.set('selectedVideoItem', params.videoItem);	
		}

	}
});
