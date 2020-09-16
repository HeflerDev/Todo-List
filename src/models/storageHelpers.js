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
        array.splice(findDataIndexByKey(key, value), 1);
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

    const accessTodoFromTask = (key, taskName, todo) => {
        let taskIndex = storageHelpers.findDataIndexByKey(key, taskName);
        let stg = JSON.parse(localStorage.getItem(key));
        let task = JSON.parse(stg[taskIndex]);
        let todoIndex = -1;
        task.todos.forEach((item, index) => {
            if (JSON.parse(item)[0] === todo){
                todoIndex = index;
            }
        });
        return todoIndex ;
    };

    const checkIfTodoIsCompleted = (key, taskName, todo) => {
        let taskIndex = storageHelpers.findDataIndexByKey(key, taskName);
        let project = JSON.parse(localStorage.getItem(key));
        let task = JSON.parse(project[taskIndex]);
        let foundTodo = task.todos[accessTodoFromTask(key, taskName, todo)];
        return JSON.parse(foundTodo)[1];
    };

    return {
        addNewTaskToProject,
        addNewTodoToTask,
        createNewProject,
        removeTaskFromStorage,
        findDataIndexByKey,
        accessTodoFromTask,
        checkIfTodoIsCompleted
    }
})();

export default storageHelpers;
