---
layout: post
title:  "Migrating Blogger to Github Pages via Jekyll"
date:   2020-03-09
tags:
- blog
- bacon
- vExpert
- github
- jekyll
author: Ryan Klumph
read_time: true
---
Recently I made the switch from writing on Google’s Blogger platform to Github Pages using Jekyll. It’s been a welcome and refreshing change. A little more on that [here](/2020/03/05/blog-on-github.html)... Hopefully this post helps someone on a similar journey.

One fellow vExpert suggested I share my experience of the actual migration process:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">you should blog about using Jekyll to migrate the content to github pages :D</p>&mdash; Dean L. (@saintdle) <a href="https://twitter.com/saintdle/status/1235601408046411776?ref_src=twsrc%5Etfw">March 5, 2020</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I had found several blogs with similar documented processes, but nothing that met all the variables of my specific situation. My setup was a **Blogger site, using a custom domain provided by GoDaddy** with content and images hosted on Google Services. My target platform was **Github Pages using the same custom domain from GoDaddy while moving away from Google Services** (hosted images/content). Here are the steps I took:

## Step 1: Setup And Configure Jekyll
This process is pretty well documented. No need to reinvent the wheel - I followed a combination of the below resources:

[jekyllrb.com/docs/](https://jekyllrb.com/docs/)

[onextrapixel.com/start-jekyll-blog-github-pages-free/](https://onextrapixel.com/start-jekyll-blog-github-pages-free/)

[smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/)

## Step 2: Download Your Blogger Content
Also well [documented](https://support.google.com/blogger/answer/41387?visit_id=637193239921732274-2409251499&rd=1). Login and snag your XML backup

![image](/assets/images/blogger_migration/blogger_export.png)

## Step 3: Create Your Github Pages Site
Again, plenty of content here

[pages.github.com](https://pages.github.com)

[help.github.com](https://help.github.com/en/github/working-with-github-pages/getting-started-with-github-pages)

[smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/](https://www.smashingmagazine.com/2014/08/build-blog-jekyll-github-pages/)


## Step 4: Publish Your Jekyll Site to Github

```
~$git add --all

~$git commit -m "Initial commit"

~$git push -u origin master
```

## Step 5: Import Your Blogger Content
After configuring Jekyll with my theme and serving the site locally on my system for staging content, I already knew Jekyll was a powerful platform. However it wasn’t until I followed their documentation for importing my Blogger posts that I was floored about Jekyll’s capability.

The import was as simple as running `Jekyll import` and suddenly 100 articles were added into my `_posts` folder, formatted to a compatible HTML. Check out the [official docs](https://import.jekyllrb.com/docs/home/) for setting it up. I just had to simply run

```ruby
$ ruby -r rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::Blogger.run({
      "source"                => "/path/to/blog-MM-DD-YYYY.xml",
      "no-blogger-info"       => false,
      "replace-internal-link" => false,
    })'
```

As great as this was, their were 2 issues:

1. The post previews when scrolling through my main site showed HTML code - definitely not pretty to look at.
	* This was fixed by using the **excerpt** feature of my Jekyll theme. If I added this component to my [front matter](https://jekyllrb.com/docs/front-matter/), then that’s what would be displayed on my main site for the post previews instead of the entire post itself. You can see this my visiting my home page and seeing the blurbs for each post. So yes, I painstakingly went and added an excerpt for each and every one of my posts. Worth it!

2. The second issue I found was that the URL format of my Github Posts were slightly different from how Blogger formatted their URL. For example, Blogger would format posts like

> thatvirtualboy.com/YYYY/MM/title.html

whereas Jekyll adds the day:

> thatvirtualboy.com/YYYY/MM/DD/title.html

This was obviously a problem for maintaining post rankings in Search Engine Results. If someone clicked on one of my articles that had been migrated, they would end up with a 404 error. After a bit of digging I discovered a Ruby Gem called [Jekyll Redirect](https://github.com/jekyll/jekyll-redirect-from). This nifty nugget allows you to put in the header section what URL should redirect to that specific page. This section of the front matter looks something like this:

```
blogger_orig_url: https://www.thatvirtualboy.com/2018/02/the-mobile-plex-media-server-local.html
redirect_from: /2018/02/the-mobile-plex-media-server-local.html
```

Yet again, I painstakingly added this to each article that was migrated. And yet again, was worth it!

## Step 6: Update Global DNS
The last step I had to configure was getting Global DNS updated so everything would route properly. I had updated my CNAME with GoDaddy and removed my A records pointing to Google servers, but after waiting 24 hours and the site was still down I figured something was wrong. I eventually found [this post](https://hackernoon.com/how-to-set-up-godaddy-domain-with-github-pages-a9300366c7b) which helped me get to the bottom of the issue and found how to properly configure the new A Records.

There was one A record leftover that I couldn't get rid of, and when I performed dig on my site, it would only show this record, not the Github specific ones I had added. I learned that I needed to scroll all the way down in my Manage DNS page and remove the **Forwarding** configuration that was There

![image](/assets/images/blogger_migration/godaddy.png)

After this the site was up and functional! I'm excited to continue writing more this year. Thanks for your support!
