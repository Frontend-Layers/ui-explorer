import DB from './db';
import tpl from './tpl';
import Paint from './paint';

export default function Section({ component, content }) {
  const dbID = 'general';
  const sectionId = '#uieGeneralContent';

  function render() {

    // Clear Outline Section
    const elSection = component.querySelector(sectionId);
    elSection.innerHTML = '';

    // Get Outline element HTML
    const parser = new DOMParser();
    const docSection = parser.parseFromString(content, 'text/html');
    const rawInnerHTML = docSection.querySelector(sectionId).innerHTML;

    // Apply properties
    const data = DB.get(dbID).data;

    data.forEach(node => {
      const newTpl = document.createElement('template');
      newTpl.innerHTML = tpl(rawInnerHTML, {
        '${id}': 'uie' + dbID + node.el,
        '${cb_id}': 'uie' + dbID + node.el + 'Cb',
        '${cb_val}': node.active ? ' checked ' : '',
        '${title}': node.el
      });

      // Append Outline elements into the Panel
      const templateContent = newTpl.content;
      elSection.appendChild(templateContent.cloneNode(true));
    });

    /**
     * Toggle Visibility
     */
    const cbInputs = component.querySelectorAll(`${sectionId} .uie-checkbox`);
    if (cbInputs) {
      cbInputs.forEach(element => {
        element.addEventListener('change', (e) => {
          const target = e.target;
          const parent = target.closest('.uie-panel-row');
          const key = parent.id;

          DB.update(dbID, key, { active: target.checked });
          Paint();
        });
      });
    }

  }

  /**
     * Show/Hide outlines by Keyboard shortcut
     */
  document.addEventListener('keydown', (e) => {

    if (e.code === 'Backquote' && e.ctrlKey) {
      const outlines = component.querySelector(`${sectionId} #uiegeneraloutlinesCb`);
      if (outlines) {
        outlines.checked ^= 1;
        outlines.dispatchEvent(new Event('change'));
        Paint();
      }
    };

  });

  render();

}
