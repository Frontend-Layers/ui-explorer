import DB from './db';

export default function Paint() {

  function render() {
    const data = DB.get();

    paintOutlines(data);
  }

  function domReadyRender(e) {
    render();
  }

  /**
   * Check DOM loading
   */
  window.removeEventListener('DOMContentLoaded', domReadyRender);
  window.addEventListener('DOMContentLoaded', domReadyRender);

  render();
};

/**
 * Paint Outlines
 */
function paintOutlines(data) {
  const outlines = data.general.data.filter(function(i, n) { return i.el === 'outlines'; });
  const classNames = [];

  if (outlines[0].active) {
    data.outlines.data.forEach(item => {

      if (item.active) {
        const nodes = document.querySelectorAll(item.el);

        if (nodes) {
          nodes.forEach(element => {
            let itemElname = item.el;
            itemElname = itemElname.replaceAll('.', 'dot');
            itemElname = itemElname.replaceAll('#', 'hash');
            itemElname = itemElname.replaceAll(' ', '');
            itemElname = itemElname.replaceAll('~', 'tld');
            itemElname = itemElname.replaceAll('+', 'pls');

            const className = `uie-outlines-${itemElname}`;
            element.classList.add(className);
            classNames.push(
              `.${className} { outline: ${item.size}px solid ${item.color}; }`
            );
          });

        }
      }
    });
  }
  setStyles(classNames);

}

/**
 * Set Stiles
 *
 * @param {*} classNames
 */
function setStyles(classNames) {
  if (classNames) {
    const styles = classNames.join('');

    const elStyles = document.querySelector('#uie-doc-styles');
    if (elStyles) {
      elStyles.innerHTML = styles;
    } else {
      const head = document.head || document.getElementsByTagName('head')[0];
      const style = document.createElement('style');
      style.setAttribute('id', 'uie-doc-styles');
      head.appendChild(style);
      style.appendChild(document.createTextNode(styles));
    }
  }
}
