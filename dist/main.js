!function(t){var e={};function n(o){if(e[o])return e[o].exports;var a=e[o]={i:o,l:!1,exports:{}};return t[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(o,a,function(e){return t[e]}.bind(null,a));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";n.r(e);var o={createTaskObj:(t,e,n,o)=>({name:t,content:e,difficulty:n,date:o,status:!1,todos:[]}),validateProjectInput:t=>/^[a-zA-Z]/g.test(t),validateTodoInput:t=>/^[a-zA-Z]/.test(t),validateTaskInput:t=>{const e=[];return/^[a-zA-Z]/.test(t.name)||e.push("Task name must start with an letter"),t.content||e.push("Task content must exist"),Date.parse(t.date)||e.push("Invalid Date input"),!(e.length>0)||e},convertToValidId:t=>t.replace(/\s/g,"-")};var a={container:(t,e,n=null,a="div")=>{const c=document.createElement(a);return t&&(c.id=o.convertToValidId(t)),e=o.convertToValidId(e),n&&(Array.isArray(n)?n.forEach(t=>{c.classList.add(t)}):c.classList.add(n)),document.getElementById(e).appendChild(c),c}};var c={newProjectForm:()=>{a.container("project-form-container","new-project-btn-container",["box","col-12"],"div"),a.container("project-form","project-form-container",["flex-grid"],"form"),a.container("p","project-form",["col-12"],"label").textContent="Project Name",a.container("project-name","project-form",["col-12"],"input");const t=a.container("project-submit-btn","project-form",["col-12","btn-primary"],"input");return t.type="submit",t.value="Create Project!",t},newTaskForm:t=>{a.container("task-form-container",t,["box"]),a.container("task-form","task-form-container","flex-grid","form"),a.container("name-label","task-form",["col-12"],"label").textContent="Name",a.container("name-input","task-form",["col-12"],"input"),document.getElementById("task-form").appendChild(document.createElement("br")),a.container("content-label","task-form",["col-12"],"label").textContent="Content",a.container("content-input","task-form",["col-12"],"textarea"),document.getElementById("task-form").appendChild(document.createElement("br")),a.container("difficulty-label","task-form",["col-12"],"label").textContent="Difficulty",a.container("difficulty-select","task-form",["col-12"],"select");const e=a.container("difficulty-option-1","difficulty-select",null,"option");e.textContent="Easy",e.value="Easy";const n=a.container("difficulty-option-2","difficulty-select",null,"option");n.textContent="Medium",n.value="Medium";const o=a.container("difficulty-option-3","difficulty-select",null,"option");o.textContent="Hard",o.value="Hard",a.container("date-label","task-form",null,"label"),a.container("date-input","task-form",["col-6"],"input").type="date";const c=a.container("task-submit","task-form",["col-6"],"input");return c.value="Submit",c.type="submit",c},newTodoForm:(t,e)=>{a.container("todo-form-container",`task-${t}-${e}-details-container`,"box","form"),a.container("todo-form-label","todo-form-container",null,"label"),a.container("todo-form-input","todo-form-container",null,"input");const n=a.container("todo-form-submit","todo-form-container",null,"input");return n.value="Create Todo",n.type="submit",n}};var r={renderProject:t=>{a.container("project-"+t,"content-section",["box","whole-project-container"]),a.container(`project-${t}-container`,"project-"+t,["flex-grid","project-container"]),a.container(`project-${t}-name`,`project-${t}-container`,["col-12","col-m-10"]),a.container(t,`project-${t}-name`,["minibox","center"],"h2").textContent=t;const e=a.container(`project-${t}-button`,`project-${t}-container`,["col-2","minibox","no-margin"],"button");return a.container(null,`project-${t}-button`,["minibox"]).textContent="Add New Task",e},renderCheckedTodo:(t,e,n)=>{a.container(`task-${t}-${e}-${n}-todo`,`task-${t}-${e}-todo`,"flex-grid");const o=a.container(`task-${t}-${e}-${n}-todo-container-button`,`task-${t}-${e}-${n}-todo`,["col-1","complete-btn"],"button"),[c]=JSON.parse(n);return a.container(`todo-${t}-${e}-${n}-todo-container-description`,`task-${t}-${e}-${n}-todo`,"col-10").textContent=c,{checkBtn:o}},renderTask:(t,e)=>{a.container(`task-${t}-${e.name}`,"project-"+t,["task-container"]),a.container(`task-${t}-${e.name}-name-container`,`task-${t}-${e.name}`,["flex-grid"]);const n=a.container(`task-${t}-${e.name}-complete-task-btn`,`task-${t}-${e.name}-name-container`,["col-1","complete-btn"],"button");a.container(`task-${t}-${e.name}-name`,`task-${t}-${e.name}-name-container`,["col-10","task-field","minibox","column"]),a.container(`task-${t}-${e.name}-name-text`,`task-${t}-${e.name}-name`).textContent=e.name,a.container(`task-${t}-${e.name}-content-container`,`task-${t}-${e.name}`,["flex-grid"]),a.container(`task-${t}-${e.name}-content`,`task-${t}-${e.name}-content-container`,["col-10","task-field"]).textContent=e.content,a.container(`task-${t}-${e.name}-content-container-buttons`,`task-${t}-${e.name}-content-container`,["col-2","flex-grid","minibox"]);const o=a.container(`task-${t}-${e.name}-edit-button`,`task-${t}-${e.name}-content-container-buttons`,["btn-secondary","col-12"],"button");o.textContent="Edit Task";const c=a.container(`task-${t}-${e.name}-delete-button`,`task-${t}-${e.name}-content-container-buttons`,["btn-danger","col-12"],"button");c.textContent="Delete Task",a.container(`task-${t}-${e.name}-details-container`,`task-${t}-${e.name}`,["flex-grid"]);const r=a.container(`task-${t}-${e.name}-details-difficulty`,`task-${t}-${e.name}-details-container`,["col-6","task-field"]);r.textContent=e.difficulty;const i=a.container(`task-${t}-${e.name}-details-date`,`task-${t}-${e.name}-details-container`,["col-6","task-field"]);i.textContent=e.date,a.container(`task-${t}-${e.name}-todo`,`task-${t}-${e.name}`);const s=a.container(`task-${t}-${e.name}-todo-button`,`task-${t}-${e.name}`,["btn-secondary","col-12","margin-1"],"button");return s.textContent="Add new Todo",{todoBtn:s,editBtn:o,deleteBtn:c,completeBtn:n,dateInfo:i,difficultyInfo:r}},newProjectBtn:()=>{a.container("new-project-btn-container","content-section",["flex-grid","center"]);const t=a.container("new-project-btn","new-project-btn-container",["new-project-btn"],"button");return t.textContent="+",t},renderTodo:(t,e,n)=>{a.container(`task-${t}-${e}-${n}-todo`,`task-${t}-${e}-todo`,["flex-grid","todo-container"]);const o=a.container(`task-${t}-${e}-${n}-todo-container-button`,`task-${t}-${e}-${n}-todo`,["col-1","complete-btn"],"button"),[c]=JSON.parse(n);a.container(`todo-${t}-${e}-${n}-todo-container-description`,`task-${t}-${e}-${n}-todo`,"col-10").textContent=c;const r=a.container(`task-${t}-${e}-${n}-todo-container-button-delete`,`task-${t}-${e}-${n}-todo`,["col-1","btn-danger"],"button");return r.textContent="X",{checkBtn:o,deleteBtn:r}},noProjectWarning:()=>{const t=a.container("no-project-warning","content-section",["no-project-warning"]);return t.textContent='Nothing to display here. Press "+" to create a new project',t}};const i=(()=>{const t=(t,e)=>{const n=localStorage.getItem(t);let o=-1;return JSON.parse(n).forEach((t,n)=>{const a=JSON.parse(t);e===a.name&&(o=n)}),o},e=(e,n)=>{const o=JSON.parse(localStorage.getItem(e));return JSON.parse(o[t(e,n)])},n=(e,n)=>{const o=JSON.parse(localStorage.getItem(e));o.splice(t(e,n),1),localStorage.removeItem(e),localStorage.setItem(e,JSON.stringify(o))},o=(t,e)=>{const n=JSON.parse(localStorage.getItem(t));localStorage.removeItem(t),n.unshift(JSON.stringify(e)),localStorage.setItem(t,JSON.stringify(n))},a=(t,e,n)=>{const o=i.findDataIndexByKey(t,e),a=JSON.parse(localStorage.getItem(t)),c=JSON.parse(a[o]);let r=-1;return c.todos.forEach((t,e)=>{JSON.parse(t)[0]===n&&(r=e)}),r},c=(t,n)=>{const o=e(t,n);return Date.parse(o.date)<Date.now()};return{addNewTaskToProject:o,addNewTodoToTask:(e,a,c)=>{const r=t(e,a.name);if(-1!==r){const t=JSON.parse(localStorage.getItem(e)),i=JSON.parse(t[r]);i.todos.push(JSON.stringify([c,!1])),n(e,a.name),o(e,i)}},createNewProject:t=>{localStorage.setItem(t,JSON.stringify([]))},removeTaskFromProject:n,removeTodoFromTask:(t,c,r)=>{const i=e(t,c);i.todos.splice(a(t,c,r),1),n(t,c),o(t,i)},findDataIndexByKey:t,getTodoIndex:a,checkIfTodoIsCompleted:(t,e,n)=>{const o=i.findDataIndexByKey(t,e),c=JSON.parse(localStorage.getItem(t)),r=JSON.parse(c[o]).todos[a(t,e,n)];return JSON.parse(r)[1]},changeTodoState:(t,e,a)=>{const c=JSON.parse(localStorage.getItem(t)),r=JSON.parse(c[i.findDataIndexByKey(t,e)]);let s=r.todos.splice(i.getTodoIndex(t,e,a),1);s=JSON.parse(s),!1===s[1]?s[1]=!0:s[1]=!1,r.todos.push(JSON.stringify(s)),n(t,e),o(t,r)},changeTaskState:(e,a)=>{const c=JSON.parse(localStorage.getItem(e)),r=JSON.parse(c[t(e,a)]);r.status?r.status=!1:r.status=!0,n(e,a),o(e,r)},checkForProjectExistence:()=>localStorage.length>0,retrieveTaskData:e,gatherStorageData:()=>{let t=0,e=0,n=0,o=0;return Object.keys(localStorage).forEach(a=>{JSON.parse(localStorage.getItem(a)).forEach(r=>{const i=JSON.parse(r);!0===i.status?t+=1:e+=1,c(a,i.name)?!1===i.status&&(o+=1):n+=1})}),{completed:t.toString(),uncompleted:e.toString(),onTime:n.toString(),lateTime:o.toString()}},checkIfDateIsLate:c}})();var s=i;var l=(()=>{const t=()=>{document.getElementById("project-form")||c.newProjectForm().addEventListener("click",()=>{const t=document.getElementById("project-name").value;o.validateProjectInput(t)&&(s.createNewProject(t),document.getElementById("project-form").remove())})},e=()=>{document.getElementById("new-project-btn")||r.newProjectBtn().addEventListener("click",t),Object.keys(localStorage).forEach(t=>{document.getElementById("project-"+o.convertToValidId(t))&&document.getElementById("project-"+o.convertToValidId(t)).remove(),r.renderProject(t).addEventListener("click",()=>{c.newTaskForm(t).addEventListener("click",()=>(t=>{const e=document.getElementById("name-input").value,n=document.getElementById("content-input").value,a=document.getElementById("difficulty-select").value,c=document.getElementById("date-input").value,r=o.createTaskObj(e,n,a,c);!0===o.validateTaskInput(r)&&s.addNewTaskToProject(t,r)})(t))}),JSON.parse(localStorage.getItem(t)).forEach(n=>{const a=JSON.parse(n);if(!a.status){const i=r.renderTask(t,a);i.completeBtn.addEventListener("click",()=>{((t,e)=>{s.changeTaskState(t,e)})(t,a.name),e()}),i.todoBtn.addEventListener("click",()=>{c.newTodoForm(t,a.name).addEventListener("click",()=>{const e=document.getElementById("todo-form-input").value;o.validateTodoInput(e)&&s.addNewTodoToTask(t,a,e)})}),s.checkIfDateIsLate(t,a.name)&&i.dateInfo.classList.add("date-field-warning"),"Easy"===i.difficultyInfo.textContent?i.difficultyInfo.classList.add("easy-container"):"Medium"===i.difficultyInfo.textContent?i.difficultyInfo.classList.add("medium-container"):i.difficultyInfo.classList.add("hard-container"),a.todos.length>0&&a.todos.forEach(o=>{const[c]=JSON.parse(o);if(s.checkIfTodoIsCompleted(t,JSON.parse(n).name,c)){const n=r.renderCheckedTodo(t,a.name,o);n.checkBtn.addEventListener("click",()=>{s.changeTodoState(t,a.name,JSON.parse(o)[0]),e()}),n.checkBtn.classList.remove("complete-btn"),n.checkBtn.classList.add("uncomplete-btn"),n.checkBtn.parentElement.classList.add("completed-todo")}else{const n=r.renderTodo(t,a.name,o),[c]=JSON.parse(o);n.checkBtn.addEventListener("click",()=>{((t,e,n)=>{s.changeTodoState(t,e,n)})(t,a.name,c),e()}),n.deleteBtn.addEventListener("click",()=>{((t,e,n)=>{s.removeTodoFromTask(t,e,n)})(t,a.name,c),e()})}}),i.deleteBtn.addEventListener("click",()=>{s.removeTaskFromProject(t,n),e()}),i.editBtn.addEventListener("click",()=>{const r=c.newTaskForm(t);(t=>{document.getElementById("name-input").value=t.name,document.getElementById("content-input").value=t.content})(JSON.parse(n)),r.addEventListener("click",()=>{if(o.validateTaskInput(a)){const a=(()=>{const t=document.getElementById("name-input").value,e=document.getElementById("content-input").value;return o.createTaskObj(t,e,null,null)})();s.removeTaskFromProject(t,n),s.addNewTaskToProject(t,a),e()}})})}})})},n=()=>{document.getElementById("new-project-btn")&&document.getElementById("new-project-btn").remove(),Object.keys(localStorage).forEach(t=>{document.getElementById("project-"+o.convertToValidId(t))&&document.getElementById("project-"+o.convertToValidId(t)).remove(),r.renderProject(t).remove(),JSON.parse(localStorage.getItem(t)).forEach(e=>{const o=JSON.parse(e);if(o.status){const e=r.renderTask(t,o);e.completeBtn.classList.remove("complete-btn"),e.completeBtn.classList.add("completed-btn"),e.completeBtn.addEventListener("click",()=>{s.changeTaskState(t,o.name),n()}),e.todoBtn.disabled=!0,e.editBtn.disabled=!0,e.deleteBtn.addEventListener("click",()=>{s.removeTaskFromProject(t,o),n()})}})})};return e(),s.checkForProjectExistence()||r.noProjectWarning(),{displayTabContent:e,displayTabCompletedContent:n,displayNewProjectForm:t}})();var d={data:(t,e,n,o)=>{a.container("statistics-container","left-section","box"),a.container("statistics-completing","statistics-container","flex-grid"),a.container("statistics-completed-label","statistics-completing","col-12").textContent="Tasks Completed",a.container("statistics-completed-data","statistics-completing","col-12").textContent=t,a.container("statistics-uncompleted-label","statistics-completing","col-12").textContent="Tasks Uncompleted",a.container("statistics-uncompleted-data","statistics-completing","col-12").textContent=e,a.container("statistics-ontime-label","statistics-completing","col-12").textContent="Tasks on Time",a.container("statistics-ontime-data","statistics-completing","col-12").textContent=n,a.container("statistics-lateTime-label","statistics-completing","col-12").textContent="Late Tasks",a.container("statistics-lateTime-data","statistics-completing","col-12").textContent=o}};(()=>{const t=s.gatherStorageData();d.data(t.completed,t.uncompleted,t.onTime,t.lateTime)})(),document.getElementById("todo-tab-btn").addEventListener("click",()=>{l.displayTabContent()}),document.getElementById("todo-tab-btn-completed").addEventListener("click",()=>{l.displayTabCompletedContent()})}]);