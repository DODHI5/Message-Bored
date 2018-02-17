const express = require("express");
const User = require("../knex/models/user");
const router = express.Router();

//Time
router.use((req, res, next) => {
  console.log(`What time is it? ${Date.now()} yea that time`);
  next();
});

router
  .route("/")
  .post((req, res) => {
    let data = ({ name, created_by } = req.body);
    console.log(data);
    // data.user_id = req.user.id;
    // console.log("user_id", user_id);
    return new User(data)
      .save()
      .then(users => {
        users = users.toJSON();
        res.json(users);
      })
      .catch(err => {
        res.json({
          message: err.message
        });
      });
  })
  .get((req, res) => {
    return new User()
      .fetchAll()
      .then(users => {
        users = users.toJSON();
        res.json(users);
      })
      .catch(err => {
        res.json({
          message: err.message
        });
      });
  });
module.exports = router;
