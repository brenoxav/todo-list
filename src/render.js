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

let projects = [];

const defaultProject = new Project('default', exampleTodos);

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
  sideBar.innerHTML = '';
  // const allTodosTab = document.createElement('div');
  // allTodosTab.classList.add('project-tab');
  // allTodosTab.textContent = 'All Todo';

  // allTodosTab.addEventListener('click', ()=>{
  //   clearTodosWrapper();
  //   renderTodosFromProject(ungroupedTodos);

  //   projects.forEach((project)=>{
  //     renderTodosFromProject(project.listOfTodos, project.name);
  //   });

  //   renderAddTodoBtn(ungroupedTodos);
  // });

  // sideBar.appendChild(allTodosTab);

  //RENDER EACH PROJECT NAME IN SIDEBAR
  projects.forEach((project, index) => {
    const projectBtn = document.createElement('button');
    projectBtn.outerHTML = `
      <button data-index=${index} class="project-btn">${project.name}</button>
    `;

    // const projectBtn = document.createElement('div');
    // projectBtn.setAttribute('data-index', index);
    // projectBtn.classList.add('project-tab');
    // projectBtn.textContent = project.name;
    
    projectBtn.addEventListener('click', () => {
      //clearTodosWrapper();
      renderTodosFromProject(project);
    })
    sideBar.appendChild(projectBtn);
  });
  
  // ADD PROJECT BUTTON
  const addProjectBtn = document.createElement('button');
  addProjectBtn.outerHTML = `
    <button class="add-project-btn"> + </button>
  `;

  addProjectBtn.addEventListener('click', () => { 
    newProjectForm.classList.toggle('hidden');
  });

  const newProjectForm = renderNewProjectForm();
  newProjectForm.classList.add('hidden');
  sideBar.appendChild(newProjectForm);

  sideBar.appendChild(addProjectBtn);
  
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

  // NEW PROJECT Form
  const renderNewProjectForm = () =>{
    const newProjectForm = document.createElement('div');
    newProjectForm.classList.add('new-project-wrapper');
    const inputField = document.createElement('input');
    inputField.classList.add('new-project-input');
    
    const saveBtn = document.createElement('button');
    saveBtn.classList.add('save-project-btn');
    saveBtn.textContent = 'save';
    saveBtn.addEventListener('click', ()=>{
      projectModule.createProject(inputField.value);
      renderSideBar();
    });

    newProjectForm.appendChild(inputField);
    newProjectForm.appendChild(saveBtn);

    return newProjectForm;
  }

  
  renderSideBar();
  
  main.appendChild(sideBar);
  main.appendChild(todoList);
  
}

export default render;