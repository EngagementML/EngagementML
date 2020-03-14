let ig = require("instagram-scraping");

travelInstagramScraper = async () => {
  let influencers = [
    
  ];

  let posts = [];
  let user = {};
  let data = {};
  let promises = [];
  let dataArr = influencers.map(username => {
    console.log(username);
    return ig
      .scrapeUserPage(username)
      .then(result => {
        return result;
      })
      .catch(err => console.error(err));
  });
  return Promise.all(dataArr).then(res => {
    return res;
  });
};

module.exports = travelInstagramScraper;
