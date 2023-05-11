import DB from './db';
import tpl from './tpl';

export default function Paint(cfg) {
  function render() {
    const dbID = 'mockup';

    renderMockupTiles(cfg.styles, cfg.tile.html);

    /**
     * Actions on Mockup Tile
     */
    const mockupTile = document.querySelectorAll('uie-tile');
    if (mockupTile) {
      mockupTile.forEach(item => {

        const element = item.shadowRoot.querySelector('.uie-mockup-tile');
        const btnCrop = element.querySelector('.uie-mockup-tile-btn-crop');
        const btnOffset = element.querySelector('.uie-mockup-tile-btn-offset');
        const btnBW = element.querySelector('.uie-mockup-tile-btn-bw');
        const btnMag = element.querySelector('.uie-mockup-tile-btn-magnet');

        const img = element.querySelector('.uie-mockup-tile-img');

        if (btnCrop && btnOffset && img) {

          moveTile(element, btnCrop, btnOffset);
          offsetImg(img, element, btnOffset);

          /**
           * Magnetize to related Layer
           */
          btnMag.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.currentTarget;
            const parent = target.closest('.uie-mockup-tile');

            const tmpEl = document.createElement('div');

            tmpEl.classList.add('uie-tpm-position');
            tmpEl.style.position = 'absolute';
            tmpEl.style.top = parent.style.top;
            tmpEl.style.left = parent.style.left;
            tmpEl.style.display = 'block';
            tmpEl.style.width = '1px';
            tmpEl.style.height = '1px';
            document.body.appendChild(tmpEl);
            Magnetize(tmpEl, parent, dbID);
            tmpEl.remove();
            parent.focus();
          });

          /**
           * Grayscale Image
           */
          btnBW.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.currentTarget;
            const parent = target.closest('.uie-mockup-tile');
            target.classList.toggle('active');
            const grayscale = parent.classList.toggle('grayscale');

            DB.update('mockup', parent.id, { grayscale });
          });

          /**
           * Crop
           */
          btnCrop.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.currentTarget;
            const toggle = target.classList.toggle('active');
            const parent = target.closest('.uie-mockup-tile');
            parent.classList.remove('crop');

            if (toggle) {
              btnOffset.classList.remove('active');
              parent.classList.add('crop'); // ref: https://stackoverflow.com/questions/8960193/how-to-make-html-element-resizable-using-pure-javascript
            }
          });

          /**
           * Offset
           */
          btnOffset.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.currentTarget;
            const toggle = target.classList.toggle('active');
            const parent = target.closest('.uie-mockup-tile');
            parent.classList.remove('crop');

            if (toggle) {
              btnCrop.classList.remove('active');
            }
          });

          /**
           * Focus / Blur Element
           */
          element.addEventListener('focus', (e) => {
            element.classList.add('active');
          });

          element.addEventListener('blur', (e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) {
              element.classList.remove('active');
              enableKeyboard();
            } else {
              element.focus();
            }
          });

          let btnCtrl = false;
          document.addEventListener('keydown', (e) => {
            btnCtrl = false;

            if (e.ctrlKey) {
              btnCtrl = true;
            };
          });

          document.addEventListener('keypress', (e) => {
            if (e.ctrlKey) {
              btnCtrl = true;
            }
          });

          document.addEventListener('keyup', (e) => {
            if (!e.ctrlKey) {
              btnCtrl = false;
            }
          });

          /**
           * Keypress
           */
          element.addEventListener('keydown', (e) => {
            disableKeyboard();
            switch (e.keyCode) {

              // Arrows
              case 38:
                if (btnCtrl) {
                  element.style.top = element.offsetTop - 10 + 'px';
                } else {
                  element.style.top = element.offsetTop - 1 + 'px';
                }
                break;

              case 40:
                if (btnCtrl) {
                  element.style.top = element.offsetTop + 10 + 'px';
                } else {
                  element.style.top = element.offsetTop + 1 + 'px';
                }
                break;

              case 37:
                if (btnCtrl) {
                  element.style.left = element.offsetLeft - 10 + 'px';
                } else {
                  element.style.left = element.offsetLeft - 1 + 'px';
                }
                break;

              case 39:
                if (btnCtrl) {
                  element.style.left = element.offsetLeft + 10 + 'px';
                } else {
                  element.style.left = element.offsetLeft + 1 + 'px';
                }
                break;

              // Opacity
              case 48:
                if (btnCtrl) {
                  element.style.zIndex = 10000;
                } else {
                  img.style.opacity = '1';
                }
                break;
              case 49:
                if (btnCtrl) {
                  element.style.zIndex = 0;
                } else {
                  img.style.opacity = '0.1';
                }
                break;
              case 50:
                if (btnCtrl) {
                  element.style.zIndex = 200;
                } else {
                  img.style.opacity = '0.2';
                }
                break;
              case 51:
                if (btnCtrl) {
                  element.style.zIndex = 300;
                } else {
                  img.style.opacity = '0.3';
                }
                break;
              case 52:
                if (btnCtrl) {
                  element.style.zIndex = 400;
                } else {
                  img.style.opacity = '0.4';
                }
                break;
              case 53:
                if (btnCtrl) {
                  element.style.zIndex = 500;
                } else {
                  img.style.opacity = '0.5';
                }
                break;
              case 54:
                if (btnCtrl) {
                  element.style.zIndex = 600;
                } else {
                  img.style.opacity = '0.6';
                }
                break;
              case 55:
                if (btnCtrl) {
                  element.style.zIndex = 700;
                } else {
                  img.style.opacity = '0.7';
                }
                break;
              case 56:
                if (btnCtrl) {
                  element.style.zIndex = 800;
                } else {
                  img.style.opacity = '0.8';
                }
                break;
              case 57:
                if (btnCtrl) {
                  element.style.zIndex = 1000;
                } else {
                  img.style.opacity = '0.9';
                }
                break;

              default:
                break;
            }

            const key = element.id;
            DB.update(dbID, key, { position: { left: element.offsetLeft, top: element.offsetTop } });
            DB.update(dbID, key, { opacity: img.style.opacity });
            DB.update(dbID, key, { zindex: parseInt(element.style.zIndex) });

            // 38 Up
            // 40 Down
            // 37 left
            // 39 Right
          });

          element.addEventListener('keyup', (e) => {
            enableKeyboard();
          });
        }

      }); // mockupTile.forEach(element => {
    }
  }

  render();
}

