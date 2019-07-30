---
templateKey: blog-post
title: Jamming at the JAMStack London conference 2019
date: 2019-07-10T15:04:10.000Z
description: I visited the JAMStack conference in London on 9-10th of July. Here's how it went down and what JAMStack is about.
active: true
language: en
---

# JAMStack web development architecture and product ecosystem makes building scalable sites fast and easy.

![](/img/jamstack.png)

Already a couple of years ago, I came across the concept of JAMStack, which in short means making super fast sites with Javascript, APIs and Markup in a git-based workflow. There's plenty of info around about the benefits of a JAMStack approach and the suitable use cases. To summarize it here, the approach has many benefits compared to a hosted monolithic web app platform, to which we have gotten used to with likes of WordPress, Drupal, Sitecore and so on. 

![](/img/jamstack1.jpg)
*The conference was full of people, had good swag like free socks and stickers :D*

![](/img/jamstack2.jpg)
*The day was full of interesting talks. One of my favorites was from Ives van Hoorne, who told the story of how they embedded VS code into CodeSandbox.*

The benefits of JAMStack vs a monolitchic architecture are improved security, better site performance, infinite and automatic scalability, simplified infrastructure, totaling into lower cost and better user and developer experience. All this you can imagine benefits hugely on the business adopting this approach.

Compared to let's say LAMP stack, where you have Linux(OS), Apache (Web server), MySQL (Database), Backend and UI controller language (PHP). Now with this setup developers spend a whole lot of time of time basically keeping their development setups up-to-date and really never reaching the point where you would even be close to having the same environment as in production or as the other devs in the team have. Time is spent to take care of databases and their versions and migrations, load balancing, backups, setting up monitoring, firewalls etc. 

Drupal and Wordpress as popular all-in-one monolitchic platforms became good targets for hackers to DDoS and break into as they don't really scale. This isn't a problem with a static site living in a globally distributed CDN, as the site is only made of static assets. A lot more info and resources can be found at https://jamstack.wtf

Now the term *static site* can be a bit misleading as the JAMStack site can be connected to basically any kind of API with Javascript, whether it is an e-commerce backend or a serverless function in AWS for example. To me, the word *static* in this context, means the type of architecture of pre-generated website vs a *dynamic* one, which with a time consuming process would 
1. serve the web page upon request after 
1. picking up the data from a backend and a database, 
1. using an on-the-fly templating logic on the server to generate HTML and then after holding the user for an unnecessarily long time would 🥁
1. send the page as a response.

Now after making a few sites of my own, both smaller and also one bigger for a known brand, I'm super excited of how things are moving forward: new JAMStack specialized products coming to the market which makes starting a new JAMStack site even faster.

 Let's take StackBit for example: with their product you can wizard through which static site generator you like, which theme, which use case (ecommerce, company website etc), which CMS provider and which hosting provider and boom, you've got your app setup with basic skeletons in about 10 minutes. Check out StackBit (https://www.stackbit.com/), loving it. 

Company called Sanity (https://www.sanity.io/) has shown a CMS with even more integrated editor/designer/developer where changes occur real time between CMS and the web app. This really enables better team work with people working on the site simultaneously and gives shorter feedback loop between designers and developers.

And it's not just these upcoming products and companies that make JAMStack possible. You can make a JAMStack site with familiar tech that you already have your infrastructure setup, like AWS or Azure. Basically all you need is your content provided to a static site generator and then deployed to a CDN, which can be found in Azure, AWS or 3rd party like Akamai. Add all the scalable server side functionality with something like Azure Functions or Amazon Lambda or SaaS like Shopify and it's API. Contentful CMS has really been in the front of headless CMSs, something I can highly recommend. If you only have something like a form on a website, there's tons of services to pick up the form submits from the website, to for example be integrated to your Slack or marketing automation. This IS the way modern sites are being built and they are already the modern present and the future.

Now if you have a site in which you're really not happy about, you can turn it into a JAMStack site, no problem. For example Wordpress offers APIs to fetch the data or full data exports, in case your current platform is Wordpress. About a day of development and you should be off to a good start.

So :) attention product owners! Don't put all your eggs in one basket. Pick a decoupled architecture built for speed and best user experience. Your developers will love it too. If you'd like to know more about how to turn your existing site to a JAMStack site, or just starting a new one, drop me a line at [atte@punainentupa.fi](mailto:atte@punainentupa.fi?subject=JAMStack) and let's talk!

Resources:

Jamstack London 2019 conference
https://jamstackconf.com/london/

Stackbit, quick start for JAMStack development
https://www.stackbit.com/

Sanity CMS:
https://www.sanity.io/

The New Dynamic
https://www.thenewdynamic.org/

Interesting talk about site security, reliability and performance:
SmashingConf San Francisco 2016 - Mathias Biilmann: The New Front-end Stack. Javascript, APIs and Markup
https://vimeo.com/163522126