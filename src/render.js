import Project from './project';
import projectModule from './project';
import todoModule from './todo';


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
    todos:[
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

const defaultProject = new Project('default', exampleTodos);
projects.push(defaultProject);
exampleProjects = exampleProjects.map(project => new Project(project.name, project.todos));
projects.push(...exampleProjects);

//RENDER//////////////////////////////////////////////////////////////////////
const render = function() {
  // Create base elements
  const main = document.querySelector('main');
  main.classList.add('main');
  
  const header = document.createElement('header');
  header.classList.add('header');
  
  const sideBar = document.createElement('div');
  sideBar.classList.add('side-bar');
  
  const todoList = document.createElement('div');
  todoList.classList.add('todo-list');
  
  main.appendChild(header);
  
  // Clear todo list elements
  // const clearTodosWrapper = () => {
  //   todoList.innerHTML = '';
  // }

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
      renderTodosFromProject(project);
    });

    sideBar.appendChild(projectBtn);

  });
  
  // ADD PROJECT BUTTON
  const addProjectBtn = document.createElement('button');
  addProjectBtn.classList.add('project-tab');
  addProjectBtn.textContent = ' + ';

  addProjectBtn.addEventListener('click', () => { 
    newProjectForm.classList.toggle('hidden');
  });

  sideBar.appendChild(addProjectBtn);

  //  NEW PROJECT FORM

  const newProjectForm = document.createElement('div');
  newProjectForm.classList.add('new-project-wrapper');

  const inputField = document.createElement('input');
  inputField.classList.add('new-project-input');
  
  const saveBtn = document.createElement('button');
  saveBtn.classList.add('save-project-btn');
  saveBtn.textContent = 'save';
  saveBtn.addEventListener('click', ()=>{
    projects.push(new Project(inputField.value));
    renderSideBar();
  });

  newProjectForm.appendChild(inputField);
  newProjectForm.appendChild(saveBtn);

  newProjectForm.classList.add('hidden');
  sideBar.appendChild(newProjectForm);
  
};

  // RENDER TODO LIST FROM PROJECT
  const renderTodosFromProject = (project) =>{
    todoList.innerHTML = '';
    project.todos.forEach((todo, index) => {
      todoList.innerHTML += `
      <div class="todo-item priority-${todo.priority}" data-index=${index}>
        <input type="checkbox" class="todo-checkbox">
        <span class="todo-title">${todo.title}</span>
        <span class="todo-due-date">${todo.dueDate}</span>
        <span class="todo-actions-wrapper">
          <span class="todo-edit">edit</span>
          <span class="todo-delete">delete</span>
        </span>
      </div>
      `
    });
    renderAddTodoBtn(project);
  }
  
  // new todo form
  const renderAddTodoBtn = (todoList, projectName='') =>{ 
    const newTodoForm = document.createElement('div');
    newTodoForm.classList.add('new-todo-wrapper');

    const titleField = document.createElement('input');
    titleField.classList.add('todo-input-title');

    const descriptionField = document.createElement('input');
    descriptionField.classList.add('todo-input-description');

    const dueDateField = document.createElement('input');
    dueDateField.classList.add('todo-input-due-date');
    dueDateField.setAttribute('type', 'date');

    const priorityField = document.createElement('input');
    priorityField.classList.add('todo-input-due-date');
    
    const saveBtn = document.createElement('button');
    saveBtn.classList.add('save-todo-btn');
    saveBtn.textContent = 'save';
    saveBtn.addEventListener('click', ()=>{
      const todoObj = {
        title: titleField.value,
        description: descriptionField.value,
        dueDate: dueDateField.value,
        priority: priorityField.value
      };

      todoModule.createTodo(todoObj, todoList);
      clearTodosWrapper();
      renderTodosFromProject(todoList, projectName);
    });

    newTodoForm.appendChild(titleField);
    newTodoForm.appendChild(descriptionField);
    newTodoForm.appendChild(dueDateField);
    newTodoForm.appendChild(priorityField);
    newTodoForm.appendChild(saveBtn);
    

    // ADD TODO BUTTON

    const addTodoBtn = document.createElement('button');
    addTodoBtn.classList.add('add-todo-btn');
    addTodoBtn.textContent = ' + ';
    
    newTodoForm.classList.add('hidden');
    todoList.appendChild(newTodoForm);

    addTodoBtn.addEventListener('click',()=>{ 
      newTodoForm.classList.toggle('hidden');
    })
    todoList.appendChild(addTodoBtn);
  }

  
  renderSideBar();
  
  main.appendChild(sideBar);
  main.appendChild(todoList);
  
}

export default render;