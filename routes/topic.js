const express = require("express");
const Topic = require("../knex/models/Topic");
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
    return new Topic(data)
      .save()
      .then(topics => {
        topics = topics.toJSON();
        res.json(topics);
      })
      .catch(err => {
        res.json({
          message: err.message
        });
      });
  })
  .get((req, res) => {
    return Topic.fetchAll()
      .then(topics => {
        topics = topics.toJSON();
        res.json(topics);
      })
      .catch(err => {
        res.json({
          message: err.message
        });
      });
  });
module.exports = router;
