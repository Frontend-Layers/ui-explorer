import Btn from './btn';
import Panel from './panel';
import UI from './ui';
import sectionGeneral from './section-general';
import sectionOutlines from './section-outlines';
import Datalist from './datalist';
import DB from './db';
import Paint from './paint';

const UIExplorer = (cfg) => {
  DB.init(cfg);

  const ui = UI(cfg);

  // UI Events
  Btn(cfg, ui.component);
  Panel(cfg, ui.component);

  // Datalist
  Datalist(ui.component);

  /**
   * Sections
   */

  // General Events
  sectionGeneral(ui);

  // Outline Events
  sectionOutlines(ui);

  Paint();
};

export default UIExplorer;
