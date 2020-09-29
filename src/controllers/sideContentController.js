import sideContent from '../views/sideContent';
import storageHelpers from '../models/storageHelpers';

const sideContentController = () => {
  const data = storageHelpers.gatherStorageData();
  const btn = sideContent.renderData(data.completed, data.uncompleted, data.onTime, data.lateTime);
  btn.completed.addEventListener('click', () => {
    storageHelpers.gatherCompletedTasksNames().forEach((taskName) => {
      if (!document.getElementById(`info-${taskName}`)) {
        sideContent.displayInfo(taskName);
      }
    });
  });
  btn.uncompleted.addEventListener('click', () => { });
};

export default sideContentController;
