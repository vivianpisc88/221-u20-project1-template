const express = require('express');
const app = express();

// The static files from the 'client/public' dir
app.use(express.static('client/public'));

// Parse JSON data
app.use(express.json());

// Routes
app.get('/', function(req, res) {
    res.sendFile('index.html', { root: './client/views' });
});
app.get('/feed', function(req, res) {
    res.sendFile('feed.html', { root: './client/views' });
});
//importing the feedcontroller
const currentStories = require('./controller/feedController');
//getting,posting,patching and deleting the feeditems
app.route('/api/feedItem')
    .get(currentStories.getFeedItem)
    .post(currentStories.saveFeedItem);

app.route('/api/feedItem/:feedItemId')
    .get(currentStories.getSingleFeedItem)
    .delete(currentStories.deleteFeedItem)
    .patch(currentStories.updateFeedItem);

const port = 1337;
app.listen(port, function() {
    console.log(`Listening on port ${port}!`);
});