---
layout: post
title:  "Migrating A Paid App To Subscription/Freemium (Part 1)"
date: 2022-03-23
categories: [bacon, Apple, developer]
image: "https://images.unsplash.com/photo-1529528744093-6f8abeee511d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
read_time: true
author: Ryan Klumph
---

If I’ve learned anything from developing apps, it’s that there’s always something to fix. Something to change. Something to improve. The work is never finished, and therein lies the demon with any hobby. “I can stop whenever I want” we say…

One such change I had been wanting to make was to rethink my app’s payment strategy. My app was a pay-up-front design which not only set it apart from its competition, but also deterred a lot of potential users. A low cost to entry, but a gamble to pay up front.

Sure many paid apps have followed the pay-up-front model for years and have been doing just fine. But most of those apps are built, maintained, and supported by teams of people, not a single indie developer.

In an effort to get my app into the hands of more people, I decided it was time to make the change. Make it free. Remove the barrier to entry so people could haphazardly download it without giving it a second thought. Then, if things go well, they might get curious what’s behind that paywall for the premium features. Maybe they’ll ask themselves, “Why are those features considered so valuable?” Maybe they’ll discover the those features are actually quite useful. Maybe they’ll become a subscriber…

### Freemium vs. Subscription

![](https://images.unsplash.com/photo-1550039120-5d6529f0c4de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80)

Getting to this point, you might be mulling over whether to go the Freemium route, or the Subscription route. Some define these terms similarly. However I think it's beneficial to break them down further. Let’s cover what those options entail:

**Freemium** means your app is free to download and allows basic usage, but the bells and whistles are stuck behind a one-time paywall.

**Subscription** is similar, in that your app with basic usage is free to download, but instead of a one-time payment to unlock additional features and capabilities, users must subscribe to a recurring payment to continue their access to premium features.

For my app, I wanted to introduce the most flexibility for my users. This included 3 options:

1. Use the app for free. You get basic usage and it costs you nothing (Free)
2. Pay a monthly or yearly subscription to unlock additional premium content (Subscription)
3. For users who don’t want a subscription, pay a one-time fee to unlock premium content for life (Freemium)

**Number 1** suits users who never pay for apps or subscribe to anything, but they’re a user who can help spread the word about your app to friends and family.

**Number 2** is the sweet spot (for the developer) as you can track Monthly Recurring Revenue (MRR) and count on that income. Users benefit from low payments to utilize the premium features for as long as they see fit.

**Number 3** scratches the itch for folks who don’t like subscriptions. Pay once and call it a day.

Offering all 3 options covers all the bases and gives users the most flexibility. Determining the optimal dollar amount for each option will take some careful thought. In my model, I wanted to keep the barrier-to-entry low across all options, fostering the end user to think that all options are attainable.

Now that I had my target payment strategy out of the way, I needed to figure out how to make it happen. My app was pay-up-front, and contains no login requirements. My app was essentially used anonymously by every user that ever purchased it.

How would I implement these new payment models?  
How should I handle users who previously bought the app?

I’ll cover the technical details and implementation of RevenueCat in Part 2 (coming soon)

Thanks for reading!
