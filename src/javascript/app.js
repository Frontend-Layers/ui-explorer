import UIExplorer from 'src/ui-explorer';

/**
 * Import Resources
 */
import btnHTML from 'root/dist/btn.html';
import panelHTML from 'root/dist/panel.html';
import styles from 'root/dist/styles/main.css';
import data from 'root/src/json/default.json';

const cfg = {
  btn: {
    html: btnHTML,
    id: 'uieBtn'
  },
  panel: {
    html: panelHTML,
    id: 'uiePanel'
  },
  styles,
  data
};

UIExplorer(cfg);
