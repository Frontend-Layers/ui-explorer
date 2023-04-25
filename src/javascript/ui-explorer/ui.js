import { getBodyContent, decodeRollupUrl } from './utils';

/**
 * Render Component UI
 *
 * @param {*} cfg
 */
function UI(cfg) {

  // Get Frontend Resources
  const btnHtml = getBodyContent(decodeRollupUrl(cfg.btn.html, 'html'));
  const panelHtml = getBodyContent(decodeRollupUrl(cfg.panel.html, 'html'));
  const mainStyles = `<style>@import url("${cfg.styles}");</style>`;

  // HTML template content
  const newTpl = document.createElement('template');
  newTpl.innerHTML = mainStyles + btnHtml + panelHtml;
  const templateContent = newTpl.content;

  /**
   * Web Component
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

  const uiExplorer = document.querySelector('ui-explorer');
  if (uiExplorer) {
    return { component: uiExplorer.shadowRoot, content: panelHtml };
  }

  return false;
};

export default UI;
