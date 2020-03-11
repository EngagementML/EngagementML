let ig = require("instagram-scraping");

function instagramScraper ()
{

let data;
let influencers = [
  "cristiano",
  "kyliejenner",
  "selenagomez",
  "leomessi",
  "billieeilish",
  "kendalljenner",
  "arianagrande",
  "neymarjr",
  "zendaya",
  "kimkardashian",
  "instagram",
  "nickiminaj",
  "badgalriri",
  "taylorswift",
  "jenniferaniston",
  "therock",
  "kingjames",
  "khloekardashian",
  "ddlovato",
  "tomholland2013",
  "robertdowneyjr",
  "iamcardib",
  "virat.kohli",
  "lelepons",
  "kourtneykardash",
  "jlo",
  "narendramodi",
  "justinbieber",
  "chrishemsworth",
  "fcbarcelona",
  "realmadrid",
  "lalalalisa_m",
  "jamesrodriguez10",
  "champagnepapi",
  "davidbeckham",
  "jennierubyjane",
  "mileycyrus",
  "roses_are_rosie",
  "priyankachopra",
  "emmawatson",
  "nasa",
  "blakelively",
  "k.mbappe",
  "gigihadid",
  "karolg",
  "aliaabhatt",
  "bts.bighitofficial",
  "madelame",
  "shakira",
  "mahi7781"
];

influencers.forEach(username => {
  // console.log(username)
  let posts = [];
  let user;
  let data;
  ig.scrapeUserPage(username).then(result => {
    posts.push(result.medias);
    // user.push(result.user)
    user = result.user;
    data = {
      user,
      posts
    };
    console.log("Name : " +
      data.user.full_name +
        " - Follower Count =  " +
        Number(data.user.edge_followed_by.count) +
        " >> " +
        data.posts[0].length + " post captured"
    );
  });
});

}

module.exports=instagramScraper