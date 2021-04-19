

const todoForm = {

  todoFormContainer: document.createElement('div'),
  titleField: document.createElement('input'),
  descriptionField: document.createElement('textarea'),
  dueDateField: document.createElement('input'),
  priorityField: document.createElement('select'),
  saveBtn: document.createElement('button'),


  // render is : change values of the elements 

  // this method should be called 
  renderForm: (todoObj={
    title:'',
    description:'',
    dueDate:'',
    priority:'low'
  }) => {
    todoForm.titleField.value = todoObj.title;
    todoForm.descriptionField.value = todoObj.description;
    todoForm.dueDateField.value = todoObj.dueDate;
    todoForm.priorityField.value = todoObj.priority;

    return todoFormContainer;
  },

  getValues:()=>{},

  createTodoForm: () => {
    
    
    todoForm.todoFormContainer.classList.add('new-todo-wrapper');
    todoForm.titleField.classList.add('new-todo-title');
    todoForm.titleField.setAttribute('placeholder', 'Title');

    todoForm.descriptionField.classList.add('new-todo-description');
    todoForm.descriptionField.setAttribute('placeholder', 'Description');

    todoForm.dueDateField.classList.add('new-todo-due-date');
    todoForm.dueDateField.setAttribute('type', 'date');

    todoForm.priorityField.classList.add('new-todo-priority');
    todoForm.priorityField.setAttribute('name', 'new-todo-priority');
    todoForm.priorityField.innerHTML = `
        <option value="low">low</option>
        <option value="mid">mid</option>
        <option value="high">high</option>
      `;

    todoForm.saveBtn.classList.add('save-todo-btn');
    todoForm.saveBtn.textContent = 'save';

    ///////////////////////////////////////////////////
    todoForm.saveBtn.addEventListener('click', () => {
      const todoObj = {
        title: titleField.value,
        description: descriptionField.value,
        dueDate: dueDateField.value,
        priority: priorityField.value
      };

      //CHECK IF FIELD IS EMPTY
      const inputIsValid = Object.entries(todoObj).every((field) => {
        if (field[1] === "") {
          alert(`The field ${field[0]} can't be empty!`);
          return false;
        }
        else {
          return true;
        }
      });

      if (inputIsValid) {
        project.addTodo(todoObj); //USE TODO CLASS
        renderTodosContainer(project);
      }
    });

    todoForm.todoFormContainer.appendChild(todoForm.titleField);
    todoForm.todoFormContainer.appendChild(todoForm.descriptionField);
    todoForm.todoFormContainer.appendChild(todoForm.dueDateField);
    todoForm.todoFormContainer.appendChild(todoForm.priorityField);
    todoForm.todoFormContainer.appendChild(todoForm.saveBtn);

    return todoForm.todoFormContainer;
  }
}
export default todoForm;
