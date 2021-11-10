---
layout: post
title:  "Review of your app is taking longer than expected"
date:   2021-05-03
categories: [apple, swiftui, ios, development]
image: "https://photos5.appleinsider.com/gallery/26319-37220-180605-App_Store_Connect-xl.jpg"
read_time: true
featured: false
author: Ryan Klumph
---
Is your app review "taking longer than expected?" This can be so frustrating for a developer. Here's what my experience was like!

On April 2nd 2021, I received a surprising message from the App Review team regarding a build that was submitted to the App Store. The message stated,

> "The review of your app is taking longer than expected. Once we have completed our review, we will notify you via Resolution Center."

![](/assets/images/appreview1.png)

I've been submitting apps to the App Store for about a year and never came across this message before. Coupled with the message, my app submission actually showed as "Rejected." Confusing, no doubt. As tempting as it was to click that "Contact Us" link suggested in the message, I figured I'd wait a bit and see what came of it.

### What could have caused this
At the time, I was uploading builds for TestFlight and every once in a while I'd also submit for App Store review to ensure new features were approved. Admittedly, there were some differences around this particular build that could have triggered this message:  
1. While working on this build, I was in rapid-fire mode which unfortunately led me to submitting several builds up to Review that contained some bugs, which I quickly identified. So I "developer-rejected" the build, and uploaded another one. I did this probably 3 times in a relatively short amount of time. [ Docs](https://developer.apple.com/app-store/review/) strongly suggest ensuring builds are fully tested and "ready to be published." It's possible that the sequence of several uploads and developer-rejected actions triggered this extended review.

2. Another possibility could be the fact that this build included support for additional languages. Localization is relatively easy to implement in SwiftUI apps, so I was excited to get this added. As far as I can tell, Apple doesn't specify if adding languages can extend review time, but it's a possibility.

### Week 1
One week goes by, and it's now April 9th. By now my curiosity and maybe a little impatience gets the best of me. So I go click the "Contact Us" link from before and send a very polite request for a status update. As much as I wanted to complain and make my case, I knew I'm still at Apple's mercy here so kindness is certainly the correct path!

On April 11th, two days after submitting my inquiry I get a message back from the App Store Review team stating,

>"I understand your concern regarding the extended review time of your app. However, we still need additional time for review.
No action has been taken against your app at this time, and we have escalated your request to the appropriate internal team. After we complete your app’s review, we will notify you via Resolution Center of any next steps.
We appreciate your continued patience."

### Week 2
Another week of no news. On April 16th, I replied to the email I received the week earlier assuring me the case was escalated. I was again, as polite and understanding as I could come off in an email, offering to assist in the review by providing additional information, etc. I also shared a growing concern that my target launch date for this app was only 2 weeks away, and the build under review isn't even the final build I'm planning to release.

I got a reply back very quickly, about 1 hour and 10 minutes later. Unfortunately it was more of the same -- "we still need additional time for review."

### Week 3
It's now April 21st -- 3 weeks after receiving the initial rejection, and I'm starting to sweat bullets about missing my target launch date. I figure I'll try a hail Mary here and upload a new build -- what's the worst that could happen?

The upload occurred around 2:25pm Mountain Time. Lo and behold, at 4:45pm Mountain Time, the app goes back into Review (which is actually quite quick -- I usually expect to wait around 24 hours to reach "In Review" status after upload). It sits here for **16 minutes (!!)**, until I received that glorious email:

> The status of your app has changed to **Pending Developer Release.**

Oh the relief!

Did I ever find out what originally happened to trigger this painful 3-week adventure? No.
Did Apple ever provide a review summary indicating an issue? No.

Unfortunately, this appears to be just one of those games iOS devs have to play every once in a while.

### In Summary
If I happen to come across this again, I might wait up to a week just to give Apple the benefit-of-the-doubt. I'd be quite curious what their official response would be in this type of scenario. However after a week of waiting, I think I wouldn't hesitate to simply upload a new build and see where that gets me.

Hopefully you found this post helpful if you happen to find yourself in a similar boat. Thanks for reading!
