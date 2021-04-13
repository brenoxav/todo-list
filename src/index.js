import './assets/css/style.css';
import projectModule from './project';


const main = document.querySelector('main');

const projectContainer = document.createElement('div');

const project = {
  name: 'work',
  list: []
}

projectModule.createProject(project);

console.log(projectModule.getListOfProjects);