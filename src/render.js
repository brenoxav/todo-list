import Project from './project';
import Todo from './todo';
import storage from './storage';

const getDateString = (date) => {
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toJSON().slice(0, 10);
};

let renderSideBar;
let renderTodos;

storage.checkLocalStorage();
const { projects } = storage;

const main = document.createElement('main');
main.classList.add('main');
const body = document.querySelector('body');
body.appendChild(main);

const render = (project = {}) => {
  storage.updateLocalStorage();

  main.innerHTML = '';

  const header = document.createElement('header');
  header.classList.add('header');

  main.appendChild(header);

  const sideBar = renderSideBar(projects);
  main.appendChild(sideBar);

  let todosContainer;
  if (project instanceof Project) {
    todosContainer = renderTodos(project);
  } else {
    todosContainer = renderTodos(storage.defaultProject);
  }

  main.appendChild(todosContainer);
};

class TodoForm {
  constructor(...params) {
    [this.todoObj, this.project] = params;
    // let title, description, dueDate, priority;
    const {
      title = '', description = '', dueDate = getDateString(new Date()), priority = '',
    } = this.todoObj;

    this.titleField = document.createElement('input');
    this.descriptionField = document.createElement('textarea');
    this.dueDateField = document.createElement('input');
    this.priorityField = document.createElement('select');

    this.titleField.value = title;
    this.descriptionField.value = description;
    this.dueDateField.value = dueDate;
    this.priorityField.value = priority;

    this.priority = priority;
  }

  render() { // define type of button action
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

    // MODAL BOX
    const modal = document.createElement('div');
    modal.classList.add('modal', 'hidden');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    const modalCloseBtn = document.createElement('span');
    modalCloseBtn.classList.add('modal-close-btn');
    modalCloseBtn.textContent = '✕';
    modalCloseBtn.addEventListener('click', () => {
      modal.classList.toggle('hidden');
    });
    const modalText = document.createElement('p');
    modalContent.appendChild(modalCloseBtn);
    modalContent.appendChild(modalText);
    modal.appendChild(modalContent);
    main.appendChild(modal);

    // SAVE BTN
    this.saveBtn = document.createElement('button');
    this.saveBtn.classList.add('save-todo-btn');
    this.saveBtn.textContent = 'save';
    this.saveBtn.addEventListener('click', () => {
      const newTodoObj = {
        title: this.titleField.value,
        description: this.descriptionField.value,
        dueDate: this.dueDateField.value,
        priority: this.priorityField.value,
      };

      // CHECK IF FIELD IS EMPTY
      const inputIsValid = Object.entries(newTodoObj).every((field) => {
        if (field[1] === '') {
          modalText.innerHTML = `The <strong>${field[0]}</strong> field can't be empty!`;
          modal.classList.toggle('hidden');
          return false;
        }

        return true;
      });

      if (inputIsValid) {
        if (this.todoObj instanceof Todo) {
          this.todoObj.updateTodo(newTodoObj);
        } else {
          this.project.addTodo(newTodoObj);
        }
        render(this.project);
      }
    });

    this.todoFormContainer.appendChild(this.titleField);
    this.todoFormContainer.appendChild(this.descriptionField);
    this.todoFormContainer.appendChild(this.dueDateField);
    this.todoFormContainer.appendChild(this.priorityField);
    this.todoFormContainer.appendChild(this.saveBtn); // BUTTON!

    return this.todoFormContainer;
  }
}

