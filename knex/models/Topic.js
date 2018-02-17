const bookshelf = require("./bookshelf");

class Topic extends bookshelf.Model {
  get tableName() {
    return "topics";
  }
  get hasTimestamps() {
    return true;
  }
  users() {
    return this.belongsTo(User);
  }
}

module.exports = Topic;
