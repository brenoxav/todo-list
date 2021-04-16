class Project {
  constructor(name, todos = []){
    this.name = name;
    this.todos = todos;
  }

  addTodo(todo) {
    this.todos.push(todo);
  }

  deleteTodo(todoIndex) {
    this.todos.splice(todoIndex, 1);
  }

  editTodo(todoIndex) {
    this.todos[todoIndex] = todoObj;
  }
  
  renameProject(name) {
    this.name = name;
  }
}


export default Project;