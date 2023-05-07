import DB from './db';
import tpl from './tpl';
import OutlinesPaint from './section-outlines-paint';
import TilesPaint from './section-mockup-tile-paint';

export default function Section(cfg, ui) {
  const dbID = 'general';
  const sectionId = '#uieGeneralContent';
  const content = ui.innerHTML;

  function render() {

    // Clear Outline Section
    const elSection = ui.querySelector(sectionId);
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
        '${title}': node.el,
        '${keybind}': getKeyBind(node.keybind)
      });

      // Append Outline elements into the Panel
      const templateContent = newTpl.content;
      elSection.appendChild(templateContent.cloneNode(true));
    });

    /**
     * Get Key Bind from Data
     */
    function getKeyBind(keybind) {
      let s = '';

      if (keybind) {
        keybind.forEach(item => {
          s += `<kbd>${item}</kbd>`;
        });
      }

      return s;
    }

    /**
     * Toggle Visibility
     */
    const cbInputs = ui.querySelectorAll(`${sectionId} .uie-checkbox`);
    if (cbInputs) {
      cbInputs.forEach(element => {
        element.addEventListener('change', (e) => {
          const target = e.target;
          const parent = target.closest('.uie-panel-row');
          const key = parent.id;

          DB.update(dbID, key, { active: target.checked });
          OutlinesPaint();
          TilesPaint(cfg);
        });
      });
    }

  }

  /**
   * Show/Hide outlines by Keyboard shortcut
   */
  document.addEventListener('keydown', (e) => {

    if (e.code === 'Backquote' && e.ctrlKey) {
      const outlines = ui.querySelector(`${sectionId} #uiegeneraloutlinesCb`);
      if (outlines) {
        outlines.checked ^= 1;
        outlines.dispatchEvent(new Event('change'));
        OutlinesPaint();
      }
    };

  });

  render();

}
