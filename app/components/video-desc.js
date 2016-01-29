import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'li',
	classNames: ['list-group-item'],
	videoItem: null,

	actions: {
		titleClick: function(){
			this.sendAction('titleClicked',{
				videoItem: this.get('videoItem')
			});
		}
	}
});
