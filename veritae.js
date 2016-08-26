var config = require('./config');

var Maki = require('maki');
var veritae = new Maki(config);

var Auth = require('maki-passport-local');
var auth = new Auth({
  resource: 'Person'
});

veritae.use(auth);

var CMS = require('maki-cms-local');
var snippets = new CMS({
  base: '/snippets',
  path: '/snippets',
  view: process.env.PWD + '/views/page'
});

veritae.use(snippets);

veritae.define('Value', {
  public: false,
  icon: 'university',
  description: 'Our social contract, as an organization, is to uphold these values.',
  attributes: {
    name: { type: String , slug: true },
    description: { type: String }
  }
})

veritae.define('Service', {
  public: false,
  icon: 'sitemap',
  description: 'Products that Veritas Group offers.',
  masthead: '/images/wonderous.jpg',
  attributes: {
    name: { type: String },
    description: { type: String },
    image: { type: String }
  }
});

veritae.define('Inquiry', {
  public: false,
  icon: 'mail',
  description: 'A request for contact with the Veritas Group.',
  attributes: {
    name: { type: String },
    description: { type: String },
    image: { type: String }
  },
  handlers: {
    html: {
      create: function redirectToRoot (req, res, next) {
        req.flash('success', 'Inquiry submitted!  We\'ll be in touch soon.');
        res.redirect(302, '/');
      }
    }
  }
});

veritae.define('Subscription', {
  public: false,
  icon: 'rss',
  description: 'A request for contact with the Veritas Group.',
  attributes: {
    email: { type: String },
    created: { type: Date , default: Date.now }
  },
  handlers: {
    html: {
      create: function redirectToRoot (req, res, next) {
        req.flash('success', 'Successfully subscribed!  We\'ll be in touch soon.');
        res.redirect(302, '/');
      }
    }
  }
});

veritae.define('Person', {
  public: false,
  icon: 'user',
  description: 'A person identified by the Veritas Group.',
  attributes: {
    name: { type: String },
    description: { type: String },
    image: { type: String }
  }
});

veritae.start();
