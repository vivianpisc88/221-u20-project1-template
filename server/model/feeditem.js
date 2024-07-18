function FeedItem(title, body, LinkURL, ImageURL) {
	this.title= title;
	this.body = body;
	this.LinkURL = LinkURL;
	this.ImageURL = ImageURL;
}

exports.makeFeedItem = function (title, body, LinkURL, ImageURL){
  return new FeedItem(title, body, LinkURL, ImageURL);
};