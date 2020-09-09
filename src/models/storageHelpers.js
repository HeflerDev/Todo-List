import userData from './userData'

const storageHelpers = (() => {
    /*
     * Since the localStorage has 2 layers, this file adds aditional helpers
     */

    const findDataIndexByKey = (key, value) => {
        let item = localStorage.getItem(key);
        let result = -1;
        JSON.parse(item).forEach((data, index) => {
            let obj = JSON.parse(data);
            if (value === obj.name) {
                result = index;
            } else {
                console.log('findDataIndexByKey:Error: No matching found');
            }
        });
        return result;
    }

    const removeTaskFromStorage = (key, value) => {
        let array = JSON.parse(localStorage.getItem(key));
        console.log(array);
        array.splice(findDataIndexByKey(key, value), 1);
        console.log(array);
        localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(array));
    }

    const createNewProject = (key) => {
        localStorage.setItem(key, JSON.stringify([]));
    }

    const addNewTaskToProject = (key, obj) => {
        let item = JSON.parse(localStorage.getItem(key));
        localStorage.removeItem(key);
        item.unshift(JSON.stringify(obj));
        localStorage.setItem(key, JSON.stringify(item));
    }

    const addNewTodoToTask = (key, obj, todo) => {
        let taskIndex = findDataIndexByKey(key, obj.name);
        if (taskIndex !== -1) {
            let project = JSON.parse(localStorage.getItem(key));
            let task = JSON.parse(project[taskIndex]);
            task.todos.push(JSON.stringify([todo, false]));
            removeTaskFromStorage(key, obj.name);
            addNewTaskToProject(key, task);
        }
    }

    return {
        addNewTaskToProject,
        addNewTodoToTask,
        createNewProject,
        removeTaskFromStorage,
        findDataIndexByKey
    }
})();

export default storageHelpers;
