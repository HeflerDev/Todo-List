const userData = (() => {
  const createTaskObj = (taskName, taskContent, taskDifficulty, taskDate) => ({
    name: taskName,
    content: taskContent,
    difficulty: taskDifficulty,
    date: taskDate,
    status: false,
    todos: [],
  });

  const convertToValidId = (data) => data.replace(/\s/g, '-');

  const convertIdToText = (data) => data.replace(/-+/g, ' ');

  const validateProjectInput = (data) => {
    const validData = /^[a-zA-Z]/g;
    return validData.test(data);
  };

  const validateTaskInput = (data) => {
    const formErrors = [];

    console.log(formErrors);

    if (!/^[a-zA-Z]/.test(data.name)) { formErrors.push('Task name must start with an letter'); }
    if (!data.content) { formErrors.push('Task content must exist'); }
    if (!Date.parse(data.date)) { formErrors.push('Invalid Date input'); }

    if (formErrors.length > 0) {
      return formErrors;
    }
    return true;
  };

  const validateTodoInput = (data) => /^[a-zA-Z]/.test(data);

  return {
    createTaskObj, validateProjectInput, validateTodoInput, validateTaskInput, convertToValidId,
  };
})();

export default userData;
