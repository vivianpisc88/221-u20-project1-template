//constructing the fuction for feedItem
function FeedItem(title, body, LinkURL, ImageURL) {
	this.title= title;//title of the feeditem
	this.body = body;//body of the feeditem
	this.LinkURL = LinkURL;// URLlink of the feeditem
	this.ImageURL = ImageURL;//URLimage of the feeditem
}
//fuction to create/make a new feeditem
exports.makeFeedItem = function (title, body, LinkURL, ImageURL){
	//returning the new feeditem 
  return new FeedItem(title, body, LinkURL, ImageURL);
};