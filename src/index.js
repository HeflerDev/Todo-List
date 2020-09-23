import storageHelpers from './models/storageHelpers';
import todoTab from './views/todoTab';
import todoTabController from './controllers/todoTabController';
import forms from './views/forms';
import sideContentController from './controllers/sideContentController';

const main = (() => {
  document.getElementById('todo-tab-btn').addEventListener('click', () => {
    todoTabController.displayTabContent();
  });

  document.getElementById('todo-tab-btn-completed').addEventListener('click', () => {
    todoTabController.displayTabCompletedContent();
  });
})();
