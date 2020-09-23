import todoTabController from './controllers/todoTabController';
import sideContentController from './controllers/sideContentController';

(() => {
  sideContentController();

  document.getElementById('todo-tab-btn').addEventListener('click', () => {
    todoTabController.displayTabContent();
  });

  document.getElementById('todo-tab-btn-completed').addEventListener('click', () => {
    todoTabController.displayTabCompletedContent();
  });
})();
