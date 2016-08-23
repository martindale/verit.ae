var config = require('./config');

var Maki = require('maki');
var veritae = new Maki(config);

veritae.define('Service', {
  icon: 'sitemap',
  description: 'Products that Veritas Group offers.',
  attributes: {
    name: { type: String },
    description: { type: String },
    image: { type: String }
  }
});

veritae.start();
