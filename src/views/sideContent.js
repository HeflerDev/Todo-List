import render from './render';

const sideContent = (() => {
  const renderData = (completed, uncompleted, onTime, lateTime) => {
    render.container('statistics-container', 'left-section', 'box');
    const completedData = render.container('statistics-completing-completed', 'statistics-container', ['flex-grid', 'info-container']);
        render.container(null, 'statistics-completing-completed', ['col-1', 'fa', 'fa-check', 'icon-good'])
            render.container('statistics-completed-label', 'statistics-completing-completed', ['col-9', 'side-info']).textContent = 'Tasks Completed';
          render.container('statistics-completed-data', 'statistics-completing-completed', 'col-2').textContent = `: ${completed}`;

    const uncompletedData = render.container('statistics-completing-uncompleted', 'statistics-container', ['flex-grid', 'info-container']);
        render.container(null, 'statistics-completing-uncompleted', ['col-1', 'fa', 'fa-times', 'icon-bad'])
        render.container('statistics-uncompleted-label', 'statistics-completing-uncompleted', ['col-9', 'side-info']).textContent = 'Tasks Uncompleted';
      render.container('statistics-uncompleted-data', 'statistics-completing-uncompleted', 'col-2').textContent = `: ${uncompleted}`;

    const onTimeData = render.container('statistics-completing-ontime', 'statistics-container', ['flex-grid', 'info-container']);
        render.container(null, 'statistics-completing-ontime', ['col-1', 'fa', 'fa-clock-o', 'icon-good'])
        render.container('statistics-ontime-label', 'statistics-completing-ontime', ['col-9', 'side-info']).textContent = 'Tasks on Time';
      render.container('statistics-ontime-data', 'statistics-completing-ontime', 'col-2').textContent = `: ${onTime}`;

    const lateTimeData = render.container('statistics-completing-late', 'statistics-container', ['flex-grid', 'info-container']);
        render.container(null, 'statistics-completing-late', ['col-1', 'fa', 'fa-bullhorn', 'icon-bad'])
        render.container('statistics-lateTime-label', 'statistics-completing-late', ['col-9', 'side-info']).textContent = 'Late Tasks';
      render.container('statistics-lateTime-data', 'statistics-completing-late', 'col-2').textContent = `: ${lateTime}`;

      return {
          'completed': completedData,
          'uncompleted': uncompletedData,
          'onTime': onTimeData,
          'late': lateTimeData,
      }
  };

    const displayInfo = (taskName) => {
        render.container(`info-${taskName}`, 'statistics-completing-completed', 'minibox').textContent = ` - ${taskName}`;
    };

  return {
    renderData,
      displayInfo,
  };
})();

export default sideContent;
