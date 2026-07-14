const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log("mongoose is working");
}).catch((err) => {
    console.log("the error is:", err);
});

module.exports = mongoose;