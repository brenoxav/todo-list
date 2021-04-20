import render from './render';

import Project from './project';
import renderTodos from './renderTodos';

// RENDER SIDEBAR
const renderSideBar = (projects) => {
  // CLEAR SIDEBAR TO RENDER UPDATED LIST
  console.log('RENDER SIDEBAR');
  
  const sideBar = document.createElement('div');
  sideBar.classList.add('side-bar');
  
  sideBar.innerHTML = '';

  //RENDER EACH PROJECT NAME IN SIDEBAR
  projects.forEach((project, index) => {
    const projectBtn = document.createElement('button');
    //projectBtn.setAttribute('data-index', index);
    projectBtn.classList.add('project-btn');
    projectBtn.textContent = project.name;

    projectBtn.addEventListener('click', () => {
      renderTodos(project);
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
    renderSideBar(projects);
    console.log(projects)
    render();
  });

  newProjectForm.appendChild(inputField);
  newProjectForm.appendChild(saveBtn);

  // newProjectForm.classList.add('hidden');
  sideBar.appendChild(newProjectForm);

  return sideBar;
};

export default renderSideBar;