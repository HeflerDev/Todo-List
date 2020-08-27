import render from './render';
import storageHelpers from '../models/storageHelpers';

const todoTab = (() => {
    // id pay classo
    const displayProject = (elementId) => {
        render.container(`project-${elementId}`, 'content-section');
        render.container(`project-${elementId}-name`, `project-${elementId}`);
        let text = document.createElement('h2');
        text.textContent = elementId;
        document.getElementById(`project-${elementId}-name`).appendChild(text);
    }
    return { displayProject }
})();

export default todoTab ;
