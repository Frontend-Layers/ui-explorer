/**
 * Define Tile Component
 *
 * @param {*} cfg
 */
export default function uiTile(cfg) {

  // Get Frontend Resources
  const mainStyles = `<style>@import url("${cfg.styles}");</style>`;
  const tileHtml = cfg.tile.html;

  // HTML template content
  const newTpl = document.createElement('template');
  newTpl.innerHTML = mainStyles + tileHtml;
  const templateContent = newTpl.content;

  /**
   * UI Web Component
   */
  class TileComponent extends HTMLElement {

    constructor() {
      super();

      const shadowRoot = this.attachShadow({ mode: 'open' });
      shadowRoot.appendChild(templateContent.cloneNode(true));
    }

  }

  // Add componet to Page
  customElements.define('uie-tile', TileComponent);
}
