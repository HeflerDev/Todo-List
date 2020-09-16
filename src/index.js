import storageHelpers from './models/storageHelpers';
import todoTabController from './controllers/todoTabController';
import todoTab from './views/todoTab';
import forms from './views/forms';

const main = (() => {
    todoTabController();
})();
