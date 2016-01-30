/* Represents video object */

import Ember from 'ember';

export default Ember.Object.extend({
  	videoId: '',
  	title: '',
  	thumbnails: '',
	description: '',
	publishedAt: '',
	inPlaylist: false,
});
