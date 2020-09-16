const userData = (() => {
    const createTaskObj = (taskName, taskContent, taskDifficulty, taskDate) => {
        return {
            name: taskName,
            content: taskContent,
            difficulty: taskDifficulty,
            date: taskDate,
            status: false,
            todos: []
        }
    }

    const convertToValidId = (data) => data.replace(/\s/g, '-');

    const convertIdToText = (data) => data.replace(/-+/g, ' ')

    const validateProjectInput = (data) => {
        let validData = /^[a-zA-Z]/g ;
        return validData.test(data);
    };

    const validateTaskInput = (data) => {
        if (/^[a-zA-Z]/.test(data.name)) {
            if (data.content.length > 0) {
                return true;
            } else {
                alert('Invalid Input: Task content must exist');
            }
        } else {
            alert('Invalid Input: Task name should start with a letter');
        }
    };

    const validateTodoInput = (data) => {
        return /^[a-zA-Z]/.test(data);
    };

    return { createTaskObj, validateProjectInput, validateTodoInput, validateTaskInput, convertToValidId }
})();

export default userData;

