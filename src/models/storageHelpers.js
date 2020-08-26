const storageHelpers = () => {

    function removeItemFromStorage(key, value) {
        let item = localStorage.getItem(key);

    }

    const createNewProject = (key) => {
        localStorage.setItem(key, JSON.stringify([]));
    }

    const addNewTaskToProject = (key, obj) => {
        let item = localStorage.getItem(key);


    }

    return { }
}
