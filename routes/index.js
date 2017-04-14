var express = require('express');
var router = express.Router();
var Xray = require('x-ray');
var x = Xray();

var Router = new express.Router();

Router.use(function (req, res, next) {
  return next();
});

/* GET home page. */
Router.route('/')
.get(function(req, res) {
  x('https://www.craigslist.org/about/sites', '.box', [{
    state: 'h4',
    cities: x('ul', [{
      city: 'li'
    }])
  }])(function(err, scraped) {
    if(err) {
      console.log(err, "Error scraping");
    } else {
      res.json(scraped);
    }
  })
})

// Router.route('/results')
//  .get(function(req, res) {
//    x('http://stackoverflow.com/questions', '#questions .question-summary .summary', [{
//     title   : 'h3',
//     link    : 'h3 a@href',
//     details : x('h3 a@href', {
//                   title    : 'h1',
//                   question : '.question .post-text',
//     })
//   }])
//   (function(err, obj) {
//     console.log(err);
//     console.log(obj);
//   })
//  })

module.exports = Router;