renderTodos = (project) => {
  const todosContainer = document.createElement('div');
  todosContainer.classList.add('todo-list');
  todosContainer.innerHTML = '';

  const projectName = document.createElement('h1');
  projectName.classList.add('project-name');
  projectName.textContent = project.name;

  todosContainer.appendChild(projectName);

  // ADD EACH TODO ITEM
  project.todos.forEach((todo, index) => {
    const todoItem = document.createElement('div');

    todoItem.classList.add('todo-item', `priority-${todo.priority}`);
    const todoCheck = document.createElement('input');
    todoCheck.setAttribute('type', 'checkbox');
    todoCheck.classList.add('todo-check');
    const todoTitle = document.createElement('span');
    todoTitle.classList.add('todo-title');
    todoTitle.textContent = todo.title;
    const todoDueDate = document.createElement('span');
    todoDueDate.classList.add('todo-due-date');
    todoDueDate.textContent = todo.dueDate;
    const todoActionsWrapper = document.createElement('span');
    todoActionsWrapper.classList.add('todo-actions-wrapper');

    let todoEditForm = new TodoForm(todo, project);
    todoEditForm = todoEditForm.render();
    todoEditForm.classList.add('hidden');

    const todoEditBtn = document.createElement('button');
    todoEditBtn.classList.add('todo-edit-btn');
    todoEditBtn.textContent = 'edit';
    todoEditBtn.addEventListener('click', () => {
      todoEditForm.classList.toggle('hidden');
    });

    const todoDeleteBtn = document.createElement('button');
    todoDeleteBtn.classList.add('todo-delete-btn');
    todoDeleteBtn.textContent = 'delete';
    todoDeleteBtn.addEventListener('click', () => {
      project.deleteTodo(index);
      render(project);
    });

    todoActionsWrapper.appendChild(todoEditBtn);
    todoActionsWrapper.appendChild(todoDeleteBtn);

    todoItem.appendChild(todoCheck);
    todoItem.appendChild(todoTitle);
    todoItem.appendChild(todoDueDate);
    todoItem.appendChild(todoActionsWrapper);

    todosContainer.appendChild(todoItem);

    todosContainer.appendChild(todoEditForm);
  });

  // NEW TODOs FORM
  let todoNewForm = new TodoForm({}, project);
  todoNewForm = todoNewForm.render();
  todoNewForm.classList.add('hidden');
  todosContainer.appendChild(todoNewForm);

  // ADD TODO BUTTON
  const addTodoBtn = document.createElement('button');
  addTodoBtn.classList.add('add-todo-btn');
  addTodoBtn.textContent = 'Add todo';
  addTodoBtn.addEventListener('click', () => {
    todoNewForm.classList.toggle('hidden');
  });
  todosContainer.appendChild(addTodoBtn);

  return todosContainer;
};

// RENDER SIDEBAR
renderSideBar = (projects) => {
  // CLEAR SIDEBAR TO RENDER UPDATED LIST
  const sideBar = document.createElement('div');
  sideBar.classList.add('side-bar');
  sideBar.innerHTML = '';

  // RENDER EACH PROJECT NAME IN SIDEBAR
  projects.forEach((project, index) => {
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('project-btn');
    projectBtn.textContent = project.name;
    projectBtn.addEventListener('click', () => {
      render(project);
    });

    if (index !== 0) {
      const projectDeleteBtn = document.createElement('button');
      projectDeleteBtn.classList.add('project-delete-btn');
      projectDeleteBtn.textContent = ' X ';
      projectDeleteBtn.addEventListener('click', (event) => {
        event.stopPropagation();
        projects.splice(index, 1);
        render();
      });

      projectBtn.appendChild(projectDeleteBtn);
    }

    sideBar.appendChild(projectBtn);
  });

  //  NEW PROJECT FORM
  const newProjectForm = document.createElement('div');
  newProjectForm.classList.add('new-project-wrapper', 'hidden');

  const inputField = document.createElement('input');
  inputField.classList.add('new-project-name');

  const saveBtn = document.createElement('button');
  saveBtn.classList.add('save-project-btn');
  saveBtn.textContent = 'save';
  saveBtn.addEventListener('click', () => {
    projects.push(new Project(inputField.value));

    render(projects[projects.length - 1]);
  });

  newProjectForm.appendChild(inputField);
  newProjectForm.appendChild(saveBtn);

  sideBar.appendChild(newProjectForm);

  // ADD PROJECT BUTTON
  const addProjectBtn = document.createElement('button');
  addProjectBtn.classList.add('add-project-btn');
  addProjectBtn.textContent = 'Add Project';

  addProjectBtn.addEventListener('click', () => {
    newProjectForm.classList.toggle('hidden');
  });

  sideBar.appendChild(addProjectBtn);

  return sideBar;
};

export { render, renderSideBar };