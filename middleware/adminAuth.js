const adminAuth = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username || !password) {
    return res.status(401).json({
      success: false,
      message: "Admin credentials are required",
    });
  }

  if (
    username !== process.env.ADMIN_USERNAME ||
    password !== process.env.ADMIN_PASSWORD
  ) {
    return res.status(403).json({
      success: false,
      message: "Invalid admin credentials",
    });
  }

  next();
};

module.exports = adminAuth;