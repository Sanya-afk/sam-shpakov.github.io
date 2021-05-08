export function filterCardHandler() {
  const filterCollection = document.querySelector('.portfolio_filter').children;
  for (let i = 0; i < filterCollection.length; i += 1) {
    filterCollection[i].addEventListener('click', () => {
      filterSelection(filterCollection[i]);
    });
  }
}

function filterSelection(criterion) {
  let items = document.querySelectorAll('.filter-item');
  let current = document.querySelectorAll('.active-tab');
  current[0].className = current[0].className.replace('active-tab', '');
  criterion.className += 'active-tab';
  const criterionName =
    criterion.dataset.filter === 'all'
      ? (criterion = '')
      : criterion.dataset.filter;
  for (let i = 0; i < items.length; i += 1) {
    removeItem(items[i], 'active-item');
    if (items[i].dataset.category.indexOf(criterionName) > -1) {
      addItem(items[i], 'active-item');
    }
  }
}

function addItem(element, name) {
  let classesElement = element.className.split(' ');
  let classesForAdding = name.split(' ');
  for (let i = 0; i < classesForAdding.length; i += 1) {
    if (classesElement.indexOf(classesForAdding[i]) == -1) {
      element.className += ' ' + classesForAdding[i];
    }
  }
}

function removeItem(element, name) {
  let classesElement = element.className.split(' ');
  let classesForAdding = name.split(' ');
  for (let i = 0; i < classesForAdding.length; i += 1) {
    while (classesElement.indexOf(classesForAdding[i]) > -1) {
      classesElement.splice(classesElement.indexOf(classesForAdding[i]), 1);
    }
  }
  element.className = classesElement.join(' ');
}
