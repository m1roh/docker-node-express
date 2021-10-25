const session = require('express-session');
const redis = require('redis');
const { REDIS_URL, REDIS_PORT, REDIS_SECRET } = require("./config/config");

let Store = require('connect-redis')(session);

let client = redis.createClient({
  host: REDIS_URL,
  port: REDIS_PORT
});

const redisSession = session({
  store: new Store({ client }),
  secret: REDIS_SECRET,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 60000
  }
});

module.exports = redisSession;
