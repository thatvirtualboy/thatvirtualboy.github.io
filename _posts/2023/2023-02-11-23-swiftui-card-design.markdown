---
layout: post
title: "An Apple inspired SwiftUI card design"
categories: [Apple, SwiftUI, CodeAlong]
image: assets/apps/hellothere/codealong1/cover.png
read_time: true
date: 2023-02-11
author: Ryan Klumph
---

What makes SwiftUI so fun is how easy it is to whip together designs that are modern and refreshing. SwiftUI's declarative nature invites developers and designers alike to tweak, adjust, and fine-tune designs with minimal effort.

Recently I came across a neat design in a mock app Apple [demoed during a WWDC22 session](https://developer.apple.com/videos/play/wwdc2022/10001/) and decided to adapt it to my iOS 16 app, [Hello There](https://apps.apple.com/us/app/hello-there-greeting-cards/id1632485298). 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Testing some designs inspired by WWDC videos 👀<a href="https://twitter.com/hashtag/SwiftUI?src=hash&amp;ref_src=twsrc%5Etfw">#SwiftUI</a> <a href="https://t.co/kpuh8ZUYUy">pic.twitter.com/kpuh8ZUYUy</a></p>&mdash; Ryan (@thatvirtualboy) <a href="https://twitter.com/thatvirtualboy/status/1618711445025484800?ref_src=twsrc%5Etfw">January 26, 2023</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

The Apple design (pictured right in the tweet above) takes a single photo and creates two layers:
1. The background layer is highly blurred and slightly magnified 
2. The foreground layer is cropped and filled to the wide rectangle frame

Let's take a look at how to accomplish this. Let's start by picking an image, adding it to our project's **Assets.xcassets** folder, then creating the background layer. In this example, I'm using an image named *"us"*.

![](/assets/apps/hellothere/codealong1/code1.png)
 
This should result in a heaviy blurred instance of your image:

{:style="text-align:center;"}
![](/assets/apps/hellothere/codealong1/image1.png){:height="600px"}

Next, let's work on adding the forground image. Because this image will be presented in front of the background image, we'll want to put both Views in a `ZStack`. Then, we'll use a combination of `VStack`, `HStack` and `Spacer()` to center the image horizontally, and position it to the bottom.

![](/assets/apps/hellothere/codealong1/code2.png)

{:style="text-align:center;"}
![](/assets/apps/hellothere/codealong1/image2.png){:height="600px"}

Already this is coming together! Now we're looking at adding some `Text` and a `Label`. Toss these into some more `VStack` and `HStack` views along with `Spacer()` to position appropriately. You'll want to add this code within your `ZStack` in between the two image Views:

![](/assets/apps/hellothere/codealong1/code3.png)

{:style="text-align:center;"}
![](/assets/apps/hellothere/codealong1/image3.png){:height="600px"}

The final touch to match our design to the source is to add the little `ellipsis.circle` **SF Symbol** to the top right corner. I love using SF Symbols wherever possible - they're easy to integrate, and super flexible to make work in any kind of design. Let's add this little icon to our View by putting the below code inside our `ZStack` at the very bottom:

![](/assets/apps/hellothere/codealong1/code4.png)

{:style="text-align:center;"}
![](/assets/apps/hellothere/codealong1/image4.png){:height="300px"}

Not too shabby! Notice I chose not to change the font -- I stuck with the default options. Go ahead and play around with your final product and see how you can tweak it to your liking.

A similar design inspired by Apple's demo app is debuting in Hello There version 1.3 launching in February 2023, I think it looks pretty good!

I hope you enjoyed coding along. Thanks for reading!    