/* class FeedItem {
	constructor(title, body, linkURL, imageURL) {
		this.title = title;
		this.body = body;
		this.LinkURL = linkURL;
		this.ImageURL = imageURL;
	}
} */

var FeedItem = require("../model/feeditem");
//initzailing the array 
var currentStories = [];
//instances below
var feedItem1 = FeedItem.makeFeedItem('Welcome to Marist!', 'We are looking forward to students enjoying the buildings and activities', 'https://www.marist.edu/', 'images/campus.png');
var feedItem2 = FeedItem.makeFeedItem('News', 'All students need to be sure of news and information posted.', 'https://www.marist.edu/', 'images/news_pic.jpg');
var feedItem3 = FeedItem.makeFeedItem('A great experience', 'Activities and clubs are a great way to make friends and connections', 'https://www.marist.edu/', 'images/hancock.jpeg');
//adding instances
currentStories.push(feedItem1);
currentStories.push(feedItem2);
currentStories.push(feedItem3);
//functions to get feeditems
exports.getFeedItem = function(req, res) {
	res.setHeader('Content-Type', 'application/json');
    res.send(currentStories);
};
//fuction to save feedItems
exports.saveFeedItem = function(req, res) {
	let newFeedItem = FeedItem.makeFeedItem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
    currentStories.push(newFeedItem);
    res.setHeader('Content-Type', 'application/json');
    res.send(currentStories);
};
//fuction to get singlfeeditem by an id
exports.getSingleFeedItem = function(req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(currentStories[req.params.feedItemId]);
};
//to delete feeditem
exports.deleteFeedItem = function(req, res) {
	currentStories.splice(req.params.feedItemId, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(currentStories);
};
//fuction to update feeditem
exports.updateFeedItem = function(req, res) {
	var updatedFeedItem = currentStories[req.params.feedItemId];

    if (req.body.Title)
        updatedFeedItem.Title = req.body.Title;
    if (req.body.Body)
        updatedFeedItem.Body = req.body.Body;
    if (req.body.linkUrl)
        updatedFeedItem.linkUrl = req.body.linkUrl;
    if (req.body.imageUrl)
        updatedFeedItem.imageUrl = req.body.imageUrl;
    currentStories[req.params.feedItemId] = updatedFeedItem;

    res.setHeader('Content-Type', 'application/json');
    res.send(currentStories[req.params.feedItemId]);
};