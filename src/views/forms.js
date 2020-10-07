import render from './render';

const forms = (() => {
  const newProjectForm = () => {
    render.container('project-form-container', 'new-project-btn-container', ['box', 'col-12'], 'div');
    render.container('project-form', 'project-form-container', ['flex-grid'], 'form');
    const label = render.container('p', 'project-form', ['col-12'], 'label');
    label.textContent = 'Project Name';
    render.container('project-name', 'project-form', ['col-12'], 'input');
    const submitBtn = render.container('project-submit-btn', 'project-form', ['col-12', 'btn-primary']);
    submitBtn.textContent = 'Create Project!';
    return submitBtn;
  };

  const newTaskForm = (project) => {
    render.container('task-form-container', project, ['box']);
    render.container('task-form-warning-container', 'task-form-container');
    render.container('task-form', 'task-form-container', 'flex-grid', 'form');
    render.container('name-label', 'task-form', ['col-12'], 'label').textContent = 'Name';
    render.container('name-input', 'task-form', ['col-12'], 'input');
    document.getElementById('task-form').appendChild(document.createElement('br'));

    render.container('content-label', 'task-form', ['col-12'], 'label').textContent = 'Content';
    render.container('content-input', 'task-form', ['col-12'], 'textarea');
    document.getElementById('task-form').appendChild(document.createElement('br'));

    render.container('difficulty-label', 'task-form', ['col-12'], 'label').textContent = 'Difficulty';
    render.container('difficulty-select', 'task-form', ['col-12'], 'select');
    const optOne = render.container('difficulty-option-1', 'difficulty-select', null, 'option');
    optOne.textContent = 'Easy';
    optOne.value = 'Easy';
    const optTwo = render.container('difficulty-option-2', 'difficulty-select', null, 'option');
    optTwo.textContent = 'Medium';
    optTwo.value = 'Medium';
    const optThree = render.container('difficulty-option-3', 'difficulty-select', null, 'option');
    optThree.textContent = 'Hard';
    optThree.value = 'Hard';
    render.container('date-label', 'task-form', null, 'label');
    const datePick = render.container('date-input', 'task-form', ['col-6'], 'input');
    datePick.type = 'date';
    const submitBtn = render.container('task-submit', 'task-form', ['col-6', 'submit-btn'], 'div');
    submitBtn.textContent = 'Submit';
    return submitBtn;
  };

  const newTodoForm = (project, taskName) => {
    render.container('todo-form-container', `task-${project}-${taskName}-todo-button-container`, ['flex-grid'], 'form');
    render.container('todo-form-label', 'todo-form-container', null, 'label');
    render.container('todo-form-input', 'todo-form-container', null, 'input');
    const submitBtn = render.container('todo-form-submit', 'todo-form-container', null, 'input');
    submitBtn.value = 'Create Todo';
    submitBtn.type = 'submit';
    return submitBtn;
  };
  return { newProjectForm, newTaskForm, newTodoForm };
})();

export default forms;
