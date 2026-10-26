(() => {
  const panel = document.querySelector('[data-golden-worlds]');
  if (!panel) return;
  const layers = [...panel.querySelectorAll('.series-artwork img')];
  const control = panel.querySelector('.series-pause');
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let sources = [];
  let index = 0;
  let front = 0;
  let visible = false;
  let paused = false;
  let busy = false;
  let timer;
  const canPlay = () => visible && !paused && !motion.matches && !document.hidden && sources.length > 1;

  function schedule() {
    clearTimeout(timer);
    if (canPlay() && !busy) timer = setTimeout(advance, 6000);
  }

  async function advance() {
    if (!canPlay()) return;
    busy = true;
    const next = (index + 1) % sources.length;
    const back = 1 - front;
    try {
      layers[back].src = sources[next];
      await layers[back].decode();
      if (canPlay()) {
        layers[back].classList.add('is-visible');
        layers[front].classList.remove('is-visible');
        front = back;
        index = next;
      }
    } catch {
      // Keep the current artwork visible; skip an unavailable asset next time.
      index = next;
    } finally {
      busy = false;
      schedule();
    }
  }

  control.addEventListener('click', () => {
    paused = !paused;
    control.textContent = paused ? 'Play slideshow' : 'Pause slideshow';
    control.setAttribute('aria-pressed', String(paused));
    schedule();
  });
  motion.addEventListener('change', () => {
    control.hidden = motion.matches || sources.length < 2;
    schedule();
  });
  document.addEventListener('visibilitychange', schedule);
  const observer = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    schedule();
  }, { threshold: 0.15 });
  observer.observe(panel);

  fetch('https://goldentcg.app/franchise-index.json')
    .then(response => {
      if (!response.ok) throw new Error('Catalog unavailable');
      return response.json();
    })
    .then(catalog => {
      sources = [...new Set((catalog.franchises || []).map(franchise => franchise.banner?.url).filter(url => {
        try { return new URL(url).protocol === 'https:'; } catch { return false; }
      }))];
      const current = layers[front].src;
      const currentIndex = sources.indexOf(current);
      // Keep the HTML fallback until another image has loaded successfully.
      index = currentIndex >= 0 ? currentIndex : sources.length - 1;
      control.hidden = motion.matches || sources.length < 2;
      schedule();
    })
    .catch(() => { /* The first collage remains a complete static fallback. */ });
})();
