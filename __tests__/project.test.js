import Todo from '../src/todo';
import Project from '../src/project';

const todo = new Todo({
  title: 'Update README',
  description: 'Push changes to GitHub',
  dueDate: '2021-06-01',
  priority: 'high',
});

const project = new Project('personal');

describe('create project', () => {
  it('has correct class', () => {
    expect(project instanceof Project).toBeTruthy();
  });

  it('has correct name', () => {
    expect(project.name).toBe('personal');
  });
});

describe('update project', () => {
  it('add todo to the project', () => {
    project.addTodo(todo);
    expect(project.todos).toContainEqual(todo);
  });

  it('delete todo from the project', () => {
    project.deleteTodo(todo);
    expect(project.todos).toEqual([]);
  });
});
