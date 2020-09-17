import storageHelpers from './models/storageHelpers';
import todoTab from './views/todoTab';
import todoTabController from './controllers/todoTabController';
import forms from './views/forms';

const main = (() => {
    todoTabController();
})();
