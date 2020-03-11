const { Schema, model } = require('mongoose');
// const Data = require("../scrapper/mock.json")
// console.log(Data[0].posts[0])

const InstaPostsSchema = new Schema(
    {
        media_id:String,
        shortcode:String,
        text: String,
        comment_count: Number,
        like_count: Number,
        display_url:String,
        owner_id:String,
        date: Number,
        thumbnail:String,
        thumbnail_resource:String,
        is_video: Boolean,
        video_view_count: Number
      }
);

module.exports = model('InstaPosts', InstaPostsSchema);
