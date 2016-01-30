/* Represents a video description component.
Provides an overview of the input video */
import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'a',
	classNames: ['list-group-item'],
	videoItem: null,
	includeDesc: true,
	includePublishAt: true,

	actions: {
		titleClick: function(){
			this.sendAction('titleClicked',{
				videoItem: this.get('videoItem')
			});
		}
	}
});
