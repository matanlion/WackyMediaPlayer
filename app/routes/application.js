import Ember from 'ember';
import Playlist from '../models/playlist';

var playlist = Playlist.create({ title: "My Playlist" });



export default Ember.Route.extend({

	model: function() {
		return playlist;
	},
	actions: {
		Notify: function(message) {
			var controller = this.get('controller');
			controller.set('notificationContent', message);	
			$('#notificationModal').modal('show');
			setTimeout(function(){ $('#notificationModal').modal('hide'); }, 5000);		
		},
	}
});

