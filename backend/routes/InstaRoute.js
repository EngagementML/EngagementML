const InstaProfile  = require('../models/InstaProfile');
const InstaPosts    = require('../models/InstaPosts');
const express = require('express');
const router = express.Router();
const InstaScraper = require("../scrapper/scrapInfluencers")

waitForData = async () => {
    let data = await InstaScraper();
   
    data.forEach(profile => {
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
                .then(res => console.log(res))
                .catch(err => console.log("Cat",err))
        })
    })
}

module.exports = waitForData