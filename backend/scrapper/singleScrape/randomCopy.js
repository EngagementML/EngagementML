let ig = require("instagram-scraping");

singleScraper = async () => {

  // let currentDate= new Date()
  
  // Users.findOne(
  //   // 2020-03-10T13:03:27.660+00:00 mongo
  //   // 
  //   {createdAt: currentDate.toUTCString().slice(17,22)}, 
  //   {...profile.user}, 
  //   {upsert:true}
  //   )
  //   .then(res => console.log(res))

  let influencers =  [
    // Get the username from mongo here or from the state of the dashboard
    // igName
    "collidervideo"
  ];

  let posts = [];
  let user = {};
  let data = {};
  let promises = [];

  // ig.scraperUserPage(username).then(result => {
  //     return result
  //   }).catch(err => console.error(err))


  let dataArr = influencers.map(username => {
    console.log(username)
    return ig.scrapeUserPage(username).then(result => {
      console.log(result)
      return result
    }).catch(err => console.error(err))
  });
  return Promise.all(dataArr).then(res => { 
    return res
  });
  
};

singleScraper()

// module.exports = singleScraper;
