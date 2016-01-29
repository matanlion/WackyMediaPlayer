import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'div',
	videoItem: '',
	autoPlay: true,

	videoSource: Ember.computed('videoItem', 'autoPlay', function() {
		return 'http://www.youtube.com/embed/'+ this.get('videoItem').videoId +'?autoplay=' + this.get('autoPlay');
	})
});
