/* Represents the root application route */

import Ember from 'ember';
import Playlist from '../models/playlist';

/*Creates a playlist object to provide
access to both playlist and search routes*/
var playlist = Playlist.create({ title: "My Playlist" });

export default Ember.Route.extend({

	//model hook - playlist collection
	model: function() {
		return playlist; 
	},
	actions: {
		/* User notifications via modal message */
		Notify: function(message, isSuccess) {
			var controller = this.get('controller');
			controller.set('notificationContent', message);	
			controller.set('isNotificationSuccess', isSuccess);	
			$('#notificationModal').modal('show');
			setTimeout(function(){ $('#notificationModal').modal('hide'); }, 5000);		
		},
	}
});

