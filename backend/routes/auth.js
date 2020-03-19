const express = require('express');
const router = express.Router();
const User = require('../models/User');
const InstaProfile = require('../models/InstaProfile')
const InstaPosts    = require('../models/InstaPosts');
const passport = require('../config/passport');
const singleScrape = require("../scrapper/singleScrape/random")

router.post('/signup', (req, res, next) => {
  User.register(req.body, req.body.password)
    .then(async (user) => { 
        let data = await singleScrape(req.body.igUsername);
   
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
        req.login(user, function(err,result){
          res.status(201).json(user)
        })
    })
    .catch((err) => { 
      console.log(err)
      res.status(500).json({ err })
    });
});

// Route to update eML User Profile
router.route("/eML/users/update/:id").post(function(req, res) {
  User.findById(req.params.id, (err, user) => {
    if (!user) res.status(404).send("User is not found");
    else user.email = req.body.email;
    user.name = req.body.name;
    user.fname = req.body.fname;
    user.lname = req.body.lname;
    user.image = req.body.image;
    user.about = req.body.about;
    user.igUsername = req.body.igUsername;
    user.industry = req.body.industry;
    user.role = req.body.role;
    user.competitor = req.body.competitor;

    user
      .save()
      .then(user => {
        res.json("User updated!");
      })
      .catch(err => {
        res.status(400).send("Update not possible for User");
      });
  });
});

//Route returns all eML Users
router.route("/eML/users").get((req, res, next) => {
  User.find({},(err, user) => {
    if (err) {
      console.log(err);
    } else {
      res.json(user);
    }
  })
});

//Route should return info specific to user params ** need to test **
router.route("/eML/user/:id").get((req, res, next) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      console.log(err);
    } else {
      res.json(user);
    }
  });
});


//return await service.get('/is-logged-in');
router.get('/is-logged-in', (req, res, next) => {  
  res.json(req.user)
})


router.post('/login', passport.authenticate('local'), (req, res, next) => {
  const { user } = req;
  res.status(200).json(user);
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.status(200).json({ msg: 'Logged out' });
});

router.get('/profile', isAuth, (req, res, next) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }));
});

function isAuth(req, res, next) {
  req.isAuthenticated() ? next() : res.status(401).json({ msg: 'Log in first' });
}

// router.get('/igprofiles') ((req, res, next) => {
//   InstaProfile.find(req.full_name)
//     .then((full_name) => res.status(200).json({ full_name }))
// });

module.exports = router;
