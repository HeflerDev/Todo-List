import storageHelpers from './models/storageHelpers';
import todoTab from './views/todoTab';

const main = (() => {
    console.log(document.getElementById('content-section'));
    todoTab.displayProject('hello');
})();
