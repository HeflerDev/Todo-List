const userData = (() => {
    const createTaskObj = (taskName, taskContent, taskDifficulty, taskDate) => {
        return {
            name: taskName,
            content: taskContent,
            difficulty: taskDifficulty,
            date: taskDate
        }
    }
    return { createTaskObj }
})();

export default userData;

