const express = require('express');
const router = express.Router( );
let feedController = require("../controller/feedController");
let feedItem = require("../model/feedItems");

router.route("/")
    .get(feedItem.getcurrentStories)
    .post(feedController.saveFeedAllItem)

router.route('/:feedItemId')
    .get(feedController.getFeedItem)
    .delete(feedController.deleteFeedItem)
    .patch(feedController.updateFeedItem)
    .put(feedController.replaceFeedItem)
module.exports = router;
