---
layout: post
title:  The Creo Integrated Development Environment
date:   2020-06-06
tags:
- iOS
- development
- IDE
- Creo
read_time: true
author: Ryan Klumph
---
![](/assets/images/creo/creo_1.png)<br><br>
I've had the pleasure of learning iOS Development 📱 on the beautifully architected IDE, [Creo](https://creolabs.com), from Creolabs. It's been such a fun experience, I can't help but spread the word about this amazing tool. Come take a look!

## The Quarantine Challenge 💪
COVID-19. At this point so many are tired of hearing about it and seeing it flood the news. But the truth is the Coronavirus forced many of us to get creative with our self-sheltering. I've heard of so many people using our quarantine as an opportunity to learn something new, improve something about themselves, advance their education, or simply attempt to stream everything that is possibly streamable.

I set two goals for myself which have been extremely fun (and tasty):

*Goal #1* was to pick up a smoker and learn to smoke my own meats. Chicken wings, Whole Chickens, Brisket, Meatloaf, Pork Butt... I've by no means mastered the art, but let's just say me and my Traeger are no longer strangers!

*Goal #2* was to learn how to create an iOS app. I'm embarrassed to say, I've attempted this several times in the past and ended up throwing my hands up in the air each time shouting "I give up!" This time I was determined given that I apparently had time!

## Choosing the right IDE 🤔
Part of the challenge before was that I would buy into the marketing that Apple's Swift code language and their Xcode IDE is the best way to develop apps. Sure, Swift is certainly easier to learn than many other languages, and I actually really enjoyed learning it.. but I really had a tough time wrapping my head around how to properly use Xcode. Not to mention, every attempt at following a tutorial I found online would inevitably be outdated if it wasn't using the most current release of Swift and XCODE. This made learning the platform even tougher.

This drove me down the road of searching for alternative IDEs and I stumbled onto the concept of "low code" IDEs. Enter Creo.

## Creo is different 👨‍💻
Before I continue, know that this is not an Xcode bashing post. In fact devs who can whiz around Xcode without skipping a beat have my respect and admiration. The fact of the matter is, it isn't for everyone.

Creo's mission is stamped on their [About](https://creolabs.com/company) page:

> Our mission is to change the way people design and develop applications.

From the moment you first launch Creo, you can't help but notice how user-friendly it is.
![](/assets/images/creo/creo_2.png)

Creo features drag-and-drop of items which automatically become objects to be used in your code. The great thing is, you get a live view of the app coming to life as you build it. Even things like images - drop it into your App's assets, and you can call that image from anywhere in the app by its name.

Creo also features built-in database creation and configuration making it insanely fast to start storing and manipulating real data.

Creo features the open source programming language, [Gravity](https://github.com/marcobambini/gravity) which touts a highly modern, efficient, and lightweight multi-platform coding language. Here's what it looks like:

```
class Vector {
	// instance variables
	var x = 0;
	var y = 0;
	var z = 0;

	// constructor
	func init (a = 0, b = 0, c = 0) {
		x = a; y = b; z = c;
	}

	// built-in operator overriding
	func + (v) {
		return Vector(x+v.x, y+v.y, z+v.z);
	}

	// string interpolation support
	func toString() {
		return "[\(x),\(y),\(z)]";
	}
}
```

Another reason Creo is different is the team behind the platform. The Creo team has been undeniably supportive and helpful as I've learned (and continue to learn!) the the ins and outs of the IDE as well as general iOS development principles. World-class product and services from beginning to end.

Check out the [Creo Blog](https://blog.creolabs.com) to learn more about its powerful capabilities and how simple it is to get started. If you've ever considered getting into iOS development but have been intimidated or discovered other blockers, give Creo a try!

[![](/assets/images/creo/creo_icon.png){:height="300px" width="300px"}](https://creolabs.com)<br><br>
