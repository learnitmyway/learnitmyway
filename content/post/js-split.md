---
title: "JavaScript Split String Example – How to Split a String in to an Array in JS"
type: post
date: 2020-10-18T11:06:45+02:00
excerpt: Learn how to split a string in JavaScript with common examples
url: 
canonical: true
shareImage:
twitterLink:
extraContent:
---

<!--more-->
<!-- og:description -->

Let's drive straight in with some examples!

<!-- TODO: -->
<span>Photo by <a href="https://unsplash.com/@jonflobrant?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jon Flobrant</a> on <a href="https://unsplash.com/s/photos/river?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>

## tldr - too long; didn't read

```javascript
const publisher = 'free code camp'
publisher.split(' ') // [ 'free', 'code', 'camp' ]
```

## Syntax

According to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split), the syntax is `str.split([separator[, limit]])`. Applying this to the above example:

- `str` is `publisher`
- `separator` is `' '`
- there is no `limit`

## When would you need it?

### Example 1: part of a string

Here is a common example, which involves getting the the token from an auth header that is part of [Token-based Authentication System](https://www.okta.com/identity-101/what-is-token-based-authentication/):

```javascript
const authHeader = 'bearer token'
const split = authHeader.split(' ') // (1) [ 'bearer', 'token' ]
const token = split[1] // (2) token
```

This is what's happening:

1. The string is split with `' '` as the separator
1. The second entry in the array is accessed

### Example 2: array methods

Often the input you are given is a string, but you want to apply array methods to it. For example, let's say you are given a string of morse code and you want to see what it spells in English:

```javascript
const morse = '-.-. --- -.. .'
// (1)
const morseToChar = {
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '---': 'o',
}

const morseArray = morse.split(' ') // (2) [ '-.-.', '---', '-..', '.' ]
const textArray = morseArray.map((char) => morseToChar[char]) // (3) [ 'c', 'o', 'd', 'e' ]
const text = textArray.join() // (4)
```

This is what's happening:

1. An object literal is created to map morse chars to the English alphabet
1. The morse code is split into an array with a `' '` as the separator. (Without `' '` as an argument you would end up with an array that has separate entries for each `.` and `-`.)
1. The morse code array is mapped/transformed to a text array
1. A string is created from the array with `''` as the separator. (Without `''` as an argument the output would be `c,o,d,e`.)

## Adding a limit

According to [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split), it is also possible to pass a `limit` as an argument to `split`. I have never needed it but this is how you could apply it:

```javascript
const publisher = 'free code camp'
publisher.split(' ', 1) // [ 'free' ]
```

In the above example, the array is limited to one entry. Without it the value of the array would be `[ 'free', 'code', 'camp' ]`.

---

**Before you go…** 

Thank you for reading this far! I write about my professional and educational experiences as a self-taught software developer, so feel free to check out [my website](https://learnitmyway.com/) or subscribe to [my newsletter](https://learnitmyway.com/newsletter) for more content.

You might also like:

- [Learn JavaScript with these resources](https://learnitmyway.com/learn-javascript-with-these-resources/)
- [Learning material - software development](https://www.learnitmyway.com/2016/11/11/learning-material-software-development/) (starting with Intro to CS)
