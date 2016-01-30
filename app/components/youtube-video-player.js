/* Represents a Youtube video componenet
Provides embded video actions */

import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	videoItem: '',
	autoPlay: true, 

	//constructing the youtube API destination
	videoSource: Ember.computed('videoItem', 'autoPlay', function() {
		return 'http://www.youtube.com/embed/'+ this.get('videoItem').videoId +'?autoplay=' + this.get('autoPlay');
	})
});
