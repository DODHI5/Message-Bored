const bookshelf = require("./bookshelf");

class Message extends bookshelf.Model {
  get tableName() {
    return "messages";
  }
  get hasTimestamps() {
    return true;
  }
  users() {
    return this.belongsTo(User, { foreignKey: "author_id" });
  }
  topics() {
    return this.belongsTo(Topic, { foreignKey: "topic_id" });
  }
}

module.exports = Message;
