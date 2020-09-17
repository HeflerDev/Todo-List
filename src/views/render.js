import userData from './../models/userData'

const render = (() => {

    const container = (elementId, elementParent, elementClass = null, element = 'div') => {
        let div = document.createElement(element);
        if (elementId) {
            div.id = userData.convertToValidId(elementId);
        }
            elementParent = userData.convertToValidId(elementParent);
        if (elementClass) {
            if (Array.isArray(elementClass)) {
                elementClass.forEach((item) => {
                    div.classList.add(item);
                });
            } else {
                div.classList.add(elementClass);
            }
        }
        document.getElementById(elementParent).appendChild(div);
        return div;
    }

    return { container }
})();

export default render
