---
layout: page
title: Pixel Paws
permalink: /pixelpaws
comments: false
---

<style>
  .pixelpaws-page {
    --pp-ink: #2b1f15;
    --pp-muted: #6a5a4c;
    --pp-cream: #fff8ef;
    --pp-soft: #fff2db;
    --pp-card: #ffffff;
    --pp-border: #ead6be;
    --pp-primary: #ff8d3a;
    --pp-primary-dark: #db6f24;
    --pp-sky: #d6f3ff;
  }

  .pixelpaws-page .pp-hero {
    background: linear-gradient(160deg, #fff8ef 0%, #ffeac8 48%, #ffd5ad 100%);
    border: 1px solid var(--pp-border);
    border-radius: 24px;
    box-shadow: 0 12px 28px rgba(77, 49, 24, 0.08);
    overflow: hidden;
    margin-bottom: 1.5rem;
  }

  .pixelpaws-page .pp-hero-inner {
    display: grid;
    grid-template-columns: 1.1fr 1fr;
    gap: 1.5rem;
    padding: 2rem;
    align-items: center;
  }

  .pixelpaws-page .pp-kicker {
    display: inline-block;
    background: #fff;
    color: var(--pp-primary-dark);
    border: 1px solid #ffd0a4;
    border-radius: 999px;
    font-size: 0.78rem;
    letter-spacing: 0.04em;
    font-weight: 700;
    text-transform: uppercase;
    padding: 0.35rem 0.7rem;
    margin-bottom: 0.65rem;
  }

  .pixelpaws-page h4 {
    margin-bottom: 0.6rem;
  }

  .pixelpaws-page .pp-hero-copy p {
    color: var(--pp-muted);
    margin-bottom: 1rem;
  }

  .pixelpaws-page .pp-download {
    display: inline-block;
    background: var(--pp-primary);
    color: #fff;
    border-radius: 999px;
    text-decoration: none;
    padding: 0.65rem 1rem;
    font-weight: 700;
    box-shadow: 0 8px 18px rgba(255, 141, 58, 0.35);
  }

  .pixelpaws-page .pp-download:hover {
    background: var(--pp-primary-dark);
    color: #fff;
    text-decoration: none;
  }

  .pixelpaws-page .pp-hero img {
    width: 100%;
    max-width: 520px;
    margin: 0 auto;
    display: block;
    border-radius: 16px;
    border: 1px solid #f2d2b0;
  }

  .pixelpaws-page .pp-grid {
    display: grid;
    gap: 1rem;
  }

  .pixelpaws-page .pp-grid-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .pixelpaws-page .pp-grid-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .pixelpaws-page .pp-card {
    background: var(--pp-card);
    border: 1px solid var(--pp-border);
    border-radius: 16px;
    padding: 1.1rem;
    box-shadow: 0 8px 20px rgba(64, 34, 8, 0.05);
  }

  .pixelpaws-page .pp-card p:last-child {
    margin-bottom: 0;
  }

  .pixelpaws-page .pp-intro {
    background: linear-gradient(170deg, #ffffff 0%, #fff7e7 100%);
  }

  .pixelpaws-page .pp-quote {
    background: #fff;
    border-left: 4px solid #ffd39d;
  }

  .pixelpaws-page .pp-pals .pp-card {
    text-align: center;
    background: linear-gradient(160deg, #fff 0%, #fff7eb 100%);
  }

  .pixelpaws-page .pp-pals img {
    width: 100%;
    max-width: 220px;
    border-radius: 12px;
    margin-bottom: 0.75rem;
    border: 1px solid #edd9c4;
  }

  .pixelpaws-page .pp-feature-list {
    list-style: none;
    padding-left: 0;
    margin: 1rem 0 0;
    columns: 2;
    column-gap: 1.5rem;
  }

  .pixelpaws-page .pp-feature-list li {
    break-inside: avoid;
    margin-bottom: 0.45rem;
    color: var(--pp-ink);
  }

  .pixelpaws-page .pp-feature-list li::before {
    content: "• ";
    color: var(--pp-primary-dark);
    font-weight: 700;
  }

  .pixelpaws-page .pp-faq details {
    background: #fff;
    border: 1px solid var(--pp-border);
    border-radius: 12px;
    padding: 0.7rem 0.9rem;
  }

  .pixelpaws-page .pp-faq summary {
    cursor: pointer;
    font-weight: 700;
    color: var(--pp-ink);
  }

  .pixelpaws-page .pp-faq details p {
    margin: 0.65rem 0 0;
    color: var(--pp-muted);
  }

  .pixelpaws-page .pp-privacy {
    background: linear-gradient(150deg, #dcf5ff 0%, #c4efff 100%);
    border-color: #b3deef;
  }

  .pixelpaws-page .pp-dev {
    background: var(--pp-soft);
  }

  .pixelpaws-page .pp-screens {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 0.9rem;
  }

  .pixelpaws-page .pp-screens img {
    width: 100%;
    border-radius: 12px;
    border: 1px solid var(--pp-border);
    box-shadow: 0 8px 20px rgba(57, 28, 0, 0.09);
  }

  @media (max-width: 991px) {
    .pixelpaws-page .pp-hero-inner {
      grid-template-columns: 1fr;
      padding: 1.25rem;
    }

    .pixelpaws-page .pp-grid-3 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    .pixelpaws-page .pp-feature-list {
      columns: 1;
    }

    .pixelpaws-page .pp-screens {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 640px) {
    .pixelpaws-page .pp-grid-2,
    .pixelpaws-page .pp-grid-3 {
      grid-template-columns: 1fr;
    }

    .pixelpaws-page .pp-screens {
      grid-template-columns: 1fr;
    }
  }
</style>

<div class="pixelpaws-page">
  <section class="pp-hero">
    <div class="pp-hero-inner">
      <div class="pp-hero-copy">
        <span class="pp-kicker">Apple Watch App</span>
        <h4>A delightful virtual pet app for Apple Watch</h4>
        <p>Introducing the cutest new app for Apple Watch -- <strong>Pixel Paws</strong> brings back the charm of classic virtual pets, now on your wrist. *</p>
        <p><a class="pp-download" href="https://apps.apple.com/us/app/pixel-paws-digital-pet-toy/id6743422824">Download</a></p>
      </div>
      <div class="pp-hero-media">
        <img src="/assets/images/pixelpaws/pixelpaws-promo2.png" alt="Pixel Paws" />
      </div>
    </div>
  </section>

  <section class="pp-grid pp-grid-2">
    <article class="pp-card pp-intro">
      <p><strong>Kid-Friendly Gameplay</strong><br />Anyone can enjoy Pixel Paws, but certain safeguards and design elements were implemented with kids in mind. The game features simple controls, friendly graphics, and no ads or tracking.</p>
    </article>
    <article class="pp-card pp-intro">
      <p><strong>Trusted By Parents</strong><br />No hidden in-app purchases or subscriptions. And with no tracking or ads, parents and players can enjoy Pixel Paws with confidence.</p>
    </article>
    <article class="pp-card pp-intro">
      <p><strong>Care, Play, Earn</strong><br />From breakfast to bedtime, your little pixel friend depends on you. Play with them, walk them, and repeat. Each action works on a <strong>cooldown timer</strong> throughout the day.</p>
      <p>When the timer completes, they're ready for attention again. It’s the perfect balance of fun and freedom, with gentle reminders to check in (configurable).</p>
    </article>
    <article class="pp-card pp-intro">
      <p><strong>Play More, Earn More</strong><br />Every time you care for your Pixel Paw friend — whether it’s feeding, walking, or playtime — you earn coins. These coins are used to unlock new <strong>pets</strong>, playful <strong>backgrounds</strong>, and fun <strong>weather scenes</strong>.</p>
      <p>It’s all part of the experience — <strong>no ads</strong> and <strong>no in-app purchases</strong> for a delightful and fun experience.</p>
      <p><strong>Coin Boost</strong><br />Earn double the coins for a limited time when you unlock new pets or scenes, letting you refill your coin bank even faster. Plus, your boost durations stack when you unlock multiple items!</p>
    </article>
  </section>

  <h4 style="margin-top: 1.7rem;">Users love Pixel Paws</h4>
  <section class="pp-grid pp-grid-3">
    <blockquote class="pp-card pp-quote">
      “I love that the app doesn’t collect any data or even connect to the internet.”<br />
      <em>– Beta tester</em>
    </blockquote>
    <blockquote class="pp-card pp-quote">
      “It’s so cute — my daughter absolutely loves it!”<br />
      <em>– Beta tester</em>
    </blockquote>
    <blockquote class="pp-card pp-quote">
      “The way you earn coins just by playing has actually helped my kid start to understand saving. Total bonus!”<br />
      <em>– Beta tester</em>
    </blockquote>
  </section>

  <h4 style="margin-top: 1.8rem;">Meet Some Of The Pals</h4>
  <p><em>Choose from a growing list of adorable companions – your adventure always begins with Mocha!</em></p>
  <section class="pp-grid pp-grid-3 pp-pals">
    <article class="pp-card">
      <img src="/assets/images/pixelpaws/mocha.png" alt="Mocha the cat" />
      <h4>Mocha</h4>
      <p>Curious, cozy, and always chasing sunbeams.</p>
    </article>
    <article class="pp-card">
      <img src="/assets/images/pixelpaws/sheldon.png" alt="Sheldon the turtle" />
      <h4>Sheldon</h4>
      <p>Slow and steady — and proud of it.</p>
    </article>
    <article class="pp-card">
      <img src="/assets/images/pixelpaws/clover.png" alt="Clover the bunny" />
      <h4>Clover</h4>
      <p>Bouncy, bright-eyed, and always up for fun.</p>
    </article>
  </section>

  <h4 style="margin-top: 1.8rem;">Features</h4>
  <section class="pp-card">
    <img src="/assets/images/pixelpaws/pixelpaw-bento1.jpg" alt="logo" style="width:100%; border-radius:12px; border:1px solid #e6d3be;" />
    <ul class="pp-feature-list">
      <li>Adorable pixelated cuteness</li>
      <li>Retro 8-bit graphics</li>
      <li>Offline play (no internet required)</li>
      <li>Earn coins by playing (no in-app purchases)</li>
      <li>Unlock additional pets from a growing selection</li>
      <li>Customize the pet's environment (scenes, backgrounds, and weather)</li>
      <li>Privacy comes first (no tracking / no ads)</li>
      <li>No penalties (pets never die or faint)</li>
      <li>Configurable haptics</li>
      <li>Configurable reminders (cooldown timer alerts)</li>
      <li>*Requires watchOS 11.2 or later</li>
    </ul>
  </section>

  <h4 style="margin-top: 1.8rem;">FAQ</h4>
  <section class="pp-grid pp-faq">
    <details>
      <summary>What makes Pixel Paws kid-friendly?</summary>
      <p>Anyone can enjoy Pixel Paws, but certain safeguards and design elements were implemented with kids in mind. The game features simple controls, friendly graphics, and no ads or tracking.</p>
    </details>
    <details>
      <summary>Can pets die or faint?</summary>
      <p>No way! Pixel Paws is all about fun and care — and they're always happy to see you.</p>
    </details>
    <details>
      <summary>Are there in-app purchases?</summary>
      <p>No! Pixel Paws has zero in-app purchases. All in-game currency is earned by playing the game.</p>
    </details>
    <details>
      <summary>Is any personal data collected?</summary>
      <p>No personal data is collected or stored. The game has no servers and doesn't connect to the internet at all.</p>
    </details>
    <details>
      <summary>Will players receive notifications all the time?</summary>
      <p>Reminders to play with your pet are disabled by default, but can be enabled in the app's settings. These reminders align with the cooldown timers.</p>
    </details>
    <details>
      <summary>How do I earn coins?</summary>
      <p>You earn coins by playing the game, caring for your pets, and interacting daily. There's even a daily reward!</p>
    </details>
    <details>
      <summary>What's this about a coin boost?</summary>
      <p>Following the purchase of a pet, you will receive a 100% boost in coin earnings for the next 24 hours. Buying anything from the Extras menu will boost earnings for 12 hours. Plus, boost times stack!</p>
    </details>
    <details>
      <summary>Can I start the game over?</summary>
      <p>Yes, you can reset your game progress anytime from the Settings menu. Be careful—this can't be undone!</p>
    </details>
    <details>
      <summary>Minimum watchOS version?</summary>
      <p>Pixel Paws requires watchOS 11.2 or later</p>
    </details>
    <details>
      <summary>Feedback or support?</summary>
      <p>We'd love to hear from you! Reach us anytime at support@raktech.app.</p>
    </details>
  </section>

  <section class="pp-card pp-privacy" style="margin-top: 1.7rem;">
    <h4>Privacy First. Always.</h4>
    <p>No tracking. No ads. No surprises. Just a delightful pixel companion who's happy to see you.</p>
  </section>

  <section class="pp-card pp-dev" style="margin-top: 1rem;">
    <h4>Meet the developer</h4>
    <p>Hi, I’m Ryan! 👋 I made Pixel Paws because my kids wanted a fun pet game on their Apple Watches – kind of like a modern Tamagotchi. They just wanted to play with pets and unlock new ones, while I needed something safe, private, and no hidden in-app purchases. So, I built Pixel Paws – a simple game with a big heart, perfect for kids and anyone who loves a little retro pet fun. Thanks for checking it out! ❤️</p>
  </section>

  <h4 style="margin-top: 1.8rem;">Screenshots</h4>
  <section class="pp-screens">
    <img src="/assets/images/pixelpaws/pixelpaws-promo1.png" alt="logo" />
    <img src="/assets/images/pixelpaws/icon.png" alt="logo" />
    <img src="/assets/images/pixelpaws/appscreen0.png" alt="logo" />
    <img src="/assets/images/pixelpaws/appscreen1.jpeg" alt="logo" />
    <img src="/assets/images/pixelpaws/appscreen2.jpeg" alt="logo" />
    <img src="/assets/images/pixelpaws/appscreen3.jpeg" alt="logo" />
    <img src="/assets/images/pixelpaws/appscreen4.jpeg" alt="logo" />
    <img src="/assets/images/pixelpaws/appscreen5.jpeg" alt="logo" />
  </section>
</div>
