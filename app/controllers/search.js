/* Represents the search controller */

import Ember from 'ember';

export default Ember.Controller.extend({
	selectedVideoItem: '',	//selected item in search results
	sortBy: '',		//sorting option by type (e.g., published date, title)
	query: '',	//search query 

	isQueryEmpty: Ember.computed('query', function() {
		return Ember.isEmpty(this.get('query'));
	}),

});