/**
 * Disable Keyboard
 */
function disableKeyboard() {
  document.onkeydown = (event) => { return false; };
}

/**
 * Enable Keyboard
 */
function enableKeyboard() {
  document.onkeydown = (event) => { return true; };
}

/**
 * Offset: Move Image
 */
function offsetImg(img, element, btnOffset) {
  let localX = 0;
  let localY = 0;
  let shiftX = 0;
  let shiftY = 0;
  let mousedown = false;

  element.onmousemove = (e) => {

    // Local cursor position
    localX = e.pageX - e.currentTarget.offsetLeft;
    localY = e.pageY - e.currentTarget.offsetTop;

    moveAt();
  };

  img.onmousedown = (e) => {
    mousedown = true;

    // Img cursor Down Position
    shiftX = e.clientX - parseInt(img.getBoundingClientRect().left);
    shiftY = e.clientY - parseInt(img.getBoundingClientRect().top);

    moveAt();
  };

  function moveAt() {
    const btnOffsetStatus = btnOffset.classList.contains('active');

    if (btnOffsetStatus) {
      if (mousedown) {
        img.style.left = localX - shiftX + 'px';
        img.style.top = localY - shiftY + 'px';
      }
    }
  }

  // drop the div, remove unneeded handlers
  img.onmouseup = function(e) {
    const target = e.currentTarget;
    const parent = target.closest('.uie-mockup-tile');
    DB.update('mockup', parent.id, { offset: { left: target.offsetLeft, top: target.offsetTop } });

    mousedown = false;
  };

  img.onmouseout = function(e) {
    const target = e.currentTarget;
    const parent = target.closest('.uie-mockup-tile');
    DB.update('mockup', parent.id, { offset: { left: target.offsetLeft, top: target.offsetTop } });

    mousedown = false;
  };

  img.ondragstart = function() {
    return false;
  };

  img.addEventListener('dblclick', () => {
    const btnOffsetStatus = btnOffset.classList.contains('active');

    if (btnOffsetStatus) {
      img.style.left = 0;
      img.style.top = 0;
    }
  });
}

/**
 * Move Tile
 */
