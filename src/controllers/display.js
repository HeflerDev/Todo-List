const display = (() => {

    const allProjects = () => {
        Object.keys(localStorage).forEach((key) => {
            if (document.getElementById(`project-${key}`)) {
                document.getElementById(`project-${key}`).remove();
            }
            JSON.parse(localStorage.getItem(key)).forEach((array) => {
                console.log(array);
            });
        });
    }
    return { allProjects }
})();

export default display ;
