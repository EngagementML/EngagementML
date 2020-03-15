require('dotenv').config();

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
const session = require('express-session');
const passport = require('./config/passport');
const waitForData = require('./routes/InstaRoute')
const InstaProfile = require('./models/InstaProfile')
const InstaPost = require("./models/InstaPosts");
const FollowList = require('./models/FollowList')


const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/ironplate'
console.log('Connecting DB to ', MONGODB_URI)

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch((err) => console.error('Error connecting to mongo', err));

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

// app.use(
//   cors({
//     credentials: true,
//     origin: ["http://localhost:3000", "https://distracted-leavitt-b3a623.netlify.com"] //Swap this with the client url 
//   })
// );


app.use(cors({
  origin: function (origin, callback) {
    return callback(null, true);
  },
  optionsSuccessStatus: 200,
  credentials: true
}));

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "secret",
    cookie: { maxAge: 1000 * 60 * 60 }
  })
);

app.use(passport.initialize());
app.use(passport.session());

//app.use(express.static(path.join(__dirname, 'public')));

app.use(express.static(path.join(__dirname, '../frontend/build')))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(logger('dev'));

const index = require('./routes/index');
const auth = require('./routes/auth');
app.use('/', index);
app.use('/', auth);

// Uncomment this line for production
let client = path.join(__dirname + '../public/index.html')
console.log('client', client)
//app.get('*', (req, res) => res.sendFile(client));
// For any other routes, redirect to the index.html file of React
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
// })


// waitForData() is the function that scrappes and pulls the Top 50 Influencer IG List into the DB
// ** dropped the sraper function inside an interval of sligtly less than 24 hrs ** GRP
setInterval(
  function(){
    waitForData();
  }, 84000000 )



//Route to return all available profiles 
app.route("/profiles").get((req, res, next) => {
  InstaProfile.find(
    {},
    { full_name: 1, username: 1, _id: 0 },
    (err, instaprofiles) => {
      if (err) {
        console.log(err);
      } else {
        res.json(instaprofiles);
      }
    }
  );
});

//Route to return all available profiles 
app.route("/profile/:username").get((req, res) => {
  let username = req.params.username;
  InstaProfile.findOne({username : username}, { full_name:1, biography :1, username: 1, _id:0 }, (err, instaprofiles) => {
    if (err) {
      console.log(err);
    } else {
    res.json(instaprofiles);
    }
  });
});

//Route to return all available profiles 
app.route("/posts").get((req, res, next) => {
  InstaPost.find((err, instapost) => {
    if (err) {
      console.log(err);
    } else {
      res.json(instapost);
    }
  });
});

//Route to add a new username to follow (add to FollowList array)
app.route("/addToFollow").post((req, res, next) => {
  let newToTrack = new FollowList(req.body);
  newToTrack.save()
    .then(newToTrack => {
      res
        .status(200)
        .json({
          newToTrack: "Added username to FollowList successfully!"
        });
    })
    .catch(err => {
      res.status(400).send("Adding to FollowList failed!!");
    });
});


  // console.log("Hi")

module.exports = app;
