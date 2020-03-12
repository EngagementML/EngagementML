let ig = require("instagram-scraping");

instagramScraper = async () => {
  let influencers = [
    "rctv",
    "cristiano",
    "kyliejenner",
    "selenagomez",
    // "leomessi",
    // "billieeilish",
    // "kendalljenner",
    // "arianagrande",
    // "neymarjr",
    // "zendaya",
    // "kimkardashian",
    // "instagram",
    // "nickiminaj",
    // "badgalriri",
    // "taylorswift",
    // "jenniferaniston",
    // "therock",
    // "kingjames",
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

  // let data2 = await influencers.map(username => {
  //   // console.log(username)
  //   let posts = [];
  //   let user = {};
  //   let data = {};

  //   ig.scrapeUserPage(username).then(result => {
  //     console.log(result.user);
  //     posts.push(result.medias);
  //     // user.push(result.user)
  //     user = result.user;
  //     data = {
  //       user,
  //       posts
  //     };

  //   });

  //   return data

  // });

  // let posts = []

  // await ig.scrapeUserPage("rctv").then(result => {
  //   console.log("scraper: ",result.user.full_name);
  //   posts.push(result.medias);
  //   // user.push(result.user)
  //   user = result.user;
  //   data = {
  //     user,
  //     posts
  //   };
  // });

  // let dataArr = []
  let posts = [];
  let user = {};
  let data = {};
  let promises = [];
  let dataArr = influencers.map(username => {
    // console.log(username)
    return ig.scrapeUserPage(username).then(result => {
      posts.push(result.medias);
      // user.push(result.user)
      user = result.user;
      data = {
        user,
        posts
      };
      // dataArr.push(data)
      return data
    });


    // return result; // is the map return
  });
  return Promise.all(dataArr).then(res => { 
    return res
  });
  //return dataArr; // is the function return
};

module.exports = instagramScraper;
