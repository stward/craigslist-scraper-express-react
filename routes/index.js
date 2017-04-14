var express = require('express');
var router = express.Router();
var Xray = require('x-ray');
var x = Xray();

var Router = new express.Router();

Router.use(function (req, res, next) {
  return next();
});

/* GET home page. */
Router.route('/').get(function(req, res) {
  x('https://www.craigslist.org/about/sites', '.box', [{
    state: 'h4',
    cities: x('ul', [{
      city: 'li'
    }])
  }])(function(err, scraped) {
    if(err) {
      console.log(err, "Error scraping");
    } else {
      console.log(x);
      res.json(scraped);
    }
  })
})

module.exports = router;
