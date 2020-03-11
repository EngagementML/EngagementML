const InstaProfile  = require('../models/InstaProfile');
const InstaPosts    = require('../models/InstaPosts');
const express = require('express');
const router = express.Router();
const InstaScraper = require("../scrapper/scrapInfluencers")

console.log(InstaScraper())

// findbyid