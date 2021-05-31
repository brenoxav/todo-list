// import storage from '../src/storage';
import { render, renderSideBar , renderTodos} from '../src/render';
import Project from '../src/project';
import Todo from '../src/todo';

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf8');

jest
  .dontMock('fs');

let projects = [
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

// converting example objects to class objects for class methods support
projects = projects.map((project) => new Project(project.name, project.todos));
projects.forEach((project) => {
  project.todos = project.todos.map((todo) => new Todo(todo));
});

//render();

describe('render projects list side bar', () => {

  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    // render();
    // const sideBar = document.querySelector('.side-bar');
    // console.log(`SIDEBAR RENDER ${sideBar.innerHTML}`);
    const sideBar = renderSideBar(projects);
    const main = document.createElement('main');
    main.classList.add('main');
    main.appendChild(sideBar);
    const body = document.querySelector('body');
    body.appendChild(main);
  });

  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
  });

  it('list projects in the sidebar', () => {
    const projectsList = document.querySelectorAll('.project-btn');

    expect(projectsList[0].textContent).toMatch(/work/);
    expect(projectsList[1].textContent).toMatch(/personal/);
  });

  it('delete a project', () => {

    const deleteBtn = document.querySelector('.project-delete-btn');
    
    const numOfProjects = projects.length; 
    deleteBtn.click();
    
    expect(projects.length).toBe(numOfProjects - 1);
  })

  it('add a project', () => {
    const saveBtn = document.querySelector('.save-project-btn'); 
    const projectNameField = document.querySelector('.new-project-name');
    projectNameField.value = 'new project';
    saveBtn.click();
    expect(projects[projects.length-1].name).toBe('new project');
  })

});

describe('render todos', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    
    // const sideBar = renderSideBar(projects);
    
    const todoContainer = renderTodos(projects[0]);
    const main = document.createElement('main');
    main.classList.add('main');
    main.appendChild(todoContainer);
    const body = document.querySelector('body');
    body.appendChild(main);
  });

  afterEach(() => {
    // restore the original func after test
    jest.resetModules();
  });
  // test('render clicked project todos', () => {
  //   const firstProjectBtn = document.querySelector('.project-btn');
  //   firstProjectBtn.click();
  //   const todoContainer = document.querySelector('.todo-list');
  //   console.log('todos',todoContainer.outerHTML);

  //   expect(todoContainer.innerHTML).toMatch(/Create GitHub Repo/);
  //   expect(todoContainer.innerHTML).toMatch(/Configure Linters/);
  //   expect(todoContainer.innerHTML).toMatch(/Submit Project for Review/);
  // });

  it('list todos from a project', () => {
    const todoTitles = document.querySelectorAll('.todo-title');
    

    expect(todoTitles[0].textContent).toMatch(/linters/);
    expect(todoTitles[1].textContent).toMatch(/tests/);
  })

  it('delete todo', () => {
    const todoDeleteBtn = document.querySelector('.todo-delete-btn');
    const numOfTodos = projects[0].todos.length;
    
    todoDeleteBtn.click();

    expect(projects[0].todos.length).toBe(numOfTodos - 1);
  });

});