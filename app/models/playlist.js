import DS from 'ember-data';

export default Ember.Object.extend({
  	title: '',

  	init: function() {
  		this.set('videoItems',[])
  	},	
  	Add(videoItem) {
  		this.get('videoItems').pushObject(videoItem);
  		Ember.set(videoItem, 'inPlaylist', true);
  	},
  	Remove(videoItem) {
  		this.get('videoItems').removeObject(videoItem);
  		Ember.set(videoItem, 'inPlaylist', false);
  	},
});
