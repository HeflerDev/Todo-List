import storageHelpers from './models/storageHelpers';
import todoTab from './views/todoTab';
import todoTabController from './controllers/todoTabController';
import forms from './views/forms';
import sideContentController from './controllers/sideContentController';

const main = (() => {
    todoTabController.displayTabCompletedContent();
    document.getElementById('todo-tab-btn').addEventListener('click', () => {
        todoTabController();
        // Display Tasks Tab
    });

    document.getElementById('todo-tab-btn-completed').addEventListener('click', () => {
        // Display CompletedTasks
    });
})();
