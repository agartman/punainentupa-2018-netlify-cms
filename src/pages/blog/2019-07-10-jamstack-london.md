---
templateKey: blog-post
title: Jamming at the JAMStack London conference 2019
date: 2019-07-10T15:04:10.000Z
description: I visited the JAMStack conference in London on 9-10th of July. Here's how it went down.
active: true
language: en
---

# The new JAMStack product ecosystem makes building scalable sites fast and easy.

![](/img/jamstack.png)

Already a couple of years ago, I came across the concept of JAMStack, which in short means making super fast static sites with Javascript, APIs and Markup in a git-based workflow. There's plenty of info around about the benefits of a JAMStack approach and the suitable use cases. To summarize it here, the approach has many benefits compared to a hosted monolithic web app platform, to which we have gotten used to with likes of WordPress, Drupal, Sitecore and so on. The benefits are improved security, better site performance, infinite and automatic scalability, simplified infrastructure, totaling into lower cost and better user and developer experience. All this you can imagine benefits hugely on the business adopting this approach.

The benefits are easy to see when looking at fallbacks of monolithic solutions. Compared to let's say LAMP stack, where you have Linux(OS), Apache (Web server), MySQL (Database), Backend and UI controller language (PHP). Now with this setup developers spend huge amounts of time basically keeping their development setups up-to-date and really never reaching the point where you would even be close to having the same environment as in production or as the other devs in the team have. You have to take care of load balancing, backups, setting up monitoring, firewalls etc. Drupal and Wordpress as popular all-in-one monolitchic platforms became good targets for hackers to DDoS and break into as they don't really scale. This isn't a problem with a static site living in a globally distributed CDN, as the site is only made of static assets.

Now after making a few sites of my own, both smaller and also one bigger for a known brand, I'm super excited of how things are moving forward: new products coming to the market which makes starting a new JAMStack site even faster. Let's take StackBit for example: with their product you can wizard through which static site generator you like, which theme, which use case (ecommerce, company website etc), which CMS provider and which hosting provider and boom, you've got your app setup with basic skeletons in about 10 minutes. Check out StackBit, loving it.

Company called Sanity has shown a CMS with even more integrated editor/designer/developer where changes occur real time between CMS and the web app. This really enables better team work with people working on the site simultaneously and gives shorter feedback loop between designers and developers.

And it's not just these upcoming products and companies that make JAMStack possible. You can make a JAMStack site with familiar tech that has an established share in the market. Basically all you need is your content provided to a static site generator and then deployed to a CDN. Add all the scalable server side functionality with something like Azure Functions or Amazon Lambda. Contentful CMS has really been in the front of headless CMSs, something I can highly recommend. If you only have something like a form on a website, there's tons of services to pick up the the form post and integrate to your Slack or marketing automation for example.

Now if you have a site in which you're really not happy about, you can turn it into a static site no problem. For example Wordpress offers APIs to fetch the data or full data exports.

Attention product owners! Don't put all your eggs in one basket. Pick a decoupled architecture built for speed and best user experience. If you'd like to know more about how to turn your existing site to a JAMStack site, or just starting a new one, drop me a line at [atte@punainentupa.fi](mailto:atte@punainentupa.fi?subject=E-commerce) and let's talk!
