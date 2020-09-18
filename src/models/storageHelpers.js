const storageHelpers = (() => {

    const createNewProject = (key) => {
        localStorage.setItem(key, JSON.stringify([]));
    }

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

    const retrieveTaskData = (key, taskName) => {
        let project = JSON.parse(localStorage.getItem(key));
        return JSON.parse(project[findDataIndexByKey(key, taskName)]);
    };

    const removeTaskFromProject = (key, value) => {
        let array = JSON.parse(localStorage.getItem(key));
        array.splice(findDataIndexByKey(key, value), 1);
        localStorage.removeItem(key);
        localStorage.setItem(key, JSON.stringify(array));
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
            removeTaskFromProject(key, obj.name);
            addNewTaskToProject(key, task);
        }
    }

    const removeTodoFromTask = (key, taskName, todoDescription) => {
        let task = retrieveTaskData(key, taskName);
        task.todos.splice(getTodoIndex(key, taskName, todoDescription));
        removeTaskFromProject(key, taskName);
        addNewTaskToProject(key, task);
    };

    const getTodoIndex = (key, taskName, todo) => {
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
        let foundTodo = task.todos[getTodoIndex(key, taskName, todo)];
        return JSON.parse(foundTodo)[1];
    };

    const changeTaskState = (key, taskName) => {
        console.log(key, taskName)
        let project = JSON.parse(localStorage.getItem(key));
        let task = JSON.parse(project[findDataIndexByKey(key, taskName)]);
        task.status = true;
        removeTaskFromProject(key, taskName);
        addNewTaskToProject(key, task);
    };

    const changeTodoState = (key, taskName, todoDescription) => {
        let project = JSON.parse(localStorage.getItem(key));
        let task = JSON.parse(project[storageHelpers.findDataIndexByKey(key, taskName)]);
        let todo = task.todos.splice(storageHelpers.getTodoIndex(key, taskName, todoDescription), 1);
        todo = JSON.parse(todo);
        if (todo[1] === false) {
            todo[1] = true;
        } else {
            todo[1] = false;
        }
        task.todos.push(JSON.stringify(todo));
        removeTaskFromProject(key, taskName);
        addNewTaskToProject(key, task);
    };

    return {
        addNewTaskToProject,
        addNewTodoToTask,
        createNewProject,
        removeTaskFromProject,
        removeTodoFromTask,
        findDataIndexByKey,
        getTodoIndex,
        checkIfTodoIsCompleted,
        changeTodoState,
        changeTaskState,
        retrieveTaskData
    }
})();

export default storageHelpers;
