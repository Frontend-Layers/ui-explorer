import { getBodyContent, decodeRollupUrl } from './ui-explorer/utils';
import UIExplorer from './ui-explorer';
import tpl from './ui-explorer/tpl';

/**
 * Import Resources
 */
import btnHTML from 'root/dist/btn.html';
import panelHTML from 'root/dist/panel.html';
import tileHTML from 'root/dist/tile.html';
import styles from 'root/dist/styles/main.css';
import data from 'root/src/json/default.json';
import dataPackageJson from 'root/package.json';

const appVerion = dataPackageJson.version;
data.version = appVerion;

const cfg = {
  btn: {
    html: getBodyContent(decodeRollupUrl(btnHTML, 'html')),
    id: 'uieBtn'
  },
  panel: {
    html: tpl(getBodyContent(decodeRollupUrl(panelHTML, 'html')), { '${version}': appVerion }),
    id: 'uiePanel'
  },
  tile: {
    html: getBodyContent(decodeRollupUrl(tileHTML, 'html')),
    id: 'uieTile'
  },
  styles: `<style type="text/css">${styles}</style>`,
  data
};

UIExplorer(cfg);
