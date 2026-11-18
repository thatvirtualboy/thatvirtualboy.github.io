function setupSpotlight(spotlight) {
  const slides = [...spotlight.querySelectorAll('.slide')];
  const selectors = [...spotlight.querySelectorAll('.app-selector')];
  const toggle = spotlight.querySelector('.rotation-toggle');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const interval = 8000;
  let current = 0;
  let paused = reducedMotion.matches;
  let hovering = false;
  let progress;

  function show(index) {
    progress?.cancel();
    slides[current].hidden = true;
    selectors[current].setAttribute('aria-pressed', 'false');
    current = index;
    slides[current].hidden = false;
    selectors[current].setAttribute('aria-pressed', 'true');
    const fill = selectors[current].querySelector('.rotation-track span');
    progress = fill.animate(
      [{ transform: 'scaleX(0)' }, { transform: 'scaleX(1)' }],
      { duration: interval, fill: 'both' }
    );
    progress.onfinish = () => show((current + 1) % slides.length);
    syncPlayback();
  }

  function syncPlayback() {
    toggle.setAttribute('aria-label', paused ? 'Resume spotlight rotation' : 'Pause spotlight rotation');
    toggle.classList.toggle('is-paused', paused);
    if (paused || hovering || document.hidden) progress.pause();
    else progress.play();
  }

  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    paused = !paused;
    hovering = false;
    syncPlayback();
  });
  selectors.forEach((button, index) => {
    button.addEventListener('click', () => {
      paused = true;
      show(index);
    });
  });
  spotlight.addEventListener('focusin', event => {
    if (event.target !== toggle && event.target.matches(':focus-visible')) {
      paused = true;
      syncPlayback();
    }
  });
  spotlight.addEventListener('pointerenter', event => {
    hovering = event.pointerType === 'mouse';
    syncPlayback();
  });
  spotlight.addEventListener('pointerleave', () => {
    hovering = false;
    syncPlayback();
  });
  reducedMotion.addEventListener('change', event => {
    if (event.matches) paused = true;
    syncPlayback();
  });
  document.addEventListener('visibilitychange', syncPlayback);
  show(current);
}

const spotlight = document.querySelector('.hero[aria-roledescription="carousel"]');
if (spotlight) setupSpotlight(spotlight);

document.querySelectorAll('.short-art img').forEach(image => {
  // Prefer the creator's cover, then an automatic portrait frame.
  const alternatives = ['sardefault.jpg', 'oardefault.jpg', 'hqdefault.jpg'];
  function tryNextThumbnail() {
    const filename = alternatives.shift();
    if (!filename) return;
    image.classList.toggle('is-letterboxed', filename === 'hqdefault.jpg');
    image.src = new URL(filename, image.src).href;
  }
  image.addEventListener('error', tryNextThumbnail);
  image.addEventListener('load', () => {
    // YouTube can return its 120 × 90 placeholder for an unavailable cover.
    if (image.naturalWidth === 120 && image.naturalHeight === 90) tryNextThumbnail();
  });
  tryNextThumbnail();
});

const dialog = document.querySelector('dialog');
const query = document.querySelector('#query');
const results = document.querySelector('#results');
const statusLine = document.querySelector('#status');
const moreResults = document.querySelector('#more-results');
const pageSize = 20;
let resultLimit = pageSize;
let entries;
let loading;

function normalize(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
}

function renderResults() {
  if (!entries) return;
  const phrase = normalize(query.value.trim());
  const terms = phrase.split(/\s+/);
  const matches = entries.filter(entry => terms.every(term => entry.search.includes(term)));
  if (phrase) {
    const relevance = entry => entry.name === phrase ? 3 : entry.name.startsWith(phrase) ? 2 : entry.name.includes(phrase) ? 1 : 0;
    matches.sort((a, b) => relevance(b) - relevance(a));
  }
  const visible = matches.slice(0, resultLimit);
  moreResults.hidden = visible.length >= matches.length;
  statusLine.textContent = matches.length ? (query.value.trim()
    ? `Showing ${visible.length} of ${matches.length} matches` : 'Browse apps, channels, and articles')
    : 'No matches. Try an app name or a different topic.';
  results.replaceChildren(...visible.map(entry => {
    const link = document.createElement('a');
    link.href = entry.url;
    link.textContent = entry.title;
    const type = document.createElement('small');
    type.textContent = entry.type;
    link.append(type);
    return link;
  }));
}

async function openSearch() {
  if (!dialog.open) dialog.showModal();
  query.focus();
  if (entries) return renderResults();
  if (loading) return;
  loading = true;
  statusLine.textContent = 'Loading search…';
  try {
    const response = await fetch('/studio-search.json');
    if (!response.ok) throw new Error('Search unavailable');
    entries = (await response.json()).map(entry => ({
      ...entry, name: normalize(entry.title), search: normalize([entry.title, entry.detail, entry.type].join(' '))
    }));
    renderResults();
  } catch {
    statusLine.textContent = 'Search could not load. Close and reopen to try again.';
  } finally {
    loading = false;
  }
}

query.addEventListener('input', () => {
  resultLimit = pageSize;
  renderResults();
});
moreResults.addEventListener('click', () => {
  const start = resultLimit;
  resultLimit += pageSize;
  renderResults();
  results.children[start]?.focus();
});
query.addEventListener('keydown', event => {
  if (event.key === 'ArrowDown' && results.firstElementChild) {
    event.preventDefault();
    results.firstElementChild.focus();
  }
});
document.querySelector('.search-open').addEventListener('click', openSearch);
document.addEventListener('keydown', event => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    openSearch();
  }
});
