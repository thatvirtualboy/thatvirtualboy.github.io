---
layout: studio
title: About
permalink: /about
description: Meet That Virtual Boy, the indie developer behind Route 25, Skydex, and Golden TCG. Read about the apps, the blog, and life behind the drums.
image: /assets/studio/about-portrait.webp
stylesheet: /assets/css/about.css
---

<div class="about-page">
  <header class="about-intro">
    <div class="about-greeting">
      <p>Hi, I’m</p>
      <h1>That Virtual Boy<span>.</span></h1>
    </div>
    <p class="about-lede">I make apps for Pokémon fans, puzzlers, parents, and productivity chasers</p>
    <div class="about-actions">
      <a class="about-primary" href="/apps/">Explore my apps <span aria-hidden="true">→</span></a>
      <a href="#follow">Follow along <span aria-hidden="true">↓</span></a>
    </div>
    <img class="about-portrait" src="{{ page.image | relative_url }}" width="960" height="1707" fetchpriority="high" alt="That Virtual Boy in a Girl Dad Co. cap, with framed Nintendo games on the wall">
  </header>

  <div class="about-columns">
    <section class="about-story" aria-labelledby="about-story-title">
      <h2 id="about-story-title">Behind the apps</h2>
      <p>I started That Virtual Boy as a blog about enterprise virtualization and end-user computing. Those early <a href="/articles/">articles</a> are still here. These days I spend more time building apps in SwiftUI than writing about them.</p>
      <p>My Pokémon card collection found its way into <a href="https://route25.app">Route 25</a>. With <a href="/skydex">Skydex</a>, even checking the weather is an excuse to see which Pokémon turns up.</p>
      <h3>Behind the drums</h3>
      <p>I’m also a drummer and percussionist. I’ve played Nashville showcases, SXSW, and churches. You can hear me on drums on Katrina Stone’s album <a href="https://music.apple.com/us/album/spellbound/1147778586"><i>Spellbound</i></a>.</p>
    </section>

    <section class="about-follow" id="follow" aria-labelledby="about-follow-title">
      <h2 id="about-follow-title">Follow along</h2>
      <p>You’ll find me at <strong>@thatvirtualboy</strong>.</p>
      <ul>
        {% assign profiles = "YouTube,X,Instagram,Threads,RSS" | split: "," %}
        {% for name in profiles %}
          {% assign channel = site.data.studio_channels | where: "name", name | first %}
          <li><a href="{{ channel.url }}">{% if name == "RSS" %}Subscribe to articles via RSS{% else %}{{ name }}{% endif %}<span aria-hidden="true">↗</span></a></li>
        {% endfor %}
      </ul>
      <p class="about-coffee">Want to support the site? <a href="https://www.buymeacoffee.com/thatvirtualboy">Buy me a coffee</a>.</p>
    </section>
  </div>

  <section class="about-press" aria-labelledby="about-press-title">
    <h2 id="about-press-title">Around the web</h2>
    <ul class="about-features">
      {% for feature in site.data.about.features %}
        {% assign app = site.data.studio_apps | where: "name", feature.app | first %}
        <li><a href="{{ feature.url }}">
          <img src="{{ app.icon }}" alt="" width="44" height="44" loading="lazy">
          <div><span class="about-outlet">{{ feature.outlet }}</span><strong>{{ feature.title }}</strong></div>
          <span class="about-outbound" aria-hidden="true">↗</span>
        </a></li>
      {% endfor %}
    </ul>
    <details class="about-disclosure">
      <summary>More coverage</summary>
      <dl class="about-mentions">
        {% for group in site.data.about.press %}
          <div><dt>{{ group.subject }}</dt><dd>{% for article in group.links %}{% if article.url %}<a href="{{ article.url }}">{{ article.label }}</a>{% else %}<span>{{ article.label }}</span>{% endif %}{% endfor %}</dd></div>
        {% endfor %}
      </dl>
    </details>
    <details class="about-disclosure">
      <summary>Certifications and community recognition</summary>
      <ul class="about-badges">
        {% for badge in site.data.about.credentials %}
          {% assign badge_url = badge.file | prepend: "/assets/certs/" | relative_url %}
          <li><a href="{{ badge_url }}"><img src="{{ badge_url }}" alt="{{ badge.label }}" loading="lazy" width="120" height="100"></a></li>
        {% endfor %}
      </ul>
    </details>
  </section>
  <p class="about-disclaimer">The views I share here are my own.</p>
</div>
