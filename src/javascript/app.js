import { getBodyContent, decodeRollupUrl } from 'src/ui-explorer/utils';
import UIExplorer from 'src/ui-explorer';

/**
 * Import Resources
 */
import btnHTML from 'root/dist/btn.html';
import panelHTML from 'root/dist/panel.html';
import tileHTML from 'root/dist/tile.html';
import styles from 'root/dist/styles/main.css';
import data from 'root/src/json/default.json';

const cfg = {
  btn: {
    html: getBodyContent(decodeRollupUrl(btnHTML, 'html')),
    id: 'uieBtn'
  },
  panel: {
    html: getBodyContent(decodeRollupUrl(panelHTML, 'html')),
    id: 'uiePanel'
  },
  tile: {
    html: getBodyContent(decodeRollupUrl(tileHTML, 'html')),
    id: 'uieTile'
  },
  styles: `<style>@import url("${styles}");</style>`,
  data
};

UIExplorer(cfg);
