---
title: "Gatsby vs Hugo, a detailed comparison"
type: post
date: 2018-07-28
excerpt: 
  "In this article, I compare two static site generators, Gatsby and Hugo. I discuss framework familiarity, stability, security, tooling, build speed, performance and the community surrounding both."
url: /gatsby-vs-hugo/
extraContent:
  - {url: "https://learnitmyway.com/how-i-release-updates-to-my-personal-website/", 
  title: "How I release updates to my personal website"}
  - {url: "https://www.learnitmyway.com/2016/11/11/learning-material-software-development/", 
  title: "Learning material - software development", extras: "(a list of learning resources, starting with Introduction to Computer Science)"}
  - {url: "https://www.learnitmyway.com/2017/02/18/how-to-write-a-cv-as-a-software-developer/", 
  title: "How to write a CV as a software developer", extras: "(CV included)"}
---
_In this article, I compare two static site generators, Gatsby and Hugo. I discuss framework familiarity, stability, security, tooling, build speed, performance and the community surrounding both._

<!--more-->

Almost a year ago I changed my website from Wordpress to [Hugo](http://gohugo.io/), which is a static site generator written in Go and uses Go's template libraries for templating. I have recently done a viability assessment of [Gatsby](https://www.gatsbyjs.org/), another static site generator written in React and uses React for templating. In this article, I compare the differences between Hugo v0.42 and Gatsby v1.93. For the comparison, I used [this Hugo site](https://learnitmyway-hugo.netlify.com/) and [this Gatsby site](http://learnitmyway-gatsby.netlify.com/). The code for each can be found on Github for [the Hugo site](https://github.com/DeveloperDavo/learnitmyway/tree/gatsby-vs-hugo) and for [the Gatsby site](https://github.com/DeveloperDavo/learnitmyway-gatsby).

## Framework familiarity
If you are not familiar with React and you don't plan on learning React, then you should probably choose Hugo. If you know and like React, should you choose Gatsby? Well, not necessarily. I would argue that you need a decent understanding of React (see [Learn React with these Resources](https://learnitmyway.com/learn-react-with-these-resources/)) if you want to use Gatsby and in order to understand React you need a decent understanding of JavaScript (see [Learn JavaScript with these resources](https://learnitmyway.com/learn-javascript-with-these-resources/)). 

Even though I have been using Hugo for almost a year now it wasn't necessary for me to understand Go and I only had to learn a little bit about Go's template libraries. However, I did find that I had to refer to the documentation more often with Hugo because of my lack of familiarity. Gatsby requires a deeper understanding of React than Hugo expects of Go. Nevertheless, if framework familiarity were the only criteria I would choose Gatsby because it's nice not to have to refer to the documentation while adding new features to my website.

## Stability
One way of assessing stability would be to compare [Hugo's issues on GitHub](https://github.com/gohugoio/hugo/issues) with [Gatsby's issues on GitHub](https://github.com/gatsbyjs/gatsby/issues) and you will see that a Gatsby has more features, which is exciting, and more bugs, which is not so exciting. I initially did not consider stability as a criteria until I found [this bug](https://github.com/gatsbyjs/gatsby/issues/6392#issuecomment-404444341) and that made me realise the importance of stability in software. I may be taking this one personally because of the time and effort I expended trying to find that bug, but I still think Hugo is more stable than Gatsby.

## Security
Gatsby uses JavaScript and JavaScript applications are notorious for needing a lot of node modules to run. There is even a node module that [sends Hot Pocket tweets](https://medium.com/@jdan/i-peeked-into-my-node-modules-directory-and-you-wont-believe-what-happened-next-b89f63d21558) and another that [harvests credit card numbers](https://hackernoon.com/im-harvesting-credit-card-numbers-and-passwords-from-your-site-here-s-how-9a8cb347c5b5) :D. Static sites tend to be more secure by nature but I still think it is worth mentioning that more dependencies result in more code that you might not trust.

## Tooling
Gatsby has all the advantages of the [JavaScript toolchain](https://www.npmjs.com/search?q=Gatsby) and all the disadvantages of [JavaScript fatigue](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4). On top of that, Gatsby has a really nice [plugin library](https://www.gatsbyjs.org/plugins/). In particular, [gatsby-plugin-offline](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-offline) allowed me to easily add offline capabilities to my website, which I still haven't figured out how to do with Hugo. On the other hand, some things that require a plugin with Gatsby just come out of the box with Hugo. For example, [gatsby-plugin-react-helmet](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-plugin-react-helmet) is needed to edit the head tag, whereas this can be done with simple HTML in Hugo. Since I enjoyed using the tooling that came with Gatsby, I give this one to Gatsby.

## Build speed
Hugo is able to build my website without any additional tooling in less than 100ms. Gatsby is able to build my website in about 15 seconds but this does include a lot of additional tooling. Adding [PostCSS](https://github.com/postcss/postcss) and [Imagemin](https://github.com/imagemin/imagemin) to the Hugo build bumps the build time up to about 5 seconds. Watching for changes during development was also faster using Hugo. I think Hugo is the winner here.

## Documentation
Both Gatsby and Hugo have really nice documentation.  Hugo has a [Quick Start](https://gohugo.io/getting-started/quick-start/) and Gatsby has a [Getting Started](https://www.gatsbyjs.org/docs/) section and Gatsby also has a really nice [tutorial](https://www.gatsbyjs.org/tutorial/), which evens out the steeper learning curve. Personally, I found it easier to get started with Gatsby but that is because I already understood React. I think it is fair to say that both Hugo and Gatsby have great documentation.

## Performance
Using [Lighthouse](https://developers.google.com/web/tools/lighthouse/) the performance score was 100 for my site in Hugo and 95 for my site in Gatsby. The First Contentful Paint for a 3G connection was about 1 second for the Hugo site and 1.5 seconds for the Gatsby site. Using [Web Page Test](https://www.webpagetest.org/) the load time on a 2G connection was [8.7 seconds in Hugo](https://www.webpagetest.org/result/180722_Y6_19710626850f2326f4610b156398dbf0/) and [11.7 seconds in Gatsby](https://www.webpagetest.org/result/180722_PJ_fa010df1c51f603586ee9c04f2abd558/). However, doing a simple manual test to see which site loads first, Gatsby was noticeably faster, so I don't really understand what Lighthouse or Web Page Test was measuring. Furthermore, as Gatsby is a Single Page App, navigating within the website does not require a request from the server, pages are just re-rendered with JavaScript. Anyhow, I can say with certainty that both Hugo and Gatsby are fast. I would be interested to hear your thoughts in the comments below.

## Community
Gatsby is gaining popularity very quickly, which comes with a thriving community. That is not to say that Hugo’s community is boring. If GitHub stars are anything to go by, Hugo has more than 27 thousand and Gatsby has more than 23 thousand. On Twitter, Gatsby seems to be more active than Hugo.

## Final thoughts
So which one should you choose? Gatsby uses React, which I am more familiar with, it has better tooling and it has a thriving community. On the other hand, Hugo is more stable and spends less time building. For larger websites build speeds become more important and some of you might not care for React at all. In my case, stability was the most important criteria, so I decided to stick with Hugo. I am very excited to see what the future brings in this space.
