const mongoose = require('mongoose');

const {MONGO_USER, MONGO_PWD, MONGO_IP, MONGO_PORT} = require("./config/config");

const connectMongo = async () => {
  const mongoUrl = `mongodb://${MONGO_USER}:${MONGO_PWD}@${MONGO_IP}:${MONGO_PORT}`;
  try {
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Successfully connected to DB');
  } catch (e) {
    console.error('There was an error while trying to connect to DB:', e);
    setTimeout(connectMongo, 5000);
  }
}

module.exports = connectMongo;
