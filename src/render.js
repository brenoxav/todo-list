import projectModule from './project';
import todoModule from './todo';


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
  
  // new todo form
  const renderNewTodoBtn = (todoList, projectName='') =>{ 
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
      renderTodoList(todoList, projectName);
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
    todoListWrapper.appendChild(newTodoForm);

    addTodoBtn.addEventListener('click',()=>{ 
      newTodoForm.classList.toggle('hidden');
    })
    todoListWrapper.appendChild(addTodoBtn);
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


  const renderSideBar= ()=>{

    sideBar.innerHTML = '';
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

      renderNewTodoBtn(ungroupedTodos);
    });


    sideBar.appendChild(allTodosTab);

    //LIST PROJECTS
    projectList.forEach((project, index) => {
      const projectTab = document.createElement('div');
      projectTab.setAttribute('data-index', index);
      projectTab.classList.add('project-tab');
      projectTab.textContent = project.name;
      
      projectTab.addEventListener('click', ()=>{
        clearTodosWrapper();
        renderTodoList(project.listOfTodos);
        renderNewTodoBtn(project.listOfTodos);
      })

      sideBar.appendChild(projectTab);

    });
    
    // ADD PROJECT BUTTON
    const addProjectBtn = document.createElement('button');
    addProjectBtn.classList.add('add-project-btn');
    addProjectBtn.textContent = ' + ';
    const newProjectForm = renderNewProjectForm();
    newProjectForm.classList.add('hidden');
    sideBar.appendChild(newProjectForm);

    addProjectBtn.addEventListener('click',()=>{ 
      newProjectForm.classList.toggle('hidden');
    })
    sideBar.appendChild(addProjectBtn);
    
  };

  renderSideBar();
  
  main.appendChild(sideBar);
  main.appendChild(todoListWrapper);
  
}


export default render;