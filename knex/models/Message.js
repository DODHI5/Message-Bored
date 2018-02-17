const bookshelf = require("./bookshelf");

class Message extends bookshelf.Model {
  get tableName() {
    return "messages";
  }
  get hasTimestamps() {
    return true;
  }
  users() {
    return this.belongsTo(User);
  }
  topics() {
    return this.belongsTo(Topic);
  }
}

module.exports = Message;
