// const jwt = require('jsonwebtoken');
// const User = require('../models/User');
// const ErrorResponse = require('../utils/errorResponse');

// exports.protect = async (req, res, next) => {
//     let token;

//     if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
//         // Bearer fsjiaojfksdjfcoiiaija7874(token)
//         token = req.headers.authorization.split(" ")[1]
//     }

//     if (!token) {
//         return next(new ErrorResponse("Not authorized to access this route", 401));
//     }

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         const user = await User.findById(decoded.id);

//         if (!user)
//             return next(new ErrorResponse("No user found with this id", 404));

//         req.user = user;
//         next();
//     } catch (error) {
//         return next(new ErrorResponse("Not authorized to access this route", 401));
//     }
// };
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user; // Ensure this line sets req.user correctly
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

