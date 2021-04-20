import Project from './project';
import Todo from './todo';
import todoForm from './todoForm';

//DATA////////////////////////////////////////////////////////////////////////
//TEST DATA
let exampleTodos = [
  {
    title: 'pullto github',
    description: 'upload the latest changes on github',
    dueDate: '1-4-2021',
    priority: 'high'
  },
  {
    title: 'docs',
    description: 'update readme on github',
    dueDate: '2-4-2021',
    priority: 'mid'
  },
  {
    title: 'linters',
    description: 'check for linter errors',
    dueDate: '3-4-2021',
    priority: 'low'
  }
];

let exampleProjects = [
  {
    name: 'work',
    todos: [
      {
        title: 'linters',
        description: 'check for linter errors',
        dueDate: '3-4-2021',
        priority: 'low'
      },
      {
        title: 'tests',
        description: 'check for test errors',
        dueDate: '3-4-2021',
        priority: 'high'
      }
    ]
  },
  {
    name: 'personal',
    todos: [
      {
        title: 'readme',
        description: 'update readme on github',
        dueDate: '2-4-2021',
        priority: 'mid'
      },
    ]
  }
]

let projects = [];

exampleTodos = exampleTodos.map(todo => new Todo(todo))


const defaultProject = new Project('default', exampleTodos);
projects.push(defaultProject);
exampleProjects = exampleProjects.map(project => new Project(project.name, project.todos));

exampleProjects.forEach(project => project.todos = project.todos.map(todo => new Todo(todo)));

projects.push(...exampleProjects);

//RENDER//////////////////////////////////////////////////////////////////////
const render = function () {
  // Create base elements
  const main = document.querySelector('main');
  main.classList.add('main');

  const header = document.createElement('header');
  header.classList.add('header');

  const sideBar = document.createElement('div');
  sideBar.classList.add('side-bar');

  const todosContainer = document.createElement('div');
  todosContainer.classList.add('todo-list');

  main.appendChild(header);
  // RENDER SIDEBAR
  const renderSideBar = () => {
    // CLEAR SIDEBAR TO RENDER UPDATED LIST
    sideBar.innerHTML = '';

    //RENDER EACH PROJECT NAME IN SIDEBAR
    projects.forEach((project, index) => {
      const projectBtn = document.createElement('button');
      projectBtn.setAttribute('data-index', index);
      projectBtn.classList.add('project-btn');
      projectBtn.textContent = project.name;

      projectBtn.addEventListener('click', () => {
        renderTodosContainer(project);
      });

      sideBar.appendChild(projectBtn);
    });

    // ADD PROJECT BUTTON
    const addProjectBtn = document.createElement('button');
    addProjectBtn.classList.add('add-project-btn');
    addProjectBtn.textContent = 'Add Project';

    addProjectBtn.addEventListener('click', () => {
      newProjectForm.classList.toggle('hidden');
    });

    sideBar.appendChild(addProjectBtn);

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
      renderSideBar();
    });

    newProjectForm.appendChild(inputField);
    newProjectForm.appendChild(saveBtn);

    // newProjectForm.classList.add('hidden');
    sideBar.appendChild(newProjectForm);
  };

  // RENDER TODOS CONTAINER
  const renderTodosContainer = (project) => {
    todosContainer.innerHTML = '';
    // ADD EACH TODO ITEM
    project.todos.forEach((todo, index) => {
      // todosContainer.innerHTML += `
      // <div class="todo-item priority-${todo.priority}" data-index=${index}>
      //   <input type="checkbox" class="todo-checkbox">
      //   <span class="todo-title">${todo.title}</span>
      //   <span class="todo-due-date">${todo.dueDate}</span>
      //   <span class="todo-actions-wrapper">
      //     <button class="todo-edit-btn">edit</button>
      //     <button class="todo-delete-btn">delete</button>
      //   </span>
      // </div>
      // `
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
        renderTodosContainer(project);
      });

      todoActionsWrapper.appendChild(todoEditBtn);
      todoActionsWrapper.appendChild(todoDeleteBtn);

      todoItem.appendChild(todoCheck);
      todoItem.appendChild(todoTitle);
      todoItem.appendChild(todoDueDate);
      todoItem.appendChild(todoActionsWrapper);

      todosContainer.appendChild(todoItem);

      let todoEditForm = new todoForm(todo);
      todoEditForm = todoEditForm.render();
      todoEditForm.classList.add('hidden');
      todosContainer.appendChild(todoEditForm);
    });

    
    //NEW TODOs FORM 
    let todoNewForm = new todoForm({}, project);
    todoNewForm = todoNewForm.render();
    todoNewForm.classList.add('hidden');
    todosContainer.appendChild(todoNewForm);

    // ADD TODO BUTTON
    const addTodoBtn = document.createElement('button');
    addTodoBtn.classList.add('add-todo-btn');
    addTodoBtn.textContent = 'Add todo';

    addTodoBtn.addEventListener('click', () => {
      todoNewForm.classList.toggle('hidden');
    })
    todosContainer.appendChild(addTodoBtn);


    // NEW TODO FORM
    // const todoFormContainer = todoForm.createTodoForm();
    // todoFormContainer.classList.add('hidden');
    
    // todosContainer.appendChild(todoFormContainer);
    // const newTodoForm = document.createElement('div');
    // newTodoForm.classList.add('new-todo-wrapper');
    // newTodoForm.classList.add('hidden');

    // const titleField = document.createElement('input');
    // titleField.classList.add('new-todo-title');
    // titleField.setAttribute('placeholder', 'Title');

    // const descriptionField = document.createElement('textarea');
    // descriptionField.classList.add('new-todo-description');
    // descriptionField.setAttribute('placeholder', 'Description');

    // const dueDateField = document.createElement('input');
    // dueDateField.classList.add('new-todo-due-date');
    // dueDateField.setAttribute('type', 'date');

    // const priorityField = document.createElement('select');
    // priorityField.classList.add('new-todo-priority');
    // priorityField.setAttribute('name', 'new-todo-priority');
    // priorityField.innerHTML = `
    //   <option value="low">low</option>
    //   <option value="mid">mid</option>
    //   <option value="high">high</option>
    // `;

    // const saveBtn = document.createElement('button');
    // saveBtn.classList.add('save-todo-btn');
    // saveBtn.textContent = 'save';
    // saveBtn.addEventListener('click', () => {
    //   const todoObj = {
    //     title: titleField.value,
    //     description: descriptionField.value,
    //     dueDate: dueDateField.value,
    //     priority: priorityField.value
    //   };

    //   //CHECK IF FIELD IS EMPTY
    //   const inputIsValid = Object.entries(todoObj).every((field) => {
    //     if (field[1] === "") {
    //       alert(`The field ${field[0]} can't be empty!`);
    //       return false;
    //     }
    //     else {
    //       return true;
    //     }
    //   });

    //   if (inputIsValid) {
    //     project.addTodo(todoObj); //USE TODO CLASS
    //     renderTodosContainer(project);
    //   }
    // });

    // newTodoForm.appendChild(titleField);
    // newTodoForm.appendChild(descriptionField);
    // newTodoForm.appendChild(dueDateField);
    // newTodoForm.appendChild(priorityField);
    // newTodoForm.appendChild(saveBtn);

    // todosContainer.appendChild(newTodoForm);
  }

  renderSideBar();
  main.appendChild(sideBar);
  main.appendChild(todosContainer);
  renderTodosContainer(projects[0]);
}

export default render;