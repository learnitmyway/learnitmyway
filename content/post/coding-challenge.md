---
title: "Front-end coding challenge"
type: post
date: 2020-01-12
excerpt: 
url: coding-challenge
canonical: true
extraContent:
  - {url: "https://learnitmyway.com/learn-ds-algorithms/",
  title: "Learn Data Structures and Algorithms with these resources"}
  - {url: "https://learnitmyway.com/learning-material-software-development/",
  title: "Learning material – software development", extras: '(a list of learning resources, starting with Introduction to Computer Science)'}
publisherInfo: 
---


42 Motors is a fictional company that sells cars. After conducting some user research they have realised that their current website is not as user-friendly as they would like. Due to old tech and an insurmountable amount of tech debt, they have decided to build a new front end from scratch. They have hired you to build their first feature.

<!--more-->
<!-- og:description -->

## User story

**As a** 42 Motors vehicle owner  
**I want** to see all actions performed on my car  
**so that** I can see which data has been saved  

### Business context

Data transparency is very important to our users. This is why they want to be able to see the data we have stored related to the way they interact with their car. In future, users will be able to delete their data.

### Mockups

#### mobile

![mobile screens](https://res.cloudinary.com/developerdavo/image/upload/v1578815774/learnitmyway/Screen_Shot_2020-01-12_at_8.54.37_am_wqga4j.png)

#### min-width: 600px

![screens with min-width: 600px](https://res.cloudinary.com/developerdavo/image/upload/v1578815774/learnitmyway/Screen_Shot_2020-01-12_at_8.55.05_am_vrrfoa.png)

### Acceptance criteria

- The user can see the type, date (see the format in mockups) and status of each action performed on their vehicle
- The user should see a message if there are any errors fetching actions
- The user should see a message if the response is empty

### Technical details

- The [Endpoint](https://forty-two-motors.herokuapp.com/actions) to get the data from. (The first call might be a bit slow)
- [moment.js](https://momentjs.com/) will help with date formatting

### Submission instructions

- Choose your technology. I am most comfortable with React, but this shouldn’t matter
- Once you have finished the challenge please send a link to your code along with your git history to developerdavo[at]gmail.com and I will give you feedback!
