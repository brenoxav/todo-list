import Todo from '../src/todo';

const todo = new Todo({
  title: 'Create GitHub Repo',
  description: 'Push config files to GitHub',
  dueDate: '2021-04-28',
  priority: 'high',
});

const invalidTodo = new Todo({
  name: 'Create GitHub Repo',
  test: 'Push config files to GitHub',
  dueDate: '2021-04-28',
  priority: 'high',
});

describe('create todo', () => {
  it('has correct class', () => {
    expect(todo instanceof Todo).toBeTruthy();
  });

  it('has correct properties', ()=>{
    expect(Object.keys(todo)).toContain('title');
    expect(Object.keys(todo)).toContain('description');
    expect(Object.keys(todo)).toContain('dueDate');
    expect(Object.keys(todo)).toContain('priority');
  })

  it('cannot create with invalid properties', ()=>{
    expect(invalidTodo.title).toBe(undefined)
  })
});

describe('update todo', () => {
  it('update with correct data', () => {
    todo.updateTodo({
      title: 'update readme',
      description: 'Push changes to GitHub',
      dueDate: '2021-04-28',
      priority: 'high',
    })
    expect(todo.title).toBe('update readme');
  })
  it('update with invalid property', () => {
    todo.updateTodo({
      name: 'update readme',
      description: 'Push changes to GitHub',
      dueDate: '2021-04-28',
      priority: 'high',
    })
    expect(todo.title).toBe(undefined);
  })
})
