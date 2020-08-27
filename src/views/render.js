const render = (() => {

    const container = (elementId, elementParent, elementClass = null) => {
        let div = document.createElement('div');
        div.id = elementId;
        console.log(elementClass)
        if (elementClass) {
        console.log(elementClass)
            if (Array.isArray(elementClass)) {
                elementClass.forEach((item) => {
                    div.classList.add(item);
                });
            } else {
                div.classList.add(elementClass);
            }
            console.log('Warning: No Class');
        }
        document.getElementById(elementParent).appendChild(div);
        return div;
    }
    return { container }
})();

export default render
