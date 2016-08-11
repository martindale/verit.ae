/* This file is a config, that exposes various
   meaningful values to the rest of the application.
   This is done using the module.exports function,
   which sets them when require('./thisfile') is run. */

var NAMESPACE = process.env.MAKI_SERVICE_NAMESPACE || 'veritae';
var DATABASE  = process.env.MAKI_DATABASE_NAME || NAMESPACE;

module.exports = {
  service: {
    name: process.env.MAKI_SERVICE_NAME || 'Veritae' ,
    authority: process.env.MAKI_SERVICE_AUTHORITY || 'localhost:9200' ,
    namespace: NAMESPACE ,
    mission: process.env.MAKI_SERVICE_MISSION || 'your trusted partner in the Bitcoin ecosystem.',
    description: process.env.MAKI_SERVICE_DESCRIPTION || 'Maki allows you to focus on your project, rather than laboring over architecture decisions.  With true isomorphism, you control how your application behaves, and can then customize how your features are exposed on specific platforms.',
    source: 'https://github.com/martindale/verit.ae',
    icon: 'lab',
    logo: '/img/maki-icon.png'
  },
  dns: {
    name: process.env.MAKI_DNS_NAME || 'localhost'
  },
  services: {
    http: {
      port: process.env.MAKI_HTTP_PORT || 2999 ,
      host: process.env.MAKI_HTTP_HOST || 'localhost'
    },
    spdy: {
      host: process.env.MAKI_HTTP_HOST || 'localhost',
      port: process.env.MAKI_SPDY_PORT || 9643
    }
  },
  database: {
    name: DATABASE ,
    masters: (process.env.MAKI_DATABASE_MASTERS)
      ? JSON.parse(process.env.MAKI_DATABASE_MASTERS)
      : [ 'localhost' ]
  },
  sessions: {
    enabled: process.env.MAKI_SESSIONS_ENABLE || true ,
    secret:  process.env.MAKI_SESSIONS_SECRET || 'this can be any random string, you can even use this one. :)'
  },
  redis: {
    host: process.env.MAKI_REDIS_HOST || 'localhost',
    port: process.env.MAKI_REDIS_PORT || 6379
  },
  sockets: {
    timeout: process.env.MAKI_SOCKETS_TIMEOUT || 30000
  },
  views: {
    plugins: {
      'moment': require('moment')
    },
    client: {
      render: process.env.MAKI_VIEWS_CLIENT_RENDER || false
    }
  }
};
