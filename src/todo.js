class Todo {
  constructor({title, description, dueDate, priority}) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

const todoModule = (function() {
  const createTodo = (todoObj) => {
    return new Todo(todoObj);
  }
  return {
    createTodo
  }
})();

export default todoModule;