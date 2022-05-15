const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authToken = req.headers.token;
  if (authToken) {
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      err && res.status(403).json("Token invalid or expired");
      req.user = user;
      next();
    });
  } else {
    res.status(401).json("Unauthorized");
  }
};

// check wether is admin or user
const verifyTokenAndAuth = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You're not allowed to do that!");
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAuth };
