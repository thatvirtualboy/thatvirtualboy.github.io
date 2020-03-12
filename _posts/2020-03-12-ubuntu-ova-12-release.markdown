---
layout: post
title:  "Ubuntu OVA update for Horizon 7 Now Available"
date:   2020-03-12
tags:
- Horizon
- Ubuntu
- Linux
- flings
read_time: true
author: Ryan Klumph
excerpt: "This update brings a much needed refresh to the Ubuntu OVA Fling, including a Developer Desktop Package. Now built from Ubuntu 18.04.4 LTS, this template is compatible with vSphere 6.7 and later."
---
I am so excited to finally be writing this post highlighting the new Ubuntu OVA Fling. After [announcing](_posts/2020-03-02-the-new-horizon-ubuntu-ova.markdown) version 1.2 earlier this month, I could barely wait to get the bits and documentation available to the community. I'm happy to announce version 1.2 is now publicly available!

![image](/assets/images/New Horizon Linux VM/ubuntu-ova-12-banner.png)

One of my personal goals for the year 2020 was to revisit the Ubuntu OVA Fling and make it relevant again. The last release was from 3 years ago! Those 3 years have led us to this point in IT where [Kubernetes is king](https://www.vmware.com/products/vsphere.html) in the app modernization playing field. Windows is [losing ground](https://vmware.github.io/photon/) in the datacenter. Open source [is proliferating](https://blogs.vmware.com/opensource/2019/12/18/2020-open-source-predictions/). With each new year comes even more change in the datacenter landscape. And with that, we've also seen an increase of interest in [VMware Horizon for Linux](https://www.vmware.com/products/horizon/horizon-linux.html).  

A quick survey of VMware Horizon Admins looking to provide Linux desktops to their user base reveals two interesting use cases:

1. **Developer Desktops** was the most common use case expressed
2. **Moving away from Windows** was the second most voiced reason for interest in Linux VDI

Since most VDI admins historically have little to no Linux experience, this Fling set out to ease the transition to Linux VDI in VMware Horizon by automating much of the initial required template configuration. Not to mention building pools of user-friendly Ubuntu Desktops can assist in lowering per-desktop licensing costs.

After 3 years of ~~neglecting~~ version 1.1 gathering dust with dated Horizon and vSphere support, 3 years of change in the industry, 3 years of rising developer needs, it was time we refreshed the tool.

### What's New in v1.2
* Support for Horizon 7.11 and later
* Support for vSphere 6.7 and later
* Updated OVA base image to Ubuntu 18.04.4 LTS
* Updated Virtual Hardware to v14
* Added option to configure static networking
* Added support for USB 3.0 and USB Redirection (via linux-agent-installer.sh)
* Added KDE Desktop Environment Option
* Added Gnome Desktop Environment Option (recommended)
* Developer Desktop Package option
* Added Keyboard Layout Option
* Added option to enable SSH
* Removed runlevel 5 setting (deprecated)
* Fixed MOTD prompt code
* Disabled auto software updates
* Removed greeter modifications to support SSO
* Numerous improvements to script
* Script renamed to 'optimize.sh'


### Developer Desktop Package
One new feature in this release is the _Developer Desktop package_. Given the No. 1 Use Case for Admins offering Linux Desktops is to meet Developer needs, it makes sense to offer a jumpstart by providing common dev tools. I have to stop and give major props to my colleague [Robert Guske](https://twitter.com/vmw_rguske) for suggesting the idea and helping me test.

For the 1.2 release, the Developer Desktop Package includes the following:
* snapd
* VSCode
* Docker
* Kind
* Octant
* zsh + ohmyzsh
   * NOTE: users will need to be added to `/etc/passwd` in order to set zsh as default shell

If there are other developer-specific tools you'd like to see in future releases, please share your feedback!


### Join the conversation
Alongside this release, we now have a Slack presence on [VMware {CODE}](https://code.vmware.com/web/code/join). Come say hi 👋 and engage with the community! You can find us at our new channel [#ubuntu-ova-for-horizon](https://vmwarecode.slack.com/archives/CV56WUL84).

### Where to get it
1. [OVA Download](https://flings.vmware.com/horizon-ova-for-ubuntu)
2. [Documentation](https://github.com/thatvirtualboy/horizon-linux-vm)



Please check out the Doc link above for details, instructions, and troubleshooting tips. Thanks to everyone involved who tested and provided input. Don't forget to join the VMware {CODE} community!
