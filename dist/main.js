/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controllers/sideContentController.js":
/*!**************************************************!*\
  !*** ./src/controllers/sideContentController.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_sideContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/sideContent */ "./src/views/sideContent.js");
/* harmony import */ var _models_storageHelpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/storageHelpers */ "./src/models/storageHelpers.js");



const sideContentController = () => {
  const data = _models_storageHelpers__WEBPACK_IMPORTED_MODULE_1__["default"].gatherStorageData();
  const btn = _views_sideContent__WEBPACK_IMPORTED_MODULE_0__["default"].renderData(data.completed, data.uncompleted, data.onTime, data.lateTime);
  btn.completed.addEventListener('click', () => {
    _models_storageHelpers__WEBPACK_IMPORTED_MODULE_1__["default"].gatherCompletedTasksNames().forEach((taskName) => {
      if (!document.getElementById(`info-${taskName}`)) {
        _views_sideContent__WEBPACK_IMPORTED_MODULE_0__["default"].displayInfo(taskName);
      }
    });
  });
  btn.uncompleted.addEventListener('click', () => { });
};

/* harmony default export */ __webpack_exports__["default"] = (sideContentController);


/***/ }),

/***/ "./src/controllers/todoTabController.js":
/*!**********************************************!*\
  !*** ./src/controllers/todoTabController.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../views/forms */ "./src/views/forms.js");
/* harmony import */ var _views_todoTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../views/todoTab */ "./src/views/todoTab.js");
/* harmony import */ var _models_userData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/userData */ "./src/models/userData.js");
/* harmony import */ var _models_storageHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/storageHelpers */ "./src/models/storageHelpers.js");




/*
 * As a controller, this is responsible for communicating with the view
 * and databse in order to gather and store data
 */
const todoTabController = (() => {
  /*
     * Some helpers to work in the tab displaying
     */
  const submitTaskForm = (key) => {
    const name = document.getElementById('name-input').value;
    const content = document.getElementById('content-input').value;
    const difficulty = document.getElementById('difficulty-select').value;
    const expiringDate = document.getElementById('date-input').value;
    const obj = _models_userData__WEBPACK_IMPORTED_MODULE_2__["default"].createTaskObj(name, content, difficulty, expiringDate);
    const validate = _models_userData__WEBPACK_IMPORTED_MODULE_2__["default"].validateTaskInput(obj);
    if (Array.isArray(validate)) {
      if (document.getElementsByClassName('warning-message')) {
        const array = Array.from(document.getElementsByClassName('warning-message'));
        array.forEach((item) => { item.remove(); });
      }
      validate.forEach((message) => _views_todoTab__WEBPACK_IMPORTED_MODULE_1__["default"].renderWarningMessage(message));
      return false;
    }
    _models_storageHelpers__WEBPACK_IMPORTED_MODULE_3__["default"].addNewTaskToProject(key, obj);
    document.getElementById('task-form-container').remove();
    return true;
  };

  const completeTodo = (key, taskName, todoDescription) => {
    _models_storageHelpers__WEBPACK_IMPORTED_MODULE_3__["default"].changeTodoState(key, taskName, todoDescription);
  };

  const completeTask = (key, taskName) => {
    _models_storageHelpers__WEBPACK_IMPORTED_MODULE_3__["default"].changeTaskState(key, taskName);
  };

  const placeholdData = (obj) => {
    document.getElementById('name-input').value = obj.name;
    document.getElementById('content-input').value = obj.content;
    document.getElementById('difficulty-select').value = obj.difficulty;
    document.getElementById('date-input').value = obj.date;
  };

  const gatherDataFromForm = () => {
    const name = document.getElementById('name-input').value;
    const content = document.getElementById('content-input').value;
    const difficulty = document.getElementById('difficulty-select').value;
    const expiringDate = document.getElementById('date-input').value;
    return _models_userData__WEBPACK_IMPORTED_MODULE_2__["default"].createTaskObj(name, content, difficulty, expiringDate);
  };

  const deleteTodo = (key, taskName, todoDescription) => {
    _models_storageHelpers__WEBPACK_IMPORTED_MODULE_3__["default"].removeTodoFromTask(key, taskName, todoDescription);
  };

  const displayInfoTab = (key, objStr, reload) => {
    const obj = JSON.parse(objStr);
    const info = document.getElementById('task-info-container');
    if (info) {
      info.remove();
    }
    const btns = _views_todoTab__WEBPACK_IMPORTED_MODULE_1__["default"].renderTaskInfo(key, obj);
    btns.editBtn.addEventListener('click', () => {
      document.getElementById('task-info-container').remove();
      if (!document.getElementById('task-form-container')) {
        const editTaskForm = _views_forms__WEBPACK_IMPORTED_MODULE_0__["default"].newTaskForm(key);
        placeholdData(obj);
        editTaskForm.addEventListener('click', () => {
          const item = gatherDataFromForm();
          item.todos = obj.todos;
          const validation = _models_userData__WEBPACK_IMPORTED_MODULE_2__["default"].validateTaskInput(item);
          if (!Array.isArray(validation)) {
            _models_storageHelpers__WEBPACK_IMPORTED_MODULE_3__["default"].removeTaskFromProject(key, obj);
            _models_storageHelpers__WEBPACK_IMPORTED_MODULE_3__["default"].addNewTaskToProject(key, item);
            reload();
          }
        });
      }
    });

    btns.closeBtn.addEventListener('click', () => { document.getElementById('task-info-container').remove(); });

    btns.deleteBtn.addEventListener('click', () => {
      _models_storageHelpers__WEBPACK_IMPORTED_MODULE_3__["default"].removeTaskFromProject(key, obj);
      reload();
    });

    if (_models_storageHelpers__WEBPACK_IMPORTED_MODULE_3__["default"].checkIfDateIsLate(key, obj.name)) {
      btns.dateInfo.classList.add('date-field-warning');
      btns.dateInfo.title = 'Task is Late';
      btns.dateInfo.textContent = `${obj.date} - Task is Late`;
    }
    if (btns.difficultyInfo.textContent === 'Easy') {
      btns.difficultyInfo.classList.add('easy-container');
    } else if (btns.difficultyInfo.textContent === 'Medium') {
      btns.difficultyInfo.classList.add('medium-container');
    } else {
      btns.difficultyInfo.classList.add('hard-container');
    }
  };

  /*
     * This function display the entire todo tab, taking the data from the view
     * and sending to the model
     */

  const displayTabContent = () => {
    if (!document.getElementById('new-project-btn')) {
      _views_todoTab__WEBPACK_IMPORTED_MODULE_1__["default"].newProjectBtn().addEventListener('click', () => {
        _views_forms__WEBPACK_IMPORTED_MODULE_0__["default"].newProjectForm().addEventListener('click', () => {
          const formVal = document.getElementById('project-name').value;
          if (_models_userData__WEBPACK_IMPORTED_MODULE_2__["default"].validateProjectInput(formVal)) {
            _models_storageHelpers__WEBPACK_IMPORTED_MODULE_3__["default"].createNewProject(formVal);
            document.getElementById('project-form-container').remove();
            if (document.getElementById('Invalid Project Name')) {
              document.getElementById('Invalid Project Name').remove();
            }
            displayTabContent();
          } else {
            const message = 'Invalid Project Name';
            if (!document.getElementById(message)) {
              _views_todoTab__WEBPACK_IMPORTED_MODULE_1__["default"].renderWarningProjectMessage(message);
            }
          }
        });
      });
    }
    Object.keys(localStorage).forEach((key) => {
      if (document.getElementById(`project-${_models_userData__WEBPACK_IMPORTED_MODULE_2__["default"].convertToValidId(key)}`)) {
        document.getElementById(`project-${_models_userData__WEBPACK_IMPORTED_MODULE_2__["default"].convertToValidId(key)}`).remove();
      }
      _views_todoTab__WEBPACK_IMPORTED_MODULE_1__["default"].renderProject(key).addEventListener('click', () => {
        _views_forms__WEBPACK_IMPORTED_MODULE_0__["default"].newTaskForm(key).addEventListener('click', () => {
          if (submitTaskForm(key)) {
            displayTabContent();
          }
        });
      });
      JSON.parse(localStorage.getItem(key)).forEach((item) => {
        const obj = JSON.parse(item);
        if (!obj.status) {
          const taskBtns = _views_todoTab__WEBPACK_IMPORTED_MODULE_1__["default"].renderTask(key, obj);
          taskBtns.completeBtn.addEventListener('click', () => {
            completeTask(key, obj.name);
            displayTabContent();
          });
          taskBtns.todoBtn.addEventListener('click', () => {
            const submitBtn = _views_forms__WEBPACK_IMPORTED_MODULE_0__["default"].newTodoForm(key, obj.name);
            submitBtn.addEventListener('click', () => {
              const val = document.getElementById('todo-form-input').value;
              if (_models_userData__WEBPACK_IMPORTED_MODULE_2__["default"].validateTodoInput(val)) {
                _models_storageHelpers__WEBPACK_IMPORTED_MODULE_3__["default"].addNewTodoToTask(key, obj, val);
              }
            });
          });
          if (obj.todos.length > 0) {
            obj.todos.forEach((todo) => {
              const [description] = JSON.parse(todo);
              if (!_models_storageHelpers__WEBPACK_IMPORTED_MODULE_3__["default"].checkIfTodoIsCompleted(key, JSON.parse(item).name, description)) {
                const checkBtn = _views_todoTab__WEBPACK_IMPORTED_MODULE_1__["default"].renderTodo(key, obj.name, todo);
                const [description] = JSON.parse(todo);
                checkBtn.checkBtn.addEventListener('click', () => {
                  completeTodo(key, obj.name, description);
                  displayTabContent();
                });
                checkBtn.deleteBtn.addEventListener('click', () => {
                  deleteTodo(key, obj.name, description);
                  displayTabContent();
                });
              } else {
                const checkBtn = _views_todoTab__WEBPACK_IMPORTED_MODULE_1__["default"].renderCheckedTodo(key, obj.name, todo);
                checkBtn.checkBtn.addEventListener('click', () => {
                  _models_storageHelpers__WEBPACK_IMPORTED_MODULE_3__["default"].changeTodoState(key, obj.name, JSON.parse(todo)[0]);
                  displayTabContent();
                });
                checkBtn.checkBtn.classList.remove('complete-btn');
                checkBtn.checkBtn.classList.add('uncomplete-btn');
                checkBtn.checkBtn.parentElement.classList.add('completed-todo');
              }
            });
          }
          taskBtns.nameBtn.addEventListener('click', () => {
            displayInfoTab(key, item, displayTabContent);
          });
        }
      });
    });
  };

  const displayTabCompletedContent = () => {
    if (document.getElementById('new-project-btn')) {
      document.getElementById('new-project-btn').remove();
    }
    Object.keys(localStorage).forEach((key) => {
      if (document.getElementById(`project-${_models_userData__WEBPACK_IMPORTED_MODULE_2__["default"].convertToValidId(key)}`)) {
        document.getElementById(`project-${_models_userData__WEBPACK_IMPORTED_MODULE_2__["default"].convertToValidId(key)}`).remove();
      }
      _views_todoTab__WEBPACK_IMPORTED_MODULE_1__["default"].renderProject(key).remove();
      JSON.parse(localStorage.getItem(key)).forEach((task) => {
        const obj = JSON.parse(task);
        if (obj.status) {
          const btn = _views_todoTab__WEBPACK_IMPORTED_MODULE_1__["default"].renderTask(key, obj);
          btn.completeBtn.classList.remove('complete-btn');
          btn.completeBtn.classList.add('completed-btn');
          btn.completeBtn.addEventListener('click', () => {
            _models_storageHelpers__WEBPACK_IMPORTED_MODULE_3__["default"].changeTaskState(key, obj.name);
            displayTabCompletedContent();
          });
          btn.todoBtn.disabled = true;
          /*
          btn.editBtn.disabled = true;
          btn.deleteBtn.addEventListener('click', () => {
            storageHelpers.removeTaskFromProject(key, obj);
            displayTabCompletedContent();
          });
*/
        }
      });
    });
  };

  /*
     * Basic flow that will execute the function as soon as it is
     * called
     */

  displayTabContent();
  if (!_models_storageHelpers__WEBPACK_IMPORTED_MODULE_3__["default"].checkForProjectExistence()) {
    _views_todoTab__WEBPACK_IMPORTED_MODULE_1__["default"].noProjectWarning();
  }
  return { displayTabContent, displayTabCompletedContent };
})();

/* harmony default export */ __webpack_exports__["default"] = (todoTabController);


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _controllers_todoTabController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./controllers/todoTabController */ "./src/controllers/todoTabController.js");
/* harmony import */ var _controllers_sideContentController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controllers/sideContentController */ "./src/controllers/sideContentController.js");



(() => {
  Object(_controllers_sideContentController__WEBPACK_IMPORTED_MODULE_1__["default"])();

  document.getElementById('todo-tab-btn').addEventListener('click', () => {
    _controllers_todoTabController__WEBPACK_IMPORTED_MODULE_0__["default"].displayTabContent();
  });

  document.getElementById('todo-tab-btn-completed').addEventListener('click', () => {
    _controllers_todoTabController__WEBPACK_IMPORTED_MODULE_0__["default"].displayTabCompletedContent();
  });
})();


/***/ }),

/***/ "./src/models/storageHelpers.js":
/*!**************************************!*\
  !*** ./src/models/storageHelpers.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

  const gatherCompletedTasksNames = () => {
    const array = [];
    Object.keys(localStorage).forEach((key) => {
      JSON.parse(localStorage.getItem(key)).forEach((task) => {
        const taskObj = JSON.parse(task);
        if (taskObj.status === true) {
          array.push(taskObj.name);
        }
      });
    });
    if (array.length > 0) {
      return array;
    }
    return ["There isn't any completed tasks"];
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
    gatherCompletedTasksNames,
  };
})();

/* harmony default export */ __webpack_exports__["default"] = (storageHelpers);


/***/ }),

