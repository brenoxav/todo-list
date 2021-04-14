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

  

  const removeFromProject = (todoObjIndex, projectObj) => {
    projectObj.splice(todoObjIndex, 1);
  }

  const addToProject = (todoObj, projectObj) => {
    projectObj.listOfTodos.push(todoObj);
  }

  return {
    createTodo,
    addToProject
  }
})();

export default todoModule;