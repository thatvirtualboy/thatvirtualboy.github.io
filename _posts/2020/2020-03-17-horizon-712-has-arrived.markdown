---
layout: post
title:  "VMware Horizon 7.12 Has Arrived"
date:   2020-03-17
tags:
- Horizon
- vmware
- work from home
read_time: true
author: Ryan Klumph
---
![](/assets/images/horizon12/horizon12-hero.png)<br><br>
VMware has just released Horizon 7.12 which is kind of a big deal! Packed with new features and fixes, this release is timely amid a massive increase in the **Work From Home** movement in attempt to _flatten the curve_ of the COVID-19 spread. This release comes alongside publication of additional methods to securely connecting to your office's physical workstations from your home. Let's take a closer look.

## Supporting the Work From Home Movement
First and foremost, if you're still evaluating how to support your remote workers in this WFM movement, be sure to check out the VMware Webinar from today, March 17th, entitled **Pandemic Preparedness and Response: How to Quickly Set Up a Remote Workforce for Success**. [You can register here to view the session](https://www.vmware.com/learn/458214_REG.html?src=AMEROrganicSocial_SocialAdvocacy&src=so_5a314d05e49f5&cid=70134000001SkJn).

VMware's own Graeme Gordon, Senior Staff EUC Architect, published an article today: [Using Horizon 7 to Access Physical Windows Machines Overview](https://techzone.vmware.com/resource/using-horizon-7-access-physical-windows-machines#_Toc35336889) covering the steps and tools required to meet this need in times of natural disasters, emergencies, and public health outbreaks.

Additionally, one method to provide a Cloud-based Virtual Desktop Infrastructure is to take advantage of VMware's [free 45-day trial of Horizon Cloud on Azure](https://www.vmware.com/horizon-cloud-on-microsoft-azure-trial.html).

## Horizon 7.12 What's New 🚀
**ViewAPI now supports pulling Agent Logs**
Horizon 7.10 had introduced the ability to pull Connection Server logs via this method primarily for use with VMware Skyline, but it can be used independently which will be useful for scripting log pulls to attach to open support requests, or otherwise independent troubleshooting. Horizon 7.12 has expanded this ability to the Agent Logs as well.
NOTE: that both options require the `Collection Operation Logs` privilege to be assigned to the service account being used in the API call.

**RESTful APIs for Configuration are here**
New with this release are REST APIs related to _monitoring and configuration_ of a Horizon environment. This will allow you to build scalable automation frameworks and integrate 3rd party products seamlessly across Horizon View Clusters and Pods. Check out https://code.vmware.com/apis/919 for more details.

**Assign multiple users to a single Full Clone Desktop**
Acting as a sort of alternative to a Floating Pool, users can now allow **dedicated machines** to be shared. This capability can come in handy for numerous situations, including shift work, QA and Dev-test groups, or groups with multiple devs/programmers sharing an environment.

**Display Assigned Machine Name**
Enabling this feature will show the hostname of the assigned VM instead of the Pool's display name in the Horizon Client. If you're connecting to a floating pool without assignment, then it will show "display-name (No machine assigned)."

**Persistent MAC address for RDS and Instant Clones on Refresh and Resync**
Certain applications rely on persistent mac addresses (though this is less of an issue than in times past). New with 7.12 is the ability to enable persistent MAC address which will carry the MAC from the older VM to the new one when following the `resync` workflow.



### Horizon 7.12 also comes with a number of Console enhancements
- Mandatory fields are denoted with a red asterisks
- Overall page formatting has been tweaked for consistent looks and experience
- Message banners are all color coded
- Pop-up Errors won't auto-close anymore and must be closed manually
- Dashboard now shows a summary of System Health Issues based on different priority levels
- If you're configured for Cloud Pod Architecture (CPA) you can now see session info for remote pods
- Opening a second Horizon Console tab via a right-click will open to the expected page instead of the newadmin login page.
- New view for monitoring the number of Gateway vs Non-Gateway sessions
- You can now see an indication of how many users are entitled to an application, making it easier for admins to ensure proper assignment
- and more!

### Horizon Client + Agent Updates
- Horizon Agent upgraded from OpenJDK 8 to OpenJDK 11
- Horizon Agent support for Win10 2004 (ETA April 2020)
- Horizon Agent support for Redhat 8.1
- Enable VMware Integrated Printing for HCS on Azure
- iOS 13 SDK used to build iOS Horizon client
- Physical PC support with Windows 1903 and above
- Static Printer Names in RDSH
- Support vmCrypt on Instant Clones with vSphere 7.0
- Pre-launch support for VM Hosted Apps
- FTT=0 SPBM policies to enable single node POCs on VMC

### Horizon for Linux
You know [we love us some Horizon on Linux](https://thatvirtualboy.com/2020/03/12/ubuntu-ova-12-release.html) around here, so we HAVE to highlight what's new for the penguin
- Linux VDI: Upgrade libpng from 1.2.x to 1.6.x
- Linux Client now supports Autoconnect for RDSH USB redirection
- Today, pressing **Ctrl+Alt** then pressing **ESC** exits full screen mode (Linux client 5.3 and older). With 5.4 and later, this will only work when the Client detects Rasberry Pi as the client hardware.  
- Linux Client now has an option to Reset desktop session
- NumLock sync for Linux Client!
- URL Redirection is now available for Ubuntu 16.04 or 18.04, and RHEL 7.7 or 8.1 (x64) using Firefox 50 or later
- Linux Session Collaboration support for RHEL7.5 using KDE

### Resources
Believe it or not, there are STILL more new enhancements and fixes in this release that aren't covered in this post. Over 1300 actually! Check out the official resources for all the documented features and fixes.

📄 [Horizon 7.12 Release Notes](https://docs.vmware.com/en/VMware-Horizon-7/7.12/rn/horizon-712-view-release-notes.html)  
⬇️ [Horizon 7.12 Downloads](https://my.vmware.com/web/vmware/info/slug/desktop_end_user_computing/vmware_horizon/7_12)  
📄 [Horizon Client 5.4 Documentation](https://docs.vmware.com/en/VMware-Horizon-Client/index.html)  
⬇️ [Horizon Client 5.4 Downloads](https://my.vmware.com/web/vmware/info/slug/desktop_end_user_computing/vmware_horizon_clients/5_0)  
