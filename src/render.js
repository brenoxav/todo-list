const render = function() {
  //TESTING TODO LIST RENDER
  let todoList = {};

  const main = document.querySelector('main');
  main.classList.add('main');
  
  const header = document.createElement('div');
  header.classList.add('header')
  
  const sideBar = document.createElement('div');
  sideBar.classList.add('side-bar');
  
  const todoListWrapper = document.createElement('div');
  todoListWrapper.classList.add('todo-list-wrapper');
  
  main.appendChild(header);
  main.appendChild(sideBar);

  todoList.forEach(todo => {
    const todoItem = document.createElement('div');
    todoItem.classList.add('todo-item');
    todoItem.textContent = todo.title;
    todoListWrapper.appendChild(todoItem);
  });

  main.appendChild(todoListWrapper);
}

export default render;