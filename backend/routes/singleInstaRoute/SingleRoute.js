require('dotenv').config();
const InstaProfile  = require('../models/InstaProfile');
const InstaPosts    = require('../models/InstaPosts');
const express = require('express');
const router = express.Router();
// previously const InstaScraper = require("../scrapper/scrapInfluencers");
const singleScraper =require("../scrapper/singleScrape/random")
const mongoose = require('mongoose');

waitForSingleData = async () => {
    const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/ironplate'
    console.log('Connecting DB to ', MONGODB_URI)

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch((err) => console.error('Error connecting to mongo', err));
    let data = await singleScraper();
   
    await data.forEach(profile => {
        console.log(profile.user.id)
        InstaProfile.findOneAndUpdate(
            {id: profile.user.id}, 
            {...profile.user}, 
            {upsert:true}
            )
            .then(res => console.log(res))
            .catch(err => console.log("Panda",err))
        profile.medias.forEach(media => {
            console.log(media, '??????', media.media_id)
            InstaPosts.findOneAndUpdate(
                {media_id: media.media_id}, 
                {...media}, 
                {upsert:true}
                )
                .then(res => {
                    console.log(res);
                })
                .catch(err => console.log("Cat",err))
        })
    })
    // mongoose.disconnect();
}

module.exports = waitForSingleData