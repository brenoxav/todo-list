class Todo {
  constructor({title, description, dueDate, priority}) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

// const todoModule = (function() {
//   const createTodo = (todoObj, todoList) => {
//     const newTodo = new Todo(todoObj);
//     todoList.push(newTodo);
//   }

  

//   const removeFromProject = (todoObjIndex, projectObj) => {
//     projectObj.splice(todoObjIndex, 1);
//   }

//   const addToProject = (todoObj, projectObj) => {
//     projectObj.listOfTodos.push(todoObj);
//   }

//   return {
//     createTodo,
//     addToProject
//   }
// })();

//export default todoModule;

export default Todo;