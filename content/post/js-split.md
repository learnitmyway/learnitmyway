---
title: "JavaScript Split String Example – How to Split a String into an Array in JS"
type: post
date: 2020-11-02
excerpt: Learn how to split a string in JavaScript with common examples
url: js-split-example
canonical: false
shareImage:
twitterLink:
extraContent:
  - {url: "https://learnitmyway.com/learn-javascript-with-these-resources/", 
  title: "Learn JavaScript with these resources"}
---

A string is a data structure that represents a sequence of characters and and array is a data structure that contains multiple values. And did you know – a string can be broken apart into an array of multiple strings using the split method. Let's see how that works with some examples.

<!--more-->
<!-- og:description -->

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

Here is a common example, which involves getting the the token from an auth header that is part of a Token-based Authentication System. If this doesn't mean anything to you that's ok, all you need to know for the following example is that there is a string with the value `bearer token`, but only `token` is needed (as this is this the part that identifies the user):

```javascript
const authHeader = 'bearer token'
const split = authHeader.split(' ') // (1) [ 'bearer', 'token' ]
const token = split[1] // (2) token
```

This is what's happening:

1. The string is split with `' '` as the separator
1. The second entry in the array is accessed

### Example 2: array methods

Often the input you are given is a string, but you want to apply array methods to it (eg. `map`, `filter`, `reduce`). For example, let's say you are given a string of morse code and you want to see what it spells in English:

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