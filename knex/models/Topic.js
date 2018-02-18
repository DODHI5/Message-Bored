const bookshelf = require("./bookshelf");

class Topic extends bookshelf.Model {
  get tableName() {
    return "topics";
  }
  get hasTimestamps() {
    return true;
  }
  users() {
    return this.belongsTo(User, { foreignKey: "create_by" });
  }
  messages() {
    return this.hasMany(messages, { foreignKey: "topic_id" });
  }
}

module.exports = Topic;
