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
        let name = document.getElementById('name-input').value;
        let content = document.getElementById('content-input').value;
        let difficulty = document.getElementById('difficulty-select').value;
        let expiringDate = document.getElementById('date-input').value;
        let obj = userData.createTaskObj(name, content, difficulty, expiringDate);
        let validate = userData.validateTaskInput(obj);

        if (validate === true) {
            storageHelpers.addNewTaskToProject(key, obj);
        } else {
            console.error('Data Submission returned FALSE');
        }

    };

    const displayNewProjectForm = () => {
        if (! document.getElementById('project-form')) {
            forms.newProjectForm().addEventListener('click', () => {
                let formVal = document.getElementById('project-name').value;
                if  (userData.validateProjectInput(formVal)) {
                        storageHelpers.createNewProject(formVal);
                        document.getElementById('project-form').remove();
                        displayTabContent();
                        location.reload();
                }
            });
        } else {
            alert('Form Already Displayed');
        }
    }

    const completeTodo = (key, taskName, todoDescription) => {
        storageHelpers.changeTodoState(key, taskName, todoDescription);
        displayTabContent();
    }

    const completeTask = (key, taskName) => {
        storageHelpers.changeTaskState(key, taskName);
        location.reload();
    };

    const placeholdData = (obj) => {
        document.getElementById('name-input').value = obj.name;
        document.getElementById('content-input').value = obj.content;
    };

    const gatherDataFromForm = () => {
        let name = document.getElementById('name-input').value;
        let content = document.getElementById('content-input').value;
        return userData.createTaskObj(name, content, null, null);
    };

    const deleteTodo = (key, taskName, todoDescription) => {
        storageHelpers.removeTodoFromTask(key, taskName, todoDescription);
        displayTabContent();
    }


    /*
     * This function display the entire todo tab, taking the data from the view
     * and sending to the model
     */

    const displayTabContent = () => {
    if (! document.getElementById('new-project-btn')) {
        todoTab.newProjectBtn().addEventListener('click', displayNewProjectForm);
    }
        Object.keys(localStorage).forEach((key) => {
            if (document.getElementById(`project-${userData.convertToValidId(key)}`)) {
                document.getElementById(`project-${userData.convertToValidId(key)}`).remove();
            }
            todoTab.renderProject(key).addEventListener('click', () => {
                forms.newTaskForm(key).addEventListener('click', () => submitTaskForm(key));
            })
            JSON.parse(localStorage.getItem(key)).forEach((item) => {
                let obj = JSON.parse(item);
                if (! obj.status) {
                    let taskBtns = todoTab.renderTask(key, obj);
                    taskBtns.completeBtn.addEventListener('click', () => { completeTask(key, obj.name) });
                    taskBtns.todoBtn.addEventListener('click', () => {
                        let submitBtn = forms.newTodoForm(key, obj.name);
                        submitBtn.addEventListener('click', () => {
                            let val = document.getElementById('todo-form-input').value;
                            if (userData.validateTodoInput(val)) {
                                storageHelpers.addNewTodoToTask(key, obj, val);
                            } else {
                                console.error('Invalid Input')
                            }
                        });
                    })
                    if (storageHelpers.checkIfDateIsLate(key, obj.name)) { taskBtns.dateInfo.classList.add('date-field-warning') }
                    if (taskBtns.difficultyInfo.textContent == 'Easy') {
                        taskBtns.difficultyInfo.classList.add('easy-container');
                    } else if (taskBtns.difficultyInfo.textContent == 'Medium') {
                        taskBtns.difficultyInfo.classList.add('medium-container');
                    } else {
                        taskBtns.difficultyInfo.classList.add('hard-container');
                    }
                    if (obj.todos.length > 0) {
                        obj.todos.forEach((todo) => {
                            if (! storageHelpers.checkIfTodoIsCompleted(key, JSON.parse(item).name, JSON.parse(todo)[0])) {
                                let checkBtn = todoTab.renderTodo(key, obj.name, todo);
                                checkBtn.checkBtn.addEventListener('click', () => completeTodo(key, obj.name, JSON.parse(todo)[0]));
                                checkBtn.deleteBtn.addEventListener('click', () => deleteTodo(key, obj.name, JSON.parse(todo)[0]));
                            } else {
                                let checkBtn = todoTab.renderCheckedTodo(key, obj.name, todo);
                                checkBtn.checkBtn.addEventListener('click', () => {
                                    storageHelpers.changeTodoState(key, obj.name, JSON.parse(todo)[0])
                                    location.reload();
                                });
                                checkBtn.checkBtn.classList.remove('complete-btn');
                                checkBtn.checkBtn.classList.add('uncomplete-btn');
                                checkBtn.checkBtn.parentElement.classList.add('completed-todo');
                            }
                        });
                    };
                    taskBtns.deleteBtn.addEventListener('click', () => {
                        storageHelpers.removeTaskFromProject(key, item);
                        displayTabContent();
                    });
                    taskBtns.editBtn.addEventListener('click', () => {
                        let editTaskForm = forms.newTaskForm(key);
                        placeholdData(JSON.parse(item));
                        editTaskForm.addEventListener('click', () => {
                            if (userData.validateTaskInput(obj)) {
                                let obj = gatherDataFromForm();
                                storageHelpers.removeTaskFromProject(key, item);
                                storageHelpers.addNewTaskToProject(key, obj);
                                displayTabContent();
                            };
                        });
                    });
                }
            });
        });
    };

    const displayTabCompletedContent = () => {
    document.getElementById('new-project-btn').remove();
        Object.keys(localStorage).forEach((key) => {
            if (document.getElementById(`project-${userData.convertToValidId(key)}`)) {
                document.getElementById(`project-${userData.convertToValidId(key)}`).remove();
            }
            todoTab.renderProject(key).remove();
            JSON.parse(localStorage.getItem(key)).forEach((task) => {
                let obj = JSON.parse(task);
                if (obj.status) {
                    let btn = todoTab.renderTask(key, obj);
                    btn.completeBtn.classList.remove('complete-btn');
                    btn.completeBtn.classList.add('completed-btn');
                    btn.completeBtn.addEventListener('click', () => {
                        storageHelpers.changeTaskState(key, obj.name);
                        location.reload();
                    });
                    btn.todoBtn.disabled = true;
                    btn.editBtn.disabled = true;
                    btn.deleteBtn.addEventListener('click', () => {
                        storageHelpers.removeTaskFromProject(key, obj);
                        location.reload();
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
    console.log(storageHelpers.checkForProjectExistence());
    if (! storageHelpers.checkForProjectExistence()) {
       todoTab.noProjectWarning();
    }
    return { displayTabContent, displayTabCompletedContent, displayNewProjectForm }
})();

export default todoTabController ;
