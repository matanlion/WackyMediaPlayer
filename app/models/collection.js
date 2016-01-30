/* Represents a collection of elements */

import Ember from 'ember';

export default Ember.Object.extend({
	content: [], //collection cintent
	sortProperties: [], //sorting options
	sortedContent: Ember.computed.sort('content', 'sortProperties'), //sorted collection
});
