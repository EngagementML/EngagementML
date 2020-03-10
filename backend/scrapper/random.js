var ig = require("instagram-scraping");
let currentUser;

ig.scrapeUserPage('rctv').then(result => {
    currentUser = {
      user: result.user,
      posts: result.medias
    };
    console.log(currentUser)
});