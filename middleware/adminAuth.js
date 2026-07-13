const ADMIN_USERNAME = "BBW";
const ADMIN_PASSWORD = "2552";

const adminAuth = (req, res, next) => {
  const { username, password } = req.headers;

  if (!username || !password) {
    return res.status(401).json({
      success: false,
      message: "Admin credentials are required",
    });
  }

  if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
    return res.status(403).json({
      success: false,
      message: "Invalid admin credentials",
    });
  }

  next();
};

module.exports = adminAuth;