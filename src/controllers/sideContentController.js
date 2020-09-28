import sideContent from '../views/sideContent';
import storageHelpers from '../models/storageHelpers';

const sideContentController = () => {
  const data = storageHelpers.gatherStorageData();
  const listen = sideContent.renderData(data.completed, data.uncompleted, data.onTime, data.lateTime);
    listen.completed.addEventListener('click', () => {
        storageHelpers.gatherCompletedTasksNames().forEach((taskName) => {
            if (! document.getElementById(`info-${taskName}`)) {
                sideContent.displayInfo(taskName);
            };
        });
    });
    listen.uncompleted.addEventListener('click', () => { });
};

export default sideContentController;
