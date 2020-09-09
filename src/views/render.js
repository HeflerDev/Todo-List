const render = (() => {

    const container = (elementId, elementParent, elementClass = null, element = 'div') => {
        let div = document.createElement(element);
        div.id = elementId;
        if (elementClass) {
            if (Array.isArray(elementClass)) {
                elementClass.forEach((item) => {
                    div.classList.add(item);
                });
            } else {
                div.classList.add(elementClass);
            }
            console.log('render:container:Warning: No Class');
        }
        document.getElementById(elementParent).appendChild(div);
        return div;
    }

    return { container }
})();

export default render
