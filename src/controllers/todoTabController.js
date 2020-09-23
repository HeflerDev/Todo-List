import forms from '../views/forms';
import todoTab from '../views/todoTab';
import userData from '../models/userData';
import storageHelpers from '../models/storageHelpers';
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
    const obj = userData.createTaskObj(name, content, difficulty, expiringDate);
    const validate = userData.validateTaskInput(obj);

    if (validate === true) { storageHelpers.addNewTaskToProject(key, obj); }
  };

  const completeTodo = (key, taskName, todoDescription) => {
    storageHelpers.changeTodoState(key, taskName, todoDescription);
  };

  const completeTask = (key, taskName) => {
    storageHelpers.changeTaskState(key, taskName);
  };

  const placeholdData = (obj) => {
    document.getElementById('name-input').value = obj.name;
    document.getElementById('content-input').value = obj.content;
  };

  const gatherDataFromForm = () => {
    const name = document.getElementById('name-input').value;
    const content = document.getElementById('content-input').value;
    return userData.createTaskObj(name, content, null, null);
  };

  const deleteTodo = (key, taskName, todoDescription) => {
    storageHelpers.removeTodoFromTask(key, taskName, todoDescription);
  };

  const displayNewProjectForm = () => {
    if (!document.getElementById('project-form')) {
      forms.newProjectForm().addEventListener('click', () => {
        const formVal = document.getElementById('project-name').value;
        if (userData.validateProjectInput(formVal)) {
          storageHelpers.createNewProject(formVal);
          document.getElementById('project-form').remove();
        }
      });
    } else {
      // Do something
    }
  };

  /*
     * This function display the entire todo tab, taking the data from the view
     * and sending to the model
     */

  const displayTabContent = () => {
    if (!document.getElementById('new-project-btn')) {
      todoTab.newProjectBtn().addEventListener('click', displayNewProjectForm);
    }
    Object.keys(localStorage).forEach((key) => {
      if (document.getElementById(`project-${userData.convertToValidId(key)}`)) {
        document.getElementById(`project-${userData.convertToValidId(key)}`).remove();
      }
      todoTab.renderProject(key).addEventListener('click', () => {
        forms.newTaskForm(key).addEventListener('click', () => submitTaskForm(key));
      });
      JSON.parse(localStorage.getItem(key)).forEach((item) => {
        const obj = JSON.parse(item);
        if (!obj.status) {
          const taskBtns = todoTab.renderTask(key, obj);
          taskBtns.completeBtn.addEventListener('click', () => {
            completeTask(key, obj.name);
            displayTabContent();
          });
          taskBtns.todoBtn.addEventListener('click', () => {
            const submitBtn = forms.newTodoForm(key, obj.name);
            submitBtn.addEventListener('click', () => {
              const val = document.getElementById('todo-form-input').value;
              if (userData.validateTodoInput(val)) {
                storageHelpers.addNewTodoToTask(key, obj, val);
              } else {
                // Do Something
              }
            });
          });
          if (storageHelpers.checkIfDateIsLate(key, obj.name)) { taskBtns.dateInfo.classList.add('date-field-warning'); }
          if (taskBtns.difficultyInfo.textContent === 'Easy') {
            taskBtns.difficultyInfo.classList.add('easy-container');
          } else if (taskBtns.difficultyInfo.textContent === 'Medium') {
            taskBtns.difficultyInfo.classList.add('medium-container');
          } else {
            taskBtns.difficultyInfo.classList.add('hard-container');
          }
          if (obj.todos.length > 0) {
            obj.todos.forEach((todo) => {
              const [description] = JSON.parse(todo);
              if (!storageHelpers.checkIfTodoIsCompleted(key, JSON.parse(item).name, description)) {
                const checkBtn = todoTab.renderTodo(key, obj.name, todo);
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
                const checkBtn = todoTab.renderCheckedTodo(key, obj.name, todo);
                checkBtn.checkBtn.addEventListener('click', () => {
                  storageHelpers.changeTodoState(key, obj.name, JSON.parse(todo)[0]);
                  displayTabContent();
                });
                checkBtn.checkBtn.classList.remove('complete-btn');
                checkBtn.checkBtn.classList.add('uncomplete-btn');
                checkBtn.checkBtn.parentElement.classList.add('completed-todo');
              }
            });
          }
          taskBtns.deleteBtn.addEventListener('click', () => {
            storageHelpers.removeTaskFromProject(key, item);
            displayTabContent();
          });
          taskBtns.editBtn.addEventListener('click', () => {
            const editTaskForm = forms.newTaskForm(key);
            placeholdData(JSON.parse(item));
            editTaskForm.addEventListener('click', () => {
              if (userData.validateTaskInput(obj)) {
                const obj = gatherDataFromForm();
                storageHelpers.removeTaskFromProject(key, item);
                storageHelpers.addNewTaskToProject(key, obj);
                displayTabContent();
              }
            });
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
      if (document.getElementById(`project-${userData.convertToValidId(key)}`)) {
        document.getElementById(`project-${userData.convertToValidId(key)}`).remove();
      }
      todoTab.renderProject(key).remove();
      JSON.parse(localStorage.getItem(key)).forEach((task) => {
        const obj = JSON.parse(task);
        if (obj.status) {
          const btn = todoTab.renderTask(key, obj);
          btn.completeBtn.classList.remove('complete-btn');
          btn.completeBtn.classList.add('completed-btn');
          btn.completeBtn.addEventListener('click', () => {
            storageHelpers.changeTaskState(key, obj.name);
            displayTabCompletedContent();
          });
          btn.todoBtn.disabled = true;
          btn.editBtn.disabled = true;
          btn.deleteBtn.addEventListener('click', () => {
            storageHelpers.removeTaskFromProject(key, obj);
            displayTabCompletedContent();
          });
        }
      });
    });
  };

  /*
     * Basic flow that will execute the function as soon as it is
     * called
     */

  displayTabContent();
  if (!storageHelpers.checkForProjectExistence()) {
    todoTab.noProjectWarning();
  }
  return { displayTabContent, displayTabCompletedContent, displayNewProjectForm };
})();

export default todoTabController;
