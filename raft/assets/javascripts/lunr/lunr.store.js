var store = [{
        "title": "Helpful Hints",
        "excerpt":"Having issues getting multiple DNS servers configured for your Horizon Workspace implementation? Curious how you might configure a proxy setting without having to modify SUSE Linux config files using vi?Dale Carter, an EUC Consulting Architect at VMware has posted a nice little write up answering these and other questions over...","categories": [],
        "tags": ["workspace"],
        "url": "http://localhost:4000/2014/02/03/helpful-hints.html"
      },{
        "title": "How to integrate Horizon View Desktops with Horizon Workspace [Updated]",
        "excerpt":"If you're a system administrator utilizing Horizon Workspace, chances are you also have an existing Horizon View instance. Horizon Workspace makes it easy for admins to integrate their existing View environment into Workspace, giving your users seamless integration and easy access to their entitled desktops.Before we beginThere are a few...","categories": [],
        "tags": ["workspace","view","horizon"],
        "url": "http://localhost:4000/2014/02/03/how-to-integrate-horizon-view-desktops.html"
      },{
        "title": "Use Tags to not lose track of View Linked Clone Replicas",
        "excerpt":"The ProblemIf you've managed a View Linked Clone pool for any amount of time, you probably know the frustration that can come with trying to determine which replica is tied to a particular pool. This information can be especially important when trying to find unused replicas that are hanging around...","categories": [],
        "tags": ["tags","vcenter","management","view","web client","horizon"],
        "url": "http://localhost:4000/2014/02/04/use-tags-to-not-lose-track-of-view.html"
      },{
        "title": "Error Code 500 after rebooting Horizon Workspace",
        "excerpt":"Error Code 500 - You may have seen this \"Cannot display web page\" error after rebooting your Horizon Workspace instance and attempting to login to the Gateway. You may also receive this error randomly after your Workspace has already been running fine for a few days. Related to this error, you...","categories": [],
        "tags": ["ssh","domain controller","workspace","ntp","horizon","time sync"],
        "url": "http://localhost:4000/2014/02/06/error-code-500-after-rebooting-horizon.html"
      },{
        "title": "How to clear a user's \"Auto connect to this desktop\" setting as an admin",
        "excerpt":"When using the Horizon View Client, users are able to select Options &gt; Auto connect to this desktop. This will allow them to enter their credentials upon launching the client, then immediately get passed through to their desktop. The user will no longer be prompted to enter the View Server...","categories": [],
        "tags": ["horizon view","view","horizon","view client","view desktop"],
        "url": "http://localhost:4000/2014/02/07/how-to-clear-user-connect-to-this.html"
      },{
        "title": "New Google+ Community for Horizon Workspace",
        "excerpt":"Come check out the new VMware Horizon Workspace Google+ Group (unofficial). A place for Horizon Workspace admins, users, and enthusiasts to post ideas, tips, questions and answers.","categories": [],
        "tags": ["social","workspace","Google"],
        "url": "http://localhost:4000/2014/02/10/new-google-community-for-horizon.html"
      },{
        "title": "Introducing the Horizon View Configuration Tool",
        "excerpt":"Ever wished you could just deploy an OVA to setup your new View environment? Now you can! Thanks to Marilyn Basanta - a Solutions Management Engineer at VMware! The Horizon View Configuration Tool automates Horizon View 5.3 installation and deployment. It removes the complexities and manual steps required for setting up...","categories": [],
        "tags": ["horizon view","view","horizon","view desktop"],
        "url": "http://localhost:4000/2014/02/26/introducing-horizon-view-configuration.html"
      },{
        "title": "What's compatible with Horizon View 5.3?",
        "excerpt":"I'll bet you didn't know this existed!Have you been wondering what's compatible with Horizon View 5.3 only to find documentation on VMware's website for View 5.2? There's a reason for that...Horizon View 5.3 was originally supposed to be Horizon View 5.2.1 and was changed to 5.3 last minute. Hence, all...","categories": [],
        "tags": ["view53","horizon view","upgrade","horizon"],
        "url": "http://localhost:4000/2014/03/06/what-compatible-with-horizon-view-53.html"
      },{
        "title": "Horizon Workspace 1.8 is out!",
        "excerpt":"As you may have heard, Horizon Workspace 1.8 became GA yesterday. This release hasn't been publicized too much but is a major improvement over the 1.5 release with many bug fixes. Some of the major changes include:Citrix-based Application integration. From the Horizon Workspace User Portal, users can launch Citrix-based applications via XenApp...","categories": [],
        "tags": ["workspace","upgrade","horizon"],
        "url": "http://localhost:4000/2014/03/12/horizon-workspace-18-is-out.html"
      },{
        "title": "Offline upgrades available for Horizon Workspace 1.8",
        "excerpt":"Whether you're running Horizon Workspace 1.5 as a POC, or you restricted it to have internal access by design, admins who deployed Workspace without internet access can rejoice knowing that version 1.8 introduces a method for performing an \"offline\" upgrade. This option was not previously available when upgrading from 1.0...","categories": [],
        "tags": ["workspace","web server","upgrade","horizon"],
        "url": "http://localhost:4000/2014/03/14/offline-upgrades-available-for-horizon.html"
      },{
        "title": "Horizon 6 Announced",
        "excerpt":"If you weren't able to attend the live webcast of the Horizon 6 announcement this morning, keep an eye on Twitter's @vmwarehorizon account for a link to watch it later.Horizon 6 is the latest big news from VMware and is all the buzz for EUC land. There are a number of...","categories": [],
        "tags": ["horizon view","horizon6","announcement"],
        "url": "http://localhost:4000/2014/04/09/horizon-6-announced.html"
      },{
        "title": "Horizon Workspace 1.8.1 Client Update & Heartbleed bug",
        "excerpt":"Last night VMware quietly released a patched Windows and OSX Client for Horizon Workspace 1.5 and 1.8 bringing the client to version 1.8.1. This client release includes an updated OpenSSL 1.0.1g. Alongside the release is a KB with the remediation steps for the Client regarding the pesky CVE-2014-0160 vulnerability.You can...","categories": [],
        "tags": ["update","workspace","heartbleed","1.8.1"],
        "url": "http://localhost:4000/2014/04/18/horizon-workspace-181-client-update.html"
      },{
        "title": "Horizon Workspace 1.8.1 and Heartbleed patch",
        "excerpt":"This day and age marks a great new release bound to get techies everywhere a mouth watering treat (no not that one). VMware released a patch for Horizon Workspace bringing the software to version 1.8.1!Among numerous enhancements and fixes, this patch also includes an update to OpenSSL 1.0.1g which resolves...","categories": [],
        "tags": ["workspace","heartbleed","announcement","upgrade","horizon","1.8.1"],
        "url": "http://localhost:4000/2014/04/21/horizon-workspace-181-and-heartbleed.html"
      },{
        "title": "Logging into Horizon Workspace fails: We were unable to authenticate you",
        "excerpt":"This error can be pesky as it is a bit misleading. The full error will read something similar toWe were unable to authenticate you. Please check your credentials and try again.Furthermore, you may notice whenever you load the Workspace login page a notice at the top that readsIdentity provider's url...","categories": [],
        "tags": ["authentication","workspace","SSL","horizon","login"],
        "url": "http://localhost:4000/2014/05/15/logging-into-horizon-workspace-fails-we.html"
      },{
        "title": "Working with Horizon Workspace Virtual Users and zmprov",
        "excerpt":"One nifty feature of Horizon Workspace is the ability to share files and folders with external users. An \"external user\" could mean one of two things: A directory server user not synced to Horizon Workspace Someone outside of the enterpriseAn invited user is then created as a virtual user in the...","categories": [],
        "tags": ["data-va","user management","workspace","horizon"],
        "url": "http://localhost:4000/2014/05/21/working-with-horizon-workspace-virtual.html"
      },{
        "title": "Accessing Horizon Workspace Gateway-va URL fails with HTTP 404 Error",
        "excerpt":"Symptoms HTTP 404 Error accessing gateway Service-va logs show something similar tocom.vmware.horizon.analytics.exception.HorizonException: Setting up Message Broker connection failed: Connection refused Running df -h on the service-va shows /db as fullCause The internal Postgres Database is full and must be expanded. This article does not apply to Workspace implementations that have an...","categories": [],
        "tags": ["database","postgres","workspace","horizon"],
        "url": "http://localhost:4000/2014/08/01/accessing-horizon-workspace-gateway-va.html"
      },{
        "title": "Plex Server, Virtual Machines, and Google Chromecast",
        "excerpt":"Recently I discovered Plex and its many wonderful capabilities. In looking for an easier way to get my media to my non-smart TV, I found a cheap solution that works extremely well. Now my home setup is not that extravagant. I have a simple Windows 8.1 box. 8GB of RAM,...","categories": [],
        "tags": ["plex","bacon","media server"],
        "url": "http://localhost:4000/2014/08/06/plex-server-virtual-machines-and-google.html"
      },{
        "title": "What's New in VMware Workspace Portal 2.1",
        "excerpt":"VMware's Workspace Portal was just brought to version 2.1. This release comes with some exciting changes and new features that make this the best Workspace release yet.Simplified Deployment - Workspace is now a single VM (still deployed as an OVA). This architectural change makes SO MANY things easier including log...","categories": [],
        "tags": ["workspace","horizon"],
        "url": "http://localhost:4000/2014/09/09/what-new-in-vmware-workspace-portal-21.html"
      },{
        "title": "Installing VMware Workspace Portal 2.1",
        "excerpt":"The Workspace vApp design and deployment has been dramatically simplified in this release. If you've dabbled with Workspace in the past, got frustrated with the vApp complexity, and ended up putting it on the shelf - now's the time to revisit this amazing product.Some things that make Workspace Portal 2.1...","categories": [],
        "tags": ["workspace","horizon"],
        "url": "http://localhost:4000/2014/09/09/installing-vmware-workspace-portal-21.html"
      },{
        "title": "Running Workspace Portal 2.1 in VMware Workstation 10",
        "excerpt":"With the release of Workspace Portal 2.1, the vApp has been reduced to a single VM providing simpler deployment and administration. [See my post What's New in Workspace Portal 2.1] This also means it's extremely easy to run inside of VMware Workstation or Fusion. In this post, we'll be covering...","categories": [],
        "tags": ["lab","workspace","workstation"],
        "url": "http://localhost:4000/2014/09/11/running-workspace-portal-21-in-vmware.html"
      },{
        "title": "How to tell who deleted your Horizon View VM",
        "excerpt":"It's happened to all of us - we go to find a particular desktop in the View Inventory only to find it's not there. You didn't delete, so who did?Luckily we know better than to survey our co-workers - we can confirm from the logs!On the Connection Server, navigate to...","categories": [],
        "tags": ["vmware","protip","administration","horizon view","horizon"],
        "url": "http://localhost:4000/2014/09/12/how-to-tell-who-deleted-your-horizon.html"
      },{
        "title": "How to patch Shellshock in Workspace Portal",
        "excerpt":"VMware has released official bash patches for Horizon Workspace and Workspace Portal to address the recently discovered shellshock bug.Be sure to review kb.vmware.com/kb/2091067 as you must apply the correct patch for your exact version of Workspace.How to tell if your Workspace instance is currently vulnerableTo test, run the following command...","categories": [],
        "tags": ["shellshock","workspace portal","workspace","patches"],
        "url": "http://localhost:4000/2014/10/02/how-to-patch-shellshock-in-workspace.html"
      },{
        "title": "How I built a budget gaming PC for under $400",
        "excerpt":"I had a goal this past year to build a budget gaming PC. Obviously everyone has different budget constraints, but my goal was to keep it under $400 which I was able to accomplish.Here were my other goals for this system:Something with plenty of storage, but not overkillDecent boot times...","categories": [],
        "tags": ["computer","pc","steam","bacon","budget","gaming"],
        "url": "http://localhost:4000/2014/11/01/how-i-built-budget-gaming-pc-for-under.html"
      },{
        "title": "How to setup NGINX as a reverse proxy for Workspace Portal 2.1",
        "excerpt":"Per Workspace Portal's installation guide,During deployment, Workspace is set up inside the internal network. If you want to provide access to Workspace for users connecting from outside networks, you must install a load balancer, such as Apache, nginx, F5, and so on, in the DMZ.This process is unfortunately outside of VMware's Documentation scope as...","categories": [],
        "tags": ["nginx","ssl","workspace","vIDM"],
        "url": "http://localhost:4000/2014/11/20/how-to-setup-nginx-as-reverse-proxy-for.html"
      },{
        "title": "How to remove your License from VMware Horizon View",
        "excerpt":"Licensing Horizon View is quite simple. Grab your key, enter it into the GUI and you're off. What you  might have noticed, however, is that once you've submitted your key, it's as if you've deposited it into a black hole, never to be seen again. Per the licensing section in...","categories": [],
        "tags": ["vmware","administration","ADAM","view","adsiedit","licensing","horizon"],
        "url": "http://localhost:4000/2014/12/12/how-to-remove-your-license-from-vmware.html"
      },{
        "title": "Workspace Portal SSL Certificates [updated for vIDM]",
        "excerpt":"[Updated September 2015] The below process was originally written for Workspace Portal 2.1 and can be applied to vIDM. Any differences in process has been placed appropriately within the post.VMware strongly recommends that you configure SSL certificates that are signed by a valid Certificate Authority (CA) for use by Workspace...","categories": [],
        "tags": ["vmware","workspace portal","ssl","workspace","certs","vIDM","certificates"],
        "url": "http://localhost:4000/2014/12/15/workspace-portal-ssl-certificates.html"
      },{
        "title": "How to customize the \"Download Workspace for Windows\" URL in Workspace\nPortal",
        "excerpt":"If you've found yourself directing users to download the Workspace for Windows Client by telling them to login to Workspace, click their name, and choose \"Download\" only to find it takes them to www.vmware.com.. you're not the only one!Users should be able to download the Windows Client directly by clicking...","categories": [],
        "tags": ["client","workspace portal","administration","workspace"],
        "url": "http://localhost:4000/2014/12/17/how-to-customize-workspace-for-windows.html"
      },{
        "title": "Running the VMware Horizon View Client 3.2 in Ubuntu (and Ubuntu\nderivatives)",
        "excerpt":"Have you ever felt like a Linux user in a Windows VDI world? You're not alone!Any Linux fans that are familiar with the world of VDI know that the VMware View Client for Linux has appeared stuck at version 2.2 for what seems like forever. Then in December of 2014,...","categories": [],
        "tags": ["linux","horizon view","horizon","pcoip","view client"],
        "url": "http://localhost:4000/2015/01/07/running-vmware-horizon-view-client-32.html"
      },{
        "title": "Workspace Portal Administrative Consoles",
        "excerpt":"Workspace Portal has had a few facelifts over the years. Some remember the Horizon Workspace 1.x days of the multi-vm vApp where 5 different VMs were responsible for 5 different services. One difficulty resulting from this architecture was different VMs, with different URLs, that had different settings. This vApp then...","categories": [],
        "tags": ["workspace portal","administration","workspace"],
        "url": "http://localhost:4000/2015/01/26/workspace-portal-administrative-consoles.html"
      },{
        "title": "Workspace Portal, Access Policies, and Kerberos authentication",
        "excerpt":"You've decided it's time to expand your Workspace Portal deployment from internal-only, to also allow external access. You've setup your Load Balancer, gotten your certificates in place, and now you're tasked with configuring internal and external authentication methods.This post covers the configuration needed for Kerberos on internal connections, while allowing...","categories": [],
        "tags": ["sso","workspace","kerberos"],
        "url": "http://localhost:4000/2015/02/09/workspace-portal-access-policies-and.html"
      },{
        "title": "VMware New Releases including vSphere 6.0 and Horizon View 6.1",
        "excerpt":"Today was a busy day for VMware! In the midst of all the noise and chatter, it's easy to get overwhelmed with all the new information. Below is a compiled list of useful KB articles for vSphere 6.0, including upgrade and installation documents, as well as other new product release...","categories": [],
        "tags": ["vsphere6","kbarticle","horizon","newrelease"],
        "url": "http://localhost:4000/2015/03/12/vmware-new-releases-including-vsphere.html"
      },{
        "title": "Fast Lane Support for VMware's Premier Services customers",
        "excerpt":"The latest version of the My VMware mobile application now allows VMware Premier Services customers to open up a Severity 1 SR and get connected to support in minutes. This new feature is called \"Fast Lane Support\" and is now live! Check it out on iTunes: https://itunes.apple.com/us/app/my-vmware/id512689552?mt=8Check it out on Google: https://play.google.com/store/apps/details?id=com.vmware.myvmware&amp;hl=en...","categories": [],
        "tags": ["Apple","Google","app","GSS"],
        "url": "http://localhost:4000/2015/04/02/fast-lane-support-for-vmware-premier.html"
      },{
        "title": "VMware releases vSphere security patches",
        "excerpt":"Calling all non-vSphere 5.5 users. Check out today's new VMware releases which address JRE security vulnerabilities, as well as SKIP-TLS, FREAK, and POODLE.More details in the release notes linked below.VMware vCenter Server 5.0 U3dVMware vCenter Server 5.1 U3aVMware vSphere VUM 5.0 U3dVMware vSphere VUM 5.1 U3aVMware vCenter Orchestrator 5.1.3.1VMware vCloud...","categories": [],
        "tags": ["vmware","vsphere","newrelease"],
        "url": "http://localhost:4000/2015/04/30/vmware-releases-vsphere-security-patches.html"
      },{
        "title": "VMware Labs Hidden Gem",
        "excerpt":"I discovered a hidden gem this morning: docs.hol.vmware.com If you don't know what VMware HOL is, it stands for Hands On Labs. It's an amazing platform that delivers technical guided product training right through your browser. Oh did I mention that it's free? If you're interetested in learning how to setup...","categories": [],
        "tags": ["vmware","labs","hol"],
        "url": "http://localhost:4000/2015/05/27/vmware-labs-hidden-gem.html"
      },{
        "title": "Using OwnCloud with an NTFS file share [Updated]",
        "excerpt":"Trying to use NTFS with your OwnCloud server? You may be running into some challenges.My setup I'm running OwnCloud 8 server in a Linux Mint VM (VMware Workstation) for personal use. It uses a USB 3.0 2TB drive formatted as NTFS and it works pretty darn well.I won't be going...","categories": [],
        "tags": ["linux","bacon","cloud","workstation","owncloud"],
        "url": "http://localhost:4000/2015/05/29/using-owncloud-with-ntfs-file-share.html"
      },{
        "title": "Deploying Linux VDI Pools with Horizon 6",
        "excerpt":"See the updated version for Horizon 7 here.Horizon 6 brought us many exciting changes. One of the more memorable ones is the addition of support for certified Linux Guests. At the time of this writing, Horizon 6 supports RHEL 6.6, Ubuntu 12.04, CentOS 6.6, and Neoukylin 6/6U1.NOTE: newer versions may...","categories": [],
        "tags": ["ubuntu","vmware","linux","horizon6","horizon","vdi"],
        "url": "http://localhost:4000/2015/07/23/deploying-linux-vdi-pools-with-horizon-6.html"
      },{
        "title": "Updating Appliances Offline? Sure!",
        "excerpt":"// This is a guest post by Jeremy (@nakedhitman)[youtube https://www.youtube.com/watch?v=_9OxB_k5a3w]If you are a VMware user that has discovered the joys and simplicity of Virtual Appliances, you have probably run in to applications built on top of VMware Studio's VAMI utilities. VAMI is the background service that provides the administration page for configuring...","categories": [],
        "tags": ["VAMI","vmware","Appliances","Python","Updates","Flings","vApp","VURA","Shameless Plug","Offline"],
        "url": "http://localhost:4000/2015/07/31/updating-appliances-offline-sure.html"
      },{
        "title": "Why an Apple User chose the Pebble Time over the Apple Watch",
        "excerpt":"Hello. My name is Ryan, and I'm an Apple user.. with a Pebble[caption id=\"attachment_322\" align=\"aligncenter\" width=\"660\"] Photo courtesy of Forbes[/caption]Now that we've gotten that out of the way.. I wanted to share my thoughts on why I chose the Pebble Time as my smart watch instead of the Apple Watch....","categories": [],
        "tags": ["pebble","apple","bacon","smartwatch"],
        "url": "http://localhost:4000/2015/08/05/why-apple-user-chose-pebble-time-over.html"
      },{
        "title": "Automating with the Horizon vCO plugin for VMware Horizon Part 1 -\nInstallation",
        "excerpt":"Using the Horizon vCenter Orchestrator (vCO) plugin allows you to automate provisioning tasks, allow end user self-service tasks, configure entitlements and more in VMware Horizon 6 thereby reducing the need for internal email correspondence and exception handling. For a full list of functionality, you'll want to see the Administrator's Guide....","categories": [],
        "tags": ["vmware","vco","view","horizon"],
        "url": "http://localhost:4000/2015/08/06/automating-with-horizon-vco-plugin-for.html"
      },{
        "title": "How to backup and restore the Horizon 6 View ADAM database",
        "excerpt":"The ADAM database is the heart and soul of your Horizon View environment. It contains all sorts of great stuff&nbsp;from Pool inventory, to persistent disk assignment, to licensing information. Long story short, if you lose your ADAM database, you straight up lose. Be a winner and backup your database!Did you...","categories": [],
        "tags": ["database","vmware","ADAM","view","horizon"],
        "url": "http://localhost:4000/2015/08/11/how-to-backup-and-restore-horizon-6.html"
      },{
        "title": "Composer Fault: Virtual Machine with Input Specification already exists",
        "excerpt":"Error During Provisioning: View Composer Fault: Virtual Machine with Input Specification already existsIf you've ever run into this error when composing linked clones with VMware Horizon View Composer, you are very much not alone. This is a common error that ultimately comes down to this: your Composer database already has...","categories": [],
        "tags": ["database","composer","vmware","view","horizon","sql"],
        "url": "http://localhost:4000/2015/08/12/composer-fault-virtual-machine-with.html"
      },{
        "title": "Socialcast: How & Why it Works",
        "excerpt":"Excellent post showing Socialcast in action! Socialcast has transformed how I work on a daily basis and is a critical yet fun way to communicate and collaborate across the entire company. Check out more at socialcast.com","categories": [],
        "tags": [],
        "url": "http://localhost:4000/2015/08/26/socialcast-how-why-it-works.html"
      },{
        "title": "Demystifying Horizon View Certs - Easily install a signed certificate",
        "excerpt":"Horizon View certs giving you a headache? Follow this post to take away the complication and get those servers green! This post will cover installing certs for all versions of VMware View (Horizon).Disclaimer: This post is based off KB 2068666Generate the Certificate RequestWe'll be using the Microsoft Management Console (MMC)...","categories": [],
        "tags": ["vmware","certs","view","horizon","certificates"],
        "url": "http://localhost:4000/2015/08/27/demystifying-horizon-view-certs-easily.html"
      },{
        "title": "VMware Identity Manager (vIDM) Web App Integrations",
        "excerpt":"Our vIDM (FKA Workspace Portal) developers are hard at work delivering SAML-based SSO integration documentation for Web apps and other 3rd party identity provider integrations. Since previous versions of Workspace had a \"This functionality exists.. so good luck!\" mentality, I'm really excited to share a new landing page for these...","categories": [],
        "tags": ["vmware","sso","workspace portal","workspace","sAML","vIDM"],
        "url": "http://localhost:4000/2015/08/28/vmware-identity-manager-vidm-web-app.html"
      },{
        "title": "VMworld 2015 Day 1 Recap and Announcements",
        "excerpt":"HUGE thanks to Doug Davis, Senior Technical Account Manager with VMware for compiling the data!Photon Platform - Introducing the Photon Platform: Purpose-Built for Running Cloud-Native ApplicationsFor DevOps and software as a service (SaaS) organizations, running cloud-native applications at scale requires a container-optimized platform developed for high churn workloads and an...","categories": [],
        "tags": ["vmware","vmworld"],
        "url": "http://localhost:4000/2015/09/01/vmworld-2015-day-1-recap-and.html"
      },{
        "title": "VMworld 2015 Day 2 Recap and Announcements",
        "excerpt":"Once again, big shout out to Doug Davis for compiling the dataTechnology Preview: “Project A2” - Today at VMworld 2015, VMware introduced Project A2, a technology preview showcasing the ability to re-define Windows management and pioneer an approach that is unique in the industry, shifting from a focus on endpoint...","categories": [],
        "tags": ["vmware","vmworld","vmware vmworld"],
        "url": "http://localhost:4000/2015/09/02/vmworld-2015-day-2-recap-and.html"
      },{
        "title": "VMworld 2015 Day 3 Recap and Announcements",
        "excerpt":"Key Highlights Over 9,000 hands-on labs (HOL) completed to date - allowing attendees to explore topics such as SDDC, enterprise mobility and VMware's unified hybrid cloud in real time. 658 customer and partner meetings at the VMworld Briefing Center 120 VMUG leaders met in an open Q&amp;A with Pat Gelsinger,...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/2015/09/03/vmworld-2015-day-3-recap-and.html"
      },{
        "title": "Horizon View Client for Mac Log Collector [Updated]",
        "excerpt":"VMware has a nice KB for collecting diagnostic data for View Products, but the Mac section is a little lacking. As a result, I've often times had to work with Admins and their end-users to try and schedule times we were all available just to collect a simple log bundle.In...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/2015/09/03/horizon-view-client-for-mac-log.html"
      },{
        "title": "VMworld 2015 comes to an end",
        "excerpt":"What an exciting week it's been for VMware, its partners and customers. VMware showed the industry that it's Ready for Any through its strong technology offerings, leading IT into tomorrow. As VMworld San Francisco concludes, check out the overall impact this amazing conference achieved: 23,700 registered attendees, with thousands more tuning in online ...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/2015/09/04/vmworld-2015-comes-to-end.html"
      },{
        "title": "Brand New: VMware Identity Manager now available! (vIDM)",
        "excerpt":"Today VMware released the next evolution of the Workspace Portal (FKA Horizon Workspace) which is now introducing itself as VMware Identity Manager, or vIDM for short. vIDM is offered as both an on-premises solution as well as a hosted solution on vCloud Air. If you're a current Workspace Portal OP...","categories": [],
        "tags": ["vmware","IDaas","vIDM"],
        "url": "http://localhost:4000/2015/09/08/brand-new-vmware-identity-manager-now.html"
      },{
        "title": "Installing the all new VMware Identity Manager (vIDM) 2.4",
        "excerpt":"VMware Identity Manager (vIDM) is the exciting next evolution of Workspace Portal, a critical piece within the Horizon Suite providing application provisioning, self-service catalog, conditional access controls and Single Sign-On (SSO) for SaaS, web, cloud and native mobile applications. Playing a central role in the One Cloud, Any Application, Any...","categories": [],
        "tags": ["vmware","Appliances","IDaas","vIDM"],
        "url": "http://localhost:4000/2015/09/08/installing-all-new-vmware-identity.html"
      },{
        "title": "Upgrading Workspace Portal to VMware Identity Manager (vIDM)",
        "excerpt":"In this post, we'll be upgrading an HA Cluster of Workspace Portal 2.1.1 to vIDM 2.4 per the official documentation instructions. Some technical knowledge of pgAdmin and other tools is assumed in the official guide, so hopefully this post can help fill the gaps.Step 1: Break the HA configuration Upgrading...","categories": [],
        "tags": ["vmware","workspace","vIDM"],
        "url": "http://localhost:4000/2015/09/22/upgrading-workspace-portal-to-vmware.html"
      },{
        "title": "Horizon Collector for Mac now on VMware Flings",
        "excerpt":"I'm happy to announce that my little project to automate collecting Horizon View Client logs for Mac OS X has been published to VMware Flings!Why Horizon Collector for Mac? Currently, the Horizon Client for Windows has a built-in log collection feature. Even the Linux Client has a script that's provided...","categories": [],
        "tags": ["Bash","OSX","Tools","apple","VMware Fling","horizon"],
        "url": "http://localhost:4000/2015/10/13/horizon-collector-for-mac-now-on-vmware.html"
      },{
        "title": "Upgrading vRealize Operations",
        "excerpt":"vRealize Operations (formerly known as vCenter Operations Manager) is an indispensable tool for monitoring a VMware environment. The upgrade process between recent versions is riddled with pitfalls, however. Here, I will cover the process and make notes of all the gotchas so that you can have as smooth of an...","categories": [],
        "tags": ["upgrades","update","vcops","vcenter operations","vrops","management","upgrade","patches","vrealize operations"],
        "url": "http://localhost:4000/2015/10/26/upgrading-vrealize-operations.html"
      },{
        "title": "Why VMware Premier Services?",
        "excerpt":"VMware, not unlike most IT companies, offers multiple tiers of support. Two of which fall under the umbrella of Premier Services. These are the highest tiers available and are currently broken into what's known as Business Critical Support and Mission Critical Support.Both offerings are all about the \"white-glove\" treatment. But...","categories": [],
        "tags": ["vmware","support"],
        "url": "http://localhost:4000/2015/11/05/why-vmware-premier-services.html"
      },{
        "title": "Authentication Chaining in vIDM 2.4.1",
        "excerpt":"VMware Identity Manager 2.4.1 was dropped today with a single publicly documented new feature: Authentication Chaining.For most, this feature alone probably isn't reason enough to upgrade from 2.4.0, but it does offer some pretty granular control over user authentication.&nbsp;So what is Authentication Chaining?Authentication Chaining allows you to enable 2-factor authentication from...","categories": [],
        "tags": ["vIDM"],
        "url": "http://localhost:4000/2015/11/17/authentication-chaining-in-vidm-241.html"
      },{
        "title": "VMware Product Walkthroughs",
        "excerpt":"NSX.. EVO:RAIL.. Virtual SAN.. ever wish you could have a simple one-stop-shop for learning about the latest virtualization technologies? A place to answer the questions of \"Why does this exist\" and \"How can this help me\" or \"If I were interested, what would this cost me?\"Enter Product Walkthroughs.VMware's Product Walkthroughs...","categories": [],
        "tags": ["vmware","education"],
        "url": "http://localhost:4000/2015/12/28/vmware-product-walkthroughs.html"
      },{
        "title": "Understanding Authentication in vRealize Operations",
        "excerpt":"// This is a guest post by Jeremy (@nakedhitman)vRealize Operations offers a number of options for user authentication and permission management, but does not do a great job describing the differences between them and why you should care. Most of the options are fairly easy to understand, but the vCenter authentication source...","categories": [],
        "tags": ["protip","sso","user management","vrops","management","login"],
        "url": "http://localhost:4000/2016/02/03/understanding-authentication-in.html"
      },{
        "title": "Upgrading a Horizon View Environment",
        "excerpt":"The below links assume a Horizon 5.x environment. The same general process should be followed for Horizon 6 using the appropriate documentation. Some prerequisites that I would highly recommend before performing any actual upgrades are:1)      Perform an end-to-end backup of your environment (kb.vmware.com/kb/1008046)2)      Review the Network Port Requirements for View:...","categories": [],
        "tags": ["upgrades","horizon view","horizon6","view","horizon"],
        "url": "http://localhost:4000/2016/02/12/upgrading-horizon-view-environment.html"
      },{
        "title": "Horizon Client 4.0.1 Now Available!",
        "excerpt":"What's New in This Release (Check out the Release Notes Here) for Mac4.0.1 enables TLSv1.0 by default. All other new 4.x features are below: Enabling TLSv1.0 ensures that by default Horizon Client can connect to VMware Horizon Air servers. You do not need to upgrade to Horizon Client 4.0.1 unless...","categories": [],
        "tags": ["vmware","horizon view","view","horizon"],
        "url": "http://localhost:4000/2016/04/01/horizon-client-401-now-available.html"
      },{
        "title": "Virtualizing Applications - which solution is best for you?",
        "excerpt":"Whether you've been tasked with a VDI deployment to include&nbsp;not only desktop virtualization, but application virtualization, or you're simply trying to dust off your Horizon deployment and add some sweet flair, knowing where to invest your time and energy for app virtualization can leave you scratching your head. Hopefully this...","categories": [],
        "tags": ["vmware","administration","view","app","horizon","vdi"],
        "url": "http://localhost:4000/2016/07/14/virtualizing-applications-which.html"
      },{
        "title": "Horizon Client 4.2 Now Available",
        "excerpt":"The bits for VMware Horizon View Client 4.2 have been released as well as all the accompanying documentation. This release is paired with Horizon 7 version 7.0.2 also released today (more posts coming soon for that!) Each major platform has its own release notes and features, so be sure to...","categories": [],
        "tags": ["horizon view","new release","view","horizon","newrelease","vdi"],
        "url": "http://localhost:4000/2016/09/15/horizon-client-42-now-available.html"
      },{
        "title": "Horizon 7 version 7.0.2 Now Available",
        "excerpt":"VMware Horizon 7.0.2 is here with a number of fixes and new features. I will document the upgrade process of my 7.0.0 lab in a separate post, including the Linux Desktops (which haven't been updated since the unmanaged process from Horizon 6) from unmanaged to managed desktops.&gt;&gt;&gt; Release Notes &lt;&lt;&lt;&gt;&gt;&gt; Downloads...","categories": [],
        "tags": ["update","vmware","horizon view","new release","view","patches","horizon","newrelease"],
        "url": "http://localhost:4000/2016/09/15/horizon-7-version-702-now-available.html"
      },{
        "title": "The new iPad Pro 9.7 vs iPad 3",
        "excerpt":"I decided it was finally time. Time to replace the iPad 3 (arguably the worst iPad ever made) with the iPad Pro 9.7 (arguably the best iPad ever made). If you're considering a similar upgrade, I hope you find this post useful!Anyone familiar with the iPad 3 has likely had...","categories": [],
        "tags": ["apple","iOS","bacon"],
        "url": "http://localhost:4000/2016/09/19/the-new-ipad-pro-97-vs-ipad-3.html"
      },{
        "title": "Deploying Linux VDI Pools with Horizon 7 [Updated]",
        "excerpt":"Interested in a pre-packaged Ubuntu OVA for Horizon 7? See my latest project here!:: This post has been updated to included changes for&nbsp;Horizon 7.1&nbsp;and&nbsp;Ubuntu 16.04.&nbsp;Any Horizon 7.1 specific callouts will be in&nbsp;GREEN ::One of the more popular posts on That Virtual Boy&nbsp;has been Deploying Linux VDI Pools with Horizon 6....","categories": [],
        "tags": ["ubuntu","vmware","linux","horizon view","view","horizon","view desktop"],
        "url": "http://localhost:4000/2016/09/27/deploying-linux-vdi-pools-with-horizon.html"
      },{
        "title": "Head over to the TAM Blog",
        "excerpt":"Recently I posted an article over at VMware's TAM Blog about working around Kiosk Mode for an iPad using Horizon. Given there is no official Kiosk Mode for iPads, we work around this using a pre-determined username and password that all kiosk users would use. The iPad is then put...","categories": [],
        "tags": ["vmware","iOS","services","view","horizon"],
        "url": "http://localhost:4000/2016/10/03/head-over-to-tam-blog.html"
      },{
        "title": "Send Time Machine backups to a VM hosted in Windows",
        "excerpt":"I've successfully configured Time Machine backups over my home network using VMware Workstation, Ubuntu, and a 1 TB WD drive. A big thanks to HowToGeek for their Raspberry Pi post&nbsp;for the inspiration and to Netatalk's Wiki.&nbsp;Here we go!:: Prerequisites Windows (using Windows 10 in this tutorial)VMware Workstation (using 12.5 Pro)Linux...","categories": [],
        "tags": ["OSX","ubuntu","apple","linux","bacon","workstation"],
        "url": "http://localhost:4000/2016/11/03/send-time-machine-backups-to-vm-hosted.html"
      },{
        "title": "Horizon Linux VM (pre-packaged) [Updated]",
        "excerpt":"I'm excited to share what I've been working on the last several weeks. Recently I posted over on my Github a new project I'm working called Horizon Linux VM. It's a pre-packaged Ubuntu OVA that automates most of the customization and configuration needed for a Linux Desktop Template to be...","categories": [],
        "tags": ["ubuntu","vmware","linux","view","horizon"],
        "url": "http://localhost:4000/2016/11/16/horizon-linux-vm-pre-packaged-updated.html"
      },{
        "title": "My Top 10 Horizon View Tips",
        "excerpt":"If you're just getting started with managing a Horizon View environment, or&nbsp;if you're&nbsp;looking for ways to make the most of your new environment, then head on over to the&nbsp;VMware TAM Blog&nbsp;to see my Top 10 List for a successful Horizon View deployment. This post covers the basics for the core...","categories": [],
        "tags": ["vmware","view","horizon"],
        "url": "http://localhost:4000/2017/01/17/my-top-10-horizon-view-tips.html"
      },{
        "title": "Horizon 7.1 | Everything you need to know [Updated]",
        "excerpt":"VMware released the highly anticipated Horizon 7.1 this week and there are all sorts of enhancements and new features related to the next-gen virtual desktop infrastructure. Here's your one-stop-shop for everything you need to know.[Update] Check out the new Horizon 7.1 Technical Overview Video on YouTube and ensure sure your...","categories": [],
        "tags": ["vmware","horizon view","new release","view","horizon","newrelease"],
        "url": "http://localhost:4000/2017/03/18/horizon-71-everything-you-need-to-know.html"
      },{
        "title": "Mapping VMware Updates and Tools to Build Numbers",
        "excerpt":"VMware has always branded its software as GA, Update 1, Express Patch 4, etc etc. This makes it easy to discuss features and fixes among employees and customers alike. The challenge, as many of you know, is knowing the exact build numbers that correlate to these upgrades and patches. Those...","categories": [],
        "tags": ["Tools","vmware","administration"],
        "url": "http://localhost:4000/2017/08/07/mapping-vmware-updates-and-tools-to.html"
      },{
        "title": "Download the VMworld 2017 app now!",
        "excerpt":"VMware released today the all-new VMworld 2017 mobile app. The app is free and will work on your phone and tablet. Here are a few things you can do with the app:Get your QR code for express badge check-inWatch breakout session recordings on-demandAdd sponsors, exhibitors, and speakers to your Favorites...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/2017/08/22/download-vmworld-2017-app-now.html"
      },{
        "title": "VMworld US 2017 Day #1",
        "excerpt":"Today marks the official first day of VMworld US as the Welcome Reception and Solution's Exchange opened for all 20k attendees. Everyone here is energetic and excited to get the conference started. The 110 degree weather here in Las Vegas only made the drinks and apps better at the welcome...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/2017/08/27/vmworld-us-2017-day-1.html"
      },{
        "title": "VMworld US 2017 Wrap Up",
        "excerpt":"Sitting at the airport waiting to board allows you time to reflect on all he awesomeness that happened at VMworld US 2017. Product Announcements, Demos and Deep Dives, networking, and of course the Appreciation Party - Las Vegas was overtaken with VM goodness.&nbsp;Day 1 and 2 General Sessions can be...","categories": [],
        "tags": [],
        "url": "http://localhost:4000/2017/08/31/vmworld-us-2017-wrap-up.html"
      },{
        "title": "Using Ubuntu 17.10 For Work",
        "excerpt":"While my MacBook Pro was in the shop (that issue-riddled machine) I found myself in need of a substitute. The iPad Pro is great for quick bursts of productivity and for trips, but for work requiring 8 hours of sitting down at a desk, you just can't find a replacement...","categories": [],
        "tags": ["macos","ubuntu","bacon"],
        "url": "http://localhost:4000/2017/11/14/using-ubuntu-1710-for-work.html"
      },{
        "title": "Plex DVR Postprocessing Script",
        "excerpt":"I've been using Plex DVR the last couple months, testing the Plex Pass and Beta capabilities, and figuring ways to make it a solid solution for me and my family. The DVR aspect works well on the latest Beta release 1.10.0.4523, and the GUI is very simple to use. Setting...","categories": [],
        "tags": ["plex","bacon"],
        "url": "http://localhost:4000/2017/11/28/plex-dvr-postprocessing-script.html"
      },{
        "title": "Goodbye Owncloud, Hello Seafile",
        "excerpt":"I had been an OwnCloud user for several years now. The En0ch team's OwnCloud VM made it easy to deploy and get setup in no time. My configuration was perhaps somewhat unique with the server being a hosted VM and the files being stored on a NTFS drive shared through...","categories": [],
        "tags": ["seafile","storage","bacon","cloud","owncloud"],
        "url": "http://localhost:4000/2018/01/05/goodbye-owncloud-hello-seafile.html"
      },{
        "title": "The Mobile Plex Media Server - Local Streaming on the Go",
        "excerpt":"The mobile Plex Server powered by Pi! The best mobile media streaming solution for those long family road trips. Who cares if your kids have the capacity-starved 16GB hand-me-down phones and tablets from 2012 - this untethered setup allows you to broadcast your Plex Library from literally anywhere.PurposeTo wirelessly stream...","categories": [],
        "tags": ["plex","raspbian","bacon","road trip"],
        "url": "http://localhost:4000/2018/02/04/the-mobile-plex-media-server-local.html"
      },{
        "title": "My Experiences Updating VCSA 6.5a to 6.5 U2",
        "excerpt":"Today we'll be updating my lab's VCSA 6.5a (build 4944578) to version 6.5 Update 2 (build 8307201) which was released&nbsp;&nbsp;May 3 2018. vCenter Server 6.5 U2 includes some backported features of vSphere 6.7 making it a slick update for users not quite ready to move to version 6.7. Some of...","categories": [],
        "tags": ["update","vcenter","vmware","vsphere65","vcsa","upgrade"],
        "url": "http://localhost:4000/2018/05/18/my-experiences-updating-vcsa-65a-to-65.html"
      },{
        "title": "Home Server Update",
        "excerpt":"If you’ve followed this blog for any length of time, you’ve known my home server has served multiple purposes over the years and has been built with simplicity in mind. We’re not talking enterprise grade components or architecture here. I’ve found that many consumer-grade resources work extremely well for my...","categories": [],
        "tags": ["seafile","plex","lab","linux","workstation"],
        "url": "http://localhost:4000/2018/10/10/if-youve-followed-this-blog-for-any.html"
      },{
        "title": "Horizon 7.7.0 has just dropped",
        "excerpt":"VMware Horizon 7.7.0 is now generally available, along with Horizon Apps 7.7.0, and the coinciding Horizon Clients 4.10.0. This release brings support for the brand new vSphere 6.7 U1 and vSAN 6.7 U1!As always, be sure to check out the Known Issues and&nbsp;Resolved Issues&nbsp;in the Release Notes.Horizon 7.7 comes loaded...","categories": [],
        "tags": ["digital workspace","horizon view","new release","horizon","euc"],
        "url": "http://localhost:4000/2018/12/13/horizon-770-has-just-dropped.html"
      },{
        "title": "VMware Recertification Rollback",
        "excerpt":"Whoever thought we'd see this?! VMware made an overwhelmingly well-received change today regarding its VCP Certification program. Effective immediately, VMware is removing the requirement to recertify their VCP certifications within a two-year period. The decision to update and recertify is left up to YOU!We've made some changes to the #VMware...","categories": [],
        "tags": ["vmware","certs"],
        "url": "http://localhost:4000/2019/02/05/vmware-recertification-rollback.html"
      },{
        "title": "VMware Horizon 7.8 is here!",
        "excerpt":"Horizon 7.8 was pushed yesterday, along with version 5.0 of the Horizon Client, App Volumes 2.16, and UEM 9.7. Here's what's new! Links to AppVol/UEM release notes below.Update: check out the technical overview video recently posted!Horizon 7.8 Enhance HTML5 console functionality as we drive toward feature parity with Horizon Admin...","categories": [],
        "tags": ["vmware","linux","horizon","newrelease","vdi"],
        "url": "http://localhost:4000/2019/03/15/vmware-horizon-78-is-here.html"
      },{
        "title": "vROPs for Horizon - Regain Compatibility and Insight into your VDI",
        "excerpt":"If your business happens to utilize VMware Horizon for VDI, and vRealize Operations (vROPs) for infrastructure monitoring, insight, and capacity planning, you may also be a business that uses the vROPs for Horizon Adapter (V4H) to bring that level of insight into your virtual desktop infrastructure. That being the case,...","categories": [],
        "tags": ["vrealize","administration","vrops","monitoring","patches","horizon","vrealize operations"],
        "url": "http://localhost:4000/2019/03/26/vrops-for-horizon-regain-compatibility.html"
      },{
        "title": "Troubleshooting the Zmodo Greet Pro Smart Doorbell",
        "excerpt":"Earlier this year I bought a Zmodo Greet Pro Smart Doorbell. It was cheap, didn’t require a monthly subscription, and had relatively decent reviews. It was a breeze to install, and had it up and running the day it arrived. Fast forward about 1.5 months, and something weird happened.I was...","categories": [],
        "tags": ["bacon"],
        "url": "http://localhost:4000/2019/06/01/troubleshooting-zmodo-greet-pro-smart.html"
      },{
        "title": "Upgrading Seafile Server from version 6 to version 7",
        "excerpt":"In this post I'll cover the process of upgrading Seafile Server from 6.3.4 to 7.0.4. I've been running Seafile Server in an Ubuntu VM on my Linux Server for about a year and a half. Along with using Let's Encrypt's Certbot, it's been an incredibly stable and virtually 'hands off'...","categories": [],
        "tags": ["seafile","linux","web server","upgrade"],
        "url": "http://localhost:4000/2019/08/21/upgrading-seafile-server-from-version-6.html"
      },{
        "title": "VMworld 2019 US Day 1",
        "excerpt":"VMworld US 2019 Day 1 is in the books along with a slew of exciting announcements and developments. Expanded partnerships in hybrid cloud, VMware Tanzu preview, and enhancements to Workspace ONE are just a few of the major announcements that help position VMware as a critical player in today's Enterprise.Day...","categories": [],
        "tags": ["vmware","vmworld"],
        "url": "http://localhost:4000/2019/08/27/vmworld-2019-us-day-1.html"
      },{
        "title": "VMworld 2019 US Day 2",
        "excerpt":"VMworld US 2019 Day 2 has already come and gone, and with it, more developments and exciting action.&nbsp; Day 2 Keynote Speakers&nbsp;&nbsp; Ray O’Ferrell – EVP, Emerging Cloud Native Apps BU, VMwareJune Yang – VP, Product Management and Engineering, VMwareMacros Hernandez, Chief Technologist – Networking and Security, VMwarePurnima Padmanabhan, VP...","categories": [],
        "tags": ["vmware","vmworld"],
        "url": "http://localhost:4000/2019/08/28/vmworld-2019-us-day-2.html"
      },{
        "title": "The vRealize Operations SSL Certificate Expiration Issue",
        "excerpt":"[UPDATE #2 Nov. 18 2019] The KB is available again. Please subscribe to the KB for updates regarding the available .pak files, and engage VMware GSS if you have further questions/concerns.[UPDATE #1 Nov. 18 2019] The linked KB article below has been pulled from public consumption due to an issue...","categories": [],
        "tags": ["vrealize","vmware","vrops","SSL"],
        "url": "http://localhost:4000/2019/11/07/the-vrealize-operations-ssl-certificate.html"
      },{
        "title": "Upgrading AMDGPU 18.50 to 19.30 on Ubuntu 18.04",
        "excerpt":"Hope you find this post helpful. My system is running Ubuntu 18.04.3 LTS with an AMD Ryzen 5 2400g and a separate Radeon RX 570 GPU.Steam gameplay isn't perfect, but it's certainly good enough for my needs (minor screen tearing on most games, but it's not to the point of...","categories": [],
        "tags": ["radeon","ubuntu","linux","gaming"],
        "url": "http://localhost:4000/2019/12/09/upgrading-amdgpu-1850-to-1930-on-ubuntu.html"
      },{
        "title": "Announcing The New Horizon Ubuntu OVA",
        "excerpt":"Several years ago I published a VMware Fling called Ubuntu OVA for Horizon. At that time, Linux in Horizon was still fairly new and not particularly popular. With the recent Windows 7 EOL and complications of managing Windows 10, many organizations are finding themselves interested in providing Linux as a...","categories": [],
        "tags": ["Horizon","Ubuntu","Linux","flings"],
        "url": "http://localhost:4000/2020/03/02/the-new-horizon-ubuntu-ova.html"
      },{
        "title": "Changes to That Virtual Boy blog + vExpert 2020",
        "excerpt":"My blog has gone through a major uplift! When I first started That Virtual Boy, I hosted the blog on Google Blogger. After a few years I migrated to Wordpress because all great blogs are on Wordpress right? 🧐 After realizing Wordpress was not the place for me, I migrated...","categories": [],
        "tags": ["blog","bacon","vExpert"],
        "url": "http://localhost:4000/2020/03/05/blog-on-github.html"
      },{
        "title": "Migrating Blogger to Github Pages via Jekyll",
        "excerpt":"Recently I made the switch from writing on Google’s Blogger platform to Github Pages using Jekyll. It’s been a welcome and refreshing change. A little more on that here… Hopefully this post helps someone on a similar journey. One fellow vExpert suggested I share my experience of the actual migration...","categories": [],
        "tags": ["blog","bacon","vExpert","github","jekyll"],
        "url": "http://localhost:4000/2020/03/09/migrating-blogger-to-github.html"
      },{
        "title": "Don't overlook these awesome vSphere 7 features",
        "excerpt":"vSphere 7 has officially been announced (finally!) and man is this thing going to deliver. VMware vSphere has been, and continues to be, the engine for modernizing infrastructure and applications. And check out that sharp looking logo! Tanzu is (very deservedly) getting a lot of the attention with the vSphere...","categories": [],
        "tags": ["vsphere7","vsphere","vmware","features"],
        "url": "http://localhost:4000/2020/03/10/favorite-vsphere7-features.html"
      },{
        "title": "Ubuntu OVA update for Horizon 7 Now Available",
        "excerpt":"I am so excited to finally be writing this post highlighting the new Ubuntu OVA Fling. After announcing version 1.2 earlier this month, I could barely wait to get the bits and documentation available to the community. I’m happy to announce version 1.2 is now publicly available! One of my...","categories": [],
        "tags": ["Horizon","Ubuntu","Linux","flings"],
        "url": "http://localhost:4000/2020/03/12/ubuntu-ova-12-release.html"
      },{
        "title": "VMware Horizon 7.12 Has Arrived",
        "excerpt":"VMware has just released Horizon 7.12 which is kind of a big deal! Packed with new features and fixes, this release is timely amid a massive increase in the Work From Home movement in attempt to flatten the curve of the COVID-19 spread. This release comes alongside publication of additional...","categories": [],
        "tags": ["Horizon","vmware","work from home"],
        "url": "http://localhost:4000/2020/03/17/horizon-712-has-arrived.html"
      },{
        "title": "How to Work From Home like a Boss",
        "excerpt":"Public health safety is top of mind today and the driving force behind the Work From Home movement amid COVID-19 fears. Both internally and externally I’ve seen a number of questions on how to handle these changes. I’ve been working from home almost exclusively for the past 3 years and...","categories": [],
        "tags": ["bacon","work from home"],
        "url": "http://localhost:4000/2020/03/18/work-from-home-like-a-boss.html"
      },{
        "title": "vSphere 7.0 has landed! Here's some things you need to know!",
        "excerpt":"VMware announced vSphere 7 🚀 last month, and today they’re making it a reality. vSphere 7 with Kubernetes is now Generally Available! 🥳 Here are some things you need to know! Where to start vSphere 7 Mind Map Getting to Know vSphere 7 Services Get Learned 📚 VMware Education Services...","categories": [],
        "tags": ["vsphere","VMware","new release"],
        "url": "http://localhost:4000/2020/04/02/vsphere7-has-landed.html"
      },{
        "title": "The Creo Integrated Development Environment",
        "excerpt":"I’ve had the pleasure of learning iOS Development 📱 on the beautifully architected IDE, Creo, from Creolabs. It’s been such a fun experience, I can’t help but spread the word about this amazing tool. Come take a look! The Quarantine Challenge 💪 COVID-19. At this point so many are tired...","categories": [],
        "tags": ["iOS","development","IDE","Creo"],
        "url": "http://localhost:4000/2020/06/06/creo-integrated-development-environment.html"
      },{
        "title": "Today's new releases from VMware",
        "excerpt":"VMware released a lot of updated software today. For simplicity, I've compiled the new releases and links to their Release Notes below. Enjoy!VMware vSphere 6.0 U1 Customer Experience Improvement Program: The Customer Experience Improvement Program (CEIP) provides VMware with information that enables VMware to improve the VMware products and services...","categories": [],
        "tags": ["vmware","announcement","new release","newrelease"],
        "url": "http://localhost:4000/releasemenu/2015-09-10-today-new-releases-from-vmware/"
      },{
        "title": "New Release Menu Nov 10",
        "excerpt":"VMware is constantly pushing new and updated software which can be a time consuming task to keep track of every new release. And there are lots of products to keep track of. In converstations with customers I often hear, \"Oh when did that come out?\" Or, \"I heard about that version...","categories": [],
        "tags": ["vmware","new release","newrelease"],
        "url": "http://localhost:4000/releasemenu/2015-11-11-new-release-menu-nov-10/"
      },{
        "title": "New Release Menu Nov 23rd",
        "excerpt":"It's that time again, the bi-weekly New Release Menu covering VMware's publicly new and recent releases over the past two weeks. Today's edition delivers 2 Infrastructure releases and 4 EUC releases.Below you'll find the product and it's version, a link to its Release Notes, and the date it was released. Enjoy!vSphere...","categories": [],
        "tags": ["new release","newrelease"],
        "url": "http://localhost:4000/releasemenu/2015-11-22-new-release-menu-nov-23rd/"
      },{
        "title": "New Release Menu Dec 4th",
        "excerpt":"It's that time again, the bi-weekly New Release Menu covering VMware's publicly new and recent releases over the past two weeks.Below you'll find the product and its version, a link to its Release Notes, and the date it was released.Enjoy!App Volumes 2.10 (Nov 24)VMware Tools 10.0.5 (Nov 24)ESXi 6.0 EP4 (Nov...","categories": [],
        "tags": ["vmware","new release","newrelease"],
        "url": "http://localhost:4000/releasemenu/2015-12-04-new-release-menu-dec-4th/"
      },{
        "title": "New Release Menu Dec 21st",
        "excerpt":"Christmas has come early! Buckle up.. because there's been a host of new releases from VMware over the past two weeks.Below you'll find their release date and links to release notes for each release. I hope you find this helpful!Merry Christmas and Happy Holidays!- Ryan&nbsp;vRealizevRealize Orchestrator Plug-in for SRM 6.1...","categories": [],
        "tags": ["new release","newrelease"],
        "url": "http://localhost:4000/releasemenu/2015-12-21-new-release-menu-dec-21st/"
      },{
        "title": "New Release Menu 3.31",
        "excerpt":"Don't like that pesky CVE-2015-7547 vulnerability, also known as glibc? Neither do we!VMware vCenter Server 5.5. Update 3c (March 29)This release of vCenter Server 5.5 Update 3c addresses the glibc security vulnerabilityVMware vCenter Server 5.0 Update 3f (March 29)This release of vCenter Server 5.0 Update 3f addresses the glibc security vulnerabilityVMware vCenter Server...","categories": [],
        "tags": ["new release","newrelease"],
        "url": "http://localhost:4000/releasemenu/2016-03-31-new-release-menu-331/"
      },{
        "title": "Friday New Release Menu: March 13 2020",
        "excerpt":"It’s Friday! 🎉 Which means it’s time for the Friday New Release Menu! 🍽 These posts document VMware’s new and recent releases over the past two weeks.The Release Notes come highly recommended. 🍿Or if sampling is more your style, you can jump in with a VMware eval key (check with...","categories": [],
        "tags": ["new release","release announcement"],
        "url": "http://localhost:4000/releasemenu/2020-03-13-new-release-menu/"
      },{
        "title": "New Release Menu: March 20 2020",
        "excerpt":"It’s Friday! 🎉 Which means it’s time for the Friday New Release Menu! 🍽 These posts document VMware’s new and recent releases over the past two weeks.The Release Notes come highly recommended. 🍿Or if sampling is more your style, you can jump in with a VMware eval key (check with...","categories": [],
        "tags": ["new release","release announcement"],
        "url": "http://localhost:4000/releasemenu/2020-03-20-new-release-menu/"
      },{
        "title": "New Release Menu: April 3 2020",
        "excerpt":"It’s Friday! 🎉 Which means it’s time for the Friday New Release Menu! 🍽 These posts document VMware’s new and recent releases over the past two weeks.The Release Notes come highly recommended. 🍿 Or if sampling is more your style, you can jump in with a VMware eval key (check...","categories": [],
        "tags": ["new release","release announcement"],
        "url": "http://localhost:4000/releasemenu/2020-04-03-new-release-menu/"
      }]
