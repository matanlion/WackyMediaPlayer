/* Represents a playlist route */

import Ember from 'ember';

export default Ember.Route.extend({
	//model hook - palylist collection
	model: function() {
		return this.modelFor('application');
	},
	actions: {
		//remove video item from playlist
		RemoveFromPlaylist: function(videoItem) {
			var playlist = this.modelFor('application');
			playlist.Remove(videoItem);	//remove item
			this.send('Notify',  videoItem.title + ' removed from playlist!', false); //notify user
		},
		//set playlist alias name
		SetPlaylistName: function() {
			var playlist = this.modelFor('application');
			var playlistName = this.get('controller').get('playlistName');
			playlist.set('title', playlistName);
		}
	}
});