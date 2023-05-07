import Btn from './btn';
import Panel from './panel';
import UI from './ui';
import sectionGeneral from './section-general';
import sectionOutlines from './section-outlines';
import sectionMockup from './section-mockup';
import DB from './db';

const UIExplorer = (cfg) => {
  DB.init(cfg);

  const ui = UI(cfg);

  // UI Events
  Btn(cfg, ui);
  Panel(cfg, ui);

  /**
   * Sections
   */

  // General Events
  sectionGeneral(cfg, ui);

  // Outline Events
  sectionOutlines(cfg.panel, ui);

  // Mockup Events
  sectionMockup(cfg, ui);
};

export default UIExplorer;
