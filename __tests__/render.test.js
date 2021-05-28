// import storage from '../src/storage';
import { render, renderSideBar } from '../src/render';

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


render();

describe('render projects list side bar', () => {

  const sideBar = document.querySelector('.side-bar');
  
  it('list projects in the sidebar', () => {
    const projectsList = document.querySelectorAll('.project-btn');
    expect(projectsList[0].textContent).toMatch(/todos/);
    expect(projectsList[1].textContent).toMatch(/work/);
    expect(projectsList[2].textContent).toMatch(/personal/);
  });

  it('delete a project', () => {
    // TODO needs work
    const deleteBtn = document.querySelector('.project-delete-btn');
    
    deleteBtn.click();
    
    console.log(sideBar.innerHTML);
    
    expect(sideBar.innerHTML).toMatch(/personal/);
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
  })
  it('todo form is displayed', () => {
    const formBtn = document.querySelector('.add-todo-btn');
    
    formBtn.click();
    console.log(todoForm.outerHTML);
    expect(todoForm.classList).toContain('hidden');
  })
})