import render from './render';
import storageHelpers from '../models/storageHelpers';

const todoTab = (() => {
    // id pay classo
    const project = (elementId) => {
        render.container(`project-${elementId}`, 'content-section');
        render.container(`project-${elementId}-name`, `project-${elementId}`);
        let text = document.createElement('h2');
        text.textContent = elementId;
        document.getElementById(`project-${elementId}-name`).appendChild(text);
    }

    const newProjectBtn = () => {
        let btn = render.container('new-project-btn', 'content-section', ['button'], 'button');
        btn.textContent = 'New Project' ;
        return(btn);
    };

    return { project, newProjectBtn }
})();

export default todoTab ;
