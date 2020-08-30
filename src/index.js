import storageHelpers from './models/storageHelpers';
import todoTab from './views/todoTab';
import display from './controllers/display';
import forms from './views/forms';

const main = (() => {
    let btn = todoTab.newProjectBtn();
    btn.addEventListener('click', (() => {
        forms.newProjectForm();
    }));
})();
