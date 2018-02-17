const express = require("express");
const router = express.Router();
const app = express();
const PORT = process.env.PORT || 8080;
const bodyParser = require("body-parser");
const topicRoutes = require("./routes/topic");
const userRoutes = require("./routes/user");
const messageRoutes = require("./routes/message");
const methodOverride = require("method-override");

// const passport = require("passport");
// const LocalStrategy = require("passport-local");
// const session = require("express-session");

// const Redis = require("connect-redis")(session);
// const salt = 12;
// const bcrypt = require("bcrypt");

const path = require("path");
// const userRoutes = require("./routes/users");
// const { isAuthenticated: auth } = require("./routes/helper");
// const User = require("./knex/models/User");

app.use(express.static("public"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use(methodOverride("_method"));

app.use("/api/users", userRoutes);
app.use("/api/topics", topicRoutes);
app.use("/api/messages", messageRoutes);

app.get("/*", (req, res) => {
  var options = {
    root: __dirname + "/public"
  };
  res.sendFile("index.html", options);
});
app.listen(PORT, err => {
  if (err) {
    console.log(err.message);
  }
  console.log(`Server's up on port: ${PORT}`);
});
