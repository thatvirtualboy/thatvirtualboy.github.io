---
layout: post
title: "Say hello to Wall•Genie"
categories: [Apple, iPhone, App]
image: assets/images/WallGenie/wallgenie_bento.jpeg
read_time: false
featured: false
date: 2024-5-1
author: Ryan Klumph
---

Introducing Wall•Genie! A magical wallpaper generator for iPhone ✨

I thought it would be fun to combine a post that covers not only the features of Wall•Genie, but also some of the development process, infrastructure, and thought behind the app.

#### TL;DR
- Create gorgeous wallpapers for your mobile devices in seconds with the power of AI.  
- Browse community-made wallpapers and download your favorites.  
- With a focus on simplicity, safety, and a delightful experience Wall•Genie is the easiest way to create and share one-of-a-kind wallpapers.  
- Unlike other wallpaper apps, Wall•Genie incorporates privacy as a first-class citizen.  
- There are no ads, no identity tracking, and no sign-in required.  

<iframe width="560" height="315" src="https://www.youtube.com/embed/G8NIk2D4PKw?si=ZX7C5M92GbXRud-k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
<br>

#### Feature Summary
• Generate custom high res, portrait wallpapers*  
• Save and share your creations with the Wall•Genie community*  
• Unlimited downloads of community wallpapers*  (every 7th wallpaper for free users)  
• Upvote your favorite submissions  
• Built natively, exclusively for iPhone  
• Uses the latest DALL•E 3 modeling for the best image quality and comprehensive stylistic understanding**  

*Requires an active subscription

#### Technical Summary
• Image Model: DALL•E 3 by OpenAI   
   **Wall•Genie may temporarily fallback to DALL•E 2 if rate limits are reached  
• Wallpaper resolutions: 1024x1792 (maximum allowed by DALL•E 3)  
• Minimum iOS Version: 17.0  
• Supported devices: iPhone  


![Examples](/assets/images/WallGenie/examples.jpg)  
## The Development Story

#### The idea
Wall•Genie was developed in an effort to break down barriers for those who don't want to spend time learning things like DALL•E, or Midjourney, or other AI websites/services. I figured that even though some people don't want to bring themselves to learning AI tools, it doesn't mean they aren't interested in the results. And what better way to bring them the results, then from an app.

• I thought it would be cool to be able to generate iPhone wallpapers in seconds from your own iPhone.  
• I thought it would be cool to allow uploading so you could share your creations if you wanted (and conversely, *not* share if you wanted).  
• I thought it would be cool to have others anonymously share feedback through upvotes on your uploads.  

And I wanted to achieve these things as *minimalistically* minded as possible. Both from a development perspective, and a UI perspective.

Furthermore, every wallpaper type app I've ever used, innevitably required me to make an account. I wanted to avoid this. Why? Well for one I'm not interested in mining your information. Second, if *I* don't want to sign up for those kinds of things, why would I make my users do it? And lastly, it's one more great feature to help Wall•Genie stand out among the rest.

>I figured that even though some people don't want to bring themselves to learning AI tools, it doesn't mean they aren't interested in the results.

#### The UI
I love highly functional, minimalistic designs. If I can accomplish a task quickly and with little effort, while also experiencing a pleasing GUI, I'm sold. This was a major driver for Wall•Genie. 

![Full Screen](/assets/images/WallGenie/BlackAndBlue-arrowed.png){:width="40%"}    

First, I wanted the main interface to feature the user-uploaded wallpapers front and center, edge to edge full screen in all their glory. This way you could almost instantly imagine that wallpaper in use on your device. And here lies one of the most fun parts about the app: when you launch Wall•Genie, you're going to see the most recently uploaded community-created wallpaper. From here, you can scroll back in time through all the community-posted walls and enjoy the growing library of content.

Second, I wanted a way for others to somehow share feedback about the uploaded walls. I first thought about building a *Favorites* capability for saving them off, but the more I thought about it, that just seemed too plain. Somewhere along the line, I was reminded of the simplicy of a Reddit post being *upvoted* to show one's approval and I thought, *that's it*! So each uploaded wallpaper has an associated upvote count, which then feeds into the **Popular** view. 

![Upvote](/assets/images/WallGenie/UpvoteButton.jpg){:width="60%"}     

#### Protecting user content
One thing you may have noticed is the inability to take screenshots as a free user. This is an intentional behavior of Wall•Genie in order to protect user-shared content. Only paid customers can create, upload, and download all content in the app, and so they can use the app assured that their participation is with other like-minded users. There is still, however, benefits available to free users.

#### Free wallpapers
With the **v1.1** update, Wall•Genie started allowing free users to also benefit from user-uploaded content. Every 7th wallpaper that gets uploaded is eligible for a free download. No strings attached. These wallpapers are clearly marked via the *download* button when you come across it while scrolling.

![Examples](/assets/images/WallGenie/free.png){:width="60%"}   

##### Popular View
What I love about the Popular view is that it's always changing. The fact that all community shared walls are eligible for voting by all users (free and paid), means that any one of them can climb the ranks. It's a living organism. 

The Popular view was also intentionally designed to show just 9 wallpapers at a time, with the ability to load more if desired. This accomplishes several things: 
1. It demands less of the server backend at load time
2. It allows more of a focus on the presented images without your brain scrolling for the sake of scrolling
3. It looks cleaner on most device screens capping it off and having a few that fits

![Examples](/assets/images/WallGenie/Popular.png){:width="40%"}   

#### The backend
Wall•Genie is a distributed app made possible by several providers and technologies. 

##### Server
The server backend is Glitch.com which hosts all the URL calls like upvoting, calling images, processing uploads, etc. Glitch.com has been great to work with. Both **Echodots** and **Hello There** also use Glitch.com for certain tasks and it's a great lightweight option for indie devs like me.

##### Storage
During development, I was hosting all uploaded wallpapers to my Glitch.com server which worked well in dev and for testing. But in production, there's no way I would be able to keep it configured like this. The `/public/app/` directory where the images were uploaded totalled at 400MB and was nearly half full due to 3rd party package installations. Combine that with the generated wallpapers averaging 5MB a pop, I was running out of space quick. During development, I wrote a function that would delete the 5 oldest wallpapers whenever the directory reached 95% utilization, but again, this would have just been a poor *real world* production experience.  

To avoid these issues and utilize a production-ready solution, I configured a Google Cloud Bucket to host all of Wall•Genie's uploads, which was a relatively simple process. Google Cloud solved all the scaling issues from the embedded images on the server side so that load times of images is way better, and there is virtually unlimited storage space so uploaded wallpapers won't have to be deleted or disappear as usage picks up.

##### Imaging Model
Lastly, OpenAI's DALL•E is at the core making Wall•Genie possible. Using the API, a pre-defined prompt that uses the selections users choose when defining their wallpaper is sent to OpenAI for prcocessing. The resulting image can be downloaded, uploaded, or dismissed, never to be seen again.

#### It's over!
So that's the story of my newest app. Thanks for taking the time to read about it. I think you'd be hard pressed not to find something you like in the content library, which is growing each day. If you happen to enjoy using the app, please take a moment to leave a review on the App Store. It really helps so much! ✌️


💡 [Learn more about Wall•Genie here.](https://thatvirtualboy.com/wallgenie)  
📲 [Download Wall•Genie on the App Store.](https://apps.apple.com/us/app/wall-genie-ai-wallpaper/id6496679681)  

