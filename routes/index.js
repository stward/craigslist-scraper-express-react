var express = require('express');
var router = express.Router();
var Xray = require('x-ray');
var x = Xray();
const util = require('util')
const Router = new express.Router();

Router.use((req, res, next) => next());

Router.route('/')
.get(function(req, res) {
  x('https://www.craigslist.org/about/sites', '.colmask', [{
    state: ['.box h4'],
    city: ['.box ul'],
    cities: x('.box ul', [{
      name: ['li'],
      link: ['a@href']
    }])
  }])(function(err, scraped) {
    if(err) {
      console.log(err, "Error scraping");
    } else {
      res.json(scraped);
    }
  })
})

Router.route('/results')
.get(function(req, res) {
  console.log("q: " + req.query.link);
  x(req.query.link + 'search/zip', '.rows', [{
    offer: ['ul li'],
    links: x('li .result-info', [{
      link: ['.result-title@href']
    }]),
  }])(function(err, scraped) {
    if(err) {
      console.log(err, "Error scraping");
    } else {
      res.json(scraped);
    }
  })
})

Router.route('/details/:detailId')
.get(function(req, res) {
  x('https://bozeman.craigslist.org/search/zip/'+req.params.detailId, '.rows', [{
    title: ['body h2'],
  }])(function(err, scraped) {
    if(err) {
      console.log(err, "Error scraping");
    } else {
      res.json(scraped);
    }
  })
})


module.exports = Router;
