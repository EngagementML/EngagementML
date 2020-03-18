let ig = require("instagram-scraping");

instagramScraper = async () => {
  let influencers = [

    // "iampecu",
    //Photography Category
    // "benleowy",
    // "muradosmann",
    // "yamashitaphoto",
    // "stacykranitz", 
    // "jimmy_chin", 
    // "pinkhassov",
    // "dustingia",
    // "lindseychilds",
    // "edithwyoung",
    // "alyssarosev",
    // "donjay",
    // "thejeffrose",
    // "pketron",
    // "paulnicklen",
    // "jackharries",
    // "ilhan1077",

    //Fashion & Style Category
    // "alexachung",
    // "juliahengel",
    // "oscarcobo8",
    // "chiaraferragni",
    // "imjennim",
    // "ada_oguntodu",
    // "emmahill",
    // "gregoryvelvet",
    // "nicolettemason",
    // "majawyh",
    // "garancedore",
    // "inesdelafressangeofficial",
    // "madelynnfurlong",
    // "bat_gio",
    // "marianodivaio",
    // "aimeesong",
    // "weworewhat",
    // "gabifresh",

    //Travel Category
    // "bucketlistjourney",
    // "expertvagabond",
    // "thepointsguy",
    // "theblondeabroad",
    // "travelbabbo",
    // "adventurouskate",
    // "theplanetd",
    // "wheresandrew",
    // "doyoutravel",
    // "gypsea_lust",
    // "thebucketlistfamily",
    // "fatgirlstraveling",
    // "muradosmann",
    // "taramilktea"

    //Food Category
    // "jamieoliver",
    // "ladyironchef",
    // "detoxinista",
    // "ashrod",
    // "davidchang",
    // "idafrosk",
    // "dollyandoatmeal",
    // "dad_beets",
    // "mollytavoletti",
    // "thedomesticman",
    // "dennistheprescott",
    // "artfuldesperado",
    // "thaliaho",
    // "mollyyeh",
    // "xlbcr",
    // "elavegan",
    // "nobread",
    // "minimalistbaker",
    // "yumnajawad",

    //TOP-50
    // "rctv",
    // "cristiano",
    // "kyliejenner",
    // "selenagomez",
    // "leomessi",
    // "marko",
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
