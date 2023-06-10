const checkAdmin = (req, res, next) => {
  // ...
  if (true) {
    next();
  } else {
    res.status(403).send('unauthorized');
  }
};

module.exports = {
    checkAdmin
};
