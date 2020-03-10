---
layout: post
title:  "Don't overlook these awesome vSphere 7 features"
date:   2020-03-10
tags:
- vsphere7
- vsphere
- vmware
- features
author: Ryan Klumph
excerpt: "vSphere 7 was just announced with some crazy awesome features. Here are some of my favorites!"
---
vSphere 7 has officially been [announced](https://blogs.vmware.com/vsphere/2020/03/vsphere-7.html) (finally!) and man is this thing going to deliver. VMware vSphere has been, and continues to be, the engine for modernizing infrastructure and applications. And check out that sharp looking logo!

![image](/assets/images/vsphere7.png)

Tanzu is (very deservedly) getting a lot of the attention with the vSphere announcement, but there is a LOT to this new release. Here are some of my favorite new features:

### 1. Scalability Enhancements (6.7 vs 7.0)
vCenter Server is increasing from 2000 hosts/25,000 VMs cap to 2500 hosts and 30,000 VMs (powered on). Linked mode maximums are also increasing from 5000/50,000 to 15,000/150,000 hosts/VMs.

Interestingly enough vCenter Server to vCenter Server Latency is slightly increasing:
* VC to VC: going from 100ms to 150ms
* VC to ESXi: 150ms to 150ms
* vSphere Client to VC: 100ms to 100ms

NOTE: vCPU and vRAM maximums aren't changing in the GA release of vSphere 7.

Check out the [VMware Configurations Maximums portal](https://configmax.vmware.com/) for all the latest maximums and limits

### 2. Multi-homing support
vCenter Server 7 now supports multi-homing configurations! This means your VC can have multiple NICs (up to 4 is supported) for a variety of configuration options.

### 3. vSphere Health is now Skyline Health for vSphere
Following suit of consolidation and integration of solutions, we're now seeing Skyline natively in vCenter which is taking over the Health portion. Skyline is free to all VMware customers. This new integration will allow direct access to Skyline Advisor for a proactive support experience.

You can read more [here](https://blogs.vmware.com/vsphere/2019/11/introducing-vmware-skyline-health-for-vsphere.html)

### 4. Simplified Certificate Management
Guaranteed to inspire a standing ovation, vSphere 7 has dramatically simplified the certificate management process, doing away with the complexity of cert management we've come to know. ESXi services also use a common cert!

### 5. vMotion + DRS Improvements
vMotion and DRS are datacenter management staples. We couldn't imagine managing an enterprise environment without them. With vSphere 7, they're getting smarter:

**DRS**
DRS Logic used to run in such a way where it looked at cluster balance by ESXi resource utilization, and attempted to move workloads around using vMotion to level the playing field. In vSphere 7, DRS now computes a _VM DRS Score_ and assigns it to an ESXi host and will move a Virtual Machine to the host that provides the highest VM DRS Score. This method allows DRS to focus less on evening the playing field, and more on the metrics that matter most to VM performance.

**vMotion**
vMotion logic is also greatly improved in vSphere 7. The new vMotion can support significantly more demanding workloads and systems with large compute footprints. Systems like SAP HANA and Oracle DBs backends can now be vMotioned with ease.

### 6. Quickview of vCenter Details
Sometimes feature that "should have been been there all along" are the best kind. Now when you click at the top level of a vCenter Server, you can see the VC Version, Build, the Last Updated date, AND the last file-based backup date!

![image](/assets/images/vc-deets.png)

This is only the tip of the ice burg. There are plenty of other new features and capabilities in vSphere 7, and we haven't even touched on Profiles, Kubernetes, etc.

<iframe width="560" height="315" src="https://www.youtube.com/embed/XKgrJXN6Q0U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Be sure to check out the official announcement linked above, as well as the many other #vExpert Community posts covering this exciting release.
