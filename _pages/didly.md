---
layout: page
title: Didly
permalink: /didly
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

  .didly-page {
    --didly-ink: #121212;
    --didly-soft-ink: #4c453d;
    --didly-muted: #766d63;
    --didly-bg: #f7efe4;
    --didly-cream: #fffaf3;
    --didly-gold: #ffd57a;
    --didly-gold-deep: #efbd50;
    --didly-peach: #f4c8bf;
    --didly-sky: #cdddf4;
    --didly-mint: #d9e5c7;
    --didly-line: rgba(18, 18, 18, 0.08);
    --didly-shadow: 0 30px 70px rgba(49, 33, 15, 0.12);
    position: relative;
    left: 50%;
    width: 100vw;
    margin-left: -50vw;
    margin-right: -50vw;
    overflow: hidden;
    color: var(--didly-ink);
    font-family: "Avenir Next", "Trebuchet MS", "Segoe UI", sans-serif;
    background:
      radial-gradient(circle at 10% 10%, rgba(255, 213, 122, 0.26), transparent 18rem),
      radial-gradient(circle at 85% 12%, rgba(244, 200, 191, 0.38), transparent 20rem),
      linear-gradient(180deg, #fff7ea 0%, #f8efe3 36%, #f7f0e8 100%);
  }

  .didly-page::before,
  .didly-page::after {
    content: "";
    position: absolute;
    border-radius: 999px;
    pointer-events: none;
  }

  .didly-page::before {
    top: 140px;
    right: -80px;
    width: 300px;
    height: 300px;
    background: radial-gradient(circle, rgba(255, 213, 122, 0.3), transparent 70%);
  }

  .didly-page::after {
    bottom: 140px;
    left: -100px;
    width: 320px;
    height: 320px;
    background: radial-gradient(circle, rgba(205, 221, 244, 0.24), transparent 70%);
  }

  .didly-shell {
    position: relative;
    z-index: 1;
    max-width: 1180px;
    margin: 0 auto;
    padding: 26px 24px 72px;
  }

  .didly-hero {
    display: grid;
    grid-template-columns: minmax(0, 0.88fr) minmax(420px, 1fr);
    gap: 42px;
    align-items: center;
    min-height: calc(100vh - 180px);
    padding: 26px 0 40px;
  }

  .didly-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 16px;
    border-radius: 999px;
    background: rgba(255, 250, 243, 0.86);
    border: 1px solid rgba(18, 18, 18, 0.08);
    box-shadow: 0 12px 28px rgba(98, 67, 27, 0.08);
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #9c6f18;
  }

  .didly-eyebrow::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: linear-gradient(180deg, var(--didly-gold), #e5a92f);
    box-shadow: 0 0 0 4px rgba(255, 213, 122, 0.22);
  }

  .didly-brand {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-top: 18px;
  }

  .didly-icon {
    width: 90px;
    height: 90px;
    border-radius: 24px;
    overflow: hidden;
    flex: 0 0 auto;
    background: #000;
    box-shadow:
      0 24px 44px rgba(0, 0, 0, 0.18),
      0 10px 20px rgba(255, 213, 122, 0.22);
  }

  .didly-icon img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .didly-hero h1,
  .didly-panel h2,
  .didly-stat strong {
    font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
    text-transform: uppercase;
    letter-spacing: -0.04em;
  }

  .didly-hero h1 {
    margin: 0;
    font-size: clamp(4.4rem, 11vw, 8rem);
    line-height: 0.84;
    max-width: 7ch;
  }

  .didly-lead {
    margin-top: 18px;
    max-width: 16ch;
    font-size: clamp(1.28rem, 2.6vw, 2rem);
    line-height: 1.02;
    font-weight: 900;
    text-transform: uppercase;
    color: var(--didly-soft-ink);
  }

  .didly-body {
    margin-top: 22px;
    max-width: 56ch;
    font-size: 1.04rem;
    line-height: 1.8;
    color: var(--didly-muted);
  }

  .didly-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 28px;
  }

  .didly-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 54px;
    padding: 14px 20px;
    border-radius: 16px;
    border: 1px solid var(--didly-line);
    text-decoration: none;
    font-weight: 800;
    color: var(--didly-ink);
    background: rgba(255, 250, 243, 0.88);
    box-shadow: 0 14px 26px rgba(98, 67, 27, 0.08);
  }

  .didly-btn.primary {
    background: linear-gradient(180deg, #1d1d1d, #000000);
    color: #fff5de;
    border-color: rgba(0, 0, 0, 0.9);
  }

  .didly-notes {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 18px;
  }

  .didly-notes span {
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255, 250, 243, 0.82);
    border: 1px solid rgba(18, 18, 18, 0.08);
    color: #6f5a45;
    font-size: 0.92rem;
    font-weight: 700;
  }

  .didly-art {
    position: relative;
  }

  .didly-showcase {
    position: relative;
    border-radius: 36px;
    overflow: hidden;
    background: linear-gradient(180deg, rgba(255, 248, 235, 0.94), rgba(248, 233, 214, 0.92));
    border: 1px solid rgba(18, 18, 18, 0.08);
    box-shadow: var(--didly-shadow);
    padding: 20px;
  }

  .didly-showcase img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 24px;
  }

  .didly-float {
    position: absolute;
    padding: 14px 16px;
    border-radius: 20px;
    background: rgba(255, 250, 243, 0.94);
    border: 1px solid rgba(18, 18, 18, 0.08);
    box-shadow: 0 18px 36px rgba(73, 48, 17, 0.12);
    max-width: 220px;
  }

  .didly-float strong {
    display: block;
    font-size: 0.95rem;
    color: var(--didly-ink);
  }

  .didly-float span {
    display: block;
    margin-top: 4px;
    font-size: 0.88rem;
    line-height: 1.5;
    color: var(--didly-muted);
  }

  .didly-float.top {
    top: -14px;
    right: 22px;
    transform: translateY(-95px) rotate(3deg);
  }

  .didly-float.bottom {
    left: -12px;
    bottom: 22px;
    transform: translateY(113px) rotate(-4deg);
  }

  .didly-panel {
    margin-top: 28px;
    padding: 30px;
    border-radius: 32px;
    background: rgba(255, 250, 243, 0.74);
    border: 1px solid rgba(255, 255, 255, 0.55);
    box-shadow: var(--didly-shadow);
    backdrop-filter: blur(8px);
  }

  .didly-panel-head {
    max-width: 54ch;
  }

  .didly-label {
    display: inline-block;
    margin-bottom: 10px;
    font-size: 0.79rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #a87722;
  }

  .didly-panel h2 {
    margin: 0;
    font-size: clamp(2rem, 4vw, 3.4rem);
    line-height: 0.94;
  }

  .didly-panel-head p {
    margin-top: 14px;
    color: var(--didly-muted);
    line-height: 1.75;
  }

  .didly-stats {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    margin-top: 24px;
  }

  .didly-stat {
    padding: 24px;
    border-radius: 24px;
    border: 1px solid var(--didly-line);
    box-shadow: 0 16px 30px rgba(73, 48, 17, 0.08);
  }

  .didly-stat.gold {
    background: linear-gradient(180deg, #ffe4a4, #ffd57a);
  }

  .didly-stat.sky {
    background: linear-gradient(180deg, #dfebfb, #cdddf4);
  }

  .didly-stat.peach {
    background: linear-gradient(180deg, #f7ddd5, #f4c8bf);
  }

  .didly-stat strong {
    display: block;
    font-size: 2.6rem;
    line-height: 0.9;
  }

  .didly-stat p {
    margin-top: 10px;
    color: #4f4234;
    line-height: 1.6;
    font-weight: 600;
  }

  .didly-gallery {
    display: grid;
    grid-template-columns: 1.2fr 0.9fr;
    gap: 18px;
    margin-top: 24px;
  }

  .didly-shot {
    overflow: hidden;
    border-radius: 28px;
    border: 1px solid rgba(18, 18, 18, 0.08);
    box-shadow: 0 20px 36px rgba(73, 48, 17, 0.08);
    background: rgba(255, 255, 255, 0.8);
  }

  .didly-shot img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .didly-shot.stack {
    display: grid;
    gap: 18px;
    background: transparent;
    border: 0;
    box-shadow: none;
  }

  .didly-shot.stack .didly-shot {
    min-height: 0;
  }

  .didly-platforms {
    display: grid;
    grid-template-columns: minmax(0, 0.95fr) minmax(0, 1.05fr);
    gap: 22px;
    margin-top: 22px;
    align-items: center;
  }

  .didly-copy p {
    color: var(--didly-muted);
    line-height: 1.75;
  }

  .didly-checks {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 18px;
  }

  .didly-checks span {
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255, 250, 243, 0.9);
    border: 1px solid rgba(18, 18, 18, 0.08);
    font-size: 0.9rem;
    font-weight: 700;
    color: #654d37;
  }

  .didly-legal {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 18px;
  }

  .didly-legal a {
    display: inline-flex;
    align-items: center;
    min-height: 48px;
    padding: 12px 16px;
    border-radius: 14px;
    background: rgba(255, 250, 243, 0.86);
    border: 1px solid rgba(18, 18, 18, 0.08);
    color: #8d6217;
    font-weight: 800;
    text-decoration: none;
  }

  .didly-footer {
    margin-top: 22px;
    padding-top: 22px;
    border-top: 1px solid rgba(18, 18, 18, 0.08);
  }

  .didly-footer p {
    color: var(--didly-muted);
    line-height: 1.7;
  }

  .didly-video {
    position: relative;
    margin-top: 22px;
    padding-top: 56.25%;
    border-radius: 28px;
    overflow: hidden;
    border: 1px solid rgba(18, 18, 18, 0.08);
    box-shadow: 0 24px 44px rgba(73, 48, 17, 0.1);
  }

  .didly-video iframe {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

  .didly-update {
    margin-top: 18px;
    color: #8a7a68;
    font-size: 0.92rem;
  }

  @media (max-width: 1080px) {
    .didly-hero,
    .didly-gallery,
    .didly-platforms,
    .didly-stats {
      grid-template-columns: 1fr;
    }

    .didly-hero {
      min-height: auto;
    }

    .didly-art {
      max-width: 760px;
      margin: 0 auto;
      width: 100%;
    }

    .didly-float.top {
      right: 18px;
    }

    .didly-float.bottom {
      left: 12px;
    }
  }

  @media (max-width: 720px) {
    .didly-shell {
      padding: 20px 16px 56px;
    }

    .didly-hero {
      gap: 28px;
      padding-top: 12px;
    }

    .didly-brand {
      gap: 14px;
    }

    .didly-icon {
      width: 72px;
      height: 72px;
      border-radius: 18px;
    }

    .didly-hero h1 {
      max-width: none;
      font-size: clamp(3.7rem, 20vw, 5.4rem);
    }

    .didly-panel {
      padding: 22px;
      border-radius: 24px;
    }

    .didly-showcase {
      padding: 14px;
      border-radius: 28px;
    }

    .didly-showcase img {
      border-radius: 18px;
    }

    .didly-float {
      position: static;
      transform: none;
      max-width: none;
      margin-top: 14px;
    }
  }
</style>

<div class="didly-page">
  <div class="didly-shell">
    <section class="didly-hero" aria-labelledby="didly-title">
      <div>
        <div class="didly-eyebrow">Build Your Done List</div>
        <div class="didly-brand">
          <div class="didly-icon" aria-hidden="true">
            <img src="/assets/apps/didly/appicon.png" alt="Didly app icon" />
          </div>
          <h1 id="didly-title">Didly</h1>
        </div>
        <p class="didly-lead">You did more than you think.</p>
        <p class="didly-body">
          Didly helps you track daily accomplishments, reflect on what actually got done, and build momentum from progress you would have otherwise forgotten. It is a done list, not another to-do list.
        </p>

        <div class="didly-actions">
          <a class="didly-btn primary" href="https://apps.apple.com/us/app/didly-hack-your-productivity/id6503087781">Download on the App Store</a>
          <a class="didly-btn" href="/assets/apps/didly/PressKit.zip" download rel="noopener">Download Press Kit</a>
        </div>

        <div class="didly-notes" aria-label="Didly highlights">
          <span>Mac + iPhone</span>
          <span>Daily accomplishment tracking</span>
          <span>Motivating insights</span>
          <span>Privacy-first sync</span>
        </div>
      </div>

      <div class="didly-art" aria-hidden="true">
        <div class="didly-showcase">
          <img src="/assets/apps/didly/iphone1.jpeg" alt="Didly App Store screenshot collage" />
        </div>
        <div class="didly-float top">
          <strong>Track daily accomplishments</strong>
          <span>Capture the work, habits, and small wins that usually disappear by the end of the day.</span>
        </div>
        <div class="didly-float bottom">
          <strong>Insights into your productivity</strong>
          <span>See your momentum, focus, and patterns over time without turning life into a spreadsheet.</span>
        </div>
      </div>
    </section>

    <section class="didly-panel" aria-labelledby="didly-value-title">
      <div class="didly-panel-head">
        <span class="didly-label">Why it works</span>
        <h2 id="didly-value-title">Hack your motivation without another backlog.</h2>
        <p>
          Didly shifts the framing from unfinished tasks to visible progress. Instead of staring at an endless list of things left undone, you build a record of what you completed and use that to keep moving.
        </p>
      </div>

      <div class="didly-stats">
        <div class="didly-stat gold">
          <strong>Track</strong>
          <p>Quickly log work, habits, errands, workouts, chores, or personal wins as they happen.</p>
        </div>
        <div class="didly-stat sky">
          <strong>Review</strong>
          <p>Look back on your day and realize it was fuller, more focused, and more productive than it felt.</p>
        </div>
        <div class="didly-stat peach">
          <strong>Build</strong>
          <p>Turn small completed actions into momentum that compounds over days, weeks, and months.</p>
        </div>
      </div>
    </section>

    <section class="didly-panel" aria-labelledby="didly-gallery-title">
      <div class="didly-panel-head">
        <span class="didly-label">Inside the app</span>
        <h2 id="didly-gallery-title">From captured moments to motivating data.</h2>
        <p>
          Didly combines quick entry with lightweight analytics so the app stays encouraging instead of overwhelming.
        </p>
      </div>

      <div class="didly-gallery">
        <div class="didly-shot">
          <img src="/assets/apps/didly/ios1.png" alt="Didly iPhone screen showing logged accomplishments and entry workflow" />
        </div>
        <div class="didly-shot stack">
          <div class="didly-shot">
            <img src="/assets/apps/didly/macos1.png" alt="Didly Mac screen showing accomplishment history" />
          </div>
          <div class="didly-shot">
            <img src="/assets/apps/didly/macos2.png" alt="Didly Mac screen showing charts and productivity insights" />
          </div>
        </div>
      </div>
    </section>

    <section class="didly-panel" aria-labelledby="didly-platform-title">
      <div class="didly-panel-head">
        <span class="didly-label">Apple platforms</span>
        <h2 id="didly-platform-title">Built for Mac and iPhone.</h2>
      </div>

      <div class="didly-platforms">
        <div class="didly-shot">
          <img src="/assets/apps/didly/didly-hero.png" alt="Didly promotional art showing the app across Apple devices" />
        </div>
        <div class="didly-copy">
          <p>
            Whether you want to capture wins on your phone throughout the day or reflect later from your Mac, Didly keeps the experience simple and focused. The point is not to add admin to your life. The point is to notice your progress.
          </p>
          <div class="didly-checks">
            <span>Fast entry flow</span>
            <span>History and highlights</span>
            <span>Momentum tracking</span>
            <span>Designed for personal reflection</span>
          </div>
        </div>
      </div>
    </section>

    <section class="didly-panel" aria-labelledby="didly-privacy-title">
      <div class="didly-panel-head">
        <span class="didly-label">Privacy</span>
        <h2 id="didly-privacy-title">Privacy first. Always.</h2>
        <p>
          No ads. No logins. No surprises. Personal data is stored on your device and synced through your iCloud account. No personal information is sent to the developer or third-party servers. Didly may collect anonymized general data, such as iOS or macOS versions, to help improve the app.
        </p>
      </div>

      <div class="didly-legal">
        <a href="https://telemetrydeck.com">TelemetryDeck</a>
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Apple Standard EULA</a>
      </div>

      <div class="didly-footer">
        <p>Want a quick look at the app in motion? Watch the short walkthrough below.</p>
        <div class="didly-video" aria-label="Intro to Didly video">
          <iframe src="https://www.youtube.com/embed/rM3u5qAuv9s" title="Intro to Didly" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>

        <div class="didly-actions">
          <a class="didly-btn primary" href="https://apps.apple.com/us/app/didly-hack-your-productivity/id6503087781">Get Didly</a>
          <a class="didly-btn" href="/assets/apps/didly/PressKit.zip" download rel="noopener">Press Kit</a>
        </div>
      </div>

      <p class="didly-update">Updated August 28, 2025</p>
    </section>
  </div>
</div>