/***/ "./src/models/userData.js":
/*!********************************!*\
  !*** ./src/models/userData.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const userData = (() => {
  const createTaskObj = (taskName, taskContent, taskDifficulty, taskDate) => ({
    name: taskName,
    content: taskContent,
    difficulty: taskDifficulty,
    date: taskDate,
    status: false,
    todos: [],
  });

  const convertToValidId = (data) => data.replace(/\s/g, '-');

  // const convertIdToText = (data) => data.replace(/-+/g, ' ');

  const validateProjectInput = (data) => {
    const validData = /^[a-zA-Z]/g;
    return validData.test(data);
  };

  const validateTaskInput = (data) => {
    const formErrors = [];

    if (!/^[a-zA-Z]/.test(data.name)) { formErrors.push('Task name must start with an letter'); }
    if (!data.content) { formErrors.push('Task content must exist'); }
    if (!Date.parse(data.date)) { formErrors.push('Invalid Date input'); }

    if (formErrors.length > 0) {
      return formErrors;
    }
    return 'true';
  };

  const validateTodoInput = (data) => /^[a-zA-Z]/.test(data);

  return {
    createTaskObj, validateProjectInput, validateTodoInput, validateTaskInput, convertToValidId,
  };
})();

/* harmony default export */ __webpack_exports__["default"] = (userData);


/***/ }),

/***/ "./src/views/forms.js":
/*!****************************!*\
  !*** ./src/views/forms.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/views/render.js");


const forms = (() => {
  const newProjectForm = () => {
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('project-form-container', 'new-project-btn-container', ['box', 'col-12'], 'div');
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('project-form', 'project-form-container', ['flex-grid'], 'form');
    const label = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('p', 'project-form', ['col-12'], 'label');
    label.textContent = 'Project Name';
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('project-name', 'project-form', ['col-12'], 'input');
    const submitBtn = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('project-submit-btn', 'project-form', ['col-12', 'btn-primary']);
    submitBtn.textContent = 'Create Project!';
    return submitBtn;
  };

  const newTaskForm = (project) => {
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('task-form-container', project, ['box']);
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('task-form-warning-container', 'task-form-container');
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('task-form', 'task-form-container', 'flex-grid', 'form');
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('name-label', 'task-form', ['col-12'], 'label').textContent = 'Name';
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('name-input', 'task-form', ['col-12'], 'input');
    document.getElementById('task-form').appendChild(document.createElement('br'));

    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('content-label', 'task-form', ['col-12'], 'label').textContent = 'Content';
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('content-input', 'task-form', ['col-12'], 'textarea');
    document.getElementById('task-form').appendChild(document.createElement('br'));

    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('difficulty-label', 'task-form', ['col-12'], 'label').textContent = 'Difficulty';
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('difficulty-select', 'task-form', ['col-12'], 'select');
    const optOne = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('difficulty-option-1', 'difficulty-select', null, 'option');
    optOne.textContent = 'Easy';
    optOne.value = 'Easy';
    const optTwo = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('difficulty-option-2', 'difficulty-select', null, 'option');
    optTwo.textContent = 'Medium';
    optTwo.value = 'Medium';
    const optThree = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('difficulty-option-3', 'difficulty-select', null, 'option');
    optThree.textContent = 'Hard';
    optThree.value = 'Hard';
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('date-label', 'task-form', null, 'label');
    const datePick = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('date-input', 'task-form', ['col-6'], 'input');
    datePick.type = 'date';
    const submitBtn = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('task-submit', 'task-form', ['col-6', 'submit-btn'], 'div');
    submitBtn.textContent = 'Submit';
    return submitBtn;
  };

  const newTodoForm = (project, taskName) => {
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('todo-form-container', `task-${project}-${taskName}-todo-button-container`, ['flex-grid'], 'form');
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('todo-form-label', 'todo-form-container', null, 'label');
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('todo-form-input', 'todo-form-container', null, 'input');
    const submitBtn = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('todo-form-submit', 'todo-form-container', null, 'input');
    submitBtn.value = 'Create Todo';
    submitBtn.type = 'submit';
    return submitBtn;
  };
  return { newProjectForm, newTaskForm, newTodoForm };
})();

/* harmony default export */ __webpack_exports__["default"] = (forms);


/***/ }),

/***/ "./src/views/render.js":
/*!*****************************!*\
  !*** ./src/views/render.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models_userData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/userData */ "./src/models/userData.js");


const render = (() => {
  const container = (elementId, elementParent, elementClass = null, element = 'div') => {
    const div = document.createElement(element);
    if (elementId) {
      div.id = _models_userData__WEBPACK_IMPORTED_MODULE_0__["default"].convertToValidId(elementId);
    }
    elementParent = _models_userData__WEBPACK_IMPORTED_MODULE_0__["default"].convertToValidId(elementParent);
    if (elementClass) {
      if (Array.isArray(elementClass)) {
        elementClass.forEach((item) => {
          div.classList.add(item);
        });
      } else {
        div.classList.add(elementClass);
      }
    }
    document.getElementById(elementParent).appendChild(div);
    return div;
  };

  const closeTabBtn = (parentElement) => {
    container('close-btn-container', parentElement, 'flex-grid');
    container(null, 'close-btn-container', 'col-10');
    const btn = container(null, 'close-btn-container', ['col-2', 'close-button'], 'button');
    btn.textContent = 'X';
    return btn;
  };

  return { container, closeTabBtn };
})();

/* harmony default export */ __webpack_exports__["default"] = (render);


/***/ }),

/***/ "./src/views/sideContent.js":
/*!**********************************!*\
  !*** ./src/views/sideContent.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/views/render.js");


const sideContent = (() => {
  const renderData = (completed, uncompleted, onTime, lateTime) => {
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('statistics-container', 'left-section', 'box');
    const completedData = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('statistics-completing-completed', 'statistics-container', ['flex-grid', 'info-container']);
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(null, 'statistics-completing-completed', ['col-1', 'fa', 'fa-check', 'icon-good']);
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('statistics-completed-label', 'statistics-completing-completed', ['col-9', 'side-info']).textContent = 'Tasks Completed';
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('statistics-completed-data', 'statistics-completing-completed', 'col-2').textContent = `: ${completed}`;

    const uncompletedData = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('statistics-completing-uncompleted', 'statistics-container', ['flex-grid', 'info-container']);
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(null, 'statistics-completing-uncompleted', ['col-1', 'fa', 'fa-times', 'icon-bad']);
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('statistics-uncompleted-label', 'statistics-completing-uncompleted', ['col-9', 'side-info']).textContent = 'Tasks Uncompleted';
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('statistics-uncompleted-data', 'statistics-completing-uncompleted', 'col-2').textContent = `: ${uncompleted}`;

    const onTimeData = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('statistics-completing-ontime', 'statistics-container', ['flex-grid', 'info-container']);
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(null, 'statistics-completing-ontime', ['col-1', 'fa', 'fa-clock-o', 'icon-good']);
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('statistics-ontime-label', 'statistics-completing-ontime', ['col-9', 'side-info']).textContent = 'Tasks on Time';
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('statistics-ontime-data', 'statistics-completing-ontime', 'col-2').textContent = `: ${onTime}`;

    const lateTimeData = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('statistics-completing-late', 'statistics-container', ['flex-grid', 'info-container']);
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(null, 'statistics-completing-late', ['col-1', 'fa', 'fa-bullhorn', 'icon-bad']);
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('statistics-lateTime-label', 'statistics-completing-late', ['col-9', 'side-info']).textContent = 'Late Tasks';
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('statistics-lateTime-data', 'statistics-completing-late', 'col-2').textContent = `: ${lateTime}`;

    return {
      completed: completedData,
      uncompleted: uncompletedData,
      onTime: onTimeData,
      late: lateTimeData,
    };
  };

  const displayInfo = (taskName) => {
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`info-${taskName}`, 'statistics-completing-completed', 'minibox').textContent = ` - ${taskName}`;
  };

  return {
    renderData,
    displayInfo,
  };
})();

/* harmony default export */ __webpack_exports__["default"] = (sideContent);


/***/ }),

/***/ "./src/views/todoTab.js":
/*!******************************!*\
  !*** ./src/views/todoTab.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render */ "./src/views/render.js");


