---
layout: post
title:  "Saving images in a Mac Catalyst app with SwiftUI"
date:   2021-03-24
categories: [apple, swiftui, ios, development]
image: assets/images/macdev.jpeg
read_time: true
author: Ryan Klumph
---
One year ago I published an app called *Virtual Backgrounds* to the App Store with the idea of providing custom, hand-picked backgrounds to be used with virtual meetings. It wasn’t just another endless repository of random wallpapers, but rather a finite selection specifically chosen and/or created to be used as a virtual backdrop.

I originally wrote the app using a 3rd party IDE which I’ve written about before, but the current iteration of the app was written in native SwiftUI which opens the doors for a lot of opportunities. One of which, is a Mac Catalyst app.

![](/assets/images/catalyst.png)<br><br>

Per [Apple’s documentation](https://developer.apple.com/mac-catalyst/), Mac Catalyst apps are native Mac apps that share code with iPad apps. They can be expanded to adopt more Mac-specific features to further differentiate themselves from their mobile counterparts. However for many apps, very little is needed to actually “port” the app over for macOS.

The main use case of *Virtual Backgrounds* is for users to be able to save specified backgrounds to their local device, which can then be imported into Zoom, Teams, or whatever video conferencing tool they use that supports custom backdrops.

In my shared iOS code, the save operation looks something like this

<script src="https://gist.github.com/thatvirtualboy/9fd71451e9f0ca037c11ee9c87e9b3f0.js"></script>

There are a few other things happening with this save operation, but the important bit is the **UIImageWriteToSavedPhotosAlbum** bit:

`UIImageWriteToSavedPhotosAlbum(UIImage(named: item.name)!, nil, nil, nil)`

You can read more about this function on [Apple’s Doc Site](https://developer.apple.com/documentation/uikit/1619125-uiimagewritetosavedphotosalbum).

Unfortunately this function doesn’t exist on macOS, so the primary case of users being able to save images in a masOS version of Virtual Backgrounds didn’t work out of the box.

## Adding macOS compatibility
Apple makes it pretty easy to add code in your iOS app for adding Mac Catalyst support using the *if targetEnvironment* statement

`#if targetEnvironment(macCatalyst)`

Here's an example:

<script src="https://gist.github.com/thatvirtualboy/a35bb7ac15d199ac027ab955dd5ccd9a.js"></script>

Here we have a button that will show the text **macOS View** if the app detects that it’s running on a Mac, and proceed to open the MacOSView(). Consequently, if the app is running on an iOS device it will skip over that section and show the button that says **iOS View**, opening the view specific to iOS.

## targetEnvironment(macCatalyst) code

Back to the task at hand, which is to save the desired image to macOS. Let's take this logic and apply it to the *save* operation

<script src="https://gist.github.com/thatvirtualboy/c0135952e026787e6d56b9a6467ad0fd.js"></script>

Here you can see the macOS code certainly more involved than the iOS code. Let’s look at it line by line:

**fileURL** — this is used to to store the path where the image will be saved on the Mac. Notice I have a variable pathURL which is defined earlier in my code which states I want the images saved to the user’s desktop:

`@State private var pathURL = NSHomeDirectory().appending(“/Desktop”)`

**nameImage** — this is used to define what the saved image’s filename will be  
**fileUrlWithName** — this combines the target path with the target filename  
**imageData** — this specifies the image to be saved and the compression  

Then we put it together with a simple **do {}** for the save, and we catch any errors that might occur. And that’s how we have a multiplatform app that can save images on iOS, iPadOS, and now macOS!

## In Summary
We looked at the code for saving images to an iOS Device’s Photo Library using **UIImageWriteToSavedPhotosAlbum**. Then we reviewed the *if targetEnvironment* code necessary for differentiating between an **iOS target** and a **macCatatalyst target**. Lastly, we put it all together in order to have our app save the desired image universally on iPhone, iPad, or Mac.
