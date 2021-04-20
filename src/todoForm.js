import render from "./render";
import Todo from "./todo";

class todoForm {
  constructor({ title = "", description = "", dueDate = "", priority = "" }, project = {}) {
    this.titleField = document.createElement('input');
    this.descriptionField = document.createElement('textarea');
    this.dueDateField = document.createElement('input');
    this.priorityField = document.createElement('select');

    this.titleField.value = title;
    this.descriptionField.value = description;
    this.dueDateField.value = dueDate;
    this.priorityField.value = priority;
    
    this.priority = priority;

    this.project = project;

    this.todoObj = arguments[0];
  }

  render() { //define type of button action
    this.todoFormContainer = document.createElement('div');

    // STYLING FORM ELEMENTS
    this.todoFormContainer.classList.add('new-todo-wrapper');
    this.titleField.classList.add('new-todo-title');
    this.titleField.setAttribute('placeholder', 'Title');
    this.descriptionField.classList.add('new-todo-description');
    this.descriptionField.setAttribute('placeholder', 'Description');
    this.dueDateField.classList.add('new-todo-due-date');
    this.dueDateField.setAttribute('type', 'date');
    this.priorityField.classList.add('new-todo-priority');
    this.priorityField.setAttribute('name', 'new-todo-priority');

    let [lowSelected, midSelected, highSelected] = ['', '', ''];

    console.log(this.priority);
    
    switch (this.priority) {
      case 'high':
        highSelected = 'selected = "selected"';
        break;
      case 'mid':
        midSelected = 'selected = "selected"';
        break;
      default:
        lowSelected = 'selected = "selected"';
        break;
    }

    this.priorityField.innerHTML = `
    <option value="low" ${lowSelected}>low</option>
    <option value="mid" ${midSelected}>mid</option>
    <option value="high" ${highSelected}>high</option>
    `;
    
    

    // SAVE BTN
    this.saveBtn = document.createElement('button');
    this.saveBtn.classList.add('save-todo-btn');
    this.saveBtn.textContent = 'save';
    this.saveBtn.addEventListener('click', () => {
      const newTodoObj = {
        title: this.titleField.value,
        description: this.descriptionField.value,
        dueDate: this.dueDateField.value,
        priority: this.priorityField.value
      };

      //CHECK IF FIELD IS EMPTY
      const inputIsValid = Object.entries(newTodoObj).every((field) => {
        if (field[1] === "") {
          alert(`The field ${field[0]} can't be empty!`);
          return false;
        }
        else {
          return true;
        }
      });

      if (inputIsValid) {
        if (this.todoObj instanceof Todo) {
          this.todoObj.updateTodo(newTodoObj);
          console.log(this.project);
        } else {
          this.project.addTodo(newTodoObj);
          console.log(this.project);
          // renderTodosContainer(this.project);
        }
        render();
      }
    })

    this.todoFormContainer.appendChild(this.titleField);
    this.todoFormContainer.appendChild(this.descriptionField);
    this.todoFormContainer.appendChild(this.dueDateField);
    this.todoFormContainer.appendChild(this.priorityField);

    this.todoFormContainer.appendChild(this.saveBtn); //BUTTON!

    return this.todoFormContainer;
  }


  // render is : change values of the elements 

  // this method should be called 
  // renderForm: (todoObj={
  //   title:'',
  //   description:'',
  //   dueDate:'',
  //   priority:'low'
  // }) => {
  //   todoForm.titleField.value = todoObj.title;
  //   todoForm.descriptionField.value = todoObj.description;
  //   todoForm.dueDateField.value = todoObj.dueDate;
  //   todoForm.priorityField.value = todoObj.priority;

  //   return todoFormContainer;
  // },

  // getValues:()=>{},

  // createTodoForm: () => {


  //   todoForm.todoFormContainer.classList.add('new-todo-wrapper');

  //   todoForm.titleField.classList.add('new-todo-title');
  //   todoForm.titleField.setAttribute('placeholder', 'Title');

  //   todoForm.descriptionField.classList.add('new-todo-description');
  //   todoForm.descriptionField.setAttribute('placeholder', 'Description');

  //   todoForm.dueDateField.classList.add('new-todo-due-date');
  //   todoForm.dueDateField.setAttribute('type', 'date');

  //   todoForm.priorityField.classList.add('new-todo-priority');
  //   todoForm.priorityField.setAttribute('name', 'new-todo-priority');
  //   todoForm.priorityField.innerHTML = `
  //       <option value="low">low</option>
  //       <option value="mid">mid</option>
  //       <option value="high">high</option>
  //     `;

  //   todoForm.saveBtn.classList.add('save-todo-btn');
  //   todoForm.saveBtn.textContent = 'save';

  //   ///////////////////////////////////////////////////
  //   todoForm.saveBtn.addEventListener('click', () => {
  //     const todoObj = {
  //       title: titleField.value,
  //       description: descriptionField.value,
  //       dueDate: dueDateField.value,
  //       priority: priorityField.value
  //     };

  //     //CHECK IF FIELD IS EMPTY
  //     const inputIsValid = Object.entries(todoObj).every((field) => {
  //       if (field[1] === "") {
  //         alert(`The field ${field[0]} can't be empty!`);
  //         return false;
  //       }
  //       else {
  //         return true;
  //       }
  //     });

  //     if (inputIsValid) {
  //       project.addTodo(todoObj); //USE TODO CLASS
  //       renderTodosContainer(project);
  //     }
  //   });




  //  }
}
export default todoForm;
