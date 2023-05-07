import DB from './db';
import tpl from './tpl';
import { getColor } from './utils';
import Paint from './section-outlines-paint';

export default function Section(cfg, ui) {
  Paint();

  const dbID = 'outlines';
  const blockId = '#uieOutlines';
  const sectionId = '#uieOutlinesContent';

  function render() {

    // Clear Outline Section
    const elSection = ui.querySelector(sectionId);
    elSection.innerHTML = '';

    // Get Outline element HTML
    const parser = new DOMParser();
    const docSection = parser.parseFromString(cfg.html, 'text/html');
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
        '${id_color}': 'uie' + dbID + node.el + 'Color',
        '${id_width}': 'uie' + dbID + node.el + 'Width',
        '${id_color_val}': node.color,
        '${id_width_val}': node.size,
        '${shrink}': node.shrink ? ' hide ' : '',
        'uie-bg-color': node.color
      });

      // Append Outline elements into the Panel
      const templateContent = newTpl.content;
      elSection.appendChild(templateContent.cloneNode(true));
    });

    /**
     * Toggle Section Properties
     */
    const btnShrink = ui.querySelectorAll(`${sectionId} .uie-btn-shrink`);
    if (btnShrink) {
      btnShrink.forEach(element => {
        element.addEventListener('click', (e) => {
          e.preventDefault();
          const target = e.currentTarget;
          const toggle = target.classList.toggle('hide');
          const parent = target.closest('.uie-panel-row');
          const key = parent.id;

          DB.update(dbID, key, { shrink: toggle });
        });

      });
    }

    /**
     * Remove Button
     */
    const btnRemove = ui.querySelectorAll(`${sectionId} .uie-btn-remove`);
    if (btnRemove) {
      btnRemove.forEach(element => {
        element.addEventListener('click', (e) => {
          e.preventDefault();
          const target = e.currentTarget;
          const parent = target.closest('.uie-panel-row');
          const key = parent.id;

          DB.remove(dbID, key);
          render();
          Paint();
        });

      });
    }

    /**
     * Add Button
     */
    const btnAddNew = ui.querySelector(`${blockId} .uie-btn-add-new`);
    const elInput = ui.querySelector('.uie-new-outline-input');
    if (btnAddNew) {
      btnAddNew.addEventListener('click', (e) => {
        e.preventDefault();
        getInput(elInput);
      });
    }

    /**
     * Input Enter
     */
    if (elInput) {
      elInput.addEventListener('keypress', function(event) {
      // If the user presses the "Enter" key on the keyboard
        if (event.key === 'Enter') {
          getInput(elInput);
        }
      });
    }

    /**
     * Input action
     *
     * @param {*} elInput
     */
    function getInput(elInput) {
      if (elInput && elInput.value) {
        const val = elInput.value;
        const elVal = document.querySelector(val);

        if (elVal) {
          const item = {
            el: val,
            active: true,
            color: getColor(),
            size: '1',
            shrink: true
          };

          DB.add(dbID, val, item);
          render();
          Paint();
        }

        elInput.value = '';
      }
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
          Paint();
        });
      });
    }

    /**
     * Change Outline Size
     */
    const inNumber = ui.querySelectorAll(`${sectionId} .uie-number`);
    if (inNumber) {
      inNumber.forEach(element => {
        element.addEventListener('change', (e) => {
          const target = e.target;

          const parent = target.closest('.uie-panel-row');
          const key = parent.id;

          DB.update(dbID, key, { size: target.value });
          Paint();
        });
      });
    }

    /**
     * Change Background
     */
    const inColor = ui.querySelectorAll(`${sectionId} .uie-color`);
    if (inColor) {
      inColor.forEach(element => {
        element.addEventListener('change', (e) => {
          const target = e.target;

          const parent = target.closest('.uie-panel-row');
          const key = parent.id;

          DB.update(dbID, key, { color: target.value });
          render();
          Paint();
        });
      });
    }
  }

  render();

}
