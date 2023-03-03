class Todo {
  constructor(userId, id, title, completed) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.completed = completed;
  }

  static fromJson(json) {
    return new Todo(json.userId, json.id, json.title, json.completed);
  }
}

module.exports = Todo;
