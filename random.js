var ig = require("instagram-scraping");
ig.scrapeUserPage('rctv').then(result => {
    console.dir(result);
    console.log('These are the followers',result.user.edge_followed_by.count)
});

// {
//     post1:[{caption:"",likes:"",comments:'',date:""}]
// }