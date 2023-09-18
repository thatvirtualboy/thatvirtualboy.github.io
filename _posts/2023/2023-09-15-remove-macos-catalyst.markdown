---
layout: post
title: "Considering Mac Catalyst? A word of caution..."
categories: [Apple, SwiftUI]
image: assets/images/mac-app-store.png
read_time: true
featured: false
date: 2023-09-15
author: Ryan Klumph
---

I've discovered a technical hurdle that has become quite a headache as a SwiftUI developer, and it has to do with availability of an app's Mac Catalyst App Store Build. So let me begin with a warning to the reader: **If you're considering publishing a Catalyst version of your app, proceed with caution and please consider the below scenario.**

When I discovered [Mac Catalyst](https://developer.apple.com/documentation/uikit/mac_catalyst) as a way to bring SwiftUI apps to macOS, I was initially really excited. At the time, I envisioned my app [Artbox](https://apple.co/3e4W69c) having a more native experience for Mac that seamlessly remained in sync with the iOS and iPadOS counterparts.

While developing the Catalyst version, I kept stumbling across parts of the app that needed exceptions, or needed to be completely re-written due to nuances in certain APIs for Mac. On top of that, several graphical pieces needed further attention which in the end, made my code full of `#if targetEnvironment(macCatalyst)` exceptions. Over time, managing and supporting these special scenarios of macOS became tiring and ultimately... not very fun.

So, I made the decision to back out of supporting Catalyst, encouraging users who want to run my apps on macOS to use the already really-quite-good-experience *Made for iPad* version of my apps. And this is where I discovered several frustrations.

### Unable to remove macOS App Platform
The first issue is that once you've had a Catalyst version approved and published to the Mac App Store, there is apparently no method to remove that version from sale. Even if you've removed the Catalyst target from  your binaries and uploaded and published new iOS builds -- nothing can be done to disable the already-published Catalyst version. If you try to "Remove from sale" the app in App Store Connect, it removes the entire app ID across all App Stores.

This was confirmed by Adam from Apple (heh) in an email thread I had back in July of this year:  
![](/assets/images/apple-email.png "Apple Email Thread")

### Made for iPad version unavailable for Mac
The second issue that comes from this is that once you've published a Catalyst app, the **Made for iPad** version becomes completely unavailable on macOS. More specifically, App Store Connect states:

> When your macOS version is approved, your iOS app will no longer be available to Mac users.

![](/assets/images/mac-avail.png "Catalyst Gotcha")

Attempting to check this box (which would allow publishing the iPad version to macOS) fails to save and forces us to leave the Catalyst version available for download.

Obviously this creates a poor user experience as the only option developers in this situation are left with is adding a note in the app's **Promotional Text** box that Catalyst isn't supported anymore, and by the way, you can't use the current supported iPad version on your Mac either.

### Call to action
If you've been impacted by this, or are otherwise a concerned developer, please file a Feedback about this so we can get these issues addressed for the community. Please feel free to reference my feedback **FB13174526**

### Update
Steve Troughton-Smith shared on Mastodon that this behavior actually extends beyond just Mac Catalyst/SwiftUI and that developers should use caution when adding any platform in App Store Connect

<iframe src="https://mastodon.social/@stroughtonsmith/111070551111971656/embed" width="400" height= "900" allowfullscreen="allowfullscreen" sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-forms"></iframe>