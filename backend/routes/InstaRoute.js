const InstaProfile  = require('../models/InstaProfile');
const InstaPosts    = require('../models/InstaPosts');
const express = require('express');
const router = express.Router();
const InstaScraper = require("../scrapper/scrapInfluencers")

waitForData = async () => {
     let data = await InstaScraper();
    console.log("data in route: ", data)
}

waitForData()

router.post()('/scrapper', (req, res, next) => {
    let data = InstaScraper()
    InstaProfile.findOneAndUpdate(data.user.id, req.data.user, {upsert: true}, function(err, doc) {
        // InstaPosts.
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    });
});


// async function holdUp() {
//      setTimeout(() => {
//         let data = InstaScraper()
//     }, 5000)
//      await return (data)
// }

// holdUp()