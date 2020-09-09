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
            console.log('Data Submission returned FALSE');
        }
    };

    const completeTodo = (key, taskName, todo) => {
        let taskIndex = storageHelpers.findDataIndexByKey(key, taskName);
        let stg = JSON.parse(localStorage.getItem(key));
        console.log(stg[taskIndex]);
        task = JSON.parse(stg[taskIndex]);
        console.log(task);
        task.todos.forEach((item) => {
            if (item[0] === todo){
                console.log(right);
            } else {
                console.log(item[0], todo);
            }
        });
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
                // Todo Section
                let todoBtn = todoTab.renderTask(key, obj);
                todoBtn.addEventListener('click', () => {
                    let submitBtn = forms.newTodoForm();
                    submitBtn.addEventListener('click', () => {
                        let val = document.getElementById('todo-form-input').value;
                        storageHelpers.addNewTodoToTask(key, obj, val);
                    });
                })
                if (obj.todos.length > 0) {
                    obj.todos.forEach((todo) => {
                        let checkBtn = todoTab.renderTodo(key, obj.name, todo);
                        checkBtn.addEventListener('click', () => completeTodo(key, obj.name, todo));
                    });
                };
            });
        });
    };

    const allTodos = () => {
        Object.keys(localStorage).forEach((key) => {
            JSON.parse(localStorage.getItem(key)).forEach((item) => {

            });
        });
    };

    const newProjectForm = () => {
        if (! document.getElementById('project-form')) {
            forms.newProjectForm().addEventListener('click', () => {
                let formVal = document.getElementById('project-name').value;
                if  (userData.validateProjectInput(formVal)) {
                        storageHelpers.createNewProject(formVal);
                        document.getElementById('project-form').remove();
                        allProjects();
                }
            });
        } else {
            alert('Form Already Displayed');
        }
    }

    todoTab.newProjectBtn().addEventListener('click', newProjectForm);
    allProjects();
    allTasks();

    return { allProjects, newProjectForm }
};

export default todoTabController ;
