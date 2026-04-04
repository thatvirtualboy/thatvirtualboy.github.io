---
layout: page
title: Hello There
permalink: /hellothere
comments: false
---

<style>
  .hellothere-page {
    --ht-ink: #1f2733;
    --ht-muted: #516073;
    --ht-bg: #f7fbff;
    --ht-card: #ffffff;
    --ht-border: #d5e5f7;
    --ht-primary: #2f80ed;
    --ht-primary-dark: #1f66bf;
    --ht-soft: #edf5ff;
    --ht-lilac: #f4efff;
  }

  .hellothere-page .ht-hero {
    background: linear-gradient(160deg, #f4fbff 0%, #e8f4ff 45%, #ddefff 100%);
    border: 1px solid var(--ht-border);
    border-radius: 24px;
    box-shadow: 0 16px 30px rgba(44, 80, 120, 0.08);
    padding: 1.3rem;
    margin-bottom: 1.25rem;
  }

  .hellothere-page .ht-hero-grid {
    display: grid;
    grid-template-columns: 1.05fr 1fr;
    gap: 1.25rem;
    align-items: center;
  }

  .hellothere-page .ht-pill {
    display: inline-block;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #21518f;
    background: #fff;
    border: 1px solid #c9dcf5;
    border-radius: 999px;
    padding: 0.3rem 0.65rem;
    margin-bottom: 0.7rem;
  }

  .hellothere-page .ht-hero h4 {
    margin-bottom: 0.55rem;
  }

  .hellothere-page .ht-hero p {
    margin-bottom: 0.9rem;
    color: var(--ht-muted);
  }

  .hellothere-page .ht-hero-image {
    width: 100%;
    border-radius: 16px;
    border: 1px solid #bfd7f5;
    box-shadow: 0 14px 30px rgba(26, 58, 97, 0.15);
  }

  .hellothere-page .ht-download {
    display: inline-block;
    background: var(--ht-primary);
    color: #fff;
    text-decoration: none;
    font-weight: 700;
    padding: 0.64rem 1rem;
    border-radius: 999px;
  }

  .hellothere-page .ht-download:hover {
    background: var(--ht-primary-dark);
    color: #fff;
    text-decoration: none;
  }

  .hellothere-page .ht-grid {
    display: grid;
    gap: 1rem;
  }

  .hellothere-page .ht-grid-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .hellothere-page .ht-grid-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .hellothere-page .ht-card {
    background: var(--ht-card);
    border: 1px solid var(--ht-border);
    border-radius: 16px;
    box-shadow: 0 10px 24px rgba(42, 64, 94, 0.06);
    padding: 1rem;
  }

  .hellothere-page .ht-about {
    background: linear-gradient(170deg, #fff 0%, #f6fbff 100%);
  }

  .hellothere-page .ht-highlights ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
  }

  .hellothere-page .ht-highlights li {
    margin-bottom: 0.45rem;
  }

  .hellothere-page .ht-highlights li::before {
    content: "• ";
    color: #2b75d8;
    font-weight: 700;
  }

  .hellothere-page .ht-banner {
    width: 100%;
    border-radius: 14px;
    border: 1px solid var(--ht-border);
    box-shadow: 0 12px 26px rgba(28, 55, 96, 0.12);
  }

  .hellothere-page .ht-feature h5 {
    margin-bottom: 0.45rem;
  }

  .hellothere-page .ht-feature ul {
    list-style: none;
    padding-left: 0;
    margin-bottom: 0;
  }

  .hellothere-page .ht-feature li {
    margin-bottom: 0.35rem;
    color: var(--ht-muted);
  }

  .hellothere-page .ht-feature li::before {
    content: "• ";
    color: #326ec1;
    font-weight: 700;
  }

  .hellothere-page .ht-media blockquote {
    margin: 0;
    background: #fff;
    border-left: 4px solid #b2cff4;
  }

  .hellothere-page .ht-media a {
    word-break: break-word;
  }

  .hellothere-page .ht-table-wrap {
    border: 1px solid var(--ht-border);
    border-radius: 16px;
    background: linear-gradient(180deg, #f5faff 0%, #ffffff 100%);
    padding: 0.8rem;
  }

  .hellothere-page .ht-plan {
    display: grid;
    gap: 0.45rem;
  }

  .hellothere-page .ht-plan-row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    gap: 0.55rem;
    align-items: stretch;
  }

  .hellothere-page .ht-plan-cell {
    background: #fff;
    border: 1px solid #d7e5f8;
    border-radius: 12px;
    padding: 0.68rem 0.75rem;
    font-size: 0.93rem;
    color: var(--ht-ink);
  }

  .hellothere-page .ht-plan-head .ht-plan-cell {
    font-weight: 700;
    background: #eef5ff;
    border-color: #c8daf4;
  }

  .hellothere-page .ht-plan-head .ht-plan-cell:nth-child(2) {
    text-align: center;
  }

  .hellothere-page .ht-plan-head .ht-plan-cell:nth-child(3) {
    text-align: center;
    background: #e5f0ff;
    border-color: #b8cff0;
  }

  .hellothere-page .ht-plan-feature {
    font-weight: 600;
  }

  .hellothere-page .ht-plan-value {
    text-align: center;
    font-weight: 600;
  }

  .hellothere-page .ht-plan-value-plus {
    background: #f1f7ff;
  }

  .hellothere-page .ht-mark {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 1.65rem;
    height: 1.65rem;
    border-radius: 999px;
    margin-right: 0.35rem;
    font-size: 0.88rem;
    line-height: 1;
    vertical-align: middle;
  }

  .hellothere-page .ht-mark-yes {
    background: #e4f8ec;
    color: #207245;
    border: 1px solid #b5e6c9;
  }

  .hellothere-page .ht-mark-no {
    background: #f5f6f8;
    color: #7a8391;
    border: 1px solid #d8dee8;
  }

  .hellothere-page .ht-note {
    display: block;
    margin-top: 0.2rem;
    font-size: 0.8rem;
    color: var(--ht-muted);
  }

  .hellothere-page .ht-screens {
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 0.75rem;
  }

  .hellothere-page .ht-screens img {
    width: 100%;
    border-radius: 12px;
    border: 1px solid var(--ht-border);
    box-shadow: 0 8px 18px rgba(27, 51, 82, 0.11);
  }

  .hellothere-page .ht-privacy {
    background: var(--ht-soft);
  }

  .hellothere-page .ht-details {
    background: var(--ht-lilac);
  }

  @media (max-width: 991px) {
    .hellothere-page .ht-hero-grid {
      grid-template-columns: 1fr;
    }

    .hellothere-page .ht-grid-3 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .hellothere-page .ht-screens {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (max-width: 700px) {
    .hellothere-page .ht-grid-2,
    .hellothere-page .ht-grid-3 {
      grid-template-columns: 1fr;
    }

    .hellothere-page .ht-screens {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .hellothere-page .ht-plan-row {
      grid-template-columns: 1.4fr 1fr 1fr;
    }

    .hellothere-page .ht-plan-cell {
      padding: 0.6rem 0.55rem;
      font-size: 0.83rem;
    }
  }
</style>

<div class="hellothere-page">
  <section class="ht-hero">
    <div class="ht-hero-grid">
      <div>
        <span class="ht-pill">iPhone & iPad</span>
        <h4>About</h4>
        <p><strong>A beautiful greeting card organizer for iPhone and iPad</strong></p>
        <p>Never feel bad for tossing out another greeting card. Catalog, organize, and enjoy your cards from anywhere.</p>
        <p><a class="ht-download" href="https://apple.co/3TWTeey">Download for free</a></p>
      </div>
      <div>
        <a href="https://apple.co/3TWTeey">
          <img class="ht-hero-image" src="/assets/images/hellothere/hello-promo1.jpeg" alt="logo" />
        </a>
      </div>
    </div>
  </section>

  <section class="ht-grid ht-grid-2">
    <article class="ht-card ht-about">
      <h5>Highlights</h5>
      <div class="ht-highlights">
        <ul>
          <li>Scan your physical cards in a snap and don't look back (with auto capture and auto crop)</li>
          <li>Hello There Post - send physical or digital cards to friends and family</li>
          <li>iCloud - sync your data with other devices and backup to Apple's secure cloud</li>
          <li>Built with your privacy in mind</li>
        </ul>
      </div>
      <p style="margin-top:0.75rem;">Hello There is the #1 app to track your cards from birthdays, holidays, or other special occasions.</p>
    </article>
    <article class="ht-card">
      <img class="ht-banner" src="/assets/images/hellothere/hello-promo2.png" alt="" />
    </article>
  </section>

  <h4 style="margin-top:1.75rem;">Features</h4>
  <section class="ht-grid ht-grid-3">
    <article class="ht-card ht-feature">
      <h5>VIRTUALIZE YOUR CARDS</h5>
      <ul>
        <li>Easily add cards with your camera using auto capture and auto crop</li>
        <li>Captures can be manually cropped to ensure the perfect fit</li>
        <li>Never stress tossing a greeting card again</li>
      </ul>
    </article>
    <article class="ht-card ht-feature">
      <h5>POWERFUL ORGANIZATION</h5>
      <ul>
        <li>Use stacks to classify cards by occasion</li>
        <li>Mark your favorites for quick access</li>
        <li>Assign hashtags to categorize by theme or topic</li>
        <li>Filter by year</li>
      </ul>
    </article>
    <article class="ht-card ht-feature">
      <h5>CAPTURE EVERYTHING</h5>
      <ul>
        <li>Record cards with music or sounds and have it playback when you open the card</li>
        <li>Assign senders to enable more powerful search and populate card stats</li>
        <li>Add additional notes or thoughts to your cards</li>
      </ul>
    </article>
    <article class="ht-card ht-feature">
      <h5>HELLO THERE POST</h5>
      <ul>
        <li>Share lightweight and delightful ecards in a flash</li>
        <li>Multiple holidays and occasions available</li>
        <li>Paper Post is a white-glove service offering hand-written letters on premium cards</li>
      </ul>
    </article>
    <article class="ht-card ht-feature">
      <h5>E-POST STUDIO</h5>
      <ul>
        <li>Quickly design and share ecards, or have Hello Intelligence do it for you</li>
        <li>50+ card backgrounds to choose from</li>
        <li>Generate images or text when you need a little AI assistance</li>
      </ul>
    </article>
    <article class="ht-card ht-feature">
      <h5>STATS</h5>
      <ul>
        <li>Track your card stats with powerful insights</li>
        <li>View your all-time stats for cards received, ecards sent, and more*</li>
        <li>View card types received by year</li>
      </ul>
    </article>
  </section>

  <h4 style="margin-top:1.8rem;">In the media</h4>
  <section class="ht-grid ht-media">
    <blockquote class="ht-card">"A neat solution to saving special greeting cards without keeping the physical clutter." - <strong>Michael Potuck</strong> // <a href="https://9to5mac.com/2023/03/27/hello-there-ios-greeting-card-organizer-update/">9to5Mac</a></blockquote>
    <blockquote class="ht-card">"Hello There is well thought out and easy to use." - <strong>Brent Dirks</strong> // <a href="https://appadvice.com/post/preserve-your-personalized-greeting-card-memories-with-hello-there/775005">App Advice</a></blockquote>
    <blockquote class="ht-card">"An awesome way to be reminded of cards you've forgotten about." - <strong>Andrew O'Hara</strong> // <a href="https://fueled.com/blog/hello-there-helps-keep-cards-without-clutter/">Fueled</a></blockquote>
  </section>
  <p style="margin-top:1rem;"><img src="/assets/images/hellothere/hello-bento-new.JPG" alt="" style="width:100%; border-radius:14px; border:1px solid var(--ht-border);" /></p>

  <h4 style="margin-top:1.8rem;">Plan Breakdown</h4>
  <section class="ht-table-wrap">
    <div class="ht-plan">
      <div class="ht-plan-row ht-plan-head">
        <div class="ht-plan-cell">Feature</div>
        <div class="ht-plan-cell">Free</div>
        <div class="ht-plan-cell">Hello There+</div>
      </div>

      <div class="ht-plan-row"><div class="ht-plan-cell ht-plan-feature">Hello There Post</div><div class="ht-plan-cell ht-plan-value"><span class="ht-mark ht-mark-yes">*</span></div><div class="ht-plan-cell ht-plan-value ht-plan-value-plus"><span class="ht-mark ht-mark-yes">*</span></div></div>
      <div class="ht-plan-row"><div class="ht-plan-cell ht-plan-feature">Share individual projects</div><div class="ht-plan-cell ht-plan-value"><span class="ht-mark ht-mark-yes">*</span></div><div class="ht-plan-cell ht-plan-value ht-plan-value-plus"><span class="ht-mark ht-mark-yes">*</span></div></div>
      <div class="ht-plan-row"><div class="ht-plan-cell ht-plan-feature">Multiple photos per card</div><div class="ht-plan-cell ht-plan-value"><span class="ht-mark ht-mark-yes">*</span><span class="ht-note">(up to 2)</span></div><div class="ht-plan-cell ht-plan-value ht-plan-value-plus"><span class="ht-mark ht-mark-yes">*</span><span class="ht-note">(up to 10)</span></div></div>
      <div class="ht-plan-row"><div class="ht-plan-cell ht-plan-feature">Widgets</div><div class="ht-plan-cell ht-plan-value"><span class="ht-mark ht-mark-yes">*</span></div><div class="ht-plan-cell ht-plan-value ht-plan-value-plus"><span class="ht-mark ht-mark-yes">*</span></div></div>
      <div class="ht-plan-row"><div class="ht-plan-cell ht-plan-feature">Unlimited Stacks</div><div class="ht-plan-cell ht-plan-value"><span class="ht-mark ht-mark-yes">*</span></div><div class="ht-plan-cell ht-plan-value ht-plan-value-plus"><span class="ht-mark ht-mark-yes">*</span></div></div>
      <div class="ht-plan-row"><div class="ht-plan-cell ht-plan-feature">E-Post</div><div class="ht-plan-cell ht-plan-value"><span class="ht-mark ht-mark-yes">*</span><span class="ht-note">(limited selection)</span></div><div class="ht-plan-cell ht-plan-value ht-plan-value-plus"><span class="ht-mark ht-mark-yes">*</span></div></div>
      <div class="ht-plan-row"><div class="ht-plan-cell ht-plan-feature">Data Export</div><div class="ht-plan-cell ht-plan-value"><span class="ht-mark ht-mark-yes">*</span></div><div class="ht-plan-cell ht-plan-value ht-plan-value-plus"><span class="ht-mark ht-mark-yes">*</span></div></div>
      <div class="ht-plan-row"><div class="ht-plan-cell ht-plan-feature">Stickers</div><div class="ht-plan-cell ht-plan-value"><span class="ht-mark ht-mark-yes">*</span></div><div class="ht-plan-cell ht-plan-value ht-plan-value-plus"><span class="ht-mark ht-mark-yes">*</span></div></div>
      <div class="ht-plan-row"><div class="ht-plan-cell ht-plan-feature">E-Post</div><div class="ht-plan-cell ht-plan-value"><span class="ht-mark ht-mark-yes">*</span><span class="ht-note">(limited selection)</span></div><div class="ht-plan-cell ht-plan-value ht-plan-value-plus"><span class="ht-mark ht-mark-yes">*</span></div></div>
      <div class="ht-plan-row"><div class="ht-plan-cell ht-plan-feature">E-Post Studio</div><div class="ht-plan-cell ht-plan-value"><span class="ht-mark ht-mark-no">-</span></div><div class="ht-plan-cell ht-plan-value ht-plan-value-plus"><span class="ht-mark ht-mark-yes">*</span></div></div>
      <div class="ht-plan-row"><div class="ht-plan-cell ht-plan-feature">Unlimited senders</div><div class="ht-plan-cell ht-plan-value"><span class="ht-mark ht-mark-no">-</span></div><div class="ht-plan-cell ht-plan-value ht-plan-value-plus"><span class="ht-mark ht-mark-yes">*</span></div></div>
      <div class="ht-plan-row"><div class="ht-plan-cell ht-plan-feature">Hashtags</div><div class="ht-plan-cell ht-plan-value"><span class="ht-mark ht-mark-no">-</span></div><div class="ht-plan-cell ht-plan-value ht-plan-value-plus"><span class="ht-mark ht-mark-yes">*</span></div></div>
      <div class="ht-plan-row"><div class="ht-plan-cell ht-plan-feature">Sound Clips</div><div class="ht-plan-cell ht-plan-value"><span class="ht-mark ht-mark-no">-</span></div><div class="ht-plan-cell ht-plan-value ht-plan-value-plus"><span class="ht-mark ht-mark-yes">*</span></div></div>
      <div class="ht-plan-row"><div class="ht-plan-cell ht-plan-feature">Stats</div><div class="ht-plan-cell ht-plan-value"><span class="ht-mark ht-mark-no">-</span></div><div class="ht-plan-cell ht-plan-value ht-plan-value-plus"><span class="ht-mark ht-mark-yes">*</span></div></div>
      <div class="ht-plan-row"><div class="ht-plan-cell ht-plan-feature">Configurable Wallpaper</div><div class="ht-plan-cell ht-plan-value"><span class="ht-mark ht-mark-no">-</span></div><div class="ht-plan-cell ht-plan-value ht-plan-value-plus"><span class="ht-mark ht-mark-yes">*</span></div></div>
      <div class="ht-plan-row"><div class="ht-plan-cell ht-plan-feature">iCloud sync & backup</div><div class="ht-plan-cell ht-plan-value"><span class="ht-mark ht-mark-no">-</span></div><div class="ht-plan-cell ht-plan-value ht-plan-value-plus"><span class="ht-mark ht-mark-yes">*</span></div></div>
      <div class="ht-plan-row"><div class="ht-plan-cell ht-plan-feature">Custom icons</div><div class="ht-plan-cell ht-plan-value"><span class="ht-mark ht-mark-no">-</span></div><div class="ht-plan-cell ht-plan-value ht-plan-value-plus"><span class="ht-mark ht-mark-yes">*</span></div></div>
      <div class="ht-plan-row"><div class="ht-plan-cell ht-plan-feature">Touch ID / Face ID</div><div class="ht-plan-cell ht-plan-value"><span class="ht-mark ht-mark-no">-</span></div><div class="ht-plan-cell ht-plan-value ht-plan-value-plus"><span class="ht-mark ht-mark-yes">*</span></div></div>
    </div>
  </section>

  <h4 style="margin-top:1.8rem;">Screenshots</h4>
  <section class="ht-screens">
    <img src="/assets/images/hellothere/appstore-screen1.png" alt="" />
    <img src="/assets/images/hellothere/appstore-screen2.png" alt="" />
    <img src="/assets/images/hellothere/appstore-screen3.png" alt="" />
    <img src="/assets/images/hellothere/appstore-screen4.png" alt="" />
    <img src="/assets/images/hellothere/appstore-screen5.png" alt="" />
    <img src="/assets/images/hellothere/appstore-screen6.png" alt="" />
    <img src="/assets/images/hellothere/appstore-screen7.png" alt="" />
    <img src="/assets/images/hellothere/appstore-screen8.png" alt="" />
    <img src="/assets/images/hellothere/appstore-screen9.png" alt="" />
    <img src="/assets/images/hellothere/appstore-screen10.png" alt="" />
  </section>

  <section class="ht-card ht-privacy" style="margin-top:1.4rem;">
    <h4>Privacy Policy</h4>
    <p>No personally identifiable information is collected. Ever. Generic anonymous stats are collected to help improve the app. This information is aggregated using the privacy-focused analytics solution <a href="https://telemetrydeck.com">Telemetry Deck</a>.</p>
  </section>

  <section class="ht-card ht-details" style="margin-top:1rem;">
    <h4>App Store Details</h4>
    <p><strong>Apple App ID:</strong> 1632485298<br />
      <strong>Category:</strong> Lifestyle<br />
      <strong>Developer:</strong> rakTech LLC<br />
      <strong>Contact:</strong> support@raktech.app</p>
  </section>
</div>
