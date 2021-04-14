const render = function() {
  //TESTING TODO LIST RENDER
  let allTodos = [];

  let todoList = [
    {  
      title: 'push to github',
      description: 'upload the latest changes on github',
      dueDate: '1-4-2021',
      priority: 'high'
    },
    {  
      title: 'readme',
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

  let projectList = [
    {  
      name: 'work',
      listOfTodos:[
        {  
          title: 'linters',
          description: 'check for linter errors',
          dueDate: '3-4-2021',
          priority: 'low'
        }
      ]

    },
    {  
      name: 'personal',
      listOfTodos: [
        {  
          title: 'readme',
          description: 'update readme on github',
          dueDate: '2-4-2021',
          priority: 'mid'
        },
      ]
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
  
  const renderTodoList = (todoList) =>{
    todoListWrapper.innerHTML = '';
    todoList.forEach((todo, index) => {
      const todoItem = document.createElement('div');
      todoItem.setAttribute('data-index', index);
      todoItem.classList.add('todo-item');
      todoItem.textContent = todo.title;
      todoListWrapper.appendChild(todoItem);
    });
    
  }
  

  projectList.forEach((project, index) => {
    const projectTab = document.createElement('div');
    projectTab.setAttribute('data-index', index);
    projectTab.classList.add('project-tab');
    projectTab.textContent = project.name;
    
    projectTab.addEventListener('click', ()=>{
      renderTodoList(project.listOfTodos)
    })


    sideBar.appendChild(projectTab);

    allTodos.push(project.listOfTodos);
  });

  main.appendChild(sideBar);
  main.appendChild(todoListWrapper);
}

export default render;