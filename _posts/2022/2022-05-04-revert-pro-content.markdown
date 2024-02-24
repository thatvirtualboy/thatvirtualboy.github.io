---
layout: post
title: "How to revert your app's premium content if a user subscription lapses"
categories: [Apple, SwiftUI, iOS, development]
image: "https://images.unsplash.com/photo-1593510987046-1f8fcfc512a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
read_time: true
date: 2022-05-04
author: Ryan Klumph
---

In building Premium features into my SwiftUI app available with a subscription, one use case that I considered is, "What if someone cancels their subscription, or their subscription lapses?"

Sure they wouldn't be able to take advantage of using a premium feature from that point on (assuming you've already built paywalls into your app), but what about customization settings that the user already applied? Things like custom theming options? In this scenario, I'd prefer for *some* premium content to become unavailable. It would be a poor design to not check for the *Pro* status and then handle premium content accordingly. I say "some" premium content because you really must consider the end-user's experience here. Perhaps not every feature should be locked back up. Here's an example:

In my app [Artbox](https://artbox.app), there are several premium features, two of which are custom icons, and adding multiple photos per project. I feel it's best to attack these two features differently:

### 2 Examples

**Custom Icons** - I'm treating this feature as reserved only for current, active subscriptions. So in the scenario where a user's subscription lapses, the app icon will be checked and if the *Pro* flag is false, then the icon will be reverted to default.  

**Multiple Photos** - This feature similarly will be reverted, however projects that were created during the active subscription that contain multiple photos will still present multiple photos - I don't believe that removing access to those photos is the best user experience. What the user can expect after lapsing a subscription is that new projects will simply be limited to 1 photo. Then when then reactive their subscription, they can later go add additional photos to the project if needed.

### A Simple Check
One way to achieve this is by using an `.onAppear` modifier to a view and perform an action based on the pro flag:

<script src="https://gist.github.com/thatvirtualboy/24bfd63fcbdfac756a06e54ccbaf9171.js"></script>

What's happening here is that on appearance of the setting where a user might change their icon, we check for my global `isPro` flag and if false, it will set the current icon to the Default option. I have some other values I set here that are used for other views and telemetry data, but as you can see it's very simple to perform the check.

Here's another example of checking if the profile gradient is one of the free options, or a premium option:

<script src="https://gist.github.com/thatvirtualboy/cd713a7f9e5848329cd9de76446f40db.js"></script>

In my app, the profile color gradients are represented by an `Int` where 1 through 6 are included in the free download. Whereas gradients 7 though 15 are premium. Here we do a check and say that if `isPro` is false AND the profile is using one of the premium gradients (as represented by the stored `Int` value between 7 and 15) then set that value to the default free gradient by applying the `Int` value of 1.

### In Summary
There are many ways you could achieve similar results of having your SwiftUI app adjust its experience based on a user's subscription status. I hope that this helped you understand one of those options. Good luck and happy coding!
