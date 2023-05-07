import PanelDatalist from './panel-datalist';

const Panel = (cfg, ui) => {
  if (ui) {
    const panel = ui.getElementById(cfg.panel.id);
    if (panel) {

      /**
       * Hide Panel
       */
      const btnHide = ui.querySelector('.uie-top-header-action-btn');
      if (btnHide) {
        btnHide.addEventListener('click', (e) => {
          e.preventDefault();
          panel.classList.remove('active');
        });
      }

      /**
       * Hide Panel by Esc
       */
      document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
          panel.classList.remove('active');
        };
      });

      document.addEventListener('click', (e) => {
        const target = e.target;

        if (target.tagName !== 'UI-EXPLORER') {
          panel.classList.remove('active');
        }
      });

      /**
       * Show Hide Panel Sections
       */
      const btnAccordion = ui.querySelectorAll('.uie-accordion-action');
      if (btnAccordion) {
        btnAccordion.forEach(element => {

          element.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.currentTarget;
            target.classList.toggle('hide');
          });

        });
      }

    }

    PanelDatalist(ui);
  }
};

export default Panel;
