const InstaProfile  = require('../models/InstaProfile');
const InstaPosts    = require('../models/InstaPosts');
const express = require('express');
const router = express.Router();
const InstaScraper = require("../scrapper/scrapInfluencers")

waitForData = async () => {
<<<<<<< HEAD
    let data = await InstaScraper();

    //console.log("data in route: ", data)
    // console.log('whynow', data[0].user, data[1].user, data[0].medias, data[1].medias)


    data.forEach(profile => {
        console.log(profile.user.id)
        InstaProfile.findOneAndUpdate(
            {id: profile.user.id}, 
            {...profile.user}, 
            {upsert:true}
            )
            .then(res => console.log(res))
            .catch(err => console.log(err))

        profile.medias.forEach(media => {
            console.log(media, '??????', media.media_id)
            InstaPosts.findOneAndUpdate(
                {media_id: media.media_id}, 
                {...media}, 
                {upsert:true}
                )
                .then(res => console.log(res))
                .catch(err => console.log(err))
        })    



    })
    // InstaProfile.insertMany(data).then(res => {
    //     console.log('r' ,res)
    // }).catch(err => {
    //     console.log('e', err)
    // })
=======
     let data = await InstaScraper();
    console.log("data in route: ", data)
>>>>>>> 22d3d541c886f05984aa82a47fb5529f94e1bd88
}
<<<<<<< HEAD

waitForData()

router.post()('/scrapper', (req, res, next) => {
    let data = InstaScraper()
    InstaProfile.findOneAndUpdate(data.user.id, req.data.user, {upsert: true}, function(err, doc) {
        // InstaPosts.
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    });
});
=======
>>>>>>> 6a86b12668c54d4fb7492195a1944ec9ee960a8f

<<<<<<< HEAD

module.exports = waitForData
=======
waitForData()

// async function holdUp() {
//      setTimeout(() => {
//         let data = InstaScraper()
//     }, 5000)
//      await return (data)
// }

// holdUp()
>>>>>>> 22d3d541c886f05984aa82a47fb5529f94e1bd88
