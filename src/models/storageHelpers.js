const storageHelpers = (() => {
  const createNewProject = (key) => {
    localStorage.setItem(key, JSON.stringify([]));
  };

  const checkForProjectExistence = () => {
    if (localStorage.length > 0) {
      return true;
    }
    return false;
  };

  const findDataIndexByKey = (key, value) => {
    const item = localStorage.getItem(key);
    let result = -1;
    JSON.parse(item).forEach((data, index) => {
      const obj = JSON.parse(data);
      if (value === obj.name) {
        result = index;
      }
    });
    return result;
  };

  const retrieveTaskData = (key, taskName) => {
    const project = JSON.parse(localStorage.getItem(key));
    return JSON.parse(project[findDataIndexByKey(key, taskName)]);
  };

  const removeTaskFromProject = (key, value) => {
    const array = JSON.parse(localStorage.getItem(key));
    array.splice(findDataIndexByKey(key, value), 1);
    localStorage.removeItem(key);
    localStorage.setItem(key, JSON.stringify(array));
  };

  const addNewTaskToProject = (key, obj) => {
    const item = JSON.parse(localStorage.getItem(key));
    localStorage.removeItem(key);
    item.unshift(JSON.stringify(obj));
    localStorage.setItem(key, JSON.stringify(item));
  };

  const addNewTodoToTask = (key, obj, todo) => {
    const taskIndex = findDataIndexByKey(key, obj.name);
    if (taskIndex !== -1) {
      const project = JSON.parse(localStorage.getItem(key));
      const task = JSON.parse(project[taskIndex]);
      task.todos.push(JSON.stringify([todo, false]));
      removeTaskFromProject(key, obj.name);
      addNewTaskToProject(key, task);
    }
  };

  const getTodoIndex = (key, taskName, todo) => {
    const taskIndex = storageHelpers.findDataIndexByKey(key, taskName);
    const stg = JSON.parse(localStorage.getItem(key));
    const task = JSON.parse(stg[taskIndex]);
    let todoIndex = -1;
    task.todos.forEach((item, index) => {
      if (JSON.parse(item)[0] === todo) {
        todoIndex = index;
      }
    });
    return todoIndex;
  };

  const removeTodoFromTask = (key, taskName, todoDescription) => {
    const task = retrieveTaskData(key, taskName);
    task.todos.splice(getTodoIndex(key, taskName, todoDescription), 1);
    removeTaskFromProject(key, taskName);
    addNewTaskToProject(key, task);
  };

  const checkIfTodoIsCompleted = (key, taskName, todo) => {
    const taskIndex = storageHelpers.findDataIndexByKey(key, taskName);
    const project = JSON.parse(localStorage.getItem(key));
    const task = JSON.parse(project[taskIndex]);
    const foundTodo = task.todos[getTodoIndex(key, taskName, todo)];
    return JSON.parse(foundTodo)[1];
  };

  const changeTaskState = (key, taskName) => {
    const project = JSON.parse(localStorage.getItem(key));
    const task = JSON.parse(project[findDataIndexByKey(key, taskName)]);
    if (task.status) {
      task.status = false;
    } else {
      task.status = true;
    }
    removeTaskFromProject(key, taskName);
    addNewTaskToProject(key, task);
  };

  const changeTodoState = (key, taskName, todoDescription) => {
    const project = JSON.parse(localStorage.getItem(key));
    const task = JSON.parse(project[storageHelpers.findDataIndexByKey(key, taskName)]);
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

  const checkIfDateIsLate = (key, taskName) => {
    const task = retrieveTaskData(key, taskName);
    if (Date.parse(task.date) < Date.now()) {
      return true;
    }
    return false;
  };

  const gatherStorageData = () => {
    let completedTasks = 0;
    let uncompletedTasks = 0;
    let onTimeTasks = 0;
    let lateTasks = 0;
    Object.keys(localStorage).forEach((key) => {
      JSON.parse(localStorage.getItem(key)).forEach((task) => {
        const taskObj = JSON.parse(task);
        if (taskObj.status === true) {
          completedTasks += 1;
        } else {
          uncompletedTasks += 1;
        }
        if (checkIfDateIsLate(key, taskObj.name)) {
          if (taskObj.status === false) {
            lateTasks += 1;
          }
        } else {
          onTimeTasks += 1;
        }
      });
    });
    return {
      completed: completedTasks.toString(),
      uncompleted: uncompletedTasks.toString(),
      onTime: onTimeTasks.toString(),
      lateTime: lateTasks.toString(),
    };
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
    checkForProjectExistence,
    retrieveTaskData,
    gatherStorageData,
    checkIfDateIsLate,
  };
})();

export default storageHelpers;
