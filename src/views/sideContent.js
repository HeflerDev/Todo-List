import render from './render';

const sideContent = (() => {
  const data = (completed, uncompleted, onTime, lateTime) => {
    render.container('statistics-container', 'left-section', 'box');
    render.container('statistics-completing', 'statistics-container', 'flex-grid');
    render.container('statistics-completed-label', 'statistics-completing', 'col-12').textContent = 'Tasks Completed';
    render.container('statistics-completed-data', 'statistics-completing', 'col-12').textContent = completed;
    render.container('statistics-uncompleted-label', 'statistics-completing', 'col-12').textContent = 'Tasks Uncompleted';
    render.container('statistics-uncompleted-data', 'statistics-completing', 'col-12').textContent = uncompleted;
    render.container('statistics-ontime-label', 'statistics-completing', 'col-12').textContent = 'Tasks on Time';
    render.container('statistics-ontime-data', 'statistics-completing', 'col-12').textContent = onTime;
    render.container('statistics-lateTime-label', 'statistics-completing', 'col-12').textContent = 'Late Tasks';
    render.container('statistics-lateTime-data', 'statistics-completing', 'col-12').textContent = lateTime;
  };
  return {
    data,
  };
})();

export default sideContent;
