const storageHelpers = () => {
    /*
     * Since the localStorage has 2 layers, this file adds aditional helpers
     */

    const findDataIndexByKey = (key, value) => {
        let item = localStorage.getItem(key);
        /*
        JSON.parse(item).forEach(data, index) {
            let obj = JSON.parse(data);
            if (value === obj.name) {
                return index;
            } else {
                console.log('Error: No matching found');
            }
        }
        */
    }

    const removeTaskFromStorage = (key, value) => {
        let array = JSON.parse(localStorage.getItem(key));
        localStorage.removeItem(key);
        task.splice(findDataIndexByKey(key, value), 1);
        console.log(array);
        localStorage.setItem(key, array);
    }

    const createNewProject = (key) => {
        localStorage.setItem(key, JSON.stringify([]));
    }

    const addNewTaskToProject = (key, obj) => {
        let item = JSON.parse(localStorage.getItem(key));
        localStorage.removeItem(key);
        item.unshift(obj);
        localStorage.setItem(key, item);
    }

    return { addNewTaskToProject, createNewProject, removeTaskFromStorage, findDataIndexByKey }
}
