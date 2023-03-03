const fs = require('fs');
const Todo = require('./todo_model');

// const todo = new Todo(1, 1, 'delectus aut autem', false);
// console.log('=> ~ todo:', todo);

const todoJson = JSON.parse(fs.readFileSync('./todo.json', 'utf8'));

let todos = [];
todoJson.forEach((e) => {
  const todo = Todo.fromJson(e);
  todos.push(todo);
});
console.log('=> ~ todos:', todos.length);
