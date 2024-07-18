//the express module
const express = require('express');
//creating a new router
const router = express.Router( );
//importing the feed controller 
let feedController = require("../controller/feedController");
let feedItem = require("../model/feedItems");
//router to POST and GET
router.route("/")
    .get(feedItem.getcurrentStories)
    .post(feedController.saveFeedAllItem)
//// Route to handle DELETE,PATCH,GET AND PUT
router.route('/:feedItemId')
    .get(feedController.getFeedItem)
    .delete(feedController.deleteFeedItem)
    .patch(feedController.updateFeedItem)
    .put(feedController.replaceFeedItem)
//exporting 
module.exports = router;