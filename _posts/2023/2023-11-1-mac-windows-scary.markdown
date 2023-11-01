---
layout: post
title: "M3 Macs and the Scary Windows Virtualization Predicament"
categories: [Apple, iPad, SwiftUI]
image: assets/images/m3.PNG
read_time: true
featured: false
date: 2023-11-1
author: Ryan Klumph
---

This week Apple announced the M3 series of chips at their [Scary Fast event.](https://www.apple.com/apple-events/) Like many others, I was amazed when Apple flexed at the end with the statement "This event was shot on iPhone, and edited on Mac". Check out the [*Behind the scenes*](https://www.apple.com/newsroom/2023/10/behind-the-scenes-at-scary-fast-apples-keynote-event-shot-on-iphone/) on filming the event  - it's really impressive! 

![Shot on iPhone](/assets/images/shotoniphone.png)  

During the event, Apple heavily contrasted Apple Silicon with Intel-based Macs (no surprise), repeatedly addressing *"those who have not yet upgraded from Intel..."*

The event was riddled with statements like

> "a monster upgrade for anyone still on an Intel based Macbook Pro"

and 

> "11x Faster than fastest Intel-based Macbook Pro"

### The Predicament
Many Mac users today still utilize Windows 10 and Windows 11 by way of *virtualization*, namely using software like [VMware Fusion](https://www.vmware.com/products/fusion.html) or other OS virtualizing platforms. For years, the x86 architecture has been the standard that eased users to switching to Mac, since they could easily run their proprietary Windows applications in a window.

But what happens when you restore that Time Machine backup and launch your x86 Windows VM on a M-series Mac?

> "This virtual machine cannot be powered on because it requires the X86 machine architecture, which is incompatible with this Arm machine architecture host."

Simply put: you're stuck. Your options are either to stay on your Intel-based Mac, or rebuild your Windows VM from scratch using Windows 11 Arm (and even that may not work!)

#### Windows 11 Arm
Luckily, VMware [released Fusion 13.5 in October 2023](https://blogs.vmware.com/teamfusion/2023/10/fusion-13-5-is-live.html) allowing users to run Windows 11 Arm edition which does work on M-series Macs. In fact it works *really* well. 

So why is there a predicament?

Because X86 apps [run under emulation](https://learn.microsoft.com/en-us/windows/arm/apps-on-arm-x86-emulation) on Windows 11 Arm and therefore are not guaranteed to work. I've witnessed apps that run fine with Windows 10/11 on Intel based systems fail to properly register critical DLLs, crippling the app's functionality. In these scenarios, users are forced to keep their Intel-based configurations around until the app developers update their software to be compatible with Arm.

If you think you could potentially be at risk, it's easy to test on an M-series system. Fusion 13.5 can be downloaded as a free trial, and then you can download and install Windows 11 Arm to a fresh VM right from the GUI, giving you ample time to test your proof of concept. 

### The takeaway

If you're an Intel-based Mac user today that relies on Windows virtualization for your productivity, be cautions swapping out your current setup for a new M3 before fully testing your Windows-based apps on Windows 11 Arm. You may very well find yourself having to return that hot new Mac. And that would be pretty scary.

![Scary Mac](/assets/images/scary.jpeg)  