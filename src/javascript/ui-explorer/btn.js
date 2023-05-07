/**
 * Toggle Button
 */

const Btn = (cfg, ui) => {
  if (ui) {
    const btn = ui.getElementById(cfg.btn.id);

    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();

        const panel = ui.getElementById(cfg.panel.id);
        if (panel) {
          panel.classList.toggle('active');
        }
      });
    }
  }
};

export default Btn;
