import render from './render';
import Project from './project';

// RENDER SIDEBAR
const renderSideBar = (projects) => {
  // CLEAR SIDEBAR TO RENDER UPDATED LIST
  const sideBar = document.createElement('div');
  sideBar.classList.add('side-bar');
  sideBar.innerHTML = '';

  //RENDER EACH PROJECT NAME IN SIDEBAR
  projects.forEach((project, index) => {
    const projectBtn = document.createElement('button');
    projectBtn.classList.add('project-btn');
    projectBtn.textContent = project.name;

    if(index !== 0) {
    const projectDeleteBtn = document.createElement('button');
    projectDeleteBtn.classList.add('project-delete-btn');
    projectDeleteBtn.textContent = ' X ';
    projectDeleteBtn.addEventListener('click', () => {
      
      projects.splice(index, 1);
      render();
    });
    
    projectBtn.appendChild(projectDeleteBtn);
  }
    
    projectBtn.addEventListener('click', () => {
      render(project);
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
    render();
  });

  newProjectForm.appendChild(inputField);
  newProjectForm.appendChild(saveBtn);
  sideBar.appendChild(newProjectForm);

  return sideBar;
};

export default renderSideBar;
