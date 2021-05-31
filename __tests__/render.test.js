// import storage from '../src/storage';
import { render, renderSideBar } from '../src/render';

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


//render();

describe('render projects list side bar', () => {

  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    render();
    const sideBar = document.querySelector('.side-bar');
    console.log(`SIDEBAR RENDER ${sideBar.innerHTML}`);
    // const sideBar = renderSideBar(projects);
    // const main = document.createElement('main');
    // main.classList.add('main');
    // main.appendChild(sideBar);
    // const body = document.querySelector('body');
    // body.appendChild(main);
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
    const sideBar = document.querySelector('.side-bar');
    console.log(`SIDEBAR 2: ${sideBar.innerHTML}`);

    const deleteBtn = document.querySelector('.project-delete-btn');
    deleteBtn.click();
    console.log(`SIDEBAR AFTER: ${sideBar.innerHTML}`);
    
    expect(sideBar.innerHTML).toMatch(/todos/);
  })


});

describe('render todos', () => {
  it('render default todos', () => {
    const todoContainer = document.querySelector('.todo-list');
    expect(todoContainer.innerHTML).toMatch(/Create GitHub Repo/);
    expect(todoContainer.innerHTML).toMatch(/Configure Linters/);
    expect(todoContainer.innerHTML).toMatch(/Submit Project for Review/);
  });

  const todoForm = document.querySelector('.new-todo-wrapper');
  it('todo form is hidden', () => {
    expect(todoForm.classList).toContain('hidden');
  });

  it('todo form is displayed', () => {
    const formBtn = document.querySelector('.add-todo-btn');

    formBtn.click();
    console.log(todoForm.outerHTML);
    expect(todoForm.classList).toContain('hidden');
  })
})