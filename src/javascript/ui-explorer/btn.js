/**
 * Toggle Button
 */

const Btn = (cfg, component) => {
  if (component) {
    const btn = component.getElementById(cfg.btn.id);

    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();

        const panel = component.getElementById(cfg.panel.id);
        if (panel) {
          panel.classList.toggle('active');
        }
      });
    }
  }
};

export default Btn;
