var express = require('express');
var router = express.Router();
var Xray = require('x-ray');
var x = Xray();

const Router = new express.Router();

Router.use((req, res, next) => next());

Router.route('/')
.get(function(req, res) {
  x('https://www.craigslist.org/about/sites', '.colmask', [{
    state: ['.box h4'],
    city: ['.box ul'],
    cities: x('.box ul', [{
      name: ['li']
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
  x('https://bozeman.craigslist.org/search/zip', '.rows', [{
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

Router.route('/details/:detailId')
.get(function(req, res) {
  console.log(req.params.detailId);
  x(('https://bozeman.craigslist.org/zip/'+req.params.detailId+'.html'), '.body', [{
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
