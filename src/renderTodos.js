import render from './render';
import TodoForm from './todoForm';

const renderTodos = (project) => {
  const todosContainer = document.createElement('div');
  todosContainer.classList.add('todo-list');
  todosContainer.innerHTML = '';

  const projectName = document.createElement('h1');
  projectName.classList.add('project-name');
  projectName.textContent = project.name;

  todosContainer.appendChild(projectName);

  // ADD EACH TODO ITEM
  project.todos.forEach((todo, index) => {
    const todoItem = document.createElement('div');

    todoItem.classList.add('todo-item', `priority-${todo.priority}`);
    const todoCheck = document.createElement('input');
    todoCheck.setAttribute('type', 'checkbox');
    todoCheck.classList.add('todo-check');
    const todoTitle = document.createElement('span');
    todoTitle.classList.add('todo-title');
    todoTitle.textContent = todo.title;
    const todoDueDate = document.createElement('span');
    todoDueDate.classList.add('todo-due-date');
    todoDueDate.textContent = todo.dueDate;
    const todoActionsWrapper = document.createElement('span');
    todoActionsWrapper.classList.add('todo-actions-wrapper');

    let todoEditForm = new TodoForm(todo);
    todoEditForm = todoEditForm.render();
    todoEditForm.classList.add('hidden');

    const todoEditBtn = document.createElement('button');
    todoEditBtn.classList.add('todo-edit-btn');
    todoEditBtn.textContent = 'edit';

    todoEditBtn.addEventListener('click', () => {
      todoEditForm.classList.toggle('hidden');
    });

    const todoDeleteBtn = document.createElement('button');
    todoDeleteBtn.classList.add('todo-delete-btn');
    todoDeleteBtn.textContent = 'delete';

    todoDeleteBtn.addEventListener('click', () => {
      project.deleteTodo(index);
      render();
    });

    todoActionsWrapper.appendChild(todoEditBtn);
    todoActionsWrapper.appendChild(todoDeleteBtn);

    todoItem.appendChild(todoCheck);
    todoItem.appendChild(todoTitle);
    todoItem.appendChild(todoDueDate);
    todoItem.appendChild(todoActionsWrapper);

    todosContainer.appendChild(todoItem);

    todosContainer.appendChild(todoEditForm);
  });

  // NEW TODOs FORM
  let todoNewForm = new TodoForm({}, project);
  todoNewForm = todoNewForm.render();
  todoNewForm.classList.add('hidden');
  todosContainer.appendChild(todoNewForm);

  // ADD TODO BUTTON
  const addTodoBtn = document.createElement('button');
  addTodoBtn.classList.add('add-todo-btn');
  addTodoBtn.textContent = 'Add todo';
  addTodoBtn.addEventListener('click', () => {
    todoNewForm.classList.toggle('hidden');
  });
  todosContainer.appendChild(addTodoBtn);

  return todosContainer;
};

export default renderTodos;
