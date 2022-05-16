const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authToken = req.headers.token;
  if (authToken) {
    const token = authToken.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      err && res.status(403).json("Token invalid or expired");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("Unauthorized");
  }
};

// check wether is admin or user
const verifyTokenAndAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json("You're not allowed to do that!");
    }
  });
};

// check is admin
const verifyAdminAuth = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return res.status(403).json("Only admin can do that!");
    }
  });
};

module.exports = { verifyToken, verifyTokenAndAuth, verifyAdminAuth };
