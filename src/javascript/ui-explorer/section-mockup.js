import DB from './db';
import tpl from './tpl';
import Paint from './section-mockup-tile-paint';
import uiTile from './section-mockup-tile-ui';

export default function Section(cfg, ui) {
  const dbID = 'mockup';
  const sectionId = '#uieMockupContent';

  function render() {
    // Save Upload Button
    const htmlPanelUpload = ui.querySelector('.uie-mockup-btn-upload').outerHTML;
    const elPanelUpload = document.createElement('template');
    elPanelUpload.innerHTML = htmlPanelUpload;

    // Clear Outline Section
    const elSection = ui.querySelector(sectionId);
    elSection.innerHTML = '';

    // Get Outline element HTML
    const parser = new DOMParser();
    const docSection = parser.parseFromString(cfg.panel.html, 'text/html');
    const rawInnerHTML = docSection.querySelector(sectionId + ' .uie-mockup-item').outerHTML;

    // Apply properties
    const data = DB.get(dbID).data;

    data.forEach(node => {

      if (node.thumb) {
        const newTpl = document.createElement('template');
        newTpl.innerHTML = tpl(rawInnerHTML, {
          '${id}': 'uie' + dbID + node.el,
          '${cb_id}': 'uie' + dbID + node.el + 'Cb',
          '${cb_val}': node.active ? ' checked ' : '',
          'https://${src}': node.thumb
        });

        // Append Outline elements into the Panel
        const templateContent = newTpl.content;
        elSection.appendChild(templateContent.cloneNode(true));
      }
    });

    // Append Upload Button
    elSection.appendChild(elPanelUpload.content.cloneNode(true));

    /**
     * Upload By Drag&Drop
     * ref: https://www.smashingmagazine.com/2018/01/drag-drop-file-uploader-vanilla-js/
     */
    const uieMockupUpload = elSection.querySelector('.uie-mockup-btn-upload');
    if (uieMockupUpload) {
      uieMockupUpload.addEventListener('drop', e => {
        e.preventDefault();

        uploadImage(e.dataTransfer.files[0]);
        uieMockupUpload.classList.remove('active');
      });

      uieMockupUpload.addEventListener('dragover', e => {
        e.preventDefault();
        uieMockupUpload.classList.add('active');
      });

      uieMockupUpload.addEventListener('dragleave', e => {
        e.preventDefault();
        uieMockupUpload.classList.remove('active');
      });
    }

    /**
     * Upload By Clipboard
     * ref: https://htmldom.dev/paste-an-image-from-the-clipboard/
     */
    // Handle the `paste` event
    document.addEventListener('paste', function(evt) {
      const parent = elSection.closest('.uie-panel');

      if (parent && parent.classList.contains('active')) {

        // Get the data of clipboard
        const clipboardItems = evt.clipboardData.items;
        const items = [].slice.call(clipboardItems).filter(function(item) {
          // Filter the image items only
          return item.type.indexOf('image') !== -1;
        });
        if (items.length === 0) {
          return;
        }

        const item = items[0];
        // Get the blob of image
        const blob = item.getAsFile();
        uploadImage(blob);
      }
    });

    /**
     * Preview Event
     */
    const uieMockupItem = ui.querySelectorAll('.uie-mockup-item');
    const preview = ui.querySelector('.uie-mockup-preview');
    const previewImg = ui.querySelector('.uie-mockup-preview-img');

    if (uieMockupItem && preview && previewImg) {
      uieMockupItem.forEach(element => {
        const img = element.querySelector('.uie-mockup-thumb');
        if (img) {

          element.addEventListener('mousemove', (e) => {
            preview.classList.add('show');
            previewImg.setAttribute('src', img.src);
          });

          element.addEventListener('mouseout', (e) => {
            preview.classList.remove('show');
          });
        }

      });
    }

    /**
     * Upload Event
     */
    const inputUpload = ui.querySelector('#uie-mockup-input-upload');
    if (inputUpload) {
      inputUpload.addEventListener('change', (event) => {
        uploadImage(event.target.files[0]);
      });
    }

    /**
     * Upload Image
     */
    function uploadImage(image) {
      if (image) {
        const extension = image.name.split('.').pop();
        const allowedExtensions = ['jpg', 'jpeg', 'png'];

        const size = image.size;
        const sizeLimit = 2000000; // ~ 2Mb

        const elImg = new Image();
        elImg.src = URL.createObjectURL(image);

        elImg.onload = () => {
          const imgWidth = elImg.width;
          const imgHeight = elImg.height;

          if (allowedExtensions.includes(extension) && size < sizeLimit) {
            const reader = new FileReader();
            reader.readAsDataURL(image);

            reader.addEventListener('load', () => {

              if (reader.result) {
                const el = (new Date().valueOf()).toString(16);
                const name = image.name;

                const item = {
                  name,
                  el,
                  thumb: reader.result,
                  active: true,
                  opacity: '0.5',
                  zindex: 100,
                  grayscale: false,
                  position: {
                    left: 0,
                    top: 0
                  },
                  offset: {
                    left: 0,
                    top: 0
                  },
                  crop: {
                    width: imgWidth,
                    height: imgHeight
                  }
                };

                DB.add(dbID, name, item);
                render();
                Paint(cfg);
              }
            });
          }
        };
      }
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
          const parent = target.closest('.uie-mockup-item');
          const key = parent.id;
          preview.classList.remove('show');

          DB.remove(dbID, key);
          render();
          Paint(cfg);
        });

      });
    }

    /**
     * Toggle Visibility
     */
    const cbInputs = ui.querySelectorAll(`${sectionId} .uie-mockup-cb`);
    if (cbInputs) {
      cbInputs.forEach(element => {
        element.addEventListener('change', (e) => {
          const target = e.target;

          const parent = target.closest('.uie-mockup-item');
          const key = parent.id;

          DB.update(dbID, key, { active: target.checked });
          Paint(cfg);
        });
      });
    }

    // sectionMockupTiles(cfg, tile);
  } // render()

  uiTile(cfg);
  Paint(cfg);
  render();
}