function moveTile(element, btnCrop, btnOffset) {
  let mousedown = false;

  /**
   * Move Tile
   * @param {*} event
   */
  element.onmousedown = (event) => {
    mousedown = true;

    const shiftX = event.clientX - parseInt(element.getBoundingClientRect().left);
    const shiftY = event.clientY - parseInt(element.getBoundingClientRect().top);
    moveAt(event.pageX, event.pageY);

    // moves the div at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      const btnCropStatus = btnCrop.classList.contains('active');
      const btnOffsetStatus = btnOffset.classList.contains('active');

      if (!btnCropStatus && !btnOffsetStatus) {
        if (mousedown) {
          element.style.left = pageX - shiftX + 'px';
          element.style.top = pageY - shiftY + 'px';
        }
      }
    }

    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }

    // move the div on mousemove
    document.addEventListener('mousemove', onMouseMove);

    // drop the div, remove unneeded handlers
    element.onmouseup = function(e) {
      const target = e.currentTarget;
      DB.update('mockup', target.id, { position: { left: target.offsetLeft, top: target.offsetTop } });
      DB.update('mockup', target.id, { crop: { width: target.offsetWidth, height: target.offsetHeight } });

      mousedown = false;
      document.removeEventListener('mousemove', onMouseMove);
      element.onmouseup = null;
    };

    element.onmouseout = function(e) {
      const target = e.currentTarget;
      DB.update('mockup', target.id, { position: { left: target.offsetLeft, top: target.offsetTop } });
      DB.update('mockup', target.id, { crop: { width: target.offsetWidth, height: target.offsetHeight } });

      mousedown = false;
      document.removeEventListener('mousemove', onMouseMove);
      element.onmouseup = null;
    };

  };

  element.ondragstart = function() {
    return false;
  };
}

/**
 * Magnetize Tile to Related Page Element
 * @param {*} target
 */
function Magnetize(target, parent, dbID) {
  const x = target.offsetLeft;
  const y = target.offsetTop;
  const ignore = ['UI-EXPLORER', 'UIE-TILE', 'BODY', 'HTML'];
  const el = getAllElementsFromPoint(x, y, ignore);

  if (el) {
    const elMg = el[1];

    if (elMg) {
      parent.style.left = elMg.offsetLeft + 'px';
      parent.style.top = elMg.offsetTop + 'px';

      const key = parent.id;
      DB.update(dbID, key, { position: { left: elMg.offsetLeft, top: elMg.offsetTop } });
    }
  }

}

/**
 * Get All Elements From Point
 *
 * @param {*} x
 * @param {*} y
 * @returns
 */
function getAllElementsFromPoint(x, y, ignore = []) {
  const stack = [];
  let elementMouseIsOver = document.elementFromPoint(x, y);

  if (elementMouseIsOver) {
    stack.push(elementMouseIsOver);

    while (elementMouseIsOver.tagName !== 'HTML') {

      if (ignore) {
        elementMouseIsOver.style.pointerEvents = 'none';
        elementMouseIsOver = document.elementFromPoint(x, y);
        stack.push(elementMouseIsOver);
      }
    }

    /* Now clean it up */
    let i = 0;
    const il = stack.length;

    for (; i < il; i += 1) {
      stack[i].style.pointerEvents = '';
    }

    if (stack) {
      const filteredStack = stack.filter((item) => !ignore.includes(item.tagName));
      return filteredStack;
    }
  }

  return false;
}

/**
 * Paint Tiles
 *
 * @param {*} data
 */
function renderMockupTiles(styles, tile) {
  // Clear Mockup Tiles
  removeElements('uie-tile');

  const visible = DB.get('general').data[1].active;

  if (visible) {
    const dbID = 'mockup';
    const data = DB.get(dbID).data;

    // Add Tiles to Document
    data.forEach(node => {
      const newTpl = document.createElement('uie-tile');

      if (node.thumb) {
        const uid = 'uie' + dbID + node.el;

        newTpl.shadowRoot.innerHTML = styles + tpl(tile, {
          '${id}': uid,
          '${active}': node.active ? '' : ' hide ',
          'https://${src}': node.thumb,
          '${styles}': `style="width:${node.crop.width}px; height:${node.crop.height}px; top: ${node.position.top}px; left: ${node.position.left}px; z-index: ${node.zindex}"`,
          '${imgstyle}': `style="opacity:${node.opacity}; top: ${node.offset.top}px; left: ${node.offset.left}px;"`,
          '${btnbw}': node.grayscale ? ' active ' : '',
          '${statusbw}': node.grayscale ? ' grayscale ' : ''
        });

        // Append Element
        document.body.appendChild(newTpl);
      }
    });
  }
}

/**
 * Remove All Elements by Class Name
 *
 * @param {*} className
 */
function removeElements(className) {
  const elements = document.querySelectorAll(className);
  elements.forEach(item => {
    item.parentElement.removeChild(item);
  });

}
