module.exports = {
  API_PORT: process.env.PORT || 3000,
  MONGO_IP: process.env.MONGO_IP || 'mongo',
  MONGO_PORT: process.env.MONGO_PORT || 27017,
  MONGO_PWD: process.env.MONGO_PWD || 'S7rongP4ssw0rd',
  MONGO_USER: process.env.MONGO_USER || 'm1roh',
  REDIS_URL: process.env.REDIS_URL || 'redis',
  REDIS_PORT: process.env.REDIS_PORT || 6379,
  REDIS_SECRET: process.env.REDIS_SECRET || 'secret'
};
