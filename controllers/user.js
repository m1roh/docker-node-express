const bcrypt = require('bcryptjs');
const User = require("../models/user");

exports.signUp = async (req, res) => {
  const { username, password } = req.body;
  const hashPassword = await bcrypt.hash(password, 12);
  try {
    const newUser = await User.create({
      username,
      password: hashPassword
    });

    req.session.user = newUser;
    return res.status(201).json({
      status: 'success',
      data: { newUser }
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      status: 'fail',
      message: e
    });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({
        status: 'Error',
        message: 'No user found'
      });
    }

    const isCorrect = await bcrypt.compare(password, user.password)

    if (!isCorrect) {
      return res.status(401).json({
        status: 'Error',
        message: 'Invalid username or password'
      });
    }

    req.session.user = user;
    return res.status(200).json({
      status: 'Success',
      message: 'Successfully logged in'
    });
  } catch (e) {
    console.log(e);
    return res.status(400).json({
      status: 'Fail',
      message: e
    });
  }
};
