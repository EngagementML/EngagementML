const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    email: String,
    name: String,
    fname: String,
    lname: String,
    igUsername: String,
    image: String,
    about: String,
    industry: {type: String, enum: ['Food', 'Travel', 'Fashion & Style', 'Photography', 'Lifestyle', 'Design', 'Beauty', 'Sports & Fitness' ], default : 'Lifestyle'},
    role: Array,
    competitor: Array,	
    // hashtags:Array
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);
