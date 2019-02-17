---
title: "Learn Docker with these resources"
type: post
date: 2019-02-17
excerpt: A list of resources and projects to help you learn about Docker with a focus on web development.
url: learn-docker
extraContent:
  - {url: "https://www.learnitmyway.com/2016/11/11/learning-material-software-development/", 
  title: "Learning material - software development", extras: "(starting with Intro to CS)"}
  - {url: "https://www.learnitmyway.com/tdd-example/",
  title: "A really simple example of TDD"}
  - {url: "https://www.learnitmyway.com/2017/02/18/how-to-write-a-cv-as-a-software-developer/", 
  title: "How to write a CV as a software developer", extras: "(CV included)"}
---
I initially wanted to learn Docker because of the hype surrounding it but it wasn't until we started using it at work for a web application that I started learning it properly. In this article, I would like to share the resources I discovered that helped me learn about it.

## Assumed knowledge
To get the most out of these resources you should have some experience deploying software and you should be comfortable using the terminal. In the context of web application development, you should also have an understanding of client-server communication. 
If you feel some knowledge is lacking you might get something out of:

* [Linux Essentials Tutorials - FactorPad](https://factorpad.com/tech/linux-essentials/)
* [Client-Server overview - MDN](https://developer.mozilla.org/en-US/docs/Learn/Server-side/First_steps/Client-Server_overview)

## Resources
###  [Docker, FROM scratch - Aaron Powell](https://www.youtube.com/watch?v=i7yoXqlg48M)   
I would recommend starting here to see what Docker has to offer.

* **Type**: Video
* **Length**: 1 hour
    
### [Get started with Docker](https://docs.docker.com/get-started/)
The starting point for the official documentation. I would recommend only doing parts 1 and 2 for now.

* **Type**: Tutorial
* **Length**: <1 hour

### [Get started with Docker Compose](https://docs.docker.com/compose/gettingstarted/)
If you plan on using multiple Docker containers it's worth starting with the official documentation.

* **Type**: Tutorial
* **Length**: <1 hour

### [Dockerizing a React App - Michael Herman](https://mherman.org/blog/dockerizing-a-react-app/)
If you plan on using Docker with your React app this will put you on the right path.

* **Type**: Tutorial
* **Length**: <1 hour
* **Assumed knowledge**: [Learn React with these Resources](https://learnitmyway.com/learn-react-with-these-resources/)

### [Dockerizing a Node.js web app - Node.js Guides](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
This helped me set up a docker container that serves a node.js app.

* **Type**: Guide
* **Length**: <1 hour
* **Assumed knowledge**: [Learn JavaScript with these resources](https://learnitmyway.com/learn-javascript-with-these-resources/)

### [Don’t install Postgres. Docker pull Postgres - Syed Komail Abbas](https://hackernoon.com/dont-install-postgres-docker-pull-postgres-bee20e200198)
This helped me replace a local installation of PostgreSQL with a Docker image.

* **Type**: Article
* **Length**: 4 minutes

## Applying the knowledge
In order to consolidate what I consumed from the above resources, I created the following:

* [docker-node](https://github.com/DeveloperDavo/docker-node) is a Docker container that serves a node.js app.
* [docker-postgres](https://github.com/DeveloperDavo/docker-postgres) is a Docker container that serves as a PostgreSQL database. 
* [docker-nginx](https://github.com/DeveloperDavo/docker-nginx) is a Docker container that serves static content.

## Final thoughts
I wouldn't say I am an expert on Docker but the above resources gave me the confidence to use it in production and make me a more effective developer. I hope it does the same for you!