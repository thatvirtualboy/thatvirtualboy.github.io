---
layout: page
title: Bento|Craft
permalink: /bentocraft
comments: false
---

<style>
  .layout-page .mainheading,
  .layout-page .section-title {
    display: none;
  }

  .layout-page .article-post {
    margin: 0;
  }

  .layout-page .article-post p {
    margin: 0;
  }

  .bentocraft-page {
    --bc-ink: #101316;
    --bc-muted: #5e6875;
    --bc-soft: #f5f7f8;
    --bc-paper: #ffffff;
    --bc-line: rgba(16, 19, 22, 0.1);
    --bc-cyan: #00a7c4;
    --bc-lime: #a6d44b;
    --bc-coral: #ff6b5f;
    --bc-shadow: 0 24px 70px rgba(16, 19, 22, 0.12);
    position: relative;
    left: 50%;
    width: 100vw;
    margin-left: -50vw;
    margin-right: -50vw;
    overflow: hidden;
    background:
      linear-gradient(90deg, rgba(16, 19, 22, 0.035) 1px, transparent 1px),
      linear-gradient(180deg, rgba(16, 19, 22, 0.035) 1px, transparent 1px),
      linear-gradient(180deg, #fbfbf9 0%, #eef3f3 48%, #ffffff 100%);
    background-size: 44px 44px, 44px 44px, auto;
    color: var(--bc-ink);
    font-family: "Avenir Next", "Inter", "Segoe UI", sans-serif;
  }

  .bc-shell {
    max-width: 1180px;
    margin: 0 auto;
    padding: 30px 24px 78px;
  }

  .bc-nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    margin-bottom: 30px;
    color: var(--bc-muted);
    font-size: 0.9rem;
    font-weight: 700;
  }

  .bc-nav-brand {
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--bc-ink);
  }

  .bc-mini-icon {
    width: 42px;
    height: 42px;
    border-radius: 11px;
    box-shadow: 0 12px 28px rgba(16, 19, 22, 0.16);
  }

  .bc-download {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    padding: 0 18px;
    border-radius: 999px;
    background: var(--bc-ink);
    color: #fff;
    font-weight: 800;
    text-decoration: none;
    box-shadow: 0 14px 30px rgba(16, 19, 22, 0.16);
    transition: transform 180ms ease, box-shadow 180ms ease, background 180ms ease;
  }

  .bc-download:hover {
    color: #fff;
    text-decoration: none;
    background: #20262b;
    transform: translateY(-2px);
    box-shadow: 0 18px 38px rgba(16, 19, 22, 0.2);
  }

  .bc-hero {
    display: grid;
    grid-template-columns: minmax(0, 0.92fr) minmax(420px, 1.08fr);
    gap: 44px;
    align-items: center;
    min-height: calc(100vh - 160px);
    padding: 18px 0 54px;
  }

  .bc-kicker {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 9px 13px;
    border: 1px solid var(--bc-line);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.72);
    color: var(--bc-muted);
    font-size: 0.78rem;
    font-weight: 850;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .bc-kicker span {
    flex: 0 0 36px;
    width: 36px;
    height: 8px;
    background:
      radial-gradient(circle at 4px 4px, var(--bc-lime) 0 4px, transparent 4.5px),
      radial-gradient(circle at 18px 4px, var(--bc-cyan) 0 4px, transparent 4.5px),
      radial-gradient(circle at 32px 4px, var(--bc-coral) 0 4px, transparent 4.5px);
  }

  .bc-hero h1 {
    margin: 22px 0 18px;
    font-size: clamp(4rem, 11vw, 8rem);
    line-height: 0.85;
    letter-spacing: 0;
    font-weight: 900;
  }

  .bc-hero h1 em {
    display: block;
    color: transparent;
    font-style: normal;
    -webkit-text-stroke: 2px var(--bc-ink);
  }

  .bc-lede {
    max-width: 560px;
    margin-bottom: 26px;
    color: var(--bc-muted);
    font-size: clamp(1.1rem, 2vw, 1.35rem);
    line-height: 1.55;
  }

  .bc-actions {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 14px;
    margin-bottom: 28px;
  }

  .bc-secondary {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 44px;
    padding: 0 18px;
    border-radius: 999px;
    border: 1px solid var(--bc-line);
    color: var(--bc-ink);
    background: rgba(255, 255, 255, 0.7);
    font-weight: 800;
    text-decoration: none;
  }

  .bc-secondary:hover {
    color: var(--bc-ink);
    text-decoration: none;
    border-color: rgba(16, 19, 22, 0.22);
  }

  .bc-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 10px;
    max-width: 570px;
  }

  .bc-stat {
    border: 1px solid var(--bc-line);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.68);
    padding: 14px;
  }

  .bc-stat strong {
    display: block;
    margin-bottom: 3px;
    font-size: 1.1rem;
  }

  .bc-stat span {
    color: var(--bc-muted);
    font-size: 0.85rem;
    line-height: 1.35;
  }

  .bc-hero-art {
    position: relative;
  }

  .bc-hero-art::before {
    content: "";
    position: absolute;
    inset: 8% -2% -5% 8%;
    border-radius: 8px;
    background: #101316;
    transform: rotate(2.4deg);
    opacity: 0.94;
  }

  .bc-hero-art img {
    position: relative;
    display: block;
    width: 100%;
    border-radius: 8px;
    box-shadow: var(--bc-shadow);
    transform: rotate(-1.3deg);
  }

  .bc-section {
    padding: 42px 0;
  }

  .bc-section-head {
    display: grid;
    grid-template-columns: minmax(0, 0.8fr) minmax(280px, 0.52fr);
    gap: 28px;
    align-items: end;
    margin-bottom: 24px;
  }

  .bc-label {
    margin-bottom: 10px;
    color: var(--bc-cyan);
    font-size: 0.78rem;
    font-weight: 900;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  .bc-section h2 {
    margin: 0;
    font-size: clamp(2.2rem, 5vw, 4.9rem);
    line-height: 0.94;
    letter-spacing: 0;
    font-weight: 900;
  }

  .bc-section-head p {
    color: var(--bc-muted);
    font-size: 1.04rem;
    line-height: 1.6;
  }

  .bc-panel {
    border: 1px solid var(--bc-line);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.78);
    box-shadow: 0 18px 52px rgba(16, 19, 22, 0.08);
    overflow: hidden;
  }

  .bc-panel img,
  .bc-panel video {
    display: block;
    width: 100%;
  }

  .bc-panel-body {
    padding: 22px;
  }

  .bc-panel h3 {
    margin: 0 0 10px;
    font-size: 1.35rem;
    font-weight: 900;
  }

  .bc-panel p {
    color: var(--bc-muted);
    line-height: 1.6;
  }

  .bc-feature-grid {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  .bc-feature {
    min-height: 164px;
    border: 1px solid var(--bc-line);
    border-radius: 8px;
    background: var(--bc-paper);
    padding: 18px;
    box-shadow: 0 12px 32px rgba(16, 19, 22, 0.06);
  }

  .bc-feature:nth-child(2) {
    background: #f5fbef;
  }

  .bc-feature:nth-child(3) {
    background: #eff9fb;
  }

  .bc-feature-mark {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 34px;
    height: 34px;
    margin-bottom: 18px;
    border-radius: 8px;
    background: var(--bc-ink);
    color: #fff;
    font-weight: 900;
  }

  .bc-feature h3 {
    margin: 0 0 8px;
    font-size: 1.08rem;
    font-weight: 900;
  }

  .bc-feature p {
    color: var(--bc-muted);
    line-height: 1.55;
  }

  .bc-video-wrap {
    position: relative;
    overflow: hidden;
    border: 1px solid var(--bc-line);
    border-radius: 8px;
    background: #101316;
    box-shadow: var(--bc-shadow);
    aspect-ratio: 16 / 9;
  }

  .bc-video-wrap iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .bc-gallery {
    display: grid;
    grid-template-columns: repeat(6, minmax(0, 1fr));
    gap: 12px;
  }

  .bc-shot {
    border: 1px solid var(--bc-line);
    border-radius: 8px;
    background: #fff;
    overflow: hidden;
    box-shadow: 0 12px 30px rgba(16, 19, 22, 0.08);
  }

  .bc-shot-large {
    grid-column: span 3;
  }

  .bc-shot-small {
    grid-column: span 2;
  }

  .bc-shot img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .bc-detail-strip {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 12px;
  }

  .bc-detail-strip p {
    border: 1px solid var(--bc-line);
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.74);
    padding: 14px;
    color: var(--bc-muted);
    line-height: 1.45;
  }

  .bc-detail-strip strong {
    color: var(--bc-ink);
  }

  .bc-final {
    display: grid;
    grid-template-columns: minmax(0, 0.8fr) minmax(300px, 0.6fr);
    gap: 28px;
    align-items: center;
    margin-top: 18px;
    padding: 28px;
    border: 1px solid var(--bc-line);
    border-radius: 8px;
    background: #101316;
    color: #fff;
  }

  .bc-final h2 {
    color: #fff;
  }

  .bc-final p {
    color: rgba(255, 255, 255, 0.72);
    line-height: 1.6;
  }

  .bc-final .bc-download {
    background: #fff;
    color: #101316;
    box-shadow: none;
  }

  .bc-final img {
    display: block;
    width: 100%;
    border-radius: 8px;
  }

  @media (max-width: 991px) {
    .bc-hero,
    .bc-section-head,
    .bc-final {
      grid-template-columns: 1fr;
    }

    .bc-hero {
      min-height: auto;
      padding-top: 8px;
    }

    .bc-feature-grid,
    .bc-detail-strip {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 700px) {
    .bc-shell {
      padding: 18px 16px 56px;
    }

    .bc-nav {
      align-items: flex-start;
    }

    .bc-nav .bc-download {
      min-height: 40px;
      padding: 0 14px;
      font-size: 0.88rem;
    }

    .bc-hero h1 {
      font-size: clamp(3.45rem, 18vw, 5.4rem);
    }

    .bc-stats,
    .bc-feature-grid,
    .bc-detail-strip {
      grid-template-columns: 1fr;
    }

    .bc-gallery {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .bc-shot-large,
    .bc-shot-small {
      grid-column: span 2;
    }
  }
</style>

<div class="bentocraft-page">
  <div class="bc-shell">
    <nav class="bc-nav" aria-label="BentoCraft page navigation">
      <div class="bc-nav-brand">
        <img class="bc-mini-icon" src="/assets/images/bento/appicon.png" alt="BentoCraft app icon" />
        <span>Bento|Craft</span>
      </div>
      <a class="bc-download" href="https://apple.co/45Brl06">Download</a>
    </nav>

    <section class="bc-hero">
      <div>
        <div class="bc-kicker"><span></span>iPad and Apple Vision Pro</div>
        <h1>Bento <em>graphics</em></h1>
        <p class="bc-lede">Create polished Apple-style bento graphics for launches, recaps, press kits, social posts, and app updates with a focused workspace built for quick visual storytelling.</p>
        <div class="bc-actions">
          <a class="bc-download" href="https://apple.co/45Brl06">Try Bento|Craft</a>
          <a class="bc-secondary" href="#watch">Watch the demo</a>
        </div>
        <div class="bc-stats" aria-label="BentoCraft highlights">
          <div class="bc-stat">
            <strong>Templates</strong>
            <span>Micro, Mini, Mega, Mighty, Monster, and Max layouts.</span>
          </div>
          <div class="bc-stat">
            <strong>Canvas</strong>
            <span>Build custom layouts with precise grid alignment.</span>
          </div>
          <div class="bc-stat">
            <strong>Export</strong>
            <span>Share PNG, JPEG, or PDF in seconds.</span>
          </div>
        </div>
      </div>
      <div class="bc-hero-art">
        <img src="/assets/images/bento/bentocraft-promo2.png" alt="BentoCraft promotional graphic showing bento layouts" />
      </div>
    </section>

    <section class="bc-section">
      <div class="bc-section-head">
        <div>
          <div class="bc-label">Start fast</div>
          <h2>Turn your best moments into polished visuals.</h2>
        </div>
        <p>Start with a polished template or build your own layout on Canvas. Either way, the result feels intentional.</p>
      </div>

      <article class="bc-panel">
        <img src="/assets/images/bento/bento-promo-mon.png" alt="BentoCraft template examples" />
      </article>
    </section>

    <section class="bc-section">
      <div class="bc-feature-grid">
        <article class="bc-feature">
          <span class="bc-feature-mark">1</span>
          <h3>Templates</h3>
          <p>Pick a bento layout, add your copy and screenshots, then export.</p>
        </article>
        <article class="bc-feature">
          <span class="bc-feature-mark">2</span>
          <h3>Canvas</h3>
          <p>Design custom layouts with boxes, text, symbols, images, and backgrounds.</p>
        </article>
        <article class="bc-feature">
          <span class="bc-feature-mark">3</span>
          <h3>Export</h3>
          <p>Share finished PNG, JPEG, or PDF graphics anywhere they need to go.</p>
        </article>
      </div>
    </section>

    <section class="bc-section" id="watch">
      <div class="bc-section-head">
        <div>
          <div class="bc-label">See it move</div>
          <h2>A compact tool for polished launch moments.</h2>
        </div>
        <p>A quick look at how Bento|Craft turns ideas into finished promotional graphics.</p>
      </div>
      <div class="bc-video-wrap">
        <iframe src="https://www.youtube.com/embed/4fYw1EQii9I" title="BentoCraft demo video" allowfullscreen></iframe>
      </div>
    </section>

    <section class="bc-section">
      <div class="bc-section-head">
        <div>
          <div class="bc-label">Gallery</div>
          <h2>A few ways Bento|Craft can look.</h2>
        </div>
        <p>Use it for app previews, recap graphics, launch posts, and visual changelogs.</p>
      </div>

      <div class="bc-gallery">
        <figure class="bc-shot bc-shot-large">
          <img src="/assets/images/bento/bentocraft-promo1.png" alt="BentoCraft export example" />
        </figure>
        <figure class="bc-shot bc-shot-large">
          <img src="/assets/images/bentovision/bentovision1.png" alt="BentoCraft on Apple Vision Pro" />
        </figure>
        <figure class="bc-shot bc-shot-small">
          <img src="/assets/images/bentovision/bentovision2.png" alt="BentoCraft Vision Pro screenshot" />
        </figure>
        <figure class="bc-shot bc-shot-small">
          <img src="/assets/images/bento/bento1.png" alt="BentoCraft iPad screenshot" />
        </figure>
        <figure class="bc-shot bc-shot-small">
          <img src="/assets/images/bento/bento-frames.png" alt="BentoCraft device frames" />
        </figure>
        <figure class="bc-shot bc-shot-small">
          <img src="/assets/images/bento/bento-font.png" alt="BentoCraft font controls" />
        </figure>
      </div>
    </section>

    <section class="bc-section">
      <div class="bc-detail-strip">
        <p><strong>Privacy:</strong> No personally identifiable information is collected.</p>
        <p><strong>Platform:</strong> Built for iPad and Apple Vision Pro.</p>
        <p><strong>Contact:</strong> support@raktech.app</p>
      </div>
    </section>

    <section class="bc-final">
      <div>
        <div class="bc-label">Create, share, impress, repeat</div>
        <h2>Build your next bento in minutes.</h2>
        <p>Bento|Craft is built for creators, developers, teams, and anyone who needs a clean visual way to package an idea.</p>
        <p><a class="bc-download" href="https://apple.co/45Brl06">Download Bento|Craft</a></p>
      </div>
      <img src="/assets/images/bento/bento-portrait.png" alt="BentoCraft portrait layout example" />
    </section>
  </div>
</div>
