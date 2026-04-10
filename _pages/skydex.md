---
layout: page
title: Skydex
permalink: /skydex
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

  .skydex-page {
    --bg-top: #eef7ff;
    --bg-mid: #d7ecff;
    --bg-bottom: #ffffff;
    --ink: #17324d;
    --muted: #5c7892;
    --card: rgba(255, 255, 255, 0.74);
    --line: rgba(23, 50, 77, 0.1);
    --blue: #2d75bf;
    --shadow: 0 24px 60px rgba(42, 89, 138, 0.14);
    position: relative;
    left: 50%;
    width: 100vw;
    margin-left: -50vw;
    margin-right: -50vw;
    overflow: hidden;
    background:
      radial-gradient(circle at 82% 14%, rgba(255, 194, 71, 0.34), transparent 12rem),
      radial-gradient(circle at 16% 10%, rgba(255, 255, 255, 0.85), transparent 10rem),
      linear-gradient(180deg, var(--bg-top) 0%, var(--bg-mid) 38%, var(--bg-bottom) 100%);
    color: var(--ink);
    font-family: "Avenir Next", "Trebuchet MS", "Segoe UI", sans-serif;
  }

  .skydex-shell {
    max-width: 1180px;
    margin: 0 auto;
    padding: 28px 24px 72px;
    position: relative;
    z-index: 1;
  }

  .skydex-page::before,
  .skydex-page::after {
    content: "";
    position: absolute;
    border-radius: 999px;
    pointer-events: none;
  }

  .skydex-page::before {
    top: 110px;
    right: -70px;
    width: 260px;
    height: 260px;
    background: radial-gradient(circle, rgba(115, 180, 236, 0.24), transparent 70%);
  }

  .skydex-page::after {
    bottom: 100px;
    left: -90px;
    width: 280px;
    height: 280px;
    background: radial-gradient(circle, rgba(255, 214, 107, 0.16), transparent 70%);
  }

  .hero {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(360px, 560px);
    gap: 44px;
    align-items: center;
    min-height: calc(100vh - 180px);
    padding: 26px 0 44px;
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 10px 15px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.78);
    border: 1px solid rgba(255, 255, 255, 0.85);
    box-shadow: 0 10px 24px rgba(45, 117, 191, 0.08);
    font-size: 0.82rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--blue);
  }

  .eyebrow::before {
    content: "";
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: linear-gradient(180deg, #69bcff, #2d75bf);
    box-shadow: 0 0 0 4px rgba(105, 188, 255, 0.16);
  }

  .hero-brand {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-top: 18px;
  }

  .app-icon {
    width: 88px;
    height: 88px;
    border-radius: 22px;
    overflow: hidden;
    flex: 0 0 auto;
    box-shadow:
      0 22px 38px rgba(42, 89, 138, 0.2),
      0 8px 18px rgba(255, 255, 255, 0.42);
    background: rgba(255, 255, 255, 0.8);
  }

  .app-icon img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .hero h1 {
    margin: 0 0 8px;
    font-size: clamp(3.8rem, 10vw, 7rem);
    line-height: 0.9;
    letter-spacing: -0.05em;
    font-weight: 900;
  }

  .hero .lead {
    max-width: 18ch;
    font-size: clamp(1.25rem, 2.3vw, 1.85rem);
    line-height: 1.28;
    color: #244663;
    font-weight: 600;
  }

  .hero .body {
    max-width: 54ch;
    margin-top: 18px;
    font-size: 1.04rem;
    line-height: 1.75;
    color: var(--muted);
  }

  .hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    margin-top: 28px;
  }

  .btn-sky {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 54px;
    padding: 14px 20px;
    border-radius: 16px;
    text-decoration: none;
    font-weight: 800;
    border: 1px solid var(--line);
    background: rgba(255, 255, 255, 0.9);
    color: var(--ink);
    box-shadow: 0 12px 26px rgba(45, 117, 191, 0.08);
  }

  .btn-sky.primary {
    background: linear-gradient(180deg, #2d75bf, #215b95);
    color: #fff;
    border-color: rgba(33, 91, 149, 0.88);
  }

  .btn-sky.disabled {
    opacity: 0.74;
    cursor: default;
  }

  .hero-notes {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 18px;
  }

  .hero-notes span {
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.72);
    border: 1px solid rgba(23, 50, 77, 0.08);
    color: #41627f;
    font-size: 0.92rem;
    font-weight: 700;
  }

  .hero-art {
    position: relative;
    min-height: 620px;
  }

  .hero-art::before,
  .hero-art::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
  }

  .hero-art::before {
    width: 260px;
    height: 260px;
    right: 30px;
    top: 50px;
    background: radial-gradient(circle, rgba(255, 204, 92, 0.24), transparent 68%);
  }

  .hero-art::after {
    width: 240px;
    height: 240px;
    left: 10px;
    bottom: 20px;
    background: radial-gradient(circle, rgba(95, 178, 255, 0.22), transparent 70%);
  }

  .shot {
    border-radius: 34px;
    overflow: hidden;
    box-shadow: var(--shadow);
    background: rgba(255, 255, 255, 0.68);
    border: 1px solid rgba(255, 255, 255, 0.78);
  }

  .shot img {
    display: block;
    width: 100%;
    height: auto;
  }

  .hero-device {
    position: absolute;
  }

  .hero-device.iphone {
    width: min(320px, 72%);
    right: 34px;
    top: 26px;
    z-index: 2;
    transform: rotate(6deg) translateZ(0);
  }

  .hero-device.watch {
    width: min(180px, 32%);
    left: 30px;
    bottom: 26px;
    z-index: 3;
    transform: rotate(-12deg) translateZ(0);
  }

  .hero-art .shot,
  .hero-art .watch-shot {
    background: transparent;
    border: 0;
    box-shadow:
      0 30px 70px rgba(42, 89, 138, 0.18),
      0 10px 24px rgba(255, 255, 255, 0.35);
    overflow: hidden;
  }

  .hero-art .shot::before,
  .hero-art .watch-shot::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.24), transparent 35%);
    pointer-events: none;
  }

  .hero-art .shot,
  .hero-art .watch-shot {
    position: relative;
  }

  .hero-art .watch-shot {
    border-radius: 44px;
  }

  .watch-shot img {
    display: block;
    width: 100%;
    height: auto;
    border-radius: 34px;
  }

  .floating-card {
    position: absolute;
    right: 6px;
    top: 42px;
    padding: 14px 16px;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.88);
    border: 1px solid rgba(23, 50, 77, 0.08);
    box-shadow: 0 18px 36px rgba(42, 89, 138, 0.12);
    color: #325977;
    font-size: 0.94rem;
    font-weight: 800;
    max-width: 220px;
    z-index: 4;
  }

  .section-card {
    margin-top: 28px;
    padding: 30px;
    border-radius: 30px;
    background: var(--card);
    border: 1px solid rgba(255, 255, 255, 0.62);
    box-shadow: var(--shadow);
    backdrop-filter: blur(10px);
  }

  .section-head {
    max-width: 52ch;
  }

  .section-head .label {
    display: inline-block;
    margin-bottom: 10px;
    font-size: 0.8rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: var(--blue);
  }

  .section-head h2 {
    margin: 0;
    font-size: clamp(1.9rem, 4vw, 3rem);
    line-height: 1.06;
    letter-spacing: -0.03em;
  }

  .section-head p {
    margin-top: 12px;
    color: var(--muted);
    line-height: 1.7;
  }

  .feature-row {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    margin-top: 24px;
  }

  .feature {
    padding: 22px;
    border-radius: 24px;
    background: rgba(255, 255, 255, 0.7);
    border: 1px solid rgba(23, 50, 77, 0.08);
  }

  .feature strong {
    display: block;
    font-size: 1.02rem;
    color: #1a3955;
  }

  .feature p {
    margin-top: 8px;
    color: var(--muted);
    line-height: 1.6;
  }

  .gallery {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 18px;
    margin-top: 24px;
  }

  .gallery .shot {
    border-radius: 28px;
  }

  .watch-grid {
    display: grid;
    grid-template-columns: 320px minmax(0, 1fr);
    gap: 28px;
    align-items: center;
    margin-top: 18px;
  }

  .watch-copy p {
    margin-top: 14px;
    color: var(--muted);
    line-height: 1.7;
  }

  .watch-copy .mini-notes {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 16px;
  }

  .watch-copy .mini-notes span {
    padding: 8px 12px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.72);
    border: 1px solid rgba(23, 50, 77, 0.08);
    color: #41627f;
    font-size: 0.9rem;
    font-weight: 700;
  }

  .legal {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 18px;
  }

  .legal a {
    display: inline-flex;
    align-items: center;
    min-height: 48px;
    padding: 12px 16px;
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.76);
    border: 1px solid rgba(23, 50, 77, 0.08);
    color: #245f9d;
    font-weight: 800;
    text-decoration: none;
  }

  .closing-cta {
    margin-top: 22px;
    padding-top: 22px;
    border-top: 1px solid rgba(23, 50, 77, 0.08);
  }

  .closing-cta p {
    margin: 0 0 14px;
    color: var(--muted);
    font-size: 0.98rem;
  }

  .footer-note {
    margin-top: 18px;
    color: #6d879d;
    font-size: 0.92rem;
  }

  @media (max-width: 1080px) {
    .hero,
    .feature-row,
    .gallery,
    .watch-grid {
      grid-template-columns: 1fr;
    }

    .hero {
      min-height: auto;
    }

    .hero-art {
      min-height: 700px;
      max-width: 680px;
      max-width: 560px;
      margin: 0 auto;
      width: 100%;
    }

    .hero-device.iphone {
      right: 26px;
      width: min(300px, 68%);
    }

    .hero-device.watch {
      left: 18px;
      width: min(170px, 30%);
    }

    .floating-card {
      right: 8px;
    }
  }

  @media (max-width: 720px) {
    .skydex-shell {
      padding: 20px 16px 56px;
    }

    .hero {
      gap: 28px;
      padding-top: 10px;
    }

    .hero-brand {
      gap: 14px;
    }

    .app-icon {
      width: 72px;
      height: 72px;
      border-radius: 18px;
    }

    .section-card {
      padding: 22px;
      border-radius: 24px;
    }

    .hero-art {
      min-height: 500px;
    }

    .hero-device.iphone {
      width: 66%;
      right: 16px;
      top: 24px;
      transform: rotate(5deg);
    }

    .hero-device.watch {
      width: 28%;
      left: 6px;
      bottom: 18px;
      transform: rotate(-10deg);
    }

    .floating-card {
      top: 0;
      right: 0;
      max-width: 180px;
      padding: 12px 14px;
      font-size: 0.86rem;
    }
  }
