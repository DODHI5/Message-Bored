const express = require("express");
const Message = require("../knex/models/Message");
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
    return new Message(data)
      .save()
      .then(messages => {
        messages = messages.toJSON();
        res.json(messages);
      })
      .catch(err => {
        res.json({
          message: err.message
        });
      });
  })
  .get((req, res) => {
    return new Message()
      .fetchAll()
      .then(messages => {
        messages = messages.toJSON();
        res.json(messages);
      })
      .catch(err => {
        res.json({
          message: err.message
        });
      });
  });
module.exports = router;
