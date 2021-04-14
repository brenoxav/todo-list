import projectModule from './project';

const projectList = projectModule.getProjectList();

const render = function() {
  //TESTING TODO LIST RENDER
  let ungroupedTodos = [
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

  const main = document.querySelector('main');
  main.classList.add('main');
  
  const header = document.createElement('div');
  header.classList.add('header')
  
  const sideBar = document.createElement('div');
  sideBar.classList.add('side-bar');
  
  const todoListWrapper = document.createElement('div');
  todoListWrapper.classList.add('todo-list-wrapper');
  
  main.appendChild(header);
  

  //LIST TODOS
  const clearTodosWrapper = () => {
    todoListWrapper.innerHTML = '';
  }

  const renderTodoList = (todoList, projectName='') =>{

    todoList.forEach((todo, index) => {
      todoListWrapper.innerHTML += `
      <div class="todo-item priority-${todo.priority}" data-index=${index}>
        <input type="checkbox" class="todo-checkbox">
        <span class="todo-title">${todo.title}</span>
        <span class="todo-due-date">${todo.dueDate}</span>
        <span class="todo-project">${projectName}</span>
        <span class="todo-actions-wrapper">
          <span class="todo-edit">edit</span>
          <span class="todo-delete">delete</span>
        </span>
      </div>
      `
    });
  }
  

  // LIST ALL TODOS
  const allTodosTab = document.createElement('div');
  allTodosTab.classList.add('project-tab');
  allTodosTab.textContent = 'All Todo';

  allTodosTab.addEventListener('click', ()=>{
    clearTodosWrapper();
    renderTodoList(ungroupedTodos);

    projectList.forEach((project)=>{
      renderTodoList(project.listOfTodos, project.name);
    });
  })

  sideBar.appendChild(allTodosTab);
  

  //LIST PROJECTS
  projectList.forEach((project, index) => {
    const projectTab = document.createElement('div');
    projectTab.setAttribute('data-index', index);
    projectTab.classList.add('project-tab');
    projectTab.textContent = project.name;
    
    projectTab.addEventListener('click', ()=>{
      clearTodosWrapper();
      renderTodoList(project.listOfTodos)
    })

    sideBar.appendChild(projectTab);

  });
  // NEW FIELD
  const renderInputField = (parentWrapper) =>{
    const inputField = document.createElement('input');
    const saveBtn = document.createElement('button');
    saveBtn.textContent = 'save';
    saveBtn.addEventListener('click', ()=>{
      projectModule.createProject(inputField.value);
    });

    parentWrapper.appendChild(inputField);
    parentWrapper.appendChild(saveBtn);
  }

  // ADD PROJECT BUTTON

  const addProjectBtn = document.createElement('button');
  addProjectBtn.classList.add('add-project-btn');
  addProjectBtn.textContent = 'ADD +';
  addProjectBtn.addEventListener('click',()=>{
    renderInputField(sideBar);
  })
  sideBar.appendChild(addProjectBtn);

  
  main.appendChild(sideBar);
  main.appendChild(todoListWrapper);
}

export default render;