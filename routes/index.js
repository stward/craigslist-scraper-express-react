var express = require('express');
var router = express.Router();
var Xray = require('x-ray');
var x = Xray();

const Router = new express.Router();

Router.use((req, res, next) => next());

Router.route('/').get(function(req, res) {
  x('https://www.craigslist.org/about/sites', '.colmask', [{
    state: ['.box h4'],
    city: ['.box ul']
  }])(function(err, scraped) {
    if(err) {
      console.log(err, "Error scraping");
    } else {
      res.json(scraped);
    }
  })
})

module.exports = Router;
