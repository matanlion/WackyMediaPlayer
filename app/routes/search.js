/* Represents a search route
Enables searching, playing & listing youtube videos */

import Ember from 'ember';
import Video from '../models/video';
import Collection from '../models/collection';
const API_PATH = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoEmbeddable=true&maxResults=50&key=AIzaSyDNZfFrO50jqog8ZXYaeiJIFYMfY9IPxDw&q=';

var searchResults = Collection.create();

export default Ember.Route.extend({

	//model hook - search results collection
	model: function() {
		return searchResults;
	},

	actions: {
		//Sort search collection results by sortBy options provided
		SortResults: function(sortBy) {
			var sortOptions = sortBy !== 'auto' ? sortBy+':desc' : "";
			searchResults.set('sortProperties', [sortOptions]);
		},
		//Find videos using youtube api
		findVideos: function() {
			searchResults.content.clear();	//clear previous results
			var controller = this.get('controller');			
			var query = controller.get('query');	//get user query
			var playList = this.modelFor('application');	//get playlist

			//Non empty search query assertion
			if (Ember.isEmpty(query)) { return; }

			//send search request to server
			$.getJSON(API_PATH + query)
			.then(function(response) {
				//on response initiate video item object & add to current results
				response.items.forEach(function(respnseVideoItem) {
					var videoItem = Video.create({
						videoId : respnseVideoItem.id.videoId,
						title : respnseVideoItem.snippet.title,
						thumbnails : respnseVideoItem.snippet.thumbnails.high.url,
						description : respnseVideoItem.snippet.description,
						publishedAt : respnseVideoItem.snippet.publishedAt
					});
					//flag items already included in playlist
					var isItemExists = playList.videoItems.findBy('videoId',videoItem.videoId);
					videoItem.inPlaylist = isItemExists ? true : false;

					//insert to results
					searchResults.content.pushObject(videoItem);
				}); 
			});

		},
		//Add video item to playlist
		AddToPlaylist: function(videoItem) {
			var playListRoute = this.modelFor('application');
			playListRoute.Add(videoItem);	//add video item to playlist
			this.send('Notify', videoItem.title + ' added to playlist!', true);	//notify user
		},
		//Remove video item from playlist
		RemoveFromPlaylist: function(videoItem) {
			var playListRoute = this.modelFor('application');
			playListRoute.Remove(videoItem);	//remove video item from playlist
			this.send('Notify', videoItem.title + ' removed from playlist!', false); //notify user

		},
		//Play selected video item in modal
		PlayVideo: function(params)
		{
			$('#playerModal').modal('show');
			var controller = this.get('controller');		
			controller.set('selectedVideoItem', params.videoItem);	
		}

	}

});