import Todo from './todo';

class Project {
  constructor(name, todos = []) {
    this.name = name;
    this.todos = todos;
  }

  addTodo(todo) {
    this.todos.push(new Todo(todo));
  }

  deleteTodo(todoIndex) {
    this.todos.splice(todoIndex, 1);
  }

  renameProject(name) {
    this.name = name;
  }
}

export default Project;