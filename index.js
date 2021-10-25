const cors = require('cors');
const express = require('express');

const {API_PORT} = require("./config/config");
const connectMongo = require("./mongo");
const redisSession = require("./redis");
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");

const app = express();
connectMongo();
app.enable('trust proxy');
app.use(cors({}));
app.use(express.json())
app.use(redisSession);
const port = API_PORT;

app.get('/api', (req, res) => {
  res.send('I\'m alive');
  console.log('docker rocks !!');
});

app.use('/api/posts', postRouter);
app.use('/api/users', userRouter);

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
