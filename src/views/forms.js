import render from './render';

const forms = (() => {

    const newProjectForm = () => {
        console.log('Rendering new Project form');
        render.container('project-form-container', 'content-section', null, 'div');
        render.container('project-form', 'project-form-container', ['flex-grid', 'around', 'box', 'row', 'col-l-5', 'col-12'], 'form');
        const label = render.container(null, 'project-form', ['col-12', 'col-m-4', 'col-l-4'], 'label');
        label.textContent = 'Project Name';
        render.container('project-name', 'project-form', ['col-12', 'col-m-8', 'col-l-8'], 'input');
        const submitBtn = render.container('project-submit-btn', 'project-form', ['col-12'], 'input');
        submitBtn.type = 'button';
        submitBtn.value = 'Create Project!';
    };

    const newTaskForm = () => {

    };


    return { newProjectForm, newTaskForm };
})();

export default forms;
