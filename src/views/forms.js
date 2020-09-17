import render from './render';

const forms = (() => {

    const newProjectForm = () => {
        console.log('Rendering new Project form');
            render.container('project-form-container', 'content-section', null, 'div');
            render.container('project-form', 'project-form-container', ['flex-grid', 'around', 'box', 'row', 'col-l-5', 'col-12'], 'form');
            const label = render.container('p', 'project-form', ['col-12', 'col-m-4', 'col-l-4'], 'label');
            label.textContent = 'Project Name';
            render.container('project-name', 'project-form', ['col-12', 'col-m-8', 'col-l-8'], 'input');
            const submitBtn = render.container('project-submit-btn', 'project-form', ['col-12'], 'input');
            submitBtn.type = 'button';
            submitBtn.value = 'Create Project!';
        return submitBtn;
    };

    const newTaskForm = (project) => {
        console.log(`Rendering ${project} task form`);
        render.container('task-form-container', 'content-section', 'col-12');
        render.container('task-form', 'task-form-container', null, 'form');
        render.container('name-label', 'task-form', null, 'label').textContent = 'Name';
        render.container('name-input', 'task-form', null, 'input')
        document.getElementById('task-form').appendChild(document.createElement('br'));

        render.container('content-label', 'task-form', null, 'label').textContent = 'Content';
        render.container('content-input', 'task-form', null, 'textarea');
        document.getElementById('task-form').appendChild(document.createElement('br'));

        render.container('difficulty-label', 'task-form', null, 'label').textContent = 'Difficulty';
        render.container('difficulty-select', 'task-form', null, 'select');
        let optOne = render.container('difficulty-option-1', 'difficulty-select', null, 'option');
            optOne.textContent = 'Easy';
            optOne.value = 'Easy' ;
        let optTwo = render.container('difficulty-option-2', 'difficulty-select', null, 'option');
            optTwo.textContent = 'Medium';
            optTwo.value = 'Medium' ;
        let optThree = render.container('difficulty-option-3', 'difficulty-select', null, 'option');
            optThree.textContent = 'Hard';
            optThree.value = 'Hard' ;
        render.container('date-label', 'task-form', null, 'label');
        let datePick = render.container('date-input', 'task-form', null, 'input');
        datePick.type = 'date';
        let submitBtn = render.container('task-submit', 'task-form', null, 'input');
        submitBtn.value = 'Submit';
        submitBtn.type = 'submit';
        return submitBtn;
    };

    const newTodoForm = () => {
        render.container('todo-form-container', 'content-section', null, 'form');
        render.container('todo-form-label', 'todo-form-container', null, 'label');
        render.container('todo-form-input', 'todo-form-container', null, 'input');
        let submitBtn = render.container('todo-form-submit', 'todo-form-container', null, 'input');
        submitBtn.value = 'Create Todo';
        submitBtn.type = 'submit';
        return submitBtn;
    }
    return { newProjectForm, newTaskForm, newTodoForm };
})();

export default forms;
