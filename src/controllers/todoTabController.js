import forms from '../views/forms';
import todoTab from '../views/todoTab';
import userData from '../models/userData';
import storageHelpers from '../models/storageHelpers';

const todoTabController = () => {

    const submitTaskForm = (key) => {
        let name = document.getElementById('name-input').value;
        let content = document.getElementById('content-input').value;
        let obj = userData.createTaskObj(name, content, null, null);
        if (userData.validateTaskInput(obj)) {
            storageHelpers.addNewTaskToProject(key, obj);
        } else {
            console.error('Data Submission returned FALSE');
        }
    };

    const completeTodo = (key, taskName, todoDescription) => {
            let project = JSON.parse(localStorage.getItem(key));
            let task = JSON.parse(project[storageHelpers.findDataIndexByKey(key, taskName)]);
            let todo = task.todos.splice(storageHelpers.accessTodoFromTask(key, taskName, todoDescription), 1);
            todo = JSON.parse(todo);
            if (todo[1] === false) {
                todo[1] = true;
            } else {
                todo[1] = false;
            }
            task.todos.push(JSON.stringify(todo));
            storageHelpers.removeTaskFromStorage(key, taskName);
            storageHelpers.addNewTaskToProject(key, task);
            renderTab();
    }

    const placeholdData = (obj) => {
        document.getElementById('name-input').value = obj.name;
        document.getElementById('content-input').value = obj.content;
    };

    const gatherDataFromForm = () => {
        let name = document.getElementById('name-input').value;
        let content = document.getElementById('content-input').value;
        return userData.createTaskObj(name, content, null, null)
    };

    const allProjects = () => {
        Object.keys(localStorage).forEach((key) => {
            if (document.getElementById(`project-${userData.convertToValidId(key)}`)) {
                document.getElementById(`project-${userData.convertToValidId(key)}`).remove();
            }
            todoTab.renderProject(key).addEventListener('click', () => {
                forms.newTaskForm(key).addEventListener('click', () => submitTaskForm(key));
            })
        });
    }

    const allTasks = () => {
        Object.keys(localStorage).forEach((key) => {

            JSON.parse(localStorage.getItem(key)).forEach((item) => {

                let obj = JSON.parse(item);
                let taskBtns = todoTab.renderTask(key, obj);
                taskBtns.completeBtn.addEventListener('click', () => { completeTask(key, item) });
                taskBtns.todoBtn.addEventListener('click', () => {
                    let submitBtn = forms.newTodoForm();
                    submitBtn.addEventListener('click', () => {
                        let val = document.getElementById('todo-form-input').value;
                        if (userData.validateTodoInput(val)) {
                            storageHelpers.addNewTodoToTask(key, obj, val);
                        } else {
                            console.error('Invalid Input')
                        }
                    });
                })
                if (obj.todos.length > 0) {
                    obj.todos.forEach((todo) => {
                        if (! storageHelpers.checkIfTodoIsCompleted(key, JSON.parse(item).name, JSON.parse(todo)[0])) {
                            let checkBtn = todoTab.renderTodo(key, obj.name, todo);
                            checkBtn.addEventListener('click', () => completeTodo(key, obj.name, JSON.parse(todo)[0]));
                        }
                    });
                };
                taskBtns.deleteBtn.addEventListener('click', () => {
                    storageHelpers.removeTaskFromStorage(key, item);
                    renderTab();
                });
                taskBtns.editBtn.addEventListener('click', () => {
                    let editTaskForm = forms.newTaskForm(key);
                    placeholdData(JSON.parse(item));
                    editTaskForm.addEventListener('click', () => {
                        if (userData.validateTaskInput(obj)) {
                            let obj = gatherDataFromForm();
                            storageHelpers.removeTaskFromStorage(key, item);
                            storageHelpers.addNewTaskToProject(key, obj);
                            renderTab();
                        };
                    });
                });
            });
        });
    };

    const renderTab = () => {
        allProjects();
        allTasks();
    };

    const newProjectForm = () => {
        if (! document.getElementById('project-form')) {
            forms.newProjectForm().addEventListener('click', () => {
                let formVal = document.getElementById('project-name').value;
                if  (userData.validateProjectInput(formVal)) {
                        storageHelpers.createNewProject(formVal);
                        document.getElementById('project-form').remove();
                        renderTab();
                }
            });
        } else {
            alert('Form Already Displayed');
        }
    }


    todoTab.newProjectBtn().addEventListener('click', newProjectForm);
    renderTab();

    return { allProjects, newProjectForm }
};

export default todoTabController ;
