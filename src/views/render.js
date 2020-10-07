import userData from '../models/userData';

const render = (() => {
  const container = (elementId, elementParent, elementClass = null, element = 'div') => {
    const div = document.createElement(element);
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
  };

  const closeTabBtn = (parentElement) => {
    container('close-btn-container', parentElement, 'flex-grid');
    container(null, 'close-btn-container', 'col-10');
    const btn = container(null, 'close-btn-container', ['col-2', 'close-button'], 'button');
    btn.textContent = 'X';
    return btn;
  };

  return { container, closeTabBtn };
})();

export default render;
