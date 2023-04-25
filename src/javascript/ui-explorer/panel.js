const Panel = (cfg, component) => {
  if (component) {

    /**
     * Hide Panel
     */
    const btnHide = component.querySelector('.uie-top-header-action-btn');
    if (btnHide) {
      btnHide.addEventListener('click', (e) => {
        e.preventDefault();
        const panel = component.getElementById(cfg.panel.id);
        panel.classList.remove('active');
      });
    }

    /**
     * Hide Panel by Esc
     */
    document.addEventListener('keydown', (e) => {

      if (e.code === 'Escape') {
        const panel = component.getElementById(cfg.panel.id);
        panel.classList.remove('active');
      };

    });

    /**
     * Show Hide Panel Sections
     */
    const btnAccordion = component.querySelectorAll('.uie-accordion-action');
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

};

export default Panel;
