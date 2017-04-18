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
    detailId: 'data-id'
  }])(function(err, scraped) {
    if(err) {
      console.log(err, "Error scraping");
    } else {
      res.json(scraped);
    }
  })
})

Router.route('/details')
.get(function(req, res) {
  console.log("q: " + req.query.link);
  x((req.query.link), '.body', [{
    titles: x('h2 ', [{
      title: ['.postingtitletext']
    }]),
    images: x('figure .gallery', [{
      image: ['.swipe-wrap img@src']
    }])
  }])(function(err, scraped) {
    if(err) {
      console.log(err, "Error scraping");
    } else {
      // console.log(scraped);
      res.json(scraped);
    }
  })
})


module.exports = Router;
