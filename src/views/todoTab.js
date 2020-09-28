import render from './render';

const todoTab = (() => {
  const renderProject = (elementId) => {
    render.container(`project-${elementId}`, 'content-section', ['box', 'whole-project-container']);
    render.container(`project-${elementId}-container`, `project-${elementId}`, ['flex-grid', 'project-container']);
    render.container(`project-${elementId}-name`, `project-${elementId}-container`, ['col-12', 'col-m-10']);
    const text = render.container(elementId, `project-${elementId}-name`, ['minibox', 'center'], 'h2');
    text.textContent = elementId;
    const newTaskBtn = render.container(`project-${elementId}-button`, `project-${elementId}-container`, ['col-2', 'minibox', 'no-margin', 'new-task-btn'], 'button');
    render.container(null, `project-${elementId}-button`, ['minibox']).textContent = 'Add New Task';
    return newTaskBtn;
  };

  const renderWarningProjectMessage = (message) => {
    render.container(message, 'project-form-container', ['col-12', 'warning-messag']).texContent = message;
  };

  const renderWarningMessage = (message) => {
    render.container(message, 'task-form-warning-container', ['col-12', 'warning-message']).textContent = message;
  };

  const renderTask = (project, obj) => {
    const idString = `task-${project}-${obj.name}`

    render.container(`${idString}`, `project-${project}`, ['task-container']);
    render.container(`${idString}-container`, `task-${project}-${obj.name}`, ['flex-grid']);
        render.container(`${idString}-complete-task-container`, `${idString}-container`, ['col-1', 'minibox', 'no-bounds'])
            const completeTaskBtn = render.container(`${idString}-complete-task-btn`, `${idString}-complete-task-container`, ['complete-btn', 'minibox'], 'button');
        render.container(`${idString}-content-task-name`, `${idString}-container`, ['col-10', 'minibox', 'no-bounds']).textContent = obj.name;
        render.container(`${idString}-delete-button-container`, `${idString}-container`, ['col-1', 'minibox']);
            const deleteBtn = render.container(null, `${idString}-delete-button-container`, ['btn-danger'], 'button');
            deleteBtn.title = 'Delete Task'
            const editBtn = render.container(null, `${idString}-delete-button-container`, ['minibox', 'no-bounds', 'btn-edit'], 'button');
            editBtn.title = 'Edit Task';
        render.container(null, `${idString}-container`, ['col-1']);
        render.container(null, `${idString}-container`, ['col-11', 'start', 'task-description']).textContent = obj.content;
        render.container(null, `${idString}-container`, 'col-1')
        render.container(`${idString}-info-container`, `${idString}-container`, ['col-11', 'minibox', 'between', 'no-bounds']);
            const difficultyInfo = render.container(`${idString}-details-difficulty`, `${idString}-info-container`);
            difficultyInfo.textContent = obj.difficulty;
            const dateInfo = render.container(`task-${project}-${obj.name}-details-date`, `${idString}-info-container`);
            dateInfo.textContent = obj.date;
        render.container(null, `${idString}-container`, 'col-1')
        render.container(`${idString}-todo-button-container`, `${idString}-container`, ['col-11', 'minibox', 'end', 'no-bounds']);
            const todoBtn =  render.container(`${idString}-todo-button`, `${idString}-todo-button-container`, ['no-bounds', 'btn-todo']);
            todoBtn.textContent = '+ Todo'
        render.container(null, `${idString}-container`, 'col-1')
        render.container(`${idString}-todo-container`, `${idString}-container`, 'col-11')
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
    const idString = `task-${project}-${taskName}-${todo}`;
    render.container(`${idString}-todo`, `task-${project}-${taskName}-todo-container`, ['flex-grid', 'todo-container']);
    render.container(`${idString}-todo-container-complete-button-container`, `${idString}-todo`, 'col-1');
        const checkBtn = render.container(`${idString}-todo-container-button`, `${idString}-todo-container-complete-button-container`, 'complete-btn', 'button');
    const [todoDescription] = JSON.parse(todo);
    render.container(`todo-${project}-${taskName}-${todo}-todo-container-description`, `task-${project}-${taskName}-${todo}-todo`, 'col-10').textContent = todoDescription;
    render.container(`${idString}-todo-container-delete-button-container`, `${idString}-todo`, 'col-1');
        const deleteBtn = render.container(`${idString}-todo-container-delete-button`, `${idString}-todo-container-delete-button-container`, 'soft-button');
        deleteBtn.textContent = 'X';
    return {
      checkBtn,
      deleteBtn,
    };
  };

  const renderCheckedTodo = (project, taskName, todo) => {
    const idString = `task-${project}-${taskName}-${todo}`;
    render.container(`${idString}-todo`, `task-${project}-${taskName}-todo-container`, ['flex-grid', 'completed-todo']);
    render.container(`${idString}-todo-container-complete-button-container`, `${idString}-todo`, 'col-1');
        const checkBtn = render.container(`${idString}-todo-container-button`, `${idString}-todo-container-complete-button-container`, 'complete-btn', 'button');
    const [todoDescription] = JSON.parse(todo);
    render.container(`todo-${project}-${taskName}-${todo}-todo-container-description`, `task-${project}-${taskName}-${todo}-todo`, 'col-10').textContent = todoDescription;
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
    renderWarningProjectMessage,
    renderProject,
    renderCheckedTodo,
    renderTask,
    newProjectBtn,
    renderTodo,
    noProjectWarning,
    renderWarningMessage,
  };
})();

export default todoTab;
