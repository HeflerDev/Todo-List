import render from './render';
import storageHelpers from '../models/storageHelpers';

const todoTab = (() => {

    const renderProject = (elementId) => {
        render.container(`project-${elementId}`, 'content-section', ['box']);

        render.container(`project-${elementId}-container`, `project-${elementId}`, 'flex-grid');
        render.container(`project-${elementId}-name`, `project-${elementId}-container`, ['col-12', 'col-m-10']);
        let text = render.container(elementId, `project-${elementId}-name`, ['minibox', 'center'], 'h2');
        text.textContent = elementId;
        let newTaskBtn = render.container(`project-${elementId}-button`, `project-${elementId}-container`, ['col-2', 'minibox'], 'button');
        newTaskBtn.textContent = 'Add New Task';
        return newTaskBtn ;
    }

    const renderTask = (project, obj) => {
        render.container(`task-${project}-${obj.name}`, `project-${project}`, ['task-container']);
        render.container(`task-${project}-${obj.name}-name-container`, `task-${project}-${obj.name}`, ['flex-grid'])
            let completeTaskBtn = render.container(`task-${project}-${obj.name}-complete-task-btn`, `task-${project}-${obj.name}-name-container`, ['col-1', 'btn-primary'], 'button');
            completeTaskBtn.textContent = 'Complete Task';
            render.container(`task-${project}-${obj.name}-name`, `task-${project}-${obj.name}-name-container`, ['col-11', 'task-field']).textContent = obj.name;
        render.container(`task-${project}-${obj.name}-content-container`, `task-${project}-${obj.name}`, ['flex-grid']);
            render.container(`task-${project}-${obj.name}-content`, `task-${project}-${obj.name}-content-container`, ['col-10', 'task-field']).textContent = obj.content;
            render.container(`task-${project}-${obj.name}-content-container-buttons`, `task-${project}-${obj.name}-content-container`, ['col-2', 'flex-grid']);
                let editBtn = render.container(`task-${project}-${obj.name}-edit-button`, `task-${project}-${obj.name}-content-container-buttons`, ['btn-secondary', 'col-12'], 'button');
                editBtn.textContent = 'Edit Task';
                let deleteBtn = render.container(`task-${project}-${obj.name}-delete-button`, `task-${project}-${obj.name}-content-container-buttons`, ['btn-danger', 'col-12'], 'button');
                deleteBtn.textContent = 'Delete Task';
        render.container(`task-${project}-${obj.name}-details-container`, `task-${project}-${obj.name}`, ['flex-grid']);
            render.container(`task-${project}-${obj.name}-details-difficulty`, `task-${project}-${obj.name}-details-container`, ['col-6', 'task-field']).textContent = obj.difficulty;
            render.container(`task-${project}-${obj.name}-details-date`, `task-${project}-${obj.name}-details-container`, ['col-6', 'task-field']).textContent = obj.date;
        render.container(`task-${project}-${obj.name}-todo`, `task-${project}-${obj.name}`)
        let todoBtn = render.container(`task-${project}-${obj.name}-todo-button`, `task-${project}-${obj.name}`, ['btn-secondary', 'col-12'], 'button');
        todoBtn.textContent = 'Add new Todo';
        return {
            'todoBtn':todoBtn,
            'editBtn':editBtn,
            'deleteBtn':deleteBtn,
            'completeBtn':completeTaskBtn
        }
    };

    const renderTodo = (project, taskName, todo) => {
        render.container(`task-${project}-${taskName}-${todo}-todo`, `task-${project}-${taskName}-todo`, 'flex-grid');
            let checkBtn = render.container(`task-${project}-${taskName}-${todo}-todo-container-button`, `task-${project}-${taskName}-${todo}-todo`, 'col-1', 'button');
            render.container(`todo-${project}-${taskName}-${todo}-todo-container-description`, `task-${project}-${taskName}-${todo}-todo`, 'col-10').textContent = JSON.parse(todo)[0]
            let deleteBtn = render.container(`task-${project}-${taskName}-${todo}-todo-container-button-delete`, `task-${project}-${taskName}-${todo}-todo`, 'col-1', 'button');
        return {
            checkBtn,
            deleteBtn
        }
    };

    const newProjectBtn = () => {
        let btn = render.container('new-project-btn', 'content-section', ['button'], 'button');
        btn.textContent = 'New Project' ;
        return(btn);
    };

    return { renderProject, renderTask, newProjectBtn, renderTodo }
})();

export default todoTab ;
