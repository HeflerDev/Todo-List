import render from './render';

const todoTab = (() => {
  const renderProject = (elementId) => {
    render.container(`project-${elementId}`, 'content-section', ['box']);
    render.container(`project-${elementId}-container`, `project-${elementId}`, ['flex-grid', 'project-container']);
    render.container(`project-${elementId}-name`, `project-${elementId}-container`, ['col-12', 'col-m-10']);
    const text = render.container(elementId, `project-${elementId}-name`, ['minibox', 'center'], 'h2');
    text.textContent = elementId;
    const newTaskBtn = render.container(`project-${elementId}-button`, `project-${elementId}-container`, ['col-2', 'minibox', 'no-margin'], 'button');
    render.container(null, `project-${elementId}-button`, ['minibox']).textContent = 'Add New Task';
    return newTaskBtn;
  };

  const renderTask = (project, obj) => {
    render.container(`task-${project}-${obj.name}`, `project-${project}`, ['task-container']);
    render.container(`task-${project}-${obj.name}-name-container`, `task-${project}-${obj.name}`, ['flex-grid']);
    const completeTaskBtn = render.container(`task-${project}-${obj.name}-complete-task-btn`, `task-${project}-${obj.name}-name-container`, ['col-1', 'complete-btn'], 'button');
    render.container(`task-${project}-${obj.name}-name`, `task-${project}-${obj.name}-name-container`, ['col-10', 'task-field', 'minibox', 'column']);
    render.container(`task-${project}-${obj.name}-name-text`, `task-${project}-${obj.name}-name`).textContent = obj.name;
    render.container(`task-${project}-${obj.name}-content-container`, `task-${project}-${obj.name}`, ['flex-grid']);
    render.container(`task-${project}-${obj.name}-content`, `task-${project}-${obj.name}-content-container`, ['col-10', 'task-field']).textContent = obj.content;
    render.container(`task-${project}-${obj.name}-content-container-buttons`, `task-${project}-${obj.name}-content-container`, ['col-2', 'flex-grid', 'minibox']);
    const editBtn = render.container(`task-${project}-${obj.name}-edit-button`, `task-${project}-${obj.name}-content-container-buttons`, ['btn-secondary', 'col-12'], 'button');
    editBtn.textContent = 'Edit Task';
    const deleteBtn = render.container(`task-${project}-${obj.name}-delete-button`, `task-${project}-${obj.name}-content-container-buttons`, ['btn-danger', 'col-12'], 'button');
    deleteBtn.textContent = 'Delete Task';
    render.container(`task-${project}-${obj.name}-details-container`, `task-${project}-${obj.name}`, ['flex-grid']);
    const difficultyInfo = render.container(`task-${project}-${obj.name}-details-difficulty`, `task-${project}-${obj.name}-details-container`, ['col-6', 'task-field']);
    difficultyInfo.textContent = obj.difficulty;
    const dateInfo = render.container(`task-${project}-${obj.name}-details-date`, `task-${project}-${obj.name}-details-container`, ['col-6', 'task-field']);
    dateInfo.textContent = obj.date;
    render.container(`task-${project}-${obj.name}-todo`, `task-${project}-${obj.name}`);
    const todoBtn = render.container(`task-${project}-${obj.name}-todo-button`, `task-${project}-${obj.name}`, ['btn-secondary', 'col-12', 'margin-1'], 'button');
    todoBtn.textContent = 'Add new Todo';
    return {
      todoBtn,
      editBtn,
      deleteBtn,
      completeBtn: completeTaskBtn,
      dateInfo,
      difficultyInfo,
    };
  };

  const renderTodo = (project, taskName, todo) => {
    render.container(`task-${project}-${taskName}-${todo}-todo`, `task-${project}-${taskName}-todo`, ['flex-grid', 'todo-container']);
    const checkBtn = render.container(`task-${project}-${taskName}-${todo}-todo-container-button`, `task-${project}-${taskName}-${todo}-todo`, ['col-1', 'complete-btn'], 'button');
    render.container(`todo-${project}-${taskName}-${todo}-todo-container-description`, `task-${project}-${taskName}-${todo}-todo`, 'col-10').textContent = JSON.parse(todo)[0];
    const deleteBtn = render.container(`task-${project}-${taskName}-${todo}-todo-container-button-delete`, `task-${project}-${taskName}-${todo}-todo`, ['col-1', 'btn-danger'], 'button');
    deleteBtn.textContent = 'X';
    return {
      checkBtn,
      deleteBtn,
    };
  };

  const renderCheckedTodo = (project, taskName, todo) => {
    render.container(`task-${project}-${taskName}-${todo}-todo`, `task-${project}-${taskName}-todo`, 'flex-grid');
    const checkBtn = render.container(`task-${project}-${taskName}-${todo}-todo-container-button`, `task-${project}-${taskName}-${todo}-todo`, ['col-1', 'complete-btn'], 'button');
    render.container(`todo-${project}-${taskName}-${todo}-todo-container-description`, `task-${project}-${taskName}-${todo}-todo`, 'col-10').textContent = JSON.parse(todo)[0];
    return { checkBtn };
  };

  const newProjectBtn = () => {
    render.container('new-project-btn-container', 'content-section', ['flex-grid', 'center']);
    const btn = render.container('new-project-btn', 'new-project-btn-container', ['new-project-btn'], 'button');
    btn.textContent = '+';
    return (btn);
  };

  const noProjectWarning = () => {
    const warning = render.container('no-project-warning', 'content-section', ['no-project-warning']);
    warning.textContent = 'Nothing to display here. Press "+" to create a new project';
    return warning;
  };

  return {
    renderProject, renderCheckedTodo, renderTask, newProjectBtn, renderTodo, noProjectWarning,
  };
})();

export default todoTab;