</style>

<div class="skydex-page">
  <div class="skydex-shell">
    <section class="hero" aria-labelledby="skydex-title">
      <div>
        <div class="eyebrow">Apple Platform Exclusive</div>
        <div class="hero-brand">
          <div class="app-icon" aria-hidden="true">
            <img src="/assets/images/skydex/app-icon.png" alt="Skydex app icon" />
          </div>
          <h1 id="skydex-title">Skydex</h1>
        </div>
        <p class="lead">Sunny with a chance of Pokémon.</p>
        <p class="body">
          Skydex makes your daily forecast an adventure. Powered by real-world weather data, Skydex lets users discover Pokémon based on current conditions.
        </p>

        <div class="hero-actions">
          <a href="https://apps.apple.com/us/app/skydex-pixel-weather-dex/id6761288653?itsct=apps_box_badge&amp;itscg=30200" aria-label="Download Skydex on the App Store" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 83px;">
            <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="Download on the App Store" style="border-radius: 13px; width: 150px; height: 83px;" />
          </a>
        </div>

        <div class="hero-notes" aria-label="Skydex highlights">
          <span>151 Gen 1 Pokemon</span>
          <span>Real weather encounters</span>
          <span>Apple Watch support</span>
          <span>Full screen pixel animations</span>
        </div>
      </div>

      <div class="hero-art" aria-hidden="true">
        <div class="hero-device iphone">
          <div class="shot">
            <img src="/assets/images/skydex/staryu-framed.png" alt="Skydex sunny Los Angeles encounter with Staryu" />
          </div>
        </div>
        <div class="hero-device watch">
          <div class="watch-shot">
            <img src="/assets/images/skydex/apple-watch.png" alt="Skydex on Apple Watch showing drizzle conditions and Magikarp encounter" />
          </div>
        </div>
        <div class="floating-card">Universal iOS App.</div>
      </div>
    </section>

    <section class="section-card" aria-labelledby="gallery-title">
      <div class="section-head">
        <span class="label">Inside the app</span>
        <h2 id="gallery-title">Accurate weather. Fun discoveries.</h2>
        <p>
          Rediscover Kanto's iconic wild Pokémon and track them in your very own dex. Who knows what mysitcal and rare Pokémon you might encounter!
        </p>
      </div>

      <div class="gallery">
        <div class="shot">
          <img src="/assets/images/skydex/lapras-framed.png" alt="Skydex blizzard weather encounter featuring Lapras" />
        </div>
        <div class="shot">
          <img src="/assets/images/skydex/kanto-dex-friends-framed.png" alt="Skydex Kanto Dex progress screen with seen Pokemon and completion tracking" />
        </div>
        <div class="shot">
          <img src="/assets/images/skydex/forecast-framed.png" alt="Skydex hourly forecast and weather conditions screen" />
        </div>
      </div>
    </section>

    <section class="section-card" aria-labelledby="friends-title">
      <div class="section-head">
        <span class="label">Friends</span>
        <h2 id="friends-title">Connect with friends.</h2>
        <p>
          Compare discoveries, track sightings around the map, and see what your friends are finding as the weather shifts.
        </p>
      </div>

      <div class="gallery">
        <div class="shot">
          <img src="/assets/images/skydex/sightings-globe-framed.png" alt="Skydex sightings globe showing mapped Pokemon discoveries across locations" />
        </div>
        <div class="shot">
          <img src="/assets/images/skydex/friends-framed.png" alt="Skydex friends list showing friend codes, discovered Pokemon, and sightings totals" />
        </div>
        <div class="shot">
          <img src="/assets/images/skydex/gastly-framed.png" alt="Skydex Gastly detail view showing discovery history and encounter conditions" />
        </div>
      </div>
    </section>

    <section class="section-card" aria-labelledby="watch-title">
      <div class="section-head">
        <span class="label">Apple Watch</span>
        <h2 id="watch-title">Built for your wrist too.</h2>
      </div>

      <div class="watch-grid">
        <div class="shot">
          <img src="/assets/images/skydex/apple-watch-section.png" alt="Skydex on Apple Watch showing watch face support with Rhyhorn weather details" />
        </div>
        <div class="watch-copy">
          <p>
            Skydex includes an Apple Watch app with shared data, so the current weather and active encounter stay close even when your phone is not in your hand.
          </p>
          <div class="mini-notes">
            <span>Syncs with iPhone</span>
            <span>Quick forecast checks</span>
            <span>Complications + Widgets</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section-card" aria-labelledby="features-title">
      <div class="section-head">
        <span class="label">Go Pro</span>
        <h2 id="features-title">Skydex Pro.</h2>
      </div>

      <div class="feature-row">
        <div class="feature">
          <strong>Remove ads</strong>
          <p>Skydex is an ad-supported free download. But with a small purchase, you can say goodbye to ads forever.</p>
        </div>
        <div class="feature">
          <strong>Alternate icons</strong>
          <p>Skydex Pro unlocks beautiful alternate icons, allowing you to color match your home screen just the way you like.</p>
        </div>
        <div class="feature">
          <strong>Unlimited locations</strong>
          <p>Free users can save up to 6 locations for quick viewing. Skydex Pro unlocks unlimited locations.</p>
        </div>
      </div>
    </section>

    <section class="section-card" aria-labelledby="legal-title">
      <div class="section-head">
        <span class="label">Links</span>
        <h2 id="legal-title">Privacy and terms.</h2>
                <p>
          Skydex does not track you or your app usage. Data sync is backed by iCloud for maximum privacy and security. 
        </p>
      </div>

      <div class="legal">
        <a href="https://thatvirtualboy.com/privacy.html">Privacy Policy</a>
        <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Apple Standard EULA</a>
      </div>

      <div class="closing-cta">
        <p>Ready to see what the weather spawns in your area?</p>
        <div class="hero-actions">
          <a href="https://apps.apple.com/us/app/skydex-pixel-weather-dex/id6761288653?itsct=apps_box_badge&amp;itscg=30200" aria-label="Download Skydex on the App Store" style="display: inline-block; overflow: hidden; border-radius: 13px; width: 250px; height: 83px;">
            <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83" alt="Download on the App Store" style="border-radius: 13px; width: 150px; height: 83px;" />
          </a>
        </div>
      </div>

      <p class="footer-note">Skydex turns your daily forecast into an adventure.</p>
    </section>
  </div>
</div>
