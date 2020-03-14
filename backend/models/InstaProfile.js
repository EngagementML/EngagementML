const { Schema, model } = require('mongoose');

// const Data = require("../scrapper/mock.json")
// console.log(Data[0].user)

const instaProfileSchema = new Schema(
    {
        biography: String,
        blocked_by_viewer: Boolean,
        restricted_by_viewer: Boolean,
        country_block: Boolean,
        external_url: String,
        external_url_linkshimmed: String,
        edge_followed_by: Object,
        followed_by_viewer: Boolean,
        edge_follow: Object,
        follows_viewer: Boolean,
        full_name: String,
        has_ar_effects: Boolean,
        has_channel: Boolean,
        has_blocked_viewer: Boolean,
        highlight_reel_count: Number,
        has_requested_viewer: Boolean,
        id: String,
        is_business_account: Boolean,
        is_joined_recently: Boolean,
        business_category_name: String,
        category_id: String,
        overall_category_name: String,
        is_private: Boolean,
        is_verified: Boolean,
        edge_mutual_followed_by: Object,
        profile_pic_url: String,
        profile_pic_url_hd: String,
        requested_by_viewer: Boolean,
        username: String,
        connected_fb_page: Boolean,
        edge_felix_video_timeline: Object,
        edge_owner_to_timeline_media: Object,
        edge_saved_media: Object,
        edge_media_collections: Object,
    }
);

module.exports = model('InstaProfile', instaProfileSchema);
