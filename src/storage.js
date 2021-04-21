import Todo from './todo';
import Project from './project';

let exampleTodos = [
  {
    title: 'push to github',
    description: 'upload the latest changes on github',
    dueDate: '2090-12-22',
    priority: 'high',
  },
  {
    title: 'docs',
    description: 'update readme on github',
    dueDate: '2022-01-03',
    priority: 'mid',
  },
  {
    title: 'linters',
    description: 'check for linter errors',
    dueDate: '2020-09-03',
    priority: 'low',
  },
];

let exampleProjects = [
  {
    name: 'work',
    todos: [
      {
        title: 'linters',
        description: 'check for linter errors',
        dueDate: '2020-09-03',
        priority: 'low',
      },
      {
        title: 'tests',
        description: 'check for test errors',
        dueDate: '2020-09-03',
        priority: 'high',
      },
    ],
  },
  {
    name: 'personal',
    todos: [
      {
        title: 'readme',
        description: 'update readme on github',
        dueDate: '2020-09-03',
        priority: 'mid',
      },
    ],
  },
];

const projectsArr = [];

exampleTodos = exampleTodos.map((todo) => new Todo(todo));
const defaultProject = new Project('default', exampleTodos);
projectsArr.push(defaultProject);
exampleProjects = exampleProjects.map((project) => new Project(project.name, project.todos));
exampleProjects.forEach((project) => {
  project.todos = project.todos.map((todo) => new Todo(todo));
});
projectsArr.push(...exampleProjects);

const storage = {
  projects: projectsArr,

  checkLocalStorage() {
    let storedProjects = localStorage.getItem('projects');
    if (storedProjects === null) {
      localStorage.setItem('projects', JSON.stringify(this.projects));
    } else {
      storedProjects = JSON.parse(storedProjects);
      storedProjects = storedProjects.map((project) => new Project(project.name, project.todos));
      storedProjects.forEach((project) => {
        project.todos = project.todos.map((todo) => new Todo(todo));
      });
      this.projects = storedProjects;
    }
  },

  updateLocalStorage() {
    localStorage.setItem('projects', JSON.stringify(this.projects));
  },
};

export default storage;