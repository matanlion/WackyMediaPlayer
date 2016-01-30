/* Represents playlist object */

import Ember from 'ember';

export default Ember.Object.extend({
  	title: '', //playlist title

    //init playlist
  	init: function() {
  		this.set('videoItems',[]);
  	},	
    //Add video item
  	Add(videoItem) {
  		this.get('videoItems').pushObject(videoItem); //push video item to playlist
  		Ember.set(videoItem, 'inPlaylist', true); //add flag to video
  	},
    //Remove video item
  	Remove(videoItem) {
  		this.get('videoItems').removeObject(videoItem); //remove video item from playlist
  		Ember.set(videoItem, 'inPlaylist', false);  //remove flag
  	},
});