const todoTab = (() => {
  const renderProject = (elementId) => {
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`project-${elementId}`, 'content-section', ['box', 'whole-project-container']);
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`project-${elementId}-container`, `project-${elementId}`, ['flex-grid', 'project-container']);
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`project-${elementId}-name`, `project-${elementId}-container`, ['col-12', 'col-m-10']);
    const text = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(elementId, `project-${elementId}-name`, ['minibox', 'center'], 'h2');
    text.textContent = elementId;
    const newTaskBtn = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`project-${elementId}-button`, `project-${elementId}-container`, ['col-2', 'minibox', 'no-margin', 'new-task-btn'], 'button');
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(null, `project-${elementId}-button`, ['minibox']).textContent = 'Add New Task';
    return newTaskBtn;
  };

  const renderWarningProjectMessage = (message) => {
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(message, 'project-form-container', ['col-12', 'warning-messag']).texContent = message;
  };

  const renderWarningMessage = (message) => {
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(message, 'task-form-warning-container', ['col-12', 'warning-message']).textContent = message;
  };

  const renderTaskInfo = (proj, obj) => {
    const idString = `task-info-${proj}-${obj.name}`;
    const taskNameId = `task-${proj}-${obj.name}`;
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('task-info-container', `${taskNameId}`, ['box', 'info']);
    const closeBtn = _render__WEBPACK_IMPORTED_MODULE_0__["default"].closeTabBtn('task-info-container');
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(null, 'task-info-container', 'task-description', 'p').textContent = obj.content;
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}-difficulty-container`, 'task-info-container');
    const difficultyInfo = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}-difficulty`, `${idString}-difficulty-container`);
    difficultyInfo.textContent = obj.difficulty;
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}-date-container`, 'task-info-container');
    const dateInfo = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}-date`, `${idString}-date-container`);
    dateInfo.textContent = obj.date;
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}-btn-container`, 'task-info-container', ['flex-grid']);
    const editBtn = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}-btn-edit`, `${idString}-btn-container`, ['col-6', 'btn-edit'], 'button');
    editBtn.textContent = 'Edit';
    const deleteBtn = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}-btn-delete`, `${idString}-btn-container`, ['col-6', 'btn-danger'], 'button');
    deleteBtn.textContent = 'Delete';
    return {
      closeBtn,
      editBtn,
      deleteBtn,
      difficultyInfo,
      dateInfo,
    };
  };

  const renderTask = (project, obj) => {
    const idString = `task-${project}-${obj.name}`;

    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}`, `project-${project}`, ['task-container']);
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}-container`, `task-${project}-${obj.name}`, ['flex-grid']);
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}-complete-task-container`, `${idString}-container`, ['col-1', 'minibox', 'no-bounds']);
    const completeTaskBtn = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}-complete-task-btn`, `${idString}-complete-task-container`, ['complete-btn', 'minibox'], 'button');
    const nameBtn = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('{idString}-content-task-name', `${idString}-container`, ['col-10', 'minibox', 'no-bounds', 'task-name']);
    nameBtn.textContent = obj.name;
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}-todo-button-container`, `${idString}-container`, ['col-1', 'minibox', 'end', 'no-bounds']);
    const todoBtn = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}-todo-button`, `${idString}-todo-button-container`, ['no-bounds', 'btn-todo']);
    todoBtn.textContent = '+ Todo';
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(null, `${idString}-container`, 'col-1');
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}-todo-container`, `${idString}-container`, 'col-11');
    return {
      todoBtn,
      nameBtn,
      // editBtn,
      // deleteBtn,
      completeBtn: completeTaskBtn,
      // dateInfo,
      // difficultyInfo,
    };
  };

  const renderTodo = (project, taskName, todo) => {
    const idString = `task-${project}-${taskName}-${todo}`;
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}-todo`, `task-${project}-${taskName}-todo-container`, ['flex-grid', 'todo-container']);
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}-todo-container-complete-button-container`, `${idString}-todo`, 'col-1');
    const checkBtn = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}-todo-container-button`, `${idString}-todo-container-complete-button-container`, 'complete-btn', 'button');
    const [todoDescription] = JSON.parse(todo);
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`todo-${project}-${taskName}-${todo}-todo-container-description`, `task-${project}-${taskName}-${todo}-todo`, 'col-10').textContent = todoDescription;
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}-todo-container-delete-button-container`, `${idString}-todo`, 'col-1');
    const deleteBtn = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}-todo-container-delete-button`, `${idString}-todo-container-delete-button-container`, 'soft-button');
    deleteBtn.textContent = 'X';
    return {
      checkBtn,
      deleteBtn,
    };
  };

  const renderCheckedTodo = (project, taskName, todo) => {
    const idString = `task-${project}-${taskName}-${todo}`;
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}-todo`, `task-${project}-${taskName}-todo-container`, ['flex-grid', 'completed-todo']);
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}-todo-container-complete-button-container`, `${idString}-todo`, 'col-1');
    const checkBtn = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`${idString}-todo-container-button`, `${idString}-todo-container-complete-button-container`, 'complete-btn', 'button');
    const [todoDescription] = JSON.parse(todo);
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container(`todo-${project}-${taskName}-${todo}-todo-container-description`, `task-${project}-${taskName}-${todo}-todo`, 'col-10').textContent = todoDescription;
    return { checkBtn };
  };

  const newProjectBtn = () => {
    _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('new-project-btn-container', 'content-section', ['flex-grid', 'center']);
    const btn = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('new-project-btn', 'new-project-btn-container', ['new-project-btn'], 'button');
    btn.textContent = '+';
    return (btn);
  };

  const noProjectWarning = () => {
    const warning = _render__WEBPACK_IMPORTED_MODULE_0__["default"].container('no-project-warning', 'content-section', ['no-project-warning']);
    warning.textContent = 'Nothing to display here. Press "+" to create a new project';
    return warning;
  };

  return {
    renderWarningProjectMessage,
    renderProject,
    renderCheckedTodo,
    renderTask,
    newProjectBtn,
    renderTodo,
    noProjectWarning,
    renderWarningMessage,
    renderTaskInfo,
  };
})();

/* harmony default export */ __webpack_exports__["default"] = (todoTab);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXJzL3NpZGVDb250ZW50Q29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlcnMvdG9kb1RhYkNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvc3RvcmFnZUhlbHBlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy91c2VyRGF0YS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZm9ybXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2lkZUNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3RvZG9UYWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBK0M7QUFDTzs7QUFFdEQ7QUFDQSxlQUFlLDhEQUFjO0FBQzdCLGNBQWMsMERBQVc7QUFDekI7QUFDQSxJQUFJLDhEQUFjO0FBQ2xCLDJDQUEyQyxTQUFTO0FBQ3BELFFBQVEsMERBQVc7QUFDbkI7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILG1EQUFtRCxFQUFFO0FBQ3JEOztBQUVlLG9GQUFxQixFQUFDOzs7Ozs7Ozs7Ozs7O0FDaEJyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1DO0FBQ0k7QUFDRztBQUNZO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdEQUFRO0FBQ3hCLHFCQUFxQix3REFBUTtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsZUFBZSxFQUFFO0FBQ2xEO0FBQ0Esb0NBQW9DLHNEQUFPO0FBQzNDO0FBQ0E7QUFDQSxJQUFJLDhEQUFjO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksOERBQWM7QUFDbEI7O0FBRUE7QUFDQSxJQUFJLDhEQUFjO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx3REFBUTtBQUNuQjs7QUFFQTtBQUNBLElBQUksOERBQWM7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHNEQUFPO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixvREFBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix3REFBUTtBQUNyQztBQUNBLFlBQVksOERBQWM7QUFDMUIsWUFBWSw4REFBYztBQUMxQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSzs7QUFFTCxtREFBbUQseURBQXlELEVBQUU7O0FBRTlHO0FBQ0EsTUFBTSw4REFBYztBQUNwQjtBQUNBLEtBQUs7O0FBRUwsUUFBUSw4REFBYztBQUN0QjtBQUNBO0FBQ0EscUNBQXFDLFNBQVM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTSxzREFBTztBQUNiLFFBQVEsb0RBQUs7QUFDYjtBQUNBLGNBQWMsd0RBQVE7QUFDdEIsWUFBWSw4REFBYztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxjQUFjLHNEQUFPO0FBQ3JCO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSw2Q0FBNkMsd0RBQVEsdUJBQXVCO0FBQzVFLDJDQUEyQyx3REFBUSx1QkFBdUI7QUFDMUU7QUFDQSxNQUFNLHNEQUFPO0FBQ2IsUUFBUSxvREFBSztBQUNiO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHNEQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLDhCQUE4QixvREFBSztBQUNuQztBQUNBO0FBQ0Esa0JBQWtCLHdEQUFRO0FBQzFCLGdCQUFnQiw4REFBYztBQUM5QjtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDhEQUFjO0FBQ2pDLGlDQUFpQyxzREFBTztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZUFBZTtBQUNmLGlDQUFpQyxzREFBTztBQUN4QztBQUNBLGtCQUFrQiw4REFBYztBQUNoQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsd0RBQVEsdUJBQXVCO0FBQzVFLDJDQUEyQyx3REFBUSx1QkFBdUI7QUFDMUU7QUFDQSxNQUFNLHNEQUFPO0FBQ2I7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHNEQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLFlBQVksOERBQWM7QUFDMUI7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyw4REFBYztBQUNyQixJQUFJLHNEQUFPO0FBQ1g7QUFDQSxVQUFVO0FBQ1YsQ0FBQzs7QUFFYyxnRkFBaUIsRUFBQzs7Ozs7Ozs7Ozs7OztBQzdPakM7QUFBQTtBQUFBO0FBQWdFO0FBQ1E7O0FBRXhFO0FBQ0EsRUFBRSxrRkFBcUI7O0FBRXZCO0FBQ0EsSUFBSSxzRUFBaUI7QUFDckIsR0FBRzs7QUFFSDtBQUNBLElBQUksc0VBQWlCO0FBQ3JCLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7O0FDYkQ7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVjLDZFQUFjLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN2TDlCO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1Q0FBdUMsd0RBQXdEO0FBQy9GLHdCQUF3Qiw0Q0FBNEM7QUFDcEUsaUNBQWlDLHVDQUF1Qzs7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVjLHVFQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN2Q3hCO0FBQUE7QUFBOEI7O0FBRTlCO0FBQ0E7QUFDQSxJQUFJLCtDQUFNO0FBQ1YsSUFBSSwrQ0FBTTtBQUNWLGtCQUFrQiwrQ0FBTTtBQUN4QjtBQUNBLElBQUksK0NBQU07QUFDVixzQkFBc0IsK0NBQU07QUFDNUI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSwrQ0FBTTtBQUNWLElBQUksK0NBQU07QUFDVixJQUFJLCtDQUFNO0FBQ1YsSUFBSSwrQ0FBTTtBQUNWLElBQUksK0NBQU07QUFDVjs7QUFFQSxJQUFJLCtDQUFNO0FBQ1YsSUFBSSwrQ0FBTTtBQUNWOztBQUVBLElBQUksK0NBQU07QUFDVixJQUFJLCtDQUFNO0FBQ1YsbUJBQW1CLCtDQUFNO0FBQ3pCO0FBQ0E7QUFDQSxtQkFBbUIsK0NBQU07QUFDekI7QUFDQTtBQUNBLHFCQUFxQiwrQ0FBTTtBQUMzQjtBQUNBO0FBQ0EsSUFBSSwrQ0FBTTtBQUNWLHFCQUFxQiwrQ0FBTTtBQUMzQjtBQUNBLHNCQUFzQiwrQ0FBTTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLCtDQUFNLDBDQUEwQyxRQUFRLEdBQUcsU0FBUztBQUN4RSxJQUFJLCtDQUFNO0FBQ1YsSUFBSSwrQ0FBTTtBQUNWLHNCQUFzQiwrQ0FBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixDQUFDOztBQUVjLG9FQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUN6RHJCO0FBQUE7QUFBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSx3REFBUTtBQUN2QjtBQUNBLG9CQUFvQix3REFBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVixDQUFDOztBQUVjLHFFQUFNLEVBQUM7Ozs7Ozs7Ozs7Ozs7QUNqQ3RCO0FBQUE7QUFBOEI7O0FBRTlCO0FBQ0E7QUFDQSxJQUFJLCtDQUFNO0FBQ1YsMEJBQTBCLCtDQUFNO0FBQ2hDLElBQUksK0NBQU07QUFDVixJQUFJLCtDQUFNO0FBQ1YsSUFBSSwrQ0FBTSx1R0FBdUcsVUFBVTs7QUFFM0gsNEJBQTRCLCtDQUFNO0FBQ2xDLElBQUksK0NBQU07QUFDVixJQUFJLCtDQUFNO0FBQ1YsSUFBSSwrQ0FBTSwyR0FBMkcsWUFBWTs7QUFFakksdUJBQXVCLCtDQUFNO0FBQzdCLElBQUksK0NBQU07QUFDVixJQUFJLCtDQUFNO0FBQ1YsSUFBSSwrQ0FBTSxpR0FBaUcsT0FBTzs7QUFFbEgseUJBQXlCLCtDQUFNO0FBQy9CLElBQUksK0NBQU07QUFDVixJQUFJLCtDQUFNO0FBQ1YsSUFBSSwrQ0FBTSxpR0FBaUcsU0FBUzs7QUFFcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxJQUFJLCtDQUFNLG1CQUFtQixTQUFTLHFFQUFxRSxTQUFTO0FBQ3BIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFYywwRUFBVyxFQUFDOzs7Ozs7Ozs7Ozs7O0FDM0MzQjtBQUFBO0FBQThCOztBQUU5QjtBQUNBO0FBQ0EsSUFBSSwrQ0FBTSxzQkFBc0IsVUFBVTtBQUMxQyxJQUFJLCtDQUFNLHNCQUFzQixVQUFVLHdCQUF3QixVQUFVO0FBQzVFLElBQUksK0NBQU0sc0JBQXNCLFVBQVUsbUJBQW1CLFVBQVU7QUFDdkUsaUJBQWlCLCtDQUFNLGlDQUFpQyxVQUFVO0FBQ2xFO0FBQ0EsdUJBQXVCLCtDQUFNLHNCQUFzQixVQUFVLHFCQUFxQixVQUFVO0FBQzVGLElBQUksK0NBQU0sNEJBQTRCLFVBQVU7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBLElBQUksK0NBQU07QUFDVjs7QUFFQTtBQUNBLElBQUksK0NBQU07QUFDVjs7QUFFQTtBQUNBLGtDQUFrQyxLQUFLLEdBQUcsU0FBUztBQUNuRCwrQkFBK0IsS0FBSyxHQUFHLFNBQVM7QUFDaEQsSUFBSSwrQ0FBTSxxQ0FBcUMsV0FBVztBQUMxRCxxQkFBcUIsK0NBQU07QUFDM0IsSUFBSSwrQ0FBTTtBQUNWLElBQUksK0NBQU0sY0FBYyxTQUFTO0FBQ2pDLDJCQUEyQiwrQ0FBTSxjQUFjLFNBQVMsaUJBQWlCLFNBQVM7QUFDbEY7QUFDQSxJQUFJLCtDQUFNLGNBQWMsU0FBUztBQUNqQyxxQkFBcUIsK0NBQU0sY0FBYyxTQUFTLFdBQVcsU0FBUztBQUN0RTtBQUNBLElBQUksK0NBQU0sY0FBYyxTQUFTO0FBQ2pDLG9CQUFvQiwrQ0FBTSxjQUFjLFNBQVMsZUFBZSxTQUFTO0FBQ3pFO0FBQ0Esc0JBQXNCLCtDQUFNLGNBQWMsU0FBUyxpQkFBaUIsU0FBUztBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsUUFBUSxHQUFHLFNBQVM7O0FBRWpELElBQUksK0NBQU0sY0FBYyxTQUFTLGNBQWMsUUFBUTtBQUN2RCxJQUFJLCtDQUFNLGNBQWMsU0FBUyxxQkFBcUIsUUFBUSxHQUFHLFNBQVM7QUFDMUUsSUFBSSwrQ0FBTSxjQUFjLFNBQVMsOEJBQThCLFNBQVM7QUFDeEUsNEJBQTRCLCtDQUFNLGNBQWMsU0FBUyx3QkFBd0IsU0FBUztBQUMxRixvQkFBb0IsK0NBQU0sYUFBYSxTQUFTLHdCQUF3QixTQUFTO0FBQ2pGO0FBQ0EsSUFBSSwrQ0FBTSxjQUFjLFNBQVMsNEJBQTRCLFNBQVM7QUFDdEUsb0JBQW9CLCtDQUFNLGNBQWMsU0FBUyxrQkFBa0IsU0FBUztBQUM1RTtBQUNBLElBQUksK0NBQU0sb0JBQW9CLFNBQVM7QUFDdkMsSUFBSSwrQ0FBTSxjQUFjLFNBQVMscUJBQXFCLFNBQVM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsUUFBUSxHQUFHLFNBQVMsR0FBRyxLQUFLO0FBQ3pELElBQUksK0NBQU0sY0FBYyxTQUFTLGdCQUFnQixRQUFRLEdBQUcsU0FBUztBQUNyRSxJQUFJLCtDQUFNLGNBQWMsU0FBUywrQ0FBK0MsU0FBUztBQUN6RixxQkFBcUIsK0NBQU0sY0FBYyxTQUFTLDRCQUE0QixTQUFTO0FBQ3ZGO0FBQ0EsSUFBSSwrQ0FBTSxtQkFBbUIsUUFBUSxHQUFHLFNBQVMsR0FBRyxLQUFLLHNDQUFzQyxRQUFRLEdBQUcsU0FBUyxHQUFHLEtBQUs7QUFDM0gsSUFBSSwrQ0FBTSxjQUFjLFNBQVMsNkNBQTZDLFNBQVM7QUFDdkYsc0JBQXNCLCtDQUFNLGNBQWMsU0FBUyxtQ0FBbUMsU0FBUztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw2QkFBNkIsUUFBUSxHQUFHLFNBQVMsR0FBRyxLQUFLO0FBQ3pELElBQUksK0NBQU0sY0FBYyxTQUFTLGdCQUFnQixRQUFRLEdBQUcsU0FBUztBQUNyRSxJQUFJLCtDQUFNLGNBQWMsU0FBUywrQ0FBK0MsU0FBUztBQUN6RixxQkFBcUIsK0NBQU0sY0FBYyxTQUFTLDRCQUE0QixTQUFTO0FBQ3ZGO0FBQ0EsSUFBSSwrQ0FBTSxtQkFBbUIsUUFBUSxHQUFHLFNBQVMsR0FBRyxLQUFLLHNDQUFzQyxRQUFRLEdBQUcsU0FBUyxHQUFHLEtBQUs7QUFDM0gsWUFBWTtBQUNaOztBQUVBO0FBQ0EsSUFBSSwrQ0FBTTtBQUNWLGdCQUFnQiwrQ0FBTTtBQUN0QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsK0NBQU07QUFDMUI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVjLHNFQUFPLEVBQUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IHNpZGVDb250ZW50IGZyb20gJy4uL3ZpZXdzL3NpZGVDb250ZW50JztcbmltcG9ydCBzdG9yYWdlSGVscGVycyBmcm9tICcuLi9tb2RlbHMvc3RvcmFnZUhlbHBlcnMnO1xuXG5jb25zdCBzaWRlQ29udGVudENvbnRyb2xsZXIgPSAoKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBzdG9yYWdlSGVscGVycy5nYXRoZXJTdG9yYWdlRGF0YSgpO1xuICBjb25zdCBidG4gPSBzaWRlQ29udGVudC5yZW5kZXJEYXRhKGRhdGEuY29tcGxldGVkLCBkYXRhLnVuY29tcGxldGVkLCBkYXRhLm9uVGltZSwgZGF0YS5sYXRlVGltZSk7XG4gIGJ0bi5jb21wbGV0ZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgc3RvcmFnZUhlbHBlcnMuZ2F0aGVyQ29tcGxldGVkVGFza3NOYW1lcygpLmZvckVhY2goKHRhc2tOYW1lKSA9PiB7XG4gICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBpbmZvLSR7dGFza05hbWV9YCkpIHtcbiAgICAgICAgc2lkZUNvbnRlbnQuZGlzcGxheUluZm8odGFza05hbWUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbiAgYnRuLnVuY29tcGxldGVkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHNpZGVDb250ZW50Q29udHJvbGxlcjtcbiIsImltcG9ydCBmb3JtcyBmcm9tICcuLi92aWV3cy9mb3Jtcyc7XG5pbXBvcnQgdG9kb1RhYiBmcm9tICcuLi92aWV3cy90b2RvVGFiJztcbmltcG9ydCB1c2VyRGF0YSBmcm9tICcuLi9tb2RlbHMvdXNlckRhdGEnO1xuaW1wb3J0IHN0b3JhZ2VIZWxwZXJzIGZyb20gJy4uL21vZGVscy9zdG9yYWdlSGVscGVycyc7XG4vKlxuICogQXMgYSBjb250cm9sbGVyLCB0aGlzIGlzIHJlc3BvbnNpYmxlIGZvciBjb21tdW5pY2F0aW5nIHdpdGggdGhlIHZpZXdcbiAqIGFuZCBkYXRhYnNlIGluIG9yZGVyIHRvIGdhdGhlciBhbmQgc3RvcmUgZGF0YVxuICovXG5jb25zdCB0b2RvVGFiQ29udHJvbGxlciA9ICgoKSA9PiB7XG4gIC8qXG4gICAgICogU29tZSBoZWxwZXJzIHRvIHdvcmsgaW4gdGhlIHRhYiBkaXNwbGF5aW5nXG4gICAgICovXG4gIGNvbnN0IHN1Ym1pdFRhc2tGb3JtID0gKGtleSkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZS1pbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudC1pbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IGRpZmZpY3VsdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlmZmljdWx0eS1zZWxlY3QnKS52YWx1ZTtcbiAgICBjb25zdCBleHBpcmluZ0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1pbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IG9iaiA9IHVzZXJEYXRhLmNyZWF0ZVRhc2tPYmoobmFtZSwgY29udGVudCwgZGlmZmljdWx0eSwgZXhwaXJpbmdEYXRlKTtcbiAgICBjb25zdCB2YWxpZGF0ZSA9IHVzZXJEYXRhLnZhbGlkYXRlVGFza0lucHV0KG9iaik7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsaWRhdGUpKSB7XG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnd2FybmluZy1tZXNzYWdlJykpIHtcbiAgICAgICAgY29uc3QgYXJyYXkgPSBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dhcm5pbmctbWVzc2FnZScpKTtcbiAgICAgICAgYXJyYXkuZm9yRWFjaCgoaXRlbSkgPT4geyBpdGVtLnJlbW92ZSgpOyB9KTtcbiAgICAgIH1cbiAgICAgIHZhbGlkYXRlLmZvckVhY2goKG1lc3NhZ2UpID0+IHRvZG9UYWIucmVuZGVyV2FybmluZ01lc3NhZ2UobWVzc2FnZSkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBzdG9yYWdlSGVscGVycy5hZGROZXdUYXNrVG9Qcm9qZWN0KGtleSwgb2JqKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1mb3JtLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGNvbXBsZXRlVG9kbyA9IChrZXksIHRhc2tOYW1lLCB0b2RvRGVzY3JpcHRpb24pID0+IHtcbiAgICBzdG9yYWdlSGVscGVycy5jaGFuZ2VUb2RvU3RhdGUoa2V5LCB0YXNrTmFtZSwgdG9kb0Rlc2NyaXB0aW9uKTtcbiAgfTtcblxuICBjb25zdCBjb21wbGV0ZVRhc2sgPSAoa2V5LCB0YXNrTmFtZSkgPT4ge1xuICAgIHN0b3JhZ2VIZWxwZXJzLmNoYW5nZVRhc2tTdGF0ZShrZXksIHRhc2tOYW1lKTtcbiAgfTtcblxuICBjb25zdCBwbGFjZWhvbGREYXRhID0gKG9iaikgPT4ge1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lLWlucHV0JykudmFsdWUgPSBvYmoubmFtZTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudC1pbnB1dCcpLnZhbHVlID0gb2JqLmNvbnRlbnQ7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RpZmZpY3VsdHktc2VsZWN0JykudmFsdWUgPSBvYmouZGlmZmljdWx0eTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1pbnB1dCcpLnZhbHVlID0gb2JqLmRhdGU7XG4gIH07XG5cbiAgY29uc3QgZ2F0aGVyRGF0YUZyb21Gb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IG5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZS1pbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudC1pbnB1dCcpLnZhbHVlO1xuICAgIGNvbnN0IGRpZmZpY3VsdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlmZmljdWx0eS1zZWxlY3QnKS52YWx1ZTtcbiAgICBjb25zdCBleHBpcmluZ0RhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZS1pbnB1dCcpLnZhbHVlO1xuICAgIHJldHVybiB1c2VyRGF0YS5jcmVhdGVUYXNrT2JqKG5hbWUsIGNvbnRlbnQsIGRpZmZpY3VsdHksIGV4cGlyaW5nRGF0ZSk7XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlVG9kbyA9IChrZXksIHRhc2tOYW1lLCB0b2RvRGVzY3JpcHRpb24pID0+IHtcbiAgICBzdG9yYWdlSGVscGVycy5yZW1vdmVUb2RvRnJvbVRhc2soa2V5LCB0YXNrTmFtZSwgdG9kb0Rlc2NyaXB0aW9uKTtcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5SW5mb1RhYiA9IChrZXksIG9ialN0ciwgcmVsb2FkKSA9PiB7XG4gICAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZShvYmpTdHIpO1xuICAgIGNvbnN0IGluZm8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pbmZvLWNvbnRhaW5lcicpO1xuICAgIGlmIChpbmZvKSB7XG4gICAgICBpbmZvLnJlbW92ZSgpO1xuICAgIH1cbiAgICBjb25zdCBidG5zID0gdG9kb1RhYi5yZW5kZXJUYXNrSW5mbyhrZXksIG9iaik7XG4gICAgYnRucy5lZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2staW5mby1jb250YWluZXInKS5yZW1vdmUoKTtcbiAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybS1jb250YWluZXInKSkge1xuICAgICAgICBjb25zdCBlZGl0VGFza0Zvcm0gPSBmb3Jtcy5uZXdUYXNrRm9ybShrZXkpO1xuICAgICAgICBwbGFjZWhvbGREYXRhKG9iaik7XG4gICAgICAgIGVkaXRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBjb25zdCBpdGVtID0gZ2F0aGVyRGF0YUZyb21Gb3JtKCk7XG4gICAgICAgICAgaXRlbS50b2RvcyA9IG9iai50b2RvcztcbiAgICAgICAgICBjb25zdCB2YWxpZGF0aW9uID0gdXNlckRhdGEudmFsaWRhdGVUYXNrSW5wdXQoaXRlbSk7XG4gICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbGlkYXRpb24pKSB7XG4gICAgICAgICAgICBzdG9yYWdlSGVscGVycy5yZW1vdmVUYXNrRnJvbVByb2plY3Qoa2V5LCBvYmopO1xuICAgICAgICAgICAgc3RvcmFnZUhlbHBlcnMuYWRkTmV3VGFza1RvUHJvamVjdChrZXksIGl0ZW0pO1xuICAgICAgICAgICAgcmVsb2FkKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGJ0bnMuY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWluZm8tY29udGFpbmVyJykucmVtb3ZlKCk7IH0pO1xuXG4gICAgYnRucy5kZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBzdG9yYWdlSGVscGVycy5yZW1vdmVUYXNrRnJvbVByb2plY3Qoa2V5LCBvYmopO1xuICAgICAgcmVsb2FkKCk7XG4gICAgfSk7XG5cbiAgICBpZiAoc3RvcmFnZUhlbHBlcnMuY2hlY2tJZkRhdGVJc0xhdGUoa2V5LCBvYmoubmFtZSkpIHtcbiAgICAgIGJ0bnMuZGF0ZUluZm8uY2xhc3NMaXN0LmFkZCgnZGF0ZS1maWVsZC13YXJuaW5nJyk7XG4gICAgICBidG5zLmRhdGVJbmZvLnRpdGxlID0gJ1Rhc2sgaXMgTGF0ZSc7XG4gICAgICBidG5zLmRhdGVJbmZvLnRleHRDb250ZW50ID0gYCR7b2JqLmRhdGV9IC0gVGFzayBpcyBMYXRlYDtcbiAgICB9XG4gICAgaWYgKGJ0bnMuZGlmZmljdWx0eUluZm8udGV4dENvbnRlbnQgPT09ICdFYXN5Jykge1xuICAgICAgYnRucy5kaWZmaWN1bHR5SW5mby5jbGFzc0xpc3QuYWRkKCdlYXN5LWNvbnRhaW5lcicpO1xuICAgIH0gZWxzZSBpZiAoYnRucy5kaWZmaWN1bHR5SW5mby50ZXh0Q29udGVudCA9PT0gJ01lZGl1bScpIHtcbiAgICAgIGJ0bnMuZGlmZmljdWx0eUluZm8uY2xhc3NMaXN0LmFkZCgnbWVkaXVtLWNvbnRhaW5lcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBidG5zLmRpZmZpY3VsdHlJbmZvLmNsYXNzTGlzdC5hZGQoJ2hhcmQtY29udGFpbmVyJyk7XG4gICAgfVxuICB9O1xuXG4gIC8qXG4gICAgICogVGhpcyBmdW5jdGlvbiBkaXNwbGF5IHRoZSBlbnRpcmUgdG9kbyB0YWIsIHRha2luZyB0aGUgZGF0YSBmcm9tIHRoZSB2aWV3XG4gICAgICogYW5kIHNlbmRpbmcgdG8gdGhlIG1vZGVsXG4gICAgICovXG5cbiAgY29uc3QgZGlzcGxheVRhYkNvbnRlbnQgPSAoKSA9PiB7XG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QtYnRuJykpIHtcbiAgICAgIHRvZG9UYWIubmV3UHJvamVjdEJ0bigpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBmb3Jtcy5uZXdQcm9qZWN0Rm9ybSgpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZvcm1WYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lJykudmFsdWU7XG4gICAgICAgICAgaWYgKHVzZXJEYXRhLnZhbGlkYXRlUHJvamVjdElucHV0KGZvcm1WYWwpKSB7XG4gICAgICAgICAgICBzdG9yYWdlSGVscGVycy5jcmVhdGVOZXdQcm9qZWN0KGZvcm1WYWwpO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybS1jb250YWluZXInKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSW52YWxpZCBQcm9qZWN0IE5hbWUnKSkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnSW52YWxpZCBQcm9qZWN0IE5hbWUnKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRpc3BsYXlUYWJDb250ZW50KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnSW52YWxpZCBQcm9qZWN0IE5hbWUnO1xuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChtZXNzYWdlKSkge1xuICAgICAgICAgICAgICB0b2RvVGFiLnJlbmRlcldhcm5pbmdQcm9qZWN0TWVzc2FnZShtZXNzYWdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICAgIE9iamVjdC5rZXlzKGxvY2FsU3RvcmFnZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByb2plY3QtJHt1c2VyRGF0YS5jb252ZXJ0VG9WYWxpZElkKGtleSl9YCkpIHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHByb2plY3QtJHt1c2VyRGF0YS5jb252ZXJ0VG9WYWxpZElkKGtleSl9YCkucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICB0b2RvVGFiLnJlbmRlclByb2plY3Qoa2V5KS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZm9ybXMubmV3VGFza0Zvcm0oa2V5KS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBpZiAoc3VibWl0VGFza0Zvcm0oa2V5KSkge1xuICAgICAgICAgICAgZGlzcGxheVRhYkNvbnRlbnQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZShpdGVtKTtcbiAgICAgICAgaWYgKCFvYmouc3RhdHVzKSB7XG4gICAgICAgICAgY29uc3QgdGFza0J0bnMgPSB0b2RvVGFiLnJlbmRlclRhc2soa2V5LCBvYmopO1xuICAgICAgICAgIHRhc2tCdG5zLmNvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29tcGxldGVUYXNrKGtleSwgb2JqLm5hbWUpO1xuICAgICAgICAgICAgZGlzcGxheVRhYkNvbnRlbnQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0YXNrQnRucy50b2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3VibWl0QnRuID0gZm9ybXMubmV3VG9kb0Zvcm0oa2V5LCBvYmoubmFtZSk7XG4gICAgICAgICAgICBzdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0b2RvLWZvcm0taW5wdXQnKS52YWx1ZTtcbiAgICAgICAgICAgICAgaWYgKHVzZXJEYXRhLnZhbGlkYXRlVG9kb0lucHV0KHZhbCkpIHtcbiAgICAgICAgICAgICAgICBzdG9yYWdlSGVscGVycy5hZGROZXdUb2RvVG9UYXNrKGtleSwgb2JqLCB2YWwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpZiAob2JqLnRvZG9zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIG9iai50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IFtkZXNjcmlwdGlvbl0gPSBKU09OLnBhcnNlKHRvZG8pO1xuICAgICAgICAgICAgICBpZiAoIXN0b3JhZ2VIZWxwZXJzLmNoZWNrSWZUb2RvSXNDb21wbGV0ZWQoa2V5LCBKU09OLnBhcnNlKGl0ZW0pLm5hbWUsIGRlc2NyaXB0aW9uKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrQnRuID0gdG9kb1RhYi5yZW5kZXJUb2RvKGtleSwgb2JqLm5hbWUsIHRvZG8pO1xuICAgICAgICAgICAgICAgIGNvbnN0IFtkZXNjcmlwdGlvbl0gPSBKU09OLnBhcnNlKHRvZG8pO1xuICAgICAgICAgICAgICAgIGNoZWNrQnRuLmNoZWNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29tcGxldGVUb2RvKGtleSwgb2JqLm5hbWUsIGRlc2NyaXB0aW9uKTtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlUYWJDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2hlY2tCdG4uZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgZGVsZXRlVG9kbyhrZXksIG9iai5uYW1lLCBkZXNjcmlwdGlvbik7XG4gICAgICAgICAgICAgICAgICBkaXNwbGF5VGFiQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrQnRuID0gdG9kb1RhYi5yZW5kZXJDaGVja2VkVG9kbyhrZXksIG9iai5uYW1lLCB0b2RvKTtcbiAgICAgICAgICAgICAgICBjaGVja0J0bi5jaGVja0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgIHN0b3JhZ2VIZWxwZXJzLmNoYW5nZVRvZG9TdGF0ZShrZXksIG9iai5uYW1lLCBKU09OLnBhcnNlKHRvZG8pWzBdKTtcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXlUYWJDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY2hlY2tCdG4uY2hlY2tCdG4uY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUtYnRuJyk7XG4gICAgICAgICAgICAgICAgY2hlY2tCdG4uY2hlY2tCdG4uY2xhc3NMaXN0LmFkZCgndW5jb21wbGV0ZS1idG4nKTtcbiAgICAgICAgICAgICAgICBjaGVja0J0bi5jaGVja0J0bi5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC10b2RvJyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0YXNrQnRucy5uYW1lQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgZGlzcGxheUluZm9UYWIoa2V5LCBpdGVtLCBkaXNwbGF5VGFiQ29udGVudCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlUYWJDb21wbGV0ZWRDb250ZW50ID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmV3LXByb2plY3QtYnRuJykpIHtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduZXctcHJvamVjdC1idG4nKS5yZW1vdmUoKTtcbiAgICB9XG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdC0ke3VzZXJEYXRhLmNvbnZlcnRUb1ZhbGlkSWQoa2V5KX1gKSkge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcHJvamVjdC0ke3VzZXJEYXRhLmNvbnZlcnRUb1ZhbGlkSWQoa2V5KX1gKS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICAgIHRvZG9UYWIucmVuZGVyUHJvamVjdChrZXkpLnJlbW92ZSgpO1xuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IG9iaiA9IEpTT04ucGFyc2UodGFzayk7XG4gICAgICAgIGlmIChvYmouc3RhdHVzKSB7XG4gICAgICAgICAgY29uc3QgYnRuID0gdG9kb1RhYi5yZW5kZXJUYXNrKGtleSwgb2JqKTtcbiAgICAgICAgICBidG4uY29tcGxldGVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnY29tcGxldGUtYnRuJyk7XG4gICAgICAgICAgYnRuLmNvbXBsZXRlQnRuLmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlZC1idG4nKTtcbiAgICAgICAgICBidG4uY29tcGxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBzdG9yYWdlSGVscGVycy5jaGFuZ2VUYXNrU3RhdGUoa2V5LCBvYmoubmFtZSk7XG4gICAgICAgICAgICBkaXNwbGF5VGFiQ29tcGxldGVkQ29udGVudCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGJ0bi50b2RvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAvKlxuICAgICAgICAgIGJ0bi5lZGl0QnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICBidG4uZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgc3RvcmFnZUhlbHBlcnMucmVtb3ZlVGFza0Zyb21Qcm9qZWN0KGtleSwgb2JqKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYWJDb21wbGV0ZWRDb250ZW50KCk7XG4gICAgICAgICAgfSk7XG4qL1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICAvKlxuICAgICAqIEJhc2ljIGZsb3cgdGhhdCB3aWxsIGV4ZWN1dGUgdGhlIGZ1bmN0aW9uIGFzIHNvb24gYXMgaXQgaXNcbiAgICAgKiBjYWxsZWRcbiAgICAgKi9cblxuICBkaXNwbGF5VGFiQ29udGVudCgpO1xuICBpZiAoIXN0b3JhZ2VIZWxwZXJzLmNoZWNrRm9yUHJvamVjdEV4aXN0ZW5jZSgpKSB7XG4gICAgdG9kb1RhYi5ub1Byb2plY3RXYXJuaW5nKCk7XG4gIH1cbiAgcmV0dXJuIHsgZGlzcGxheVRhYkNvbnRlbnQsIGRpc3BsYXlUYWJDb21wbGV0ZWRDb250ZW50IH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB0b2RvVGFiQ29udHJvbGxlcjtcbiIsImltcG9ydCB0b2RvVGFiQ29udHJvbGxlciBmcm9tICcuL2NvbnRyb2xsZXJzL3RvZG9UYWJDb250cm9sbGVyJztcbmltcG9ydCBzaWRlQ29udGVudENvbnRyb2xsZXIgZnJvbSAnLi9jb250cm9sbGVycy9zaWRlQ29udGVudENvbnRyb2xsZXInO1xuXG4oKCkgPT4ge1xuICBzaWRlQ29udGVudENvbnRyb2xsZXIoKTtcblxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9kby10YWItYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgdG9kb1RhYkNvbnRyb2xsZXIuZGlzcGxheVRhYkNvbnRlbnQoKTtcbiAgfSk7XG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvZG8tdGFiLWJ0bi1jb21wbGV0ZWQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICB0b2RvVGFiQ29udHJvbGxlci5kaXNwbGF5VGFiQ29tcGxldGVkQ29udGVudCgpO1xuICB9KTtcbn0pKCk7XG4iLCJjb25zdCBzdG9yYWdlSGVscGVycyA9ICgoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZU5ld1Byb2plY3QgPSAoa2V5KSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShbXSkpO1xuICB9O1xuXG4gIGNvbnN0IGNoZWNrRm9yUHJvamVjdEV4aXN0ZW5jZSA9ICgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cblxuICBjb25zdCBmaW5kRGF0YUluZGV4QnlLZXkgPSAoa2V5LCB2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgIGxldCByZXN1bHQgPSAtMTtcbiAgICBKU09OLnBhcnNlKGl0ZW0pLmZvckVhY2goKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgaWYgKHZhbHVlID09PSBvYmoubmFtZSkge1xuICAgICAgICByZXN1bHQgPSBpbmRleDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIGNvbnN0IHJldHJpZXZlVGFza0RhdGEgPSAoa2V5LCB0YXNrTmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICAgIHJldHVybiBKU09OLnBhcnNlKHByb2plY3RbZmluZERhdGFJbmRleEJ5S2V5KGtleSwgdGFza05hbWUpXSk7XG4gIH07XG5cbiAgY29uc3QgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0ID0gKGtleSwgdmFsdWUpID0+IHtcbiAgICBjb25zdCBhcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gICAgYXJyYXkuc3BsaWNlKGZpbmREYXRhSW5kZXhCeUtleShrZXksIHZhbHVlKSwgMSk7XG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KGFycmF5KSk7XG4gIH07XG5cbiAgY29uc3QgYWRkTmV3VGFza1RvUHJvamVjdCA9IChrZXksIG9iaikgPT4ge1xuICAgIGNvbnN0IGl0ZW0gPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgaXRlbS51bnNoaWZ0KEpTT04uc3RyaW5naWZ5KG9iaikpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoaXRlbSkpO1xuICB9O1xuXG4gIGNvbnN0IGFkZE5ld1RvZG9Ub1Rhc2sgPSAoa2V5LCBvYmosIHRvZG8pID0+IHtcbiAgICBjb25zdCB0YXNrSW5kZXggPSBmaW5kRGF0YUluZGV4QnlLZXkoa2V5LCBvYmoubmFtZSk7XG4gICAgaWYgKHRhc2tJbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICAgICAgY29uc3QgdGFzayA9IEpTT04ucGFyc2UocHJvamVjdFt0YXNrSW5kZXhdKTtcbiAgICAgIHRhc2sudG9kb3MucHVzaChKU09OLnN0cmluZ2lmeShbdG9kbywgZmFsc2VdKSk7XG4gICAgICByZW1vdmVUYXNrRnJvbVByb2plY3Qoa2V5LCBvYmoubmFtZSk7XG4gICAgICBhZGROZXdUYXNrVG9Qcm9qZWN0KGtleSwgdGFzayk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldFRvZG9JbmRleCA9IChrZXksIHRhc2tOYW1lLCB0b2RvKSA9PiB7XG4gICAgY29uc3QgdGFza0luZGV4ID0gc3RvcmFnZUhlbHBlcnMuZmluZERhdGFJbmRleEJ5S2V5KGtleSwgdGFza05hbWUpO1xuICAgIGNvbnN0IHN0ZyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gICAgY29uc3QgdGFzayA9IEpTT04ucGFyc2Uoc3RnW3Rhc2tJbmRleF0pO1xuICAgIGxldCB0b2RvSW5kZXggPSAtMTtcbiAgICB0YXNrLnRvZG9zLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBpZiAoSlNPTi5wYXJzZShpdGVtKVswXSA9PT0gdG9kbykge1xuICAgICAgICB0b2RvSW5kZXggPSBpbmRleDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gdG9kb0luZGV4O1xuICB9O1xuXG4gIGNvbnN0IHJlbW92ZVRvZG9Gcm9tVGFzayA9IChrZXksIHRhc2tOYW1lLCB0b2RvRGVzY3JpcHRpb24pID0+IHtcbiAgICBjb25zdCB0YXNrID0gcmV0cmlldmVUYXNrRGF0YShrZXksIHRhc2tOYW1lKTtcbiAgICB0YXNrLnRvZG9zLnNwbGljZShnZXRUb2RvSW5kZXgoa2V5LCB0YXNrTmFtZSwgdG9kb0Rlc2NyaXB0aW9uKSwgMSk7XG4gICAgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0KGtleSwgdGFza05hbWUpO1xuICAgIGFkZE5ld1Rhc2tUb1Byb2plY3Qoa2V5LCB0YXNrKTtcbiAgfTtcblxuICBjb25zdCBjaGVja0lmVG9kb0lzQ29tcGxldGVkID0gKGtleSwgdGFza05hbWUsIHRvZG8pID0+IHtcbiAgICBjb25zdCB0YXNrSW5kZXggPSBzdG9yYWdlSGVscGVycy5maW5kRGF0YUluZGV4QnlLZXkoa2V5LCB0YXNrTmFtZSk7XG4gICAgY29uc3QgcHJvamVjdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSk7XG4gICAgY29uc3QgdGFzayA9IEpTT04ucGFyc2UocHJvamVjdFt0YXNrSW5kZXhdKTtcbiAgICBjb25zdCBmb3VuZFRvZG8gPSB0YXNrLnRvZG9zW2dldFRvZG9JbmRleChrZXksIHRhc2tOYW1lLCB0b2RvKV07XG4gICAgcmV0dXJuIEpTT04ucGFyc2UoZm91bmRUb2RvKVsxXTtcbiAgfTtcblxuICBjb25zdCBjaGFuZ2VUYXNrU3RhdGUgPSAoa2V5LCB0YXNrTmFtZSkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICAgIGNvbnN0IHRhc2sgPSBKU09OLnBhcnNlKHByb2plY3RbZmluZERhdGFJbmRleEJ5S2V5KGtleSwgdGFza05hbWUpXSk7XG4gICAgaWYgKHRhc2suc3RhdHVzKSB7XG4gICAgICB0YXNrLnN0YXR1cyA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0YXNrLnN0YXR1cyA9IHRydWU7XG4gICAgfVxuICAgIHJlbW92ZVRhc2tGcm9tUHJvamVjdChrZXksIHRhc2tOYW1lKTtcbiAgICBhZGROZXdUYXNrVG9Qcm9qZWN0KGtleSwgdGFzayk7XG4gIH07XG5cbiAgY29uc3QgY2hhbmdlVG9kb1N0YXRlID0gKGtleSwgdGFza05hbWUsIHRvZG9EZXNjcmlwdGlvbikgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICAgIGNvbnN0IHRhc2sgPSBKU09OLnBhcnNlKHByb2plY3Rbc3RvcmFnZUhlbHBlcnMuZmluZERhdGFJbmRleEJ5S2V5KGtleSwgdGFza05hbWUpXSk7XG4gICAgbGV0IHRvZG8gPSB0YXNrLnRvZG9zLnNwbGljZShzdG9yYWdlSGVscGVycy5nZXRUb2RvSW5kZXgoa2V5LCB0YXNrTmFtZSwgdG9kb0Rlc2NyaXB0aW9uKSwgMSk7XG4gICAgdG9kbyA9IEpTT04ucGFyc2UodG9kbyk7XG4gICAgaWYgKHRvZG9bMV0gPT09IGZhbHNlKSB7XG4gICAgICB0b2RvWzFdID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdG9kb1sxXSA9IGZhbHNlO1xuICAgIH1cbiAgICB0YXNrLnRvZG9zLnB1c2goSlNPTi5zdHJpbmdpZnkodG9kbykpO1xuICAgIHJlbW92ZVRhc2tGcm9tUHJvamVjdChrZXksIHRhc2tOYW1lKTtcbiAgICBhZGROZXdUYXNrVG9Qcm9qZWN0KGtleSwgdGFzayk7XG4gIH07XG5cbiAgY29uc3QgY2hlY2tJZkRhdGVJc0xhdGUgPSAoa2V5LCB0YXNrTmFtZSkgPT4ge1xuICAgIGNvbnN0IHRhc2sgPSByZXRyaWV2ZVRhc2tEYXRhKGtleSwgdGFza05hbWUpO1xuICAgIGlmIChEYXRlLnBhcnNlKHRhc2suZGF0ZSkgPCBEYXRlLm5vdygpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIGNvbnN0IGdhdGhlckNvbXBsZXRlZFRhc2tzTmFtZXMgPSAoKSA9PiB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhsb2NhbFN0b3JhZ2UpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKS5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgIGNvbnN0IHRhc2tPYmogPSBKU09OLnBhcnNlKHRhc2spO1xuICAgICAgICBpZiAodGFza09iai5zdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICBhcnJheS5wdXNoKHRhc2tPYmoubmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChhcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIHJldHVybiBbXCJUaGVyZSBpc24ndCBhbnkgY29tcGxldGVkIHRhc2tzXCJdO1xuICB9O1xuXG4gIGNvbnN0IGdhdGhlclN0b3JhZ2VEYXRhID0gKCkgPT4ge1xuICAgIGxldCBjb21wbGV0ZWRUYXNrcyA9IDA7XG4gICAgbGV0IHVuY29tcGxldGVkVGFza3MgPSAwO1xuICAgIGxldCBvblRpbWVUYXNrcyA9IDA7XG4gICAgbGV0IGxhdGVUYXNrcyA9IDA7XG4gICAgT2JqZWN0LmtleXMobG9jYWxTdG9yYWdlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBjb25zdCB0YXNrT2JqID0gSlNPTi5wYXJzZSh0YXNrKTtcbiAgICAgICAgaWYgKHRhc2tPYmouc3RhdHVzID09PSB0cnVlKSB7XG4gICAgICAgICAgY29tcGxldGVkVGFza3MgKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB1bmNvbXBsZXRlZFRhc2tzICs9IDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoZWNrSWZEYXRlSXNMYXRlKGtleSwgdGFza09iai5uYW1lKSkge1xuICAgICAgICAgIGlmICh0YXNrT2JqLnN0YXR1cyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxhdGVUYXNrcyArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvblRpbWVUYXNrcyArPSAxO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgY29tcGxldGVkOiBjb21wbGV0ZWRUYXNrcy50b1N0cmluZygpLFxuICAgICAgdW5jb21wbGV0ZWQ6IHVuY29tcGxldGVkVGFza3MudG9TdHJpbmcoKSxcbiAgICAgIG9uVGltZTogb25UaW1lVGFza3MudG9TdHJpbmcoKSxcbiAgICAgIGxhdGVUaW1lOiBsYXRlVGFza3MudG9TdHJpbmcoKSxcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkTmV3VGFza1RvUHJvamVjdCxcbiAgICBhZGROZXdUb2RvVG9UYXNrLFxuICAgIGNyZWF0ZU5ld1Byb2plY3QsXG4gICAgcmVtb3ZlVGFza0Zyb21Qcm9qZWN0LFxuICAgIHJlbW92ZVRvZG9Gcm9tVGFzayxcbiAgICBmaW5kRGF0YUluZGV4QnlLZXksXG4gICAgZ2V0VG9kb0luZGV4LFxuICAgIGNoZWNrSWZUb2RvSXNDb21wbGV0ZWQsXG4gICAgY2hhbmdlVG9kb1N0YXRlLFxuICAgIGNoYW5nZVRhc2tTdGF0ZSxcbiAgICBjaGVja0ZvclByb2plY3RFeGlzdGVuY2UsXG4gICAgcmV0cmlldmVUYXNrRGF0YSxcbiAgICBnYXRoZXJTdG9yYWdlRGF0YSxcbiAgICBjaGVja0lmRGF0ZUlzTGF0ZSxcbiAgICBnYXRoZXJDb21wbGV0ZWRUYXNrc05hbWVzLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgc3RvcmFnZUhlbHBlcnM7XG4iLCJjb25zdCB1c2VyRGF0YSA9ICgoKSA9PiB7XG4gIGNvbnN0IGNyZWF0ZVRhc2tPYmogPSAodGFza05hbWUsIHRhc2tDb250ZW50LCB0YXNrRGlmZmljdWx0eSwgdGFza0RhdGUpID0+ICh7XG4gICAgbmFtZTogdGFza05hbWUsXG4gICAgY29udGVudDogdGFza0NvbnRlbnQsXG4gICAgZGlmZmljdWx0eTogdGFza0RpZmZpY3VsdHksXG4gICAgZGF0ZTogdGFza0RhdGUsXG4gICAgc3RhdHVzOiBmYWxzZSxcbiAgICB0b2RvczogW10sXG4gIH0pO1xuXG4gIGNvbnN0IGNvbnZlcnRUb1ZhbGlkSWQgPSAoZGF0YSkgPT4gZGF0YS5yZXBsYWNlKC9cXHMvZywgJy0nKTtcblxuICAvLyBjb25zdCBjb252ZXJ0SWRUb1RleHQgPSAoZGF0YSkgPT4gZGF0YS5yZXBsYWNlKC8tKy9nLCAnICcpO1xuXG4gIGNvbnN0IHZhbGlkYXRlUHJvamVjdElucHV0ID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCB2YWxpZERhdGEgPSAvXlthLXpBLVpdL2c7XG4gICAgcmV0dXJuIHZhbGlkRGF0YS50ZXN0KGRhdGEpO1xuICB9O1xuXG4gIGNvbnN0IHZhbGlkYXRlVGFza0lucHV0ID0gKGRhdGEpID0+IHtcbiAgICBjb25zdCBmb3JtRXJyb3JzID0gW107XG5cbiAgICBpZiAoIS9eW2EtekEtWl0vLnRlc3QoZGF0YS5uYW1lKSkgeyBmb3JtRXJyb3JzLnB1c2goJ1Rhc2sgbmFtZSBtdXN0IHN0YXJ0IHdpdGggYW4gbGV0dGVyJyk7IH1cbiAgICBpZiAoIWRhdGEuY29udGVudCkgeyBmb3JtRXJyb3JzLnB1c2goJ1Rhc2sgY29udGVudCBtdXN0IGV4aXN0Jyk7IH1cbiAgICBpZiAoIURhdGUucGFyc2UoZGF0YS5kYXRlKSkgeyBmb3JtRXJyb3JzLnB1c2goJ0ludmFsaWQgRGF0ZSBpbnB1dCcpOyB9XG5cbiAgICBpZiAoZm9ybUVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gZm9ybUVycm9ycztcbiAgICB9XG4gICAgcmV0dXJuICd0cnVlJztcbiAgfTtcblxuICBjb25zdCB2YWxpZGF0ZVRvZG9JbnB1dCA9IChkYXRhKSA9PiAvXlthLXpBLVpdLy50ZXN0KGRhdGEpO1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlVGFza09iaiwgdmFsaWRhdGVQcm9qZWN0SW5wdXQsIHZhbGlkYXRlVG9kb0lucHV0LCB2YWxpZGF0ZVRhc2tJbnB1dCwgY29udmVydFRvVmFsaWRJZCxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHVzZXJEYXRhO1xuIiwiaW1wb3J0IHJlbmRlciBmcm9tICcuL3JlbmRlcic7XG5cbmNvbnN0IGZvcm1zID0gKCgpID0+IHtcbiAgY29uc3QgbmV3UHJvamVjdEZvcm0gPSAoKSA9PiB7XG4gICAgcmVuZGVyLmNvbnRhaW5lcigncHJvamVjdC1mb3JtLWNvbnRhaW5lcicsICduZXctcHJvamVjdC1idG4tY29udGFpbmVyJywgWydib3gnLCAnY29sLTEyJ10sICdkaXYnKTtcbiAgICByZW5kZXIuY29udGFpbmVyKCdwcm9qZWN0LWZvcm0nLCAncHJvamVjdC1mb3JtLWNvbnRhaW5lcicsIFsnZmxleC1ncmlkJ10sICdmb3JtJyk7XG4gICAgY29uc3QgbGFiZWwgPSByZW5kZXIuY29udGFpbmVyKCdwJywgJ3Byb2plY3QtZm9ybScsIFsnY29sLTEyJ10sICdsYWJlbCcpO1xuICAgIGxhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QgTmFtZSc7XG4gICAgcmVuZGVyLmNvbnRhaW5lcigncHJvamVjdC1uYW1lJywgJ3Byb2plY3QtZm9ybScsIFsnY29sLTEyJ10sICdpbnB1dCcpO1xuICAgIGNvbnN0IHN1Ym1pdEJ0biA9IHJlbmRlci5jb250YWluZXIoJ3Byb2plY3Qtc3VibWl0LWJ0bicsICdwcm9qZWN0LWZvcm0nLCBbJ2NvbC0xMicsICdidG4tcHJpbWFyeSddKTtcbiAgICBzdWJtaXRCdG4udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFByb2plY3QhJztcbiAgICByZXR1cm4gc3VibWl0QnRuO1xuICB9O1xuXG4gIGNvbnN0IG5ld1Rhc2tGb3JtID0gKHByb2plY3QpID0+IHtcbiAgICByZW5kZXIuY29udGFpbmVyKCd0YXNrLWZvcm0tY29udGFpbmVyJywgcHJvamVjdCwgWydib3gnXSk7XG4gICAgcmVuZGVyLmNvbnRhaW5lcigndGFzay1mb3JtLXdhcm5pbmctY29udGFpbmVyJywgJ3Rhc2stZm9ybS1jb250YWluZXInKTtcbiAgICByZW5kZXIuY29udGFpbmVyKCd0YXNrLWZvcm0nLCAndGFzay1mb3JtLWNvbnRhaW5lcicsICdmbGV4LWdyaWQnLCAnZm9ybScpO1xuICAgIHJlbmRlci5jb250YWluZXIoJ25hbWUtbGFiZWwnLCAndGFzay1mb3JtJywgWydjb2wtMTInXSwgJ2xhYmVsJykudGV4dENvbnRlbnQgPSAnTmFtZSc7XG4gICAgcmVuZGVyLmNvbnRhaW5lcignbmFtZS1pbnB1dCcsICd0YXNrLWZvcm0nLCBbJ2NvbC0xMiddLCAnaW5wdXQnKTtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1mb3JtJykuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKSk7XG5cbiAgICByZW5kZXIuY29udGFpbmVyKCdjb250ZW50LWxhYmVsJywgJ3Rhc2stZm9ybScsIFsnY29sLTEyJ10sICdsYWJlbCcpLnRleHRDb250ZW50ID0gJ0NvbnRlbnQnO1xuICAgIHJlbmRlci5jb250YWluZXIoJ2NvbnRlbnQtaW5wdXQnLCAndGFzay1mb3JtJywgWydjb2wtMTInXSwgJ3RleHRhcmVhJyk7XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stZm9ybScpLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2JyJykpO1xuXG4gICAgcmVuZGVyLmNvbnRhaW5lcignZGlmZmljdWx0eS1sYWJlbCcsICd0YXNrLWZvcm0nLCBbJ2NvbC0xMiddLCAnbGFiZWwnKS50ZXh0Q29udGVudCA9ICdEaWZmaWN1bHR5JztcbiAgICByZW5kZXIuY29udGFpbmVyKCdkaWZmaWN1bHR5LXNlbGVjdCcsICd0YXNrLWZvcm0nLCBbJ2NvbC0xMiddLCAnc2VsZWN0Jyk7XG4gICAgY29uc3Qgb3B0T25lID0gcmVuZGVyLmNvbnRhaW5lcignZGlmZmljdWx0eS1vcHRpb24tMScsICdkaWZmaWN1bHR5LXNlbGVjdCcsIG51bGwsICdvcHRpb24nKTtcbiAgICBvcHRPbmUudGV4dENvbnRlbnQgPSAnRWFzeSc7XG4gICAgb3B0T25lLnZhbHVlID0gJ0Vhc3knO1xuICAgIGNvbnN0IG9wdFR3byA9IHJlbmRlci5jb250YWluZXIoJ2RpZmZpY3VsdHktb3B0aW9uLTInLCAnZGlmZmljdWx0eS1zZWxlY3QnLCBudWxsLCAnb3B0aW9uJyk7XG4gICAgb3B0VHdvLnRleHRDb250ZW50ID0gJ01lZGl1bSc7XG4gICAgb3B0VHdvLnZhbHVlID0gJ01lZGl1bSc7XG4gICAgY29uc3Qgb3B0VGhyZWUgPSByZW5kZXIuY29udGFpbmVyKCdkaWZmaWN1bHR5LW9wdGlvbi0zJywgJ2RpZmZpY3VsdHktc2VsZWN0JywgbnVsbCwgJ29wdGlvbicpO1xuICAgIG9wdFRocmVlLnRleHRDb250ZW50ID0gJ0hhcmQnO1xuICAgIG9wdFRocmVlLnZhbHVlID0gJ0hhcmQnO1xuICAgIHJlbmRlci5jb250YWluZXIoJ2RhdGUtbGFiZWwnLCAndGFzay1mb3JtJywgbnVsbCwgJ2xhYmVsJyk7XG4gICAgY29uc3QgZGF0ZVBpY2sgPSByZW5kZXIuY29udGFpbmVyKCdkYXRlLWlucHV0JywgJ3Rhc2stZm9ybScsIFsnY29sLTYnXSwgJ2lucHV0Jyk7XG4gICAgZGF0ZVBpY2sudHlwZSA9ICdkYXRlJztcbiAgICBjb25zdCBzdWJtaXRCdG4gPSByZW5kZXIuY29udGFpbmVyKCd0YXNrLXN1Ym1pdCcsICd0YXNrLWZvcm0nLCBbJ2NvbC02JywgJ3N1Ym1pdC1idG4nXSwgJ2RpdicpO1xuICAgIHN1Ym1pdEJ0bi50ZXh0Q29udGVudCA9ICdTdWJtaXQnO1xuICAgIHJldHVybiBzdWJtaXRCdG47XG4gIH07XG5cbiAgY29uc3QgbmV3VG9kb0Zvcm0gPSAocHJvamVjdCwgdGFza05hbWUpID0+IHtcbiAgICByZW5kZXIuY29udGFpbmVyKCd0b2RvLWZvcm0tY29udGFpbmVyJywgYHRhc2stJHtwcm9qZWN0fS0ke3Rhc2tOYW1lfS10b2RvLWJ1dHRvbi1jb250YWluZXJgLCBbJ2ZsZXgtZ3JpZCddLCAnZm9ybScpO1xuICAgIHJlbmRlci5jb250YWluZXIoJ3RvZG8tZm9ybS1sYWJlbCcsICd0b2RvLWZvcm0tY29udGFpbmVyJywgbnVsbCwgJ2xhYmVsJyk7XG4gICAgcmVuZGVyLmNvbnRhaW5lcigndG9kby1mb3JtLWlucHV0JywgJ3RvZG8tZm9ybS1jb250YWluZXInLCBudWxsLCAnaW5wdXQnKTtcbiAgICBjb25zdCBzdWJtaXRCdG4gPSByZW5kZXIuY29udGFpbmVyKCd0b2RvLWZvcm0tc3VibWl0JywgJ3RvZG8tZm9ybS1jb250YWluZXInLCBudWxsLCAnaW5wdXQnKTtcbiAgICBzdWJtaXRCdG4udmFsdWUgPSAnQ3JlYXRlIFRvZG8nO1xuICAgIHN1Ym1pdEJ0bi50eXBlID0gJ3N1Ym1pdCc7XG4gICAgcmV0dXJuIHN1Ym1pdEJ0bjtcbiAgfTtcbiAgcmV0dXJuIHsgbmV3UHJvamVjdEZvcm0sIG5ld1Rhc2tGb3JtLCBuZXdUb2RvRm9ybSB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybXM7XG4iLCJpbXBvcnQgdXNlckRhdGEgZnJvbSAnLi4vbW9kZWxzL3VzZXJEYXRhJztcblxuY29uc3QgcmVuZGVyID0gKCgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gKGVsZW1lbnRJZCwgZWxlbWVudFBhcmVudCwgZWxlbWVudENsYXNzID0gbnVsbCwgZWxlbWVudCA9ICdkaXYnKSA9PiB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBpZiAoZWxlbWVudElkKSB7XG4gICAgICBkaXYuaWQgPSB1c2VyRGF0YS5jb252ZXJ0VG9WYWxpZElkKGVsZW1lbnRJZCk7XG4gICAgfVxuICAgIGVsZW1lbnRQYXJlbnQgPSB1c2VyRGF0YS5jb252ZXJ0VG9WYWxpZElkKGVsZW1lbnRQYXJlbnQpO1xuICAgIGlmIChlbGVtZW50Q2xhc3MpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGVsZW1lbnRDbGFzcykpIHtcbiAgICAgICAgZWxlbWVudENsYXNzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZChlbGVtZW50Q2xhc3MpO1xuICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50UGFyZW50KS5hcHBlbmRDaGlsZChkaXYpO1xuICAgIHJldHVybiBkaXY7XG4gIH07XG5cbiAgY29uc3QgY2xvc2VUYWJCdG4gPSAocGFyZW50RWxlbWVudCkgPT4ge1xuICAgIGNvbnRhaW5lcignY2xvc2UtYnRuLWNvbnRhaW5lcicsIHBhcmVudEVsZW1lbnQsICdmbGV4LWdyaWQnKTtcbiAgICBjb250YWluZXIobnVsbCwgJ2Nsb3NlLWJ0bi1jb250YWluZXInLCAnY29sLTEwJyk7XG4gICAgY29uc3QgYnRuID0gY29udGFpbmVyKG51bGwsICdjbG9zZS1idG4tY29udGFpbmVyJywgWydjb2wtMicsICdjbG9zZS1idXR0b24nXSwgJ2J1dHRvbicpO1xuICAgIGJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICByZXR1cm4gYnRuO1xuICB9O1xuXG4gIHJldHVybiB7IGNvbnRhaW5lciwgY2xvc2VUYWJCdG4gfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlcjtcbiIsImltcG9ydCByZW5kZXIgZnJvbSAnLi9yZW5kZXInO1xuXG5jb25zdCBzaWRlQ29udGVudCA9ICgoKSA9PiB7XG4gIGNvbnN0IHJlbmRlckRhdGEgPSAoY29tcGxldGVkLCB1bmNvbXBsZXRlZCwgb25UaW1lLCBsYXRlVGltZSkgPT4ge1xuICAgIHJlbmRlci5jb250YWluZXIoJ3N0YXRpc3RpY3MtY29udGFpbmVyJywgJ2xlZnQtc2VjdGlvbicsICdib3gnKTtcbiAgICBjb25zdCBjb21wbGV0ZWREYXRhID0gcmVuZGVyLmNvbnRhaW5lcignc3RhdGlzdGljcy1jb21wbGV0aW5nLWNvbXBsZXRlZCcsICdzdGF0aXN0aWNzLWNvbnRhaW5lcicsIFsnZmxleC1ncmlkJywgJ2luZm8tY29udGFpbmVyJ10pO1xuICAgIHJlbmRlci5jb250YWluZXIobnVsbCwgJ3N0YXRpc3RpY3MtY29tcGxldGluZy1jb21wbGV0ZWQnLCBbJ2NvbC0xJywgJ2ZhJywgJ2ZhLWNoZWNrJywgJ2ljb24tZ29vZCddKTtcbiAgICByZW5kZXIuY29udGFpbmVyKCdzdGF0aXN0aWNzLWNvbXBsZXRlZC1sYWJlbCcsICdzdGF0aXN0aWNzLWNvbXBsZXRpbmctY29tcGxldGVkJywgWydjb2wtOScsICdzaWRlLWluZm8nXSkudGV4dENvbnRlbnQgPSAnVGFza3MgQ29tcGxldGVkJztcbiAgICByZW5kZXIuY29udGFpbmVyKCdzdGF0aXN0aWNzLWNvbXBsZXRlZC1kYXRhJywgJ3N0YXRpc3RpY3MtY29tcGxldGluZy1jb21wbGV0ZWQnLCAnY29sLTInKS50ZXh0Q29udGVudCA9IGA6ICR7Y29tcGxldGVkfWA7XG5cbiAgICBjb25zdCB1bmNvbXBsZXRlZERhdGEgPSByZW5kZXIuY29udGFpbmVyKCdzdGF0aXN0aWNzLWNvbXBsZXRpbmctdW5jb21wbGV0ZWQnLCAnc3RhdGlzdGljcy1jb250YWluZXInLCBbJ2ZsZXgtZ3JpZCcsICdpbmZvLWNvbnRhaW5lciddKTtcbiAgICByZW5kZXIuY29udGFpbmVyKG51bGwsICdzdGF0aXN0aWNzLWNvbXBsZXRpbmctdW5jb21wbGV0ZWQnLCBbJ2NvbC0xJywgJ2ZhJywgJ2ZhLXRpbWVzJywgJ2ljb24tYmFkJ10pO1xuICAgIHJlbmRlci5jb250YWluZXIoJ3N0YXRpc3RpY3MtdW5jb21wbGV0ZWQtbGFiZWwnLCAnc3RhdGlzdGljcy1jb21wbGV0aW5nLXVuY29tcGxldGVkJywgWydjb2wtOScsICdzaWRlLWluZm8nXSkudGV4dENvbnRlbnQgPSAnVGFza3MgVW5jb21wbGV0ZWQnO1xuICAgIHJlbmRlci5jb250YWluZXIoJ3N0YXRpc3RpY3MtdW5jb21wbGV0ZWQtZGF0YScsICdzdGF0aXN0aWNzLWNvbXBsZXRpbmctdW5jb21wbGV0ZWQnLCAnY29sLTInKS50ZXh0Q29udGVudCA9IGA6ICR7dW5jb21wbGV0ZWR9YDtcblxuICAgIGNvbnN0IG9uVGltZURhdGEgPSByZW5kZXIuY29udGFpbmVyKCdzdGF0aXN0aWNzLWNvbXBsZXRpbmctb250aW1lJywgJ3N0YXRpc3RpY3MtY29udGFpbmVyJywgWydmbGV4LWdyaWQnLCAnaW5mby1jb250YWluZXInXSk7XG4gICAgcmVuZGVyLmNvbnRhaW5lcihudWxsLCAnc3RhdGlzdGljcy1jb21wbGV0aW5nLW9udGltZScsIFsnY29sLTEnLCAnZmEnLCAnZmEtY2xvY2stbycsICdpY29uLWdvb2QnXSk7XG4gICAgcmVuZGVyLmNvbnRhaW5lcignc3RhdGlzdGljcy1vbnRpbWUtbGFiZWwnLCAnc3RhdGlzdGljcy1jb21wbGV0aW5nLW9udGltZScsIFsnY29sLTknLCAnc2lkZS1pbmZvJ10pLnRleHRDb250ZW50ID0gJ1Rhc2tzIG9uIFRpbWUnO1xuICAgIHJlbmRlci5jb250YWluZXIoJ3N0YXRpc3RpY3Mtb250aW1lLWRhdGEnLCAnc3RhdGlzdGljcy1jb21wbGV0aW5nLW9udGltZScsICdjb2wtMicpLnRleHRDb250ZW50ID0gYDogJHtvblRpbWV9YDtcblxuICAgIGNvbnN0IGxhdGVUaW1lRGF0YSA9IHJlbmRlci5jb250YWluZXIoJ3N0YXRpc3RpY3MtY29tcGxldGluZy1sYXRlJywgJ3N0YXRpc3RpY3MtY29udGFpbmVyJywgWydmbGV4LWdyaWQnLCAnaW5mby1jb250YWluZXInXSk7XG4gICAgcmVuZGVyLmNvbnRhaW5lcihudWxsLCAnc3RhdGlzdGljcy1jb21wbGV0aW5nLWxhdGUnLCBbJ2NvbC0xJywgJ2ZhJywgJ2ZhLWJ1bGxob3JuJywgJ2ljb24tYmFkJ10pO1xuICAgIHJlbmRlci5jb250YWluZXIoJ3N0YXRpc3RpY3MtbGF0ZVRpbWUtbGFiZWwnLCAnc3RhdGlzdGljcy1jb21wbGV0aW5nLWxhdGUnLCBbJ2NvbC05JywgJ3NpZGUtaW5mbyddKS50ZXh0Q29udGVudCA9ICdMYXRlIFRhc2tzJztcbiAgICByZW5kZXIuY29udGFpbmVyKCdzdGF0aXN0aWNzLWxhdGVUaW1lLWRhdGEnLCAnc3RhdGlzdGljcy1jb21wbGV0aW5nLWxhdGUnLCAnY29sLTInKS50ZXh0Q29udGVudCA9IGA6ICR7bGF0ZVRpbWV9YDtcblxuICAgIHJldHVybiB7XG4gICAgICBjb21wbGV0ZWQ6IGNvbXBsZXRlZERhdGEsXG4gICAgICB1bmNvbXBsZXRlZDogdW5jb21wbGV0ZWREYXRhLFxuICAgICAgb25UaW1lOiBvblRpbWVEYXRhLFxuICAgICAgbGF0ZTogbGF0ZVRpbWVEYXRhLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgZGlzcGxheUluZm8gPSAodGFza05hbWUpID0+IHtcbiAgICByZW5kZXIuY29udGFpbmVyKGBpbmZvLSR7dGFza05hbWV9YCwgJ3N0YXRpc3RpY3MtY29tcGxldGluZy1jb21wbGV0ZWQnLCAnbWluaWJveCcpLnRleHRDb250ZW50ID0gYCAtICR7dGFza05hbWV9YDtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHJlbmRlckRhdGEsXG4gICAgZGlzcGxheUluZm8sXG4gIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBzaWRlQ29udGVudDtcbiIsImltcG9ydCByZW5kZXIgZnJvbSAnLi9yZW5kZXInO1xuXG5jb25zdCB0b2RvVGFiID0gKCgpID0+IHtcbiAgY29uc3QgcmVuZGVyUHJvamVjdCA9IChlbGVtZW50SWQpID0+IHtcbiAgICByZW5kZXIuY29udGFpbmVyKGBwcm9qZWN0LSR7ZWxlbWVudElkfWAsICdjb250ZW50LXNlY3Rpb24nLCBbJ2JveCcsICd3aG9sZS1wcm9qZWN0LWNvbnRhaW5lciddKTtcbiAgICByZW5kZXIuY29udGFpbmVyKGBwcm9qZWN0LSR7ZWxlbWVudElkfS1jb250YWluZXJgLCBgcHJvamVjdC0ke2VsZW1lbnRJZH1gLCBbJ2ZsZXgtZ3JpZCcsICdwcm9qZWN0LWNvbnRhaW5lciddKTtcbiAgICByZW5kZXIuY29udGFpbmVyKGBwcm9qZWN0LSR7ZWxlbWVudElkfS1uYW1lYCwgYHByb2plY3QtJHtlbGVtZW50SWR9LWNvbnRhaW5lcmAsIFsnY29sLTEyJywgJ2NvbC1tLTEwJ10pO1xuICAgIGNvbnN0IHRleHQgPSByZW5kZXIuY29udGFpbmVyKGVsZW1lbnRJZCwgYHByb2plY3QtJHtlbGVtZW50SWR9LW5hbWVgLCBbJ21pbmlib3gnLCAnY2VudGVyJ10sICdoMicpO1xuICAgIHRleHQudGV4dENvbnRlbnQgPSBlbGVtZW50SWQ7XG4gICAgY29uc3QgbmV3VGFza0J0biA9IHJlbmRlci5jb250YWluZXIoYHByb2plY3QtJHtlbGVtZW50SWR9LWJ1dHRvbmAsIGBwcm9qZWN0LSR7ZWxlbWVudElkfS1jb250YWluZXJgLCBbJ2NvbC0yJywgJ21pbmlib3gnLCAnbm8tbWFyZ2luJywgJ25ldy10YXNrLWJ0biddLCAnYnV0dG9uJyk7XG4gICAgcmVuZGVyLmNvbnRhaW5lcihudWxsLCBgcHJvamVjdC0ke2VsZW1lbnRJZH0tYnV0dG9uYCwgWydtaW5pYm94J10pLnRleHRDb250ZW50ID0gJ0FkZCBOZXcgVGFzayc7XG4gICAgcmV0dXJuIG5ld1Rhc2tCdG47XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyV2FybmluZ1Byb2plY3RNZXNzYWdlID0gKG1lc3NhZ2UpID0+IHtcbiAgICByZW5kZXIuY29udGFpbmVyKG1lc3NhZ2UsICdwcm9qZWN0LWZvcm0tY29udGFpbmVyJywgWydjb2wtMTInLCAnd2FybmluZy1tZXNzYWcnXSkudGV4Q29udGVudCA9IG1lc3NhZ2U7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyV2FybmluZ01lc3NhZ2UgPSAobWVzc2FnZSkgPT4ge1xuICAgIHJlbmRlci5jb250YWluZXIobWVzc2FnZSwgJ3Rhc2stZm9ybS13YXJuaW5nLWNvbnRhaW5lcicsIFsnY29sLTEyJywgJ3dhcm5pbmctbWVzc2FnZSddKS50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVGFza0luZm8gPSAocHJvaiwgb2JqKSA9PiB7XG4gICAgY29uc3QgaWRTdHJpbmcgPSBgdGFzay1pbmZvLSR7cHJvan0tJHtvYmoubmFtZX1gO1xuICAgIGNvbnN0IHRhc2tOYW1lSWQgPSBgdGFzay0ke3Byb2p9LSR7b2JqLm5hbWV9YDtcbiAgICByZW5kZXIuY29udGFpbmVyKCd0YXNrLWluZm8tY29udGFpbmVyJywgYCR7dGFza05hbWVJZH1gLCBbJ2JveCcsICdpbmZvJ10pO1xuICAgIGNvbnN0IGNsb3NlQnRuID0gcmVuZGVyLmNsb3NlVGFiQnRuKCd0YXNrLWluZm8tY29udGFpbmVyJyk7XG4gICAgcmVuZGVyLmNvbnRhaW5lcihudWxsLCAndGFzay1pbmZvLWNvbnRhaW5lcicsICd0YXNrLWRlc2NyaXB0aW9uJywgJ3AnKS50ZXh0Q29udGVudCA9IG9iai5jb250ZW50O1xuICAgIHJlbmRlci5jb250YWluZXIoYCR7aWRTdHJpbmd9LWRpZmZpY3VsdHktY29udGFpbmVyYCwgJ3Rhc2staW5mby1jb250YWluZXInKTtcbiAgICBjb25zdCBkaWZmaWN1bHR5SW5mbyA9IHJlbmRlci5jb250YWluZXIoYCR7aWRTdHJpbmd9LWRpZmZpY3VsdHlgLCBgJHtpZFN0cmluZ30tZGlmZmljdWx0eS1jb250YWluZXJgKTtcbiAgICBkaWZmaWN1bHR5SW5mby50ZXh0Q29udGVudCA9IG9iai5kaWZmaWN1bHR5O1xuICAgIHJlbmRlci5jb250YWluZXIoYCR7aWRTdHJpbmd9LWRhdGUtY29udGFpbmVyYCwgJ3Rhc2staW5mby1jb250YWluZXInKTtcbiAgICBjb25zdCBkYXRlSW5mbyA9IHJlbmRlci5jb250YWluZXIoYCR7aWRTdHJpbmd9LWRhdGVgLCBgJHtpZFN0cmluZ30tZGF0ZS1jb250YWluZXJgKTtcbiAgICBkYXRlSW5mby50ZXh0Q29udGVudCA9IG9iai5kYXRlO1xuICAgIHJlbmRlci5jb250YWluZXIoYCR7aWRTdHJpbmd9LWJ0bi1jb250YWluZXJgLCAndGFzay1pbmZvLWNvbnRhaW5lcicsIFsnZmxleC1ncmlkJ10pO1xuICAgIGNvbnN0IGVkaXRCdG4gPSByZW5kZXIuY29udGFpbmVyKGAke2lkU3RyaW5nfS1idG4tZWRpdGAsIGAke2lkU3RyaW5nfS1idG4tY29udGFpbmVyYCwgWydjb2wtNicsICdidG4tZWRpdCddLCAnYnV0dG9uJyk7XG4gICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9ICdFZGl0JztcbiAgICBjb25zdCBkZWxldGVCdG4gPSByZW5kZXIuY29udGFpbmVyKGAke2lkU3RyaW5nfS1idG4tZGVsZXRlYCwgYCR7aWRTdHJpbmd9LWJ0bi1jb250YWluZXJgLCBbJ2NvbC02JywgJ2J0bi1kYW5nZXInXSwgJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xuICAgIHJldHVybiB7XG4gICAgICBjbG9zZUJ0bixcbiAgICAgIGVkaXRCdG4sXG4gICAgICBkZWxldGVCdG4sXG4gICAgICBkaWZmaWN1bHR5SW5mbyxcbiAgICAgIGRhdGVJbmZvLFxuICAgIH07XG4gIH07XG5cbiAgY29uc3QgcmVuZGVyVGFzayA9IChwcm9qZWN0LCBvYmopID0+IHtcbiAgICBjb25zdCBpZFN0cmluZyA9IGB0YXNrLSR7cHJvamVjdH0tJHtvYmoubmFtZX1gO1xuXG4gICAgcmVuZGVyLmNvbnRhaW5lcihgJHtpZFN0cmluZ31gLCBgcHJvamVjdC0ke3Byb2plY3R9YCwgWyd0YXNrLWNvbnRhaW5lciddKTtcbiAgICByZW5kZXIuY29udGFpbmVyKGAke2lkU3RyaW5nfS1jb250YWluZXJgLCBgdGFzay0ke3Byb2plY3R9LSR7b2JqLm5hbWV9YCwgWydmbGV4LWdyaWQnXSk7XG4gICAgcmVuZGVyLmNvbnRhaW5lcihgJHtpZFN0cmluZ30tY29tcGxldGUtdGFzay1jb250YWluZXJgLCBgJHtpZFN0cmluZ30tY29udGFpbmVyYCwgWydjb2wtMScsICdtaW5pYm94JywgJ25vLWJvdW5kcyddKTtcbiAgICBjb25zdCBjb21wbGV0ZVRhc2tCdG4gPSByZW5kZXIuY29udGFpbmVyKGAke2lkU3RyaW5nfS1jb21wbGV0ZS10YXNrLWJ0bmAsIGAke2lkU3RyaW5nfS1jb21wbGV0ZS10YXNrLWNvbnRhaW5lcmAsIFsnY29tcGxldGUtYnRuJywgJ21pbmlib3gnXSwgJ2J1dHRvbicpO1xuICAgIGNvbnN0IG5hbWVCdG4gPSByZW5kZXIuY29udGFpbmVyKCd7aWRTdHJpbmd9LWNvbnRlbnQtdGFzay1uYW1lJywgYCR7aWRTdHJpbmd9LWNvbnRhaW5lcmAsIFsnY29sLTEwJywgJ21pbmlib3gnLCAnbm8tYm91bmRzJywgJ3Rhc2stbmFtZSddKTtcbiAgICBuYW1lQnRuLnRleHRDb250ZW50ID0gb2JqLm5hbWU7XG4gICAgcmVuZGVyLmNvbnRhaW5lcihgJHtpZFN0cmluZ30tdG9kby1idXR0b24tY29udGFpbmVyYCwgYCR7aWRTdHJpbmd9LWNvbnRhaW5lcmAsIFsnY29sLTEnLCAnbWluaWJveCcsICdlbmQnLCAnbm8tYm91bmRzJ10pO1xuICAgIGNvbnN0IHRvZG9CdG4gPSByZW5kZXIuY29udGFpbmVyKGAke2lkU3RyaW5nfS10b2RvLWJ1dHRvbmAsIGAke2lkU3RyaW5nfS10b2RvLWJ1dHRvbi1jb250YWluZXJgLCBbJ25vLWJvdW5kcycsICdidG4tdG9kbyddKTtcbiAgICB0b2RvQnRuLnRleHRDb250ZW50ID0gJysgVG9kbyc7XG4gICAgcmVuZGVyLmNvbnRhaW5lcihudWxsLCBgJHtpZFN0cmluZ30tY29udGFpbmVyYCwgJ2NvbC0xJyk7XG4gICAgcmVuZGVyLmNvbnRhaW5lcihgJHtpZFN0cmluZ30tdG9kby1jb250YWluZXJgLCBgJHtpZFN0cmluZ30tY29udGFpbmVyYCwgJ2NvbC0xMScpO1xuICAgIHJldHVybiB7XG4gICAgICB0b2RvQnRuLFxuICAgICAgbmFtZUJ0bixcbiAgICAgIC8vIGVkaXRCdG4sXG4gICAgICAvLyBkZWxldGVCdG4sXG4gICAgICBjb21wbGV0ZUJ0bjogY29tcGxldGVUYXNrQnRuLFxuICAgICAgLy8gZGF0ZUluZm8sXG4gICAgICAvLyBkaWZmaWN1bHR5SW5mbyxcbiAgICB9O1xuICB9O1xuXG4gIGNvbnN0IHJlbmRlclRvZG8gPSAocHJvamVjdCwgdGFza05hbWUsIHRvZG8pID0+IHtcbiAgICBjb25zdCBpZFN0cmluZyA9IGB0YXNrLSR7cHJvamVjdH0tJHt0YXNrTmFtZX0tJHt0b2RvfWA7XG4gICAgcmVuZGVyLmNvbnRhaW5lcihgJHtpZFN0cmluZ30tdG9kb2AsIGB0YXNrLSR7cHJvamVjdH0tJHt0YXNrTmFtZX0tdG9kby1jb250YWluZXJgLCBbJ2ZsZXgtZ3JpZCcsICd0b2RvLWNvbnRhaW5lciddKTtcbiAgICByZW5kZXIuY29udGFpbmVyKGAke2lkU3RyaW5nfS10b2RvLWNvbnRhaW5lci1jb21wbGV0ZS1idXR0b24tY29udGFpbmVyYCwgYCR7aWRTdHJpbmd9LXRvZG9gLCAnY29sLTEnKTtcbiAgICBjb25zdCBjaGVja0J0biA9IHJlbmRlci5jb250YWluZXIoYCR7aWRTdHJpbmd9LXRvZG8tY29udGFpbmVyLWJ1dHRvbmAsIGAke2lkU3RyaW5nfS10b2RvLWNvbnRhaW5lci1jb21wbGV0ZS1idXR0b24tY29udGFpbmVyYCwgJ2NvbXBsZXRlLWJ0bicsICdidXR0b24nKTtcbiAgICBjb25zdCBbdG9kb0Rlc2NyaXB0aW9uXSA9IEpTT04ucGFyc2UodG9kbyk7XG4gICAgcmVuZGVyLmNvbnRhaW5lcihgdG9kby0ke3Byb2plY3R9LSR7dGFza05hbWV9LSR7dG9kb30tdG9kby1jb250YWluZXItZGVzY3JpcHRpb25gLCBgdGFzay0ke3Byb2plY3R9LSR7dGFza05hbWV9LSR7dG9kb30tdG9kb2AsICdjb2wtMTAnKS50ZXh0Q29udGVudCA9IHRvZG9EZXNjcmlwdGlvbjtcbiAgICByZW5kZXIuY29udGFpbmVyKGAke2lkU3RyaW5nfS10b2RvLWNvbnRhaW5lci1kZWxldGUtYnV0dG9uLWNvbnRhaW5lcmAsIGAke2lkU3RyaW5nfS10b2RvYCwgJ2NvbC0xJyk7XG4gICAgY29uc3QgZGVsZXRlQnRuID0gcmVuZGVyLmNvbnRhaW5lcihgJHtpZFN0cmluZ30tdG9kby1jb250YWluZXItZGVsZXRlLWJ1dHRvbmAsIGAke2lkU3RyaW5nfS10b2RvLWNvbnRhaW5lci1kZWxldGUtYnV0dG9uLWNvbnRhaW5lcmAsICdzb2Z0LWJ1dHRvbicpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdYJztcbiAgICByZXR1cm4ge1xuICAgICAgY2hlY2tCdG4sXG4gICAgICBkZWxldGVCdG4sXG4gICAgfTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJDaGVja2VkVG9kbyA9IChwcm9qZWN0LCB0YXNrTmFtZSwgdG9kbykgPT4ge1xuICAgIGNvbnN0IGlkU3RyaW5nID0gYHRhc2stJHtwcm9qZWN0fS0ke3Rhc2tOYW1lfS0ke3RvZG99YDtcbiAgICByZW5kZXIuY29udGFpbmVyKGAke2lkU3RyaW5nfS10b2RvYCwgYHRhc2stJHtwcm9qZWN0fS0ke3Rhc2tOYW1lfS10b2RvLWNvbnRhaW5lcmAsIFsnZmxleC1ncmlkJywgJ2NvbXBsZXRlZC10b2RvJ10pO1xuICAgIHJlbmRlci5jb250YWluZXIoYCR7aWRTdHJpbmd9LXRvZG8tY29udGFpbmVyLWNvbXBsZXRlLWJ1dHRvbi1jb250YWluZXJgLCBgJHtpZFN0cmluZ30tdG9kb2AsICdjb2wtMScpO1xuICAgIGNvbnN0IGNoZWNrQnRuID0gcmVuZGVyLmNvbnRhaW5lcihgJHtpZFN0cmluZ30tdG9kby1jb250YWluZXItYnV0dG9uYCwgYCR7aWRTdHJpbmd9LXRvZG8tY29udGFpbmVyLWNvbXBsZXRlLWJ1dHRvbi1jb250YWluZXJgLCAnY29tcGxldGUtYnRuJywgJ2J1dHRvbicpO1xuICAgIGNvbnN0IFt0b2RvRGVzY3JpcHRpb25dID0gSlNPTi5wYXJzZSh0b2RvKTtcbiAgICByZW5kZXIuY29udGFpbmVyKGB0b2RvLSR7cHJvamVjdH0tJHt0YXNrTmFtZX0tJHt0b2RvfS10b2RvLWNvbnRhaW5lci1kZXNjcmlwdGlvbmAsIGB0YXNrLSR7cHJvamVjdH0tJHt0YXNrTmFtZX0tJHt0b2RvfS10b2RvYCwgJ2NvbC0xMCcpLnRleHRDb250ZW50ID0gdG9kb0Rlc2NyaXB0aW9uO1xuICAgIHJldHVybiB7IGNoZWNrQnRuIH07XG4gIH07XG5cbiAgY29uc3QgbmV3UHJvamVjdEJ0biA9ICgpID0+IHtcbiAgICByZW5kZXIuY29udGFpbmVyKCduZXctcHJvamVjdC1idG4tY29udGFpbmVyJywgJ2NvbnRlbnQtc2VjdGlvbicsIFsnZmxleC1ncmlkJywgJ2NlbnRlciddKTtcbiAgICBjb25zdCBidG4gPSByZW5kZXIuY29udGFpbmVyKCduZXctcHJvamVjdC1idG4nLCAnbmV3LXByb2plY3QtYnRuLWNvbnRhaW5lcicsIFsnbmV3LXByb2plY3QtYnRuJ10sICdidXR0b24nKTtcbiAgICBidG4udGV4dENvbnRlbnQgPSAnKyc7XG4gICAgcmV0dXJuIChidG4pO1xuICB9O1xuXG4gIGNvbnN0IG5vUHJvamVjdFdhcm5pbmcgPSAoKSA9PiB7XG4gICAgY29uc3Qgd2FybmluZyA9IHJlbmRlci5jb250YWluZXIoJ25vLXByb2plY3Qtd2FybmluZycsICdjb250ZW50LXNlY3Rpb24nLCBbJ25vLXByb2plY3Qtd2FybmluZyddKTtcbiAgICB3YXJuaW5nLnRleHRDb250ZW50ID0gJ05vdGhpbmcgdG8gZGlzcGxheSBoZXJlLiBQcmVzcyBcIitcIiB0byBjcmVhdGUgYSBuZXcgcHJvamVjdCc7XG4gICAgcmV0dXJuIHdhcm5pbmc7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICByZW5kZXJXYXJuaW5nUHJvamVjdE1lc3NhZ2UsXG4gICAgcmVuZGVyUHJvamVjdCxcbiAgICByZW5kZXJDaGVja2VkVG9kbyxcbiAgICByZW5kZXJUYXNrLFxuICAgIG5ld1Byb2plY3RCdG4sXG4gICAgcmVuZGVyVG9kbyxcbiAgICBub1Byb2plY3RXYXJuaW5nLFxuICAgIHJlbmRlcldhcm5pbmdNZXNzYWdlLFxuICAgIHJlbmRlclRhc2tJbmZvLFxuICB9O1xufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kb1RhYjtcbiJdLCJzb3VyY2VSb290IjoiIn0=