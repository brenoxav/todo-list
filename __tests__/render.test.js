import { renderSideBar, renderTodos } from '../src/render';
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

describe('render projects list side bar', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    const sideBar = renderSideBar(projects);
    const main = document.createElement('main');
    main.classList.add('main');
    main.appendChild(sideBar);
    const body = document.querySelector('body');
    body.appendChild(main);
  });

  afterEach(() => {
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
  });

  it('add a project', () => {
    const saveBtn = document.querySelector('.save-project-btn');
    const projectNameField = document.querySelector('.new-project-name');
    projectNameField.value = 'new project';
    const numOfProjects = projects.length;
    saveBtn.click();

    expect(projects[projects.length - 1].name).toBe('new project');
    expect(projects.length).toBe(numOfProjects + 1);
  });

  it('invalid project name fail', () => {
    const saveBtn = document.querySelector('.save-project-btn');
    const projectNameField = document.querySelector('.new-project-name');
    projectNameField.value = '';
    const numOfProjects = projects.length;
    saveBtn.click();

    expect(projects.length).not.toBe(numOfProjects + 1);
  });
});

describe('render todos', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    const todoContainer = renderTodos(projects[0]);
    const main = document.createElement('main');
    main.classList.add('main');
    main.appendChild(todoContainer);
    const body = document.querySelector('body');
    body.appendChild(main);
  });

  afterEach(() => {
    jest.resetModules();
  });

  it('list todos from a project', () => {
    const todoTitles = document.querySelectorAll('.todo-title');

    expect(todoTitles[0].textContent).toMatch(/linters/);
    expect(todoTitles[1].textContent).toMatch(/tests/);
  });

  it('add todo', () => {
    const titleFields = document.querySelectorAll('.new-todo-title');
    const descriptionFields = document.querySelectorAll('.new-todo-description');
    const titleFieldLast = titleFields[titleFields.length - 1];
    const descriptionFieldLast = descriptionFields[descriptionFields.length - 1];

    const todoSaveBtns = document.querySelectorAll('.save-todo-btn');
    const todoSaveBtnLast = todoSaveBtns[todoSaveBtns.length - 1];

    titleFieldLast.value = 'new todo';
    descriptionFieldLast.value = 'description of new';

    todoSaveBtnLast.click();
    const numOfTodos = projects[0].todos.length;
    expect(projects[0].todos[numOfTodos - 1].title).toMatch(/new todo/);
  });

  it('add todo fails with invalid data', () => {
    const titleFields = document.querySelectorAll('.new-todo-title');
    const descriptionFields = document.querySelectorAll('.new-todo-description');
    const titleFieldLast = titleFields[titleFields.length - 1];
    const descriptionFieldLast = descriptionFields[descriptionFields.length - 1];

    const todoSaveBtns = document.querySelectorAll('.save-todo-btn');
    const todoSaveBtnLast = todoSaveBtns[todoSaveBtns.length - 1];

    titleFieldLast.value = 'failing todo';
    descriptionFieldLast.value = '';

    todoSaveBtnLast.click();
    const numOfTodos = projects[0].todos.length;
    expect(projects[0].todos[numOfTodos - 1].title).not.toMatch(/failing todo/);
  });

  it('edit todo', () => {
    const titleField = document.querySelector('.new-todo-title');
    const descriptionField = document.querySelector('.new-todo-description');
    const dueDateField = document.querySelector('.new-todo-due-date');
    const priorityField = document.querySelector('.new-todo-priority');
    const todoSaveBtn = document.querySelector('.save-todo-btn');

    titleField.value = 'new todo';
    descriptionField.value = 'description of new';
    dueDateField.value = '2020-09-05';
    priorityField.value = 'low';
    todoSaveBtn.click();

    expect(projects[0].todos[0].title).toMatch(/new todo/);
  });

  it('edit todo fails with invalid data', () => {
    const titleField = document.querySelector('.new-todo-title');
    const descriptionField = document.querySelector('.new-todo-description');
    const dueDateField = document.querySelector('.new-todo-due-date');
    const priorityField = document.querySelector('.new-todo-priority');
    const todoSaveBtn = document.querySelector('.save-todo-btn');

    titleField.value = 'todo 2';
    descriptionField.value = '';
    dueDateField.value = '2020-09-05';
    priorityField.value = 'low';
    todoSaveBtn.click();

    expect(projects[0].todos[0].title).not.toMatch(/todo 2/);
  });

  it('delete todo', () => {
    const todoDeleteBtn = document.querySelector('.todo-delete-btn');
    const numOfTodos = projects[0].todos.length;
    todoDeleteBtn.click();

    expect(projects[0].todos.length).toBe(numOfTodos - 1);
  });
});