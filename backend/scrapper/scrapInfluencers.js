let ig = require("instagram-scraping");

instagramScraper = async () => {
  let influencers = [
    "rctv",
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
    // "khloekardashian",
    // "ddlovato",
    // "tomholland2013",
    // "robertdowneyjr",
    // "iamcardib",
    // "virat.kohli",
    // "lelepons",
    // "kourtneykardash",
    // "jlo",
    // "narendramodi",
    // "justinbieber",
    // "chrishemsworth",
    // "fcbarcelona",
    // "realmadrid",
    // "lalalalisa_m",
    // "jamesrodriguez10",
    // "champagnepapi",
    // "davidbeckham",
    // "jennierubyjane",
    // "mileycyrus",
    // "roses_are_rosie",
    // "priyankachopra",
    // "emmawatson",
    // "nasa",
    // "blakelively",
    // "k.mbappe",
    // "gigihadid",
    // "karolg",
    // "aliaabhatt",
    // "bts.bighitofficial",
    // "madelame",
    // "shakira",
    // "mahi7781"
  ];

  let posts = [];
  let user = {};
  let data = {};
  let promises = [];
  let dataArr = influencers.map(username => {
    console.log(username)
    return ig.scrapeUserPage(username).then(result => {
      return result
    }).catch(err => console.error(err))
  });
  return Promise.all(dataArr).then(res => { 
    return res
  });
};

module.exports = instagramScraper;
