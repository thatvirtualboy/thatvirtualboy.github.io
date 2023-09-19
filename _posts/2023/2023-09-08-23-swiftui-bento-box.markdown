---
layout: post
title: "Build a Bento Box with SwiftUI"
categories: [Apple, SwiftUI]
image: "https://techcetera.co/wp-content/uploads/2020/06/macOS.jpg"
read_time: true
featured: false
date: 2023-09-08
author: Ryan Klumph
---

Last month I posted about open-sourcing a project I had been working on for marketing my app, Hello There. The post was very well received and picked up a lot of activity.

<iframe src="https://techhub.social/@thatvirtualboy/110888575566270227/embed" class="mastodon-embed" style="max-width: 100%; border: 0" width="400" allowfullscreen="allowfullscreen"></iframe><script src="https://techhub.social/embed.js" async="async"></script>

The project is based on the awesome feature summaries that Apple has used in the last couple of years for things like macOS, iOS, Apple Silicon, etc. They're great for highlighting the MVP features of an update in a fun and engaging way.

I'm not much of a designer on my own, but I like taking inspiration from things that... well... inspire me!

I absolutely love building in SwiftUI and when looking at some of Apple's Bento Box style featurettes, I thought, "*I'm pretty sure I could code that!*"

Here are a couple of examples:

#### M2
![](/assets/images/bento1.jpg "M2 Bento Image from Apple")
`Source: Apple`

#### iOS 17
![](/assets/images/bento2.jpg "iOS Bento Image from Apple")
`Source: Apple`

I set out to create something that I could use, and resuse, to highlight the features of my apps as major releases came about. It turned out to be a lot of fun to make! The biggest challenge was coming up with the general size and layout of the objects in order to make a uniform and even rectangle. I ended up designing for an iPad in landscape mode and here's what I came up with:

![](/assets/images/bento.png "Hello There Bento made in SwiftUI")

[Check it out on Github](https://github.com/thatvirtualboy/SwiftUI-Bento-Box) and give it a star if you like it! Even more, if you happen to publish any material using this project, let me know! I'd love to see it!