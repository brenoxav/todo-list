import Project from './project';

import renderSideBar from './renderSideBar';
import renderTodos from './renderTodos';

import storage from './storage';

storage.checkLocalStorage();
const { projects } = storage;

const render = (project = {}) => {
  storage.updateLocalStorage();
  const main = document.querySelector('main');
  main.classList.add('main');

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
    todosContainer = renderTodos(projects[0]); // DEFAULT PROJECT
  }

  main.appendChild(todosContainer);
};

export default render;