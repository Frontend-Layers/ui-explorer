/**
 * Toggle Button
 */

const Datalist = (component) => {
  if (component) {
    const datalist = component.getElementById('uie-elements-datalist');

    // Get all unique tags
    const allTags = [];
    for (const item of document.body.getElementsByTagName('*')) {
      if (!allTags.includes(item.tagName)) {
        allTags.push(item.tagName);
      }
    }

    // Get all unique classes
    const allClasses = [];
    const allIds = [];
    const allElements = document.querySelectorAll('*');
    for (let i = 0; i < allElements.length; i++) {
      const classes = allElements[i].className.toString().split(/\s+/);
      for (let j = 0; j < classes.length; j++) {
        const cls = classes[j];
        if (cls && allClasses.indexOf('.' + cls) === -1) { allClasses.push('.' + cls); }
      }

      if (allElements[i].id) {
        if (!allIds.includes('#' + allElements[i].id)) {
          allIds.push('#' + allElements[i].id);
        }
      }
    }

    const allElems = [...allTags, ...allClasses, ...allIds].sort();
    let options = '';

    allElems.forEach(item => {
      options += `<option value="${item}"></option>`;
    });
    datalist.innerHTML = options;

  }
};

export default Datalist;
