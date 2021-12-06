const jwt = require('jsonwebtoken');
const User = require('../models/User');

const auth = async (req, res, next) => {
  try {
    const token = req.header('Authorization').split(' ')[1];
    const decoded = jwt.verify(token, 'Unijuazeiro');
    const user = await User.findOne({ _id: decoded._id, 'tokens.token': token });

    if (!user) {
      throw new Error('user not found with passed token')
    }

    req.token = token
    req.user = user

    next();
  } catch (error) {
    res.status(401).send({ error: 'Please authenticate' });
  }

}

module.exports = auth;