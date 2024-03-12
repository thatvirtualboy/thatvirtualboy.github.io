---
layout: post
title:  "Getting Started With Apple's In-App Events"
date: 2022-03-23
categories: [bacon, Apple, developer]
image: assets/images/In_App_Events/IAE-header.png
read_time: true
author: Ryan Klumph
---

At WWDC21, Apple introduced a new capability to developers called *In-App Events* which are timely events within your apps and games such as a **game competition**, a **fitness challenge**, a **movie premier**, and more.

These events are discoverable right in the App Store in what's called an *Event Card*. The Event Card shows details like the event name, a short description, and a time indicator. These event cards can be static images, or videos highlighting the contents of the event. Event cards are displayed on your App's product page, and can also show up in the App Store's search results.

> One interesting tidbit about the placement of Event Cards: users who have already downloaded your app will see the events **above** the screenshots in your product page. Users who have not downloaded your app will see them **below** the app screenshots.

When a user taps on the Event Card, it brings up the *Event Details Page*. The details page can include slightly more text and a larger image. From the details page, users can open your app directly to the event using a Universal Link. They can even share the Event with others. If your event hasn't started yet, users can choose to get notified when it starts. Developers can publish Event Cards up to 2 weeks prior to the start of an event.

![](/assets/images/In_App_Events/IAE-description.png)

When you create an event, you assign it a **badge** which categorizes some properties around that specific type of event. As of this writing, there are 7 badge types available: Live Event, Premiere, Challenge, Competition, New Season, Major Update, and Special Event.  
([Source](https://help.apple.com/app-store-connect/#/dev722080efc))

Before you can submit an event, there are certain requirements you'll need to meet.

### Requirements
1. **A Theme**  
When your In-App Event submission goes to App Review, one thing they look for is if the event is clear and makes sense. For Example, if you choose to categorize your event as a Major Update, the short and long description text needs to support that theme. If the title, descriptions, and images don't thematically fit together, your event will likely be rejected.

I had this happen with my first submission. I tied an event called "Spring Cleaning" to a *Major Update* badge and they didn't like that. All I had to do was change it to a *Special Event* badge and it was accepted.

2. **Deep Links**  
Deep Links, or Universal Links, are how Event Cards are linked to your app's event. These need to be configured before you submit an In-App Event. For an example of setting these up, check out Fernando Moya de Rivas' [post](https://morioh.com/p/b2b8a09bc3e1) and [example Github project](https://github.com/fermoya/TripsCalendar).

3. **Event Card Media**  
You'll need 2 images for your Event Cards:  
• 1920x1080 for the small Event Card  
• 1080x1920 for the Event Details Page  

Videos can also be used which will automatically loop in the cards. Videos must be a duration of 30 seconds or less. Check out [this link](https://help.apple.com/app-store-connect/#/devae2a52082) for detailed media requirements.

### Timeline
![](/assets/images/In_App_Events/IAE-timeline.png)  
In-App Events follow a timeline that spans beyond just the published dates of the event. Per the screenshot below, events can be published 14 days before the start, be actively published for a maximum of 31 days, shown as a "Past" event for 30 additional days, and then archived. Once the event is archived, it no longer shows on your product page, however the published link to the event is still active. Check out some of my events:  

![](/assets/images/In_App_Events/IAE-events.png)  
[Major Update] [Gorgeous Color-Matched Widgets](https://apps.apple.com/us/app/id1557964462?eventid=6442737265 )  
[Special Event] [Spring Cleaning Made Easier](https://apps.apple.com/us/app/id1557964462?eventid=6442734644 )  

### Conclusion
In-App Events on the App Store are a relatively easy way to generate additional searchable objects in the App Store to promote events and things like major app updates. If you take the time to button up the theme, deep links, and card media as mentioned above, you should be able to get your event through review pretty quick.

Thanks for reading!

### Resources
• [Meet in-app events on the App Store](https://developer.apple.com/videos/play/wwdc2021/10171/)  
• [In-App Events - App Store Connect Help](https://help.apple.com/app-store-connect/#/dev225fed4ee)  
• [Get started with in-app events](https://developer.apple.com/videos/play/tech-talks/10889/)  
