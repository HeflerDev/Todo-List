import render from './render';
import storageHelpers from '../models/storageHelpers';

const todoTab = (() => {

    const renderProject = (elementId) => {
        render.container(`project-${elementId}`, 'content-section');
        render.container(`project-${elementId}-name`, `project-${elementId}`);
        let text = render.container(elementId, `project-${elementId}-name`, null, 'h2');
        text.textContent = elementId;
        let newTaskBtn = render.container(`project-${elementId}-button`, `project-${elementId}`, null, 'button');
        newTaskBtn.textContent = 'Add New Task';
        return newTaskBtn ;
    }

    const renderTask = (project, obj) => {
        render.container(`task-${project}-${obj.name}`, `project-${project}`);
        render.container(`task-${project}-${obj.name}-name`, `task-${project}-${obj.name}`).textContent = obj.name;
        render.container(`task-${project}-${obj.name}-content`, `task-${project}-${obj.name}`).textContent = obj.content;
        render.container(`task-${project}-${obj.name}-todo`, `task-${project}-${obj.name}`)
        let todoBtn = render.container(`task-${project}-${obj.name}-todo-button`, `task-${project}-${obj.name}`, null, 'button');
        todoBtn.textContent = 'Add new Todo';
        return todoBtn ;
    };

    const renderTodo = (project, taskName, todo) => {
        render.container(`task-${project}-${taskName}-${todo}-todo`, `task-${project}-${taskName}-todo`);
        let checkBtn = render.container(`task-${project}-${taskName}-${todo}-todo-container-button`, `task-${project}-${taskName}-${todo}-todo`);
        render.container(`todo-${project}-${taskName}-${todo}-todo-container-description`, `task-${project}-${taskName}-${todo}-todo`).textContent = JSON.parse(todo)[0]
        return checkBtn ;
    };

    const newProjectBtn = () => {
        let btn = render.container('new-project-btn', 'content-section', ['button'], 'button');
        btn.textContent = 'New Project' ;
        return(btn);
    };

    return { renderProject, renderTask, newProjectBtn, renderTodo }
})();

export default todoTab ;
