import Ember from 'ember';
import Video from '../models/video';

Ember.Binding.from("App.searchResultsCollection").to("value");

var searchResultsCollection = Ember.Object.extend({
	content: [],
	sortProperties: ['title:desc'],
	sortedContent: Ember.computed.sort('content', 'sortProperties'),

	myFunction: function() {
    console.log(App.myController.get('someProperty')); // should print 'hello'
  }
});
var searchResults = searchResultsCollection.create();

const API_PATH = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoEmbeddable=true&maxResults=50&key=AIzaSyDNZfFrO50jqog8ZXYaeiJIFYMfY9IPxDw&q=';

export default Ember.Route.extend({

	model: function() {
		return searchResults;
	},

	actions: {
		SortResults: function(sortBy) {
			var a= sortBy+':desc';
			searchResults.set('sortProperties', [a]);
		},
		findVideos: function() {

			searchResults.content.clear();
			var controller = this.get('controller');			
			var query = controller.get('query');
			var playList = this.modelFor('application');
			$.getJSON(API_PATH + query)
			.then(function(response) {
				
				response.items.forEach(function(videoItem) {
					var videoItem = Video.create({
						videoId : videoItem.id.videoId,
						title : videoItem.snippet.title,
						thumbnails : videoItem.snippet.thumbnails.high.url,
						description : videoItem.snippet.description,
						publishedAt : videoItem.snippet.publishedAt
					});


					var isItemExists = playList.videoItems.findBy('videoId',videoItem.videoId);
					videoItem.inPlaylist = isItemExists ? true : false;

					searchResults.content.pushObject(videoItem);
				}); 
			});

		},
		AddToPlaylist: function(videoItem) {
			var playListRoute = this.modelFor('application');
			var isItemExists = playListRoute.videoItems.findBy('videoId',videoItem.videoId);
			playListRoute.Add(videoItem);
			this.send('Notify','Video Added!');
		},
		RemoveFromPlaylist: function(videoItem) {
			var playListRoute = this.modelFor('application');
			var isItemExists = playListRoute.videoItems.findBy('videoId',videoItem.videoId);
			playListRoute.Remove(videoItem);
			this.send('Notify', 'Video Removed!');

		},
		PlayVideo: function(params)
		{
			$('#playerModal').modal('show');
			var controller = this.get('controller');		
			controller.set('selectedVideoItem', params.videoItem);	
		}

	}

});