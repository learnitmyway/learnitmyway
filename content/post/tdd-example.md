---
title: "A really simple example of TDD in JavaScript"
author: David
type: post
date: 2020-05-29
excerpt: A step by step introduction to Test Driven Development in JavaScript.
url: /tdd-example/
canonical: true
extraContent:
  - {url: "https://learnitmyway.com/learn-javascript-with-these-resources/", 
  title: "Learn JavaScript with these resources"}
  - {url: "https://learnitmyway.com/apollo-server-testing/", 
  title: "Testing Apollo Server with Typescript"}
  - {url: "https://www.learnitmyway.com/2016/11/11/learning-material-software-development/", 
  title: "Learning material - software development", extras: "(starting with Intro to CS)"}

---

A step by step introduction to Test Driven Development in JavaScript.

<!--more-->

## Background

This following exercise is based on a TDD workshop.

## Exercise

I am going to demonstrate TDD by completing [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz). I have chosen to show each step in JavaScript because most of my work so far has been in this language.
However, the same concepts apply to every language (I am familiar with). The complete source code can be found [on Github](https://github.com/learnitmyway/fizz-buzz-js). I orginally wrote [this article in Java] TODO:. However, since then my main language has changed to JavaScript and my approach is not exactly the same.

The exercise is complete when the following input:

```javascript
[1, 2, 3, 5, 6, 10, 15]
```

results in the following output:

```javascript
'1, 2, Fizz, Buzz, Fizz, Buzz, FizzBuzz'
```

## Things to keep in mind

When demonstrating this exercise I like to mention the following points:

- Don’t write any production code before you have a failing test
- Make each step as small and simple as possible.

## Implementation

Here is the starter code for the test:

```javascript
import fizzBuzz from './fizzBuzz'

describe('fizzBuzz', () => {
  it('executes', () => {
    expect(fizzBuzz()).toBe(undefined)
  })
})
```

Make sure the test is green!

For those of you following along with the source code, you can run the tests in watch mode with `npm test`.

Here is the starter code for the app:

```javascript
export default function fizzBuzz() {}
```

Make sure the test is still green!

The first assertion can be written as follows:

```javascript
describe('fizzBuzz', () => {
  it('executes', () => {
    expect(fizzBuzz([1])).toBe('1')
  })
})
```

The following snippet will make the test pass:

```javascript
export default function fizzBuzz() {
  return '1'
}
```

How easy was that!

I then add another assertion to the test and update the code:

{{< highlight javascript "hl_lines=4" >}}
describe('fizzBuzz', () => {
  it('executes', () => {
    expect(fizzBuzz([1])).toBe('1')
    expect(fizzBuzz([1, 2])).toBe('1, 2')
  })
})
{{< / highlight >}}

```javascript
export default function fizzBuzz(input) {
  return input.join(', ')
}
```

Here I add functionality for Fizz when the number is 3:

{{< highlight javascript "hl_lines=5" >}}
describe('fizzBuzz', () => {
  it('executes', () => {
    expect(fizzBuzz([1])).toBe('1')
    expect(fizzBuzz([1, 2])).toBe('1, 2')
    expect(fizzBuzz([1, 2, 3])).toBe('1, 2, Fizz')
  })
})
{{< / highlight >}}

```javascript
export default function fizzBuzz(input) {
  const result = []
  for (const entry of input) {
    if (entry === 3) {
      result.push('Fizz')
    } else {
      result.push(entry)
    }
  }
  return result.join(', ')
}
```

I do the same for Buzz when the number is 5:

{{< highlight javascript "hl_lines=6" >}}
describe('fizzBuzz', () => {
  it('executes', () => {
    expect(fizzBuzz([1])).toBe('1')
    expect(fizzBuzz([1, 2])).toBe('1, 2')
    expect(fizzBuzz([1, 2, 3])).toBe('1, 2, Fizz')
    expect(fizzBuzz([1, 2, 3, 5])).toBe('1, 2, Fizz, Buzz')
  })
})
{{< / highlight >}}

{{< highlight javascript "hl_lines=6-7" >}}
export default function fizzBuzz(input) {
  const result = []
  for (const entry of input) {
    if (entry === 3) {
      result.push('Fizz')
    } else if (entry === 5) {
      result.push('Buzz')
    } else {
      result.push(entry)
    }
  }
  return result.join(', ')
}
{{< / highlight >}}

Here I add functionality for Fizz if the number is a multiple of 3:

{{< highlight javascript "hl_lines=7" >}}
describe('fizzBuzz', () => {
  it('executes', () => {
    expect(fizzBuzz([1])).toBe('1')
    expect(fizzBuzz([1, 2])).toBe('1, 2')
    expect(fizzBuzz([1, 2, 3])).toBe('1, 2, Fizz')
    expect(fizzBuzz([1, 2, 3, 5])).toBe('1, 2, Fizz, Buzz')
    expect(fizzBuzz([1, 2, 3, 5, 6])).toBe('1, 2, Fizz, Buzz, Fizz')
  })
})
{{< / highlight >}}

{{< highlight javascript "hl_lines=4" >}}
export default function fizzBuzz(input) {
  const result = []
  for (const entry of input) {
    if (entry % 3 === 0) {
      result.push('Fizz')
    } else if (entry === 5) {
      result.push('Buzz')
    } else {
      result.push(entry)
    }
  }
  return result.join(', ')
}
{{< / highlight >}}

The same for Buzz if the number is a multiple of 5:

{{< highlight javascript "hl_lines=7-9" >}}
describe('fizzBuzz', () => {
  it('executes', () => {
    expect(fizzBuzz([1])).toBe('1')
    expect(fizzBuzz([1, 2])).toBe('1, 2')
    expect(fizzBuzz([1, 2, 3])).toBe('1, 2, Fizz')
    expect(fizzBuzz([1, 2, 3, 5])).toBe('1, 2, Fizz, Buzz')
    expect(fizzBuzz([1, 2, 3, 5, 6, 10])).toBe(
      '1, 2, Fizz, Buzz, Fizz, Buzz'
    )
    expect(fizzBuzz([1, 2, 3, 5, 6, 10, 15])).toBe(
      '1, 2, Fizz, Buzz, Fizz, Buzz, FizzBuzz'
    )
  })
})
{{< / highlight >}}

{{< highlight javascript "hl_lines=6" >}}
export default function fizzBuzz(input) {
  const result = []
  for (const entry of input) {
    if (entry % 3 === 0) {
      result.push('Fizz')
    } else if (entry % 5 === 0) {
      result.push('Buzz')
    } else {
      result.push(entry)
    }
  }
  return result.join(', ')
}
{{< / highlight >}}

Here I add FizzBuzz functionality:

{{< highlight javascript "hl_lines=10-12" >}}
describe('fizzBuzz', () => {
  it('executes', () => {
    expect(fizzBuzz([1])).toBe('1')
    expect(fizzBuzz([1, 2])).toBe('1, 2')
    expect(fizzBuzz([1, 2, 3])).toBe('1, 2, Fizz')
    expect(fizzBuzz([1, 2, 3, 5])).toBe('1, 2, Fizz, Buzz')
    expect(fizzBuzz([1, 2, 3, 5, 6, 10])).toBe(
      '1, 2, Fizz, Buzz, Fizz, Buzz'
    )
    expect(fizzBuzz([1, 2, 3, 5, 6, 10, 15])).toBe(
      '1, 2, Fizz, Buzz, Fizz, Buzz, FizzBuzz'
    )
  })
})
{{< / highlight >}}

{{< highlight javascript "hl_lines=4-6" >}}
export default function fizzBuzz(input) {
  const result = []
  for (const entry of input) {
    if (entry % 3 === 0 && entry % 5 === 0) {
      result.push('FizzBuzz')
    } else if (entry % 3 === 0) {
      result.push('Fizz')
    } else if (entry % 5 === 0) {
      result.push('Buzz')
    } else {
      result.push(entry)
    }
  }
  return result.join(', ')
}
{{< / highlight >}}

This might be a good time to commit the code. Make sure there are no lint warnings/errors and the test is green beforehand! (`npm run precommit` if you are following along with the source code)

Now it's time for some refactoring!

First I remove some duplication:

{{< highlight javascript "hl_lines=4-5" >}}
export default function fizzBuzz(input) {
  const result = []
  for (const entry of input) {
    const multipleOf3 = entry % 3 === 0
    const multipleOf5 = entry % 5 === 0
    if (multipleOf3 && multipleOf5) {
      result.push('FizzBuzz')
    } else if (multipleOf3) {
      result.push('Fizz')
    } else if (multipleOf5) {
      result.push('Buzz')
    } else {
      result.push(entry)
    }
  }
  return result.join(', ')
}
{{< / highlight >}}

Make sure the test is still green!

Then I decide to use a `map`:

```javascript
export default function fizzBuzz(input) {
  return input
    .map((entry) => {
      const multipleOf3 = entry % 3 === 0
      const multipleOf5 = entry % 5 === 0
      if (multipleOf3 && multipleOf5) {
        return 'FizzBuzz'
      } else if (multipleOf3) {
        return 'Fizz'
      } else if (multipleOf5) {
        return 'Buzz'
      } else {
        return entry
      }
    })
    .join(', ')
}
```

And finally I decide to extract `processEntry` into a separate function:

```javascript
function processEntry(entry) {
  const multipleOf3 = entry % 3 === 0
  const multipleOf5 = entry % 5 === 0
  if (multipleOf3 && multipleOf5) {
    return 'FizzBuzz'
  } else if (multipleOf3) {
    return 'Fizz'
  } else if (multipleOf5) {
    return 'Buzz'
  } else {
    return entry
  }
}

export default function fizzBuzz(input) {
  return input.map(processEntry).join(', ')
}
```

At this point I tend to prefer to amend the previous commit with `git commit --amend`. Make sure there are no lint warnings/errors and the test is green beforehand! (`npm run precommit`)

## Final Thoughts

That's the end of the exercise.
I hope you enjoyed it and were able to learn something new.
The most important take-away from this exercise is to take small steps!
The complete source code can be found on Github in [Java](https://github.com/DeveloperDavo/fizzBuzz) or [JavaScript](https://github.com/DeveloperDavo/fizz-buzz-js).

Timeline:

- January 2018: First published
- May 2020: Rewrite in JavaScript 