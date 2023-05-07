/**
 * Render Component UI
 *
 * @param {*} cfg
 */
function UI(cfg) {
  initUIComponent(cfg);

  const uiExplorer = document.querySelector('ui-explorer');
  if (uiExplorer) {
    return uiExplorer.shadowRoot;
  }

  return false;
};

function initUIComponent(cfg) {

  // Get Frontend Resources
  const btnHtml = cfg.btn.html;
  const panelHtml = cfg.panel.html;
  const mainStyles = cfg.styles;

  // HTML template content
  const newTpl = document.createElement('template');
  newTpl.innerHTML = mainStyles + btnHtml + panelHtml;
  const templateContent = newTpl.content;

  /**
   * UI Web Component
   */
  class UIExplorer extends HTMLElement {

    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }

  }

  // Add componet to Page
  customElements.define('ui-explorer', UIExplorer);
  const wcUie = document.createElement('ui-explorer');
  document.body.appendChild(wcUie);
}

export default UI;
