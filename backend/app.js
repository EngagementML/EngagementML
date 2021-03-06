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
const nodemailer = require("nodemailer");
const secure = require("ssl-express-www");
// const creds = require("./config");
// const router = express.Router();


// require("./nodepy");




const MONGODB_URI =
  process.env.MONGODB_URI ||
  "mongodb+srv://chaba:ironhack01@cluster0-0i68o.azure.mongodb.net/test";
console.log('Connecting DB to ', MONGODB_URI)

const USER = process.env.USER
const PASS = process.env.PASS

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((x) => console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`))
  .catch((err) => console.error('Error connecting to mongo', err));

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

const allowCrossDomain = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(allowCrossDomain);

// app.use(
//   cors({
//     credentials: true,
//     origin: [
//       "https://engagementml.herokuapp.com",
//       "https://engagementml.co",
//       "http://localhost:3000",
//     ], //Swap this with the client url
//   })
// );

app.use(secure);

app.use(
  cors({
    // origin: function (origin, callback) {
    //   return callback(null, true);
    // },
    //Fix for the cors origin errors
    origin: [
      "https://engagementml.herokuapp.com",
      "https://engagementml.co",
      "http://localhost:3000",
    ],
    optionsSuccessStatus: 200,
    credentials: true,
  })
);

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

//SSL cert validation
app.get("/.well-known/acme-challenge/:content", function(req, res) {
  res.send(
    "5aRV_2Fmi0beVs_hmRLBrkgYbftoRs_dqX8RivvQq1k.ULS4eissHcF38ymxQgMjmhQ18a754aCKgzLdWx0olQs"
  );
});

//Route to return all available profiles 
app.route("/profiles").get((req, res, next) => {
  InstaProfile.find(
    {},
    {
      full_name: 1,
      username: 1,
      biography: 1,
      profile_pic_url_hd: 1,
      "edge_followed_by.count": 1,
      "edge_follow.count": 1,
      owner_id: 1,
      "edge_owner_to_timeline_media.count": 1,
      emlcategory : 1,
      _id: 0
    },
    { "edge_followed_by.count": -1 },
    (err, instaprofiles) => {
      if (err) {
        console.log(err);
      } else {
        res.json(instaprofiles);
      }
    }
  ).sort({ "edge_followed_by.count": -1 });
});

//Route to username profile 
app.route("/profile/:username").get((req, res) => {
  let username = req.params.username;
  InstaProfile.findOne(
    { username: username },
    {
      full_name: 1,
      biography: 1,
      username: 1,
      profile_pic_url_hd: 1,
      "edge_follow.count": 1,
      "edge_followed_by.count": 1,
      "edge_owner_to_timeline_media.count": 1,
      id: 1,
      _id: 0
    },
    (err, instaprofiles) => {
      if (err) {
        console.log(err);
      } else {
        res.json(instaprofiles);
      }
    }
  );
});

//Route to username posts 
app.route("/posts/:id").get((req, res) => {
  let owner_id = req.params.id;
  InstaPost.find(
    { owner_id : owner_id },
    {
      _id: 1,
      owner_id: 1,
      comment_count: 1,
      date: 1,
      like_count: 1,
      is_video: 1,
      thumbnail: 1,
      text: 1,
    },
    {date : -1},
    (err, instaposts) => {
      if (err) {
        console.log(err);
      } else {
        res.json(instaposts);
      }
    }
  ).sort({date : -1})
});

//Route to return all available profiles 
app.route("/posts").get((req, res, next) => {
  InstaPost.find(
    {},
    {
      date: 1,
      text: 1,
      owner_id: 1,
      like_count: 1,
      comment_count: 1,
      is_video: 1
    },
    (err, instapost) => {
      if (err) {
        console.log(err);
      } else {
        res.json(instapost);
      }
    }
  ).sort({ date: -1 });
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

//Route for the homepage POST to nodemailer email server
const transport = {
  // host: "smtp.gmail.com", // Don’t forget to replace with the SMTP host of your provider
  service: 'Gmail',
  port: 587,
  secure: false,
  auth: {
    user: USER,
    pass: PASS
  }
};

const transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Server is ready to take messages");
  }
});

app.post("/send", (req, res, next) => {
  let name = req.body.name;
  let email = req.body.email;
  let message = req.body.message;
  let content = `name: ${name} \n email: ${email} \n message: ${message} `;

  let mail = {
    from: name,
    to: "engagementml@gmail.com", // Change to email address that you want to receive messages on
    subject: "New Message from eML Contact Form",
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: "fail"
      });
    } else {
      res.json({
        msg: "success"
      });
    }
  });
});



// Missing schema below for ml (Collection1)

// app.route("/collection1").get((req, res, next) => {
//   InstaPost.find({}, {date: 1, text: 1, owner_id: 1, like_count:1, comment_count:1, is_video: 1}, (err, instapost) => {
//     if (err) {
//       console.log(err);
//     } else {
//       res.json(instapost);
//     }
//   });
// });



module.exports = app;
