const { Schema, model } = require("mongoose");

const FollowListSchema = new Schema(
    {
        username : String,
        soMeType : String,
        category : String,
    }
);

module.exports = model("FollowList", FollowListSchema);