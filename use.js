const select = (selector) => document.querySelector(selector);
const selectAll = (selector) => document.querySelectorAll(selector);

const addEventListeners = (element, events, handler) => {
  events.forEach(event => element.addEventListener(event, handler));
};

const toggleDisplayStyle = (element, displayStyle) => {
  element.style.display = (element.style.display === displayStyle) ? "" : displayStyle;
};

const toggleClass = (element, className1, className2) => {
  element.classList.toggle(className1);
  if (className2) element.classList.toggle(className2);
};

const handleHover = (triggerEl, targetEl, className) => {
  addEventListeners(triggerEl, ['mouseover', 'mouseout'], () => {
    toggleClass(targetEl, className);
  });
};

const handleToggle = (triggerEl, targetEl, displayStyle) => {
  addEventListeners(triggerEl, ['click'], () => {
    toggleDisplayStyle(targetEl, displayStyle);
  });
};

handleHover(select('.course'), select('.course_ul'), 'bi-caret-up');
handleHover(select('.bootcamp'), select('.bootcamp_ul'), 'bi-caret-up');

handleToggle(select('.bars'), select('.links'), 'block');
handleToggle(select('.xmark'), select('.links'), 'none');

addEventListeners(select('.branch'), ['change'], () => {
  const other_inputEl = select('.other_input');
  toggleDisplayStyle(other_inputEl, (select('#branch_selector').value === "Other") ? 'flex' : 'none');
});

window.addEventListener("resize", () => {
  const newAspectRatio = window.innerWidth / window.innerHeight;
  if (newAspectRatio !== initialAspectRatio && window.innerWidth > 900) {
    window.location.reload();
  }
});
