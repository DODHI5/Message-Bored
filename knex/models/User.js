const bookshelf = require("./bookshelf");

class User extends bookshelf.Model {
  get tableName() {
    return "users";
  }
  get hasTimestamps() {
    return true;
  }
  topics() {
    return this.hasMany(Topics, { foreignKey: "created_by" });
  }
  messages() {
    return this.hasMany(Messages, { foreignKey: "author_id" });
  }
}

module.exports = User;
