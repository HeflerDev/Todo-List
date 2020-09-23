import sideContent from '../views/sideContent';
import storageHelpers from '../models/storageHelpers';

const sideContentController = () => {
  const data = storageHelpers.gatherStorageData();
  sideContent.data(data.completed, data.uncompleted, data.onTime, data.lateTime);
};

export default sideContentController;
