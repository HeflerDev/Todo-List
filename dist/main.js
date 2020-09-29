/* eslint-disable */

!(function (t) { const e = {}; function n(o) { if (e[o]) return e[o].exports; const a = e[o] = { i: o, l: !1, exports: {} }; return t[o].call(a.exports, a, a.exports, n), a.l = !0, a.exports; }n.m = t, n.c = e, n.d = function (t, e, o) { n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: o }); }, n.r = function (t) { typeof Symbol !== 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 }); }, n.t = function (t, e) { if (1 & e && (t = n(t)), 8 & e) return t; if (4 & e && typeof t === 'object' && t && t.__esModule) return t; const o = Object.create(null); if (n.r(o), Object.defineProperty(o, 'default', { enumerable: !0, value: t }), 2 & e && typeof t !== 'string') for (const a in t)n.d(o, a, ((e) => t[e]).bind(null, a)); return o; }, n.n = function (t) { const e = t && t.__esModule ? function () { return t.default; } : function () { return t; }; return n.d(e, 'a', e), e; }, n.o = function (t, e) { return Object.prototype.hasOwnProperty.call(t, e); }, n.p = '', n(n.s = 0); }([function (t, e, n) {
  n.r(e); const o = {
    createTaskObj: (t, e, n, o) => ({
      name: t, content: e, difficulty: n, date: o, status: !1, todos: [],
    }),
    validateProjectInput: t => /^[a-zA-Z]/g.test(t),
    validateTodoInput: t => /^[a-zA-Z]/.test(t),
    validateTaskInput: t => { const e = []; return /^[a-zA-Z]/.test(t.name) || e.push('Task name must start with an letter'), t.content || e.push('Task content must exist'), Date.parse(t.date) || e.push('Invalid Date input'), e.length > 0 ? e : 'true'; },
    convertToValidId: t => t.replace(/\s/g, '-'),
  }; const a = { container: (t, e, n = null, a = 'div') => { const c = document.createElement(a); return t && (c.id = o.convertToValidId(t)), e = o.convertToValidId(e), n && (Array.isArray(n) ? n.forEach(t => { c.classList.add(t); }) : c.classList.add(n)), document.getElementById(e).appendChild(c), c; } }; const c = { newProjectForm: () => { a.container('project-form-container', 'new-project-btn-container', ['box', 'col-12'], 'div'), a.container('project-form', 'project-form-container', ['flex-grid'], 'form'), a.container('p', 'project-form', ['col-12'], 'label').textContent = 'Project Name', a.container('project-name', 'project-form', ['col-12'], 'input'); const t = a.container('project-submit-btn', 'project-form', ['col-12', 'btn-primary']); return t.textContent = 'Create Project!', t; }, newTaskForm: t => { a.container('task-form-container', t, ['box']), a.container('task-form-warning-container', 'task-form-container'), a.container('task-form', 'task-form-container', 'flex-grid', 'form'), a.container('name-label', 'task-form', ['col-12'], 'label').textContent = 'Name', a.container('name-input', 'task-form', ['col-12'], 'input'), document.getElementById('task-form').appendChild(document.createElement('br')), a.container('content-label', 'task-form', ['col-12'], 'label').textContent = 'Content', a.container('content-input', 'task-form', ['col-12'], 'textarea'), document.getElementById('task-form').appendChild(document.createElement('br')), a.container('difficulty-label', 'task-form', ['col-12'], 'label').textContent = 'Difficulty', a.container('difficulty-select', 'task-form', ['col-12'], 'select'); const e = a.container('difficulty-option-1', 'difficulty-select', null, 'option'); e.textContent = 'Easy', e.value = 'Easy'; const n = a.container('difficulty-option-2', 'difficulty-select', null, 'option'); n.textContent = 'Medium', n.value = 'Medium'; const o = a.container('difficulty-option-3', 'difficulty-select', null, 'option'); o.textContent = 'Hard', o.value = 'Hard', a.container('date-label', 'task-form', null, 'label'), a.container('date-input', 'task-form', ['col-6'], 'input').type = 'date'; const c = a.container('task-submit', 'task-form', ['col-6', 'submit-btn'], 'div'); return c.textContent = 'Submit', c; }, newTodoForm: (t, e) => { a.container('todo-form-container', `task-${t}-${e}-info-container`, 'box', 'form'), a.container('todo-form-label', 'todo-form-container', null, 'label'), a.container('todo-form-input', 'todo-form-container', null, 'input'); const n = a.container('todo-form-submit', 'todo-form-container', null, 'input'); return n.value = 'Create Todo', n.type = 'submit', n; } }; const r = {
    renderWarningProjectMessage: t => { a.container(t, 'project-form-container', ['col-12', 'warning-messag']).texContent = t; },
    renderProject: t => { a.container(`project-${t}`, 'content-section', ['box', 'whole-project-container']), a.container(`project-${t}-container`, `project-${t}`, ['flex-grid', 'project-container']), a.container(`project-${t}-name`, `project-${t}-container`, ['col-12', 'col-m-10']), a.container(t, `project-${t}-name`, ['minibox', 'center'], 'h2').textContent = t; const e = a.container(`project-${t}-button`, `project-${t}-container`, ['col-2', 'minibox', 'no-margin', 'new-task-btn'], 'button'); return a.container(null, `project-${t}-button`, ['minibox']).textContent = 'Add New Task', e; },
    renderCheckedTodo: (t, e, n) => { const o = `task-${t}-${e}-${n}`; a.container(`${o}-todo`, `task-${t}-${e}-todo-container`, ['flex-grid', 'completed-todo']), a.container(`${o}-todo-container-complete-button-container`, `${o}-todo`, 'col-1'); const c = a.container(`${o}-todo-container-button`, `${o}-todo-container-complete-button-container`, 'complete-btn', 'button'); const [r] = JSON.parse(n); return a.container(`todo-${t}-${e}-${n}-todo-container-description`, `task-${t}-${e}-${n}-todo`, 'col-10').textContent = r, { checkBtn: c }; },
    renderTask: (t, e) => {
      const n = `task-${t}-${e.name}`; a.container(`${n}`, `project-${t}`, ['task-container']), a.container(`${n}-container`, `task-${t}-${e.name}`, ['flex-grid']), a.container(`${n}-complete-task-container`, `${n}-container`, ['col-1', 'minibox', 'no-bounds']); const o = a.container(`${n}-complete-task-btn`, `${n}-complete-task-container`, ['complete-btn', 'minibox'], 'button'); a.container(`${n}-content-task-name`, `${n}-container`, ['col-10', 'minibox', 'no-bounds']).textContent = e.name, a.container(`${n}-delete-button-container`, `${n}-container`, ['col-1', 'minibox']); const c = a.container(null, `${n}-delete-button-container`, ['btn-danger'], 'button'); c.title = 'Delete Task'; const r = a.container(null, `${n}-delete-button-container`, ['minibox', 'no-bounds', 'btn-edit'], 'button'); r.title = 'Edit Task', a.container(null, `${n}-container`, ['col-1']), a.container(null, `${n}-container`, ['col-11', 'start', 'task-description']).textContent = e.content, a.container(null, `${n}-container`, 'col-1'), a.container(`${n}-info-container`, `${n}-container`, ['col-11', 'minibox', 'between', 'no-bounds']); const i = a.container(`${n}-details-difficulty`, `${n}-info-container`); i.textContent = e.difficulty; const s = a.container(`task-${t}-${e.name}-details-date`, `${n}-info-container`); s.textContent = e.date, a.container(null, `${n}-container`, 'col-1'), a.container(`${n}-todo-button-container`, `${n}-container`, ['col-11', 'minibox', 'end', 'no-bounds']); const l = a.container(`${n}-todo-button`, `${n}-todo-button-container`, ['no-bounds', 'btn-todo']); return l.textContent = '+ Todo', a.container(null, `${n}-container`, 'col-1'), a.container(`${n}-todo-container`, `${n}-container`, 'col-11'), {
        todoBtn: l, editBtn: r, deleteBtn: c, completeBtn: o, dateInfo: s, difficultyInfo: i,
      };
    },
    newProjectBtn: () => { a.container('new-project-btn-container', 'content-section', ['flex-grid', 'center']); const t = a.container('new-project-btn', 'new-project-btn-container', ['new-project-btn'], 'button'); return t.textContent = '+', t; },
    renderTodo: (t, e, n) => { const o = `task-${t}-${e}-${n}`; a.container(`${o}-todo`, `task-${t}-${e}-todo-container`, ['flex-grid', 'todo-container']), a.container(`${o}-todo-container-complete-button-container`, `${o}-todo`, 'col-1'); const c = a.container(`${o}-todo-container-button`, `${o}-todo-container-complete-button-container`, 'complete-btn', 'button'); const [r] = JSON.parse(n); a.container(`todo-${t}-${e}-${n}-todo-container-description`, `task-${t}-${e}-${n}-todo`, 'col-10').textContent = r, a.container(`${o}-todo-container-delete-button-container`, `${o}-todo`, 'col-1'); const i = a.container(`${o}-todo-container-delete-button`, `${o}-todo-container-delete-button-container`, 'soft-button'); return i.textContent = 'X', { checkBtn: c, deleteBtn: i }; },
    noProjectWarning: () => { const t = a.container('no-project-warning', 'content-section', ['no-project-warning']); return t.textContent = 'Nothing to display here. Press "+" to create a new project', t; },
    renderWarningMessage: t => { a.container(t, 'task-form-warning-container', ['col-12', 'warning-message']).textContent = t; },
  }; const i = (() => {
    const t = (t, e) => { const n = localStorage.getItem(t); let o = -1; return JSON.parse(n).forEach((t, n) => { const a = JSON.parse(t); e === a.name && (o = n); }), o; }; const e = (e, n) => { const o = JSON.parse(localStorage.getItem(e)); return JSON.parse(o[t(e, n)]); }; const n = (e, n) => { const o = JSON.parse(localStorage.getItem(e)); o.splice(t(e, n), 1), localStorage.removeItem(e), localStorage.setItem(e, JSON.stringify(o)); }; const o = (t, e) => { const n = JSON.parse(localStorage.getItem(t)); localStorage.removeItem(t), n.unshift(JSON.stringify(e)), localStorage.setItem(t, JSON.stringify(n)); }; const a = (t, e, n) => { const o = i.findDataIndexByKey(t, e); const a = JSON.parse(localStorage.getItem(t)); const c = JSON.parse(a[o]); let r = -1; return c.todos.forEach((t, e) => { JSON.parse(t)[0] === n && (r = e); }), r; }; const c = (t, n) => { const o = e(t, n); return Date.parse(o.date) < Date.now(); }; return {
      addNewTaskToProject: o,
      addNewTodoToTask: (e, a, c) => { const r = t(e, a.name); if (r !== -1) { const t = JSON.parse(localStorage.getItem(e)); const i = JSON.parse(t[r]); i.todos.push(JSON.stringify([c, !1])), n(e, a.name), o(e, i); } },
      createNewProject: t => { localStorage.setItem(t, JSON.stringify([])); },
      removeTaskFromProject: n,
      removeTodoFromTask: (t, c, r) => { const i = e(t, c); i.todos.splice(a(t, c, r), 1), n(t, c), o(t, i); },
      findDataIndexByKey: t,
      getTodoIndex: a,
      checkIfTodoIsCompleted: (t, e, n) => { const o = i.findDataIndexByKey(t, e); const c = JSON.parse(localStorage.getItem(t)); const r = JSON.parse(c[o]).todos[a(t, e, n)]; return JSON.parse(r)[1]; },
      changeTodoState: (t, e, a) => { const c = JSON.parse(localStorage.getItem(t)); const r = JSON.parse(c[i.findDataIndexByKey(t, e)]); let s = r.todos.splice(i.getTodoIndex(t, e, a), 1); s = JSON.parse(s), !1 === s[1] ? s[1] = !0 : s[1] = !1, r.todos.push(JSON.stringify(s)), n(t, e), o(t, r); },
      changeTaskState: (e, a) => { const c = JSON.parse(localStorage.getItem(e)); const r = JSON.parse(c[t(e, a)]); r.status ? r.status = !1 : r.status = !0, n(e, a), o(e, r); },
      checkForProjectExistence: () => localStorage.length > 0,
      retrieveTaskData: e,
      gatherStorageData: () => {
        let t = 0; let e = 0; let n = 0; let o = 0; return Object.keys(localStorage).forEach(a => { JSON.parse(localStorage.getItem(a)).forEach(r => { const i = JSON.parse(r); !0 === i.status ? t += 1 : e += 1, c(a, i.name) ? !1 === i.status && (o += 1) : n += 1; }); }), {
          completed: t.toString(), uncompleted: e.toString(), onTime: n.toString(), lateTime: o.toString(),
        };
      },
      checkIfDateIsLate: c,
      gatherCompletedTasksNames: () => { const t = []; return Object.keys(localStorage).forEach(e => { JSON.parse(localStorage.getItem(e)).forEach(e => { const n = JSON.parse(e); !0 === n.status && t.push(n.name); }); }), t.length > 0 ? t : ["There isn't any completed tasks"]; },
    };
  })(); const s = i; const l = (() => { const t = () => { document.getElementById('new-project-btn') || r.newProjectBtn().addEventListener('click', () => { c.newProjectForm().addEventListener('click', () => { const e = document.getElementById('project-name').value; if (o.validateProjectInput(e))s.createNewProject(e), document.getElementById('project-form-container').remove(), document.getElementById('Invalid Project Name') && document.getElementById('Invalid Project Name').remove(), t(); else { const t = 'Invalid Project Name'; document.getElementById(t) || r.renderWarningProjectMessage(t); } }); }), Object.keys(localStorage).forEach(e => { document.getElementById(`project-${o.convertToValidId(e)}`) && document.getElementById(`project-${o.convertToValidId(e)}`).remove(), r.renderProject(e).addEventListener('click', () => { c.newTaskForm(e).addEventListener('click', () => { (t => { const e = document.getElementById('name-input').value; const n = document.getElementById('content-input').value; const a = document.getElementById('difficulty-select').value; const c = document.getElementById('date-input').value; const i = o.createTaskObj(e, n, a, c); const l = o.validateTaskInput(i); if (Array.isArray(l)) { if (document.getElementsByClassName('warning-message')) { Array.from(document.getElementsByClassName('warning-message')).forEach(t => { t.remove(); }); } return l.forEach(t => r.renderWarningMessage(t)), !1; } return s.addNewTaskToProject(t, i), document.getElementById('task-form-container').remove(), !0; })(e) && t(); }); }), JSON.parse(localStorage.getItem(e)).forEach(n => { const a = JSON.parse(n); if (!a.status) { const i = r.renderTask(e, a); i.completeBtn.addEventListener('click', () => { ((t, e) => { s.changeTaskState(t, e); })(e, a.name), t(); }), i.todoBtn.addEventListener('click', () => { c.newTodoForm(e, a.name).addEventListener('click', () => { const t = document.getElementById('todo-form-input').value; o.validateTodoInput(t) && s.addNewTodoToTask(e, a, t); }); }), s.checkIfDateIsLate(e, a.name) && i.dateInfo.classList.add('date-field-warning'), i.difficultyInfo.textContent === 'Easy' ? i.difficultyInfo.classList.add('easy-container') : i.difficultyInfo.textContent === 'Medium' ? i.difficultyInfo.classList.add('medium-container') : i.difficultyInfo.classList.add('hard-container'), a.todos.length > 0 && a.todos.forEach(o => { const [c] = JSON.parse(o); if (s.checkIfTodoIsCompleted(e, JSON.parse(n).name, c)) { const n = r.renderCheckedTodo(e, a.name, o); n.checkBtn.addEventListener('click', () => { s.changeTodoState(e, a.name, JSON.parse(o)[0]), t(); }), n.checkBtn.classList.remove('complete-btn'), n.checkBtn.classList.add('uncomplete-btn'), n.checkBtn.parentElement.classList.add('completed-todo'); } else { const n = r.renderTodo(e, a.name, o); const [c] = JSON.parse(o); n.checkBtn.addEventListener('click', () => { ((t, e, n) => { s.changeTodoState(t, e, n); })(e, a.name, c), t(); }), n.deleteBtn.addEventListener('click', () => { ((t, e, n) => { s.removeTodoFromTask(t, e, n); })(e, a.name, c), t(); }); } }), i.deleteBtn.addEventListener('click', () => { s.removeTaskFromProject(e, n), t(); }), i.editBtn.addEventListener('click', () => { const r = c.newTaskForm(e); (t => { document.getElementById('name-input').value = t.name, document.getElementById('content-input').value = t.content; })(JSON.parse(n)), r.addEventListener('click', () => { const c = o.validateTaskInput(a); if (!Array.isArray(c)) { const a = (() => { const t = document.getElementById('name-input').value; const e = document.getElementById('content-input').value; return o.createTaskObj(t, e, null, null); })(); s.removeTaskFromProject(e, n), s.addNewTaskToProject(e, a), t(); } }); }); } }); }); }; const e = () => { document.getElementById('new-project-btn') && document.getElementById('new-project-btn').remove(), Object.keys(localStorage).forEach(t => { document.getElementById(`project-${o.convertToValidId(t)}`) && document.getElementById(`project-${o.convertToValidId(t)}`).remove(), r.renderProject(t).remove(), JSON.parse(localStorage.getItem(t)).forEach(n => { const o = JSON.parse(n); if (o.status) { const n = r.renderTask(t, o); n.completeBtn.classList.remove('complete-btn'), n.completeBtn.classList.add('completed-btn'), n.completeBtn.addEventListener('click', () => { s.changeTaskState(t, o.name), e(); }), n.todoBtn.disabled = !0, n.editBtn.disabled = !0, n.deleteBtn.addEventListener('click', () => { s.removeTaskFromProject(t, o), e(); }); } }); }); }; return t(), s.checkForProjectExistence() || r.noProjectWarning(), { displayTabContent: t, displayTabCompletedContent: e }; })(); const d = {
    renderData: (t, e, n, o) => {
      a.container('statistics-container', 'left-section', 'box'); const c = a.container('statistics-completing-completed', 'statistics-container', ['flex-grid', 'info-container']); a.container(null, 'statistics-completing-completed', ['col-1', 'fa', 'fa-check', 'icon-good']), a.container('statistics-completed-label', 'statistics-completing-completed', ['col-9', 'side-info']).textContent = 'Tasks Completed', a.container('statistics-completed-data', 'statistics-completing-completed', 'col-2').textContent = `: ${t}`; const r = a.container('statistics-completing-uncompleted', 'statistics-container', ['flex-grid', 'info-container']); a.container(null, 'statistics-completing-uncompleted', ['col-1', 'fa', 'fa-times', 'icon-bad']), a.container('statistics-uncompleted-label', 'statistics-completing-uncompleted', ['col-9', 'side-info']).textContent = 'Tasks Uncompleted', a.container('statistics-uncompleted-data', 'statistics-completing-uncompleted', 'col-2').textContent = `: ${e}`; const i = a.container('statistics-completing-ontime', 'statistics-container', ['flex-grid', 'info-container']); a.container(null, 'statistics-completing-ontime', ['col-1', 'fa', 'fa-clock-o', 'icon-good']), a.container('statistics-ontime-label', 'statistics-completing-ontime', ['col-9', 'side-info']).textContent = 'Tasks on Time', a.container('statistics-ontime-data', 'statistics-completing-ontime', 'col-2').textContent = `: ${n}`; const s = a.container('statistics-completing-late', 'statistics-container', ['flex-grid', 'info-container']); return a.container(null, 'statistics-completing-late', ['col-1', 'fa', 'fa-bullhorn', 'icon-bad']), a.container('statistics-lateTime-label', 'statistics-completing-late', ['col-9', 'side-info']).textContent = 'Late Tasks', a.container('statistics-lateTime-data', 'statistics-completing-late', 'col-2').textContent = `: ${o}`, {
        completed: c, uncompleted: r, onTime: i, late: s,
      };
    },
    displayInfo: t => { a.container(`info-${t}`, 'statistics-completing-completed', 'minibox').textContent = ` - ${t}`; },
  }; (() => { const t = s.gatherStorageData(); const e = d.renderData(t.completed, t.uncompleted, t.onTime, t.lateTime); e.completed.addEventListener('click', () => { s.gatherCompletedTasksNames().forEach(t => { document.getElementById(`info-${t}`) || d.displayInfo(t); }); }), e.uncompleted.addEventListener('click', () => {}); })(), document.getElementById('todo-tab-btn').addEventListener('click', () => { l.displayTabContent(); }), document.getElementById('todo-tab-btn-completed').addEventListener('click', () => { l.displayTabCompletedContent(); });
}]));
