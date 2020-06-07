---
title: "A really simple example of TDD in JavaScript"
author: David
type: post
date: 2020-05-30
excerpt: A step by step introduction to Test Driven Development in JavaScript.
url: /tdd-example
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

**Note:** There is an older version of this [article in Java](https://learnitmyway.com/tdd-example-java/).


## Exercise

I am going to demonstrate TDD by completing [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz). I have chosen to show each step in JavaScript because most of my work so far has been in this language. However, the same concepts apply to every language (I am familiar with). The complete source code can be found on Github in [JavaScript](https://github.com/DeveloperDavo/fizz-buzz-js) or [Java](https://github.com/DeveloperDavo/fizzBuzz).

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

And here is the starter code for the implementation:

```javascript
export default function fizzBuzz() {}
```

Make sure the test is green!

For those of you following along with the source code, you can run the tests in watch mode with `npm test`.

### Red, green, red, green, ..., green

The first real assertion can be written as follows:

{{< highlight javascript "hl_lines=3" >}}
describe('fizzBuzz', () => {
  it('executes', () => {
    expect(fizzBuzz([1])).toBe('1')
  })
})
{{< / highlight >}}

The following snippet will make the test pass:

{{< highlight javascript "hl_lines=2" >}}
export default function fizzBuzz() {
  return '1'
}
{{< / highlight >}}

How easy was that!

I then add another assertion to the test:

{{< highlight javascript "hl_lines=4" >}}
describe('fizzBuzz', () => {
  it('executes', () => {
    expect(fizzBuzz([1])).toBe('1')
    expect(fizzBuzz([1, 2])).toBe('1, 2')
  })
})
{{< / highlight >}}

And fulfil it:

{{< highlight javascript "hl_lines=2" >}}
export default function fizzBuzz(input) {
  return input.join(', ')
}
{{< / highlight >}}

Here I implement Fizz when the entry is 3:

{{< highlight javascript "hl_lines=5" >}}
describe('fizzBuzz', () => {
  it('executes', () => {
    expect(fizzBuzz([1])).toBe('1')
    expect(fizzBuzz([1, 2])).toBe('1, 2')
    expect(fizzBuzz([1, 2, 3])).toBe('1, 2, Fizz')
  })
})
{{< / highlight >}}

{{< highlight javascript "hl_lines=3-8" >}}
export default function fizzBuzz(input) {
  return input
    .map((entry) => {
      if (entry === 3) {
        return 'Fizz'
      }

      return entry
    })
    .join(', ')
}
{{< / highlight >}}

If you are not familiar with `map`, you could use a `for` loop instead:

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

Then I implement Buzz when the entry is 5:

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

{{< highlight javascript "hl_lines=8-10" >}}
export default function fizzBuzz(input) {
  return input
    .map((entry) => {
      if (entry === 3) {
        return 'Fizz'
      }

      if (entry === 5) {
        return 'Buzz'
      }

      return entry
    })
    .join(', ')
}
{{< / highlight >}}

Here I implement Fizz if the entry is a *multiple* of 3:

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
  return input
    .map((entry) => {
      if (entry % 3 === 0) {
        return 'Fizz'
      }

      if (entry === 5) {
        return 'Buzz'
      }

      return entry
    })
    .join(', ')
}
{{< / highlight >}}

The same for Buzz if the entry is a *multiple* of 5:

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
  })
})
{{< / highlight >}}

{{< highlight javascript "hl_lines=8" >}}
export default function fizzBuzz(input) {
  return input
    .map((entry) => {
      if (entry % 3 === 0) {
        return 'Fizz'
      }

      if (entry % 5 === 0) {
        return 'Buzz'
      }

      return entry
    })
    .join(', ')
}
{{< / highlight >}}

Here I implement FizzBuzz when the entry is multiple of 3 *and* a multiple of 5:

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
  return input
    .map((entry) => {
      if (entry % 3 === 0 && entry % 5 === 0) {
        return 'FizzBuzz'
      }

      if (entry % 3 === 0) {
        return 'Fizz'
      }

      if (entry % 5 === 0) {
        return 'Buzz'
      }

      return entry
    })
    .join(', ')
}
{{< / highlight >}}

This might be a good time to commit the code. Make sure there are no lint warnings/errors and the test is green beforehand! You can run `npm run precommit` if you are following along with the source code.

### Refactor, green, refactor, ..., green

First I remove some duplication:

{{< highlight javascript "hl_lines=4-5 7 11 15" >}}
export default function fizzBuzz(input) {
  return input
    .map((entry) => {
      const multipleOf3 = entry % 3 === 0
      const multipleOf5 = entry % 5 === 0

      if (multipleOf3 && multipleOf5) {
        return 'FizzBuzz'
      }

      if (multipleOf3) {
        return 'Fizz'
      }

      if (multipleOf5) {
        return 'Buzz'
      }

      return entry
    })
    .join(', ')
}
{{< / highlight >}}

Make sure the test is still green!

Finally, I decide to extract `processEntry` into a separate function:

{{< highlight javascript "hl_lines=1 21" >}}
function processEntry(entry) {
  const multipleOf3 = entry % 3 === 0
  const multipleOf5 = entry % 5 === 0

  if (multipleOf3 && multipleOf5) {
    return 'FizzBuzz'
  }

  if (multipleOf3) {
    return 'Fizz'
  }

  if (multipleOf5) {
    return 'Buzz'
  }

  return entry
}

export default function fizzBuzz(input) {
  return input.map(processEntry).join(', ')
}
{{< / highlight >}}

At this point, I tend to prefer to amend the previous commit with `git commit --amend`. Make sure there are no lint warnings/errors and the test is green beforehand (with `npm run precommit`)!

## Final Thoughts

That's the end of the exercise.
I hope you enjoyed it and were able to learn something new.
The most important take-away from this exercise is to take small steps!
The complete source code can be found on Github in [JavaScript](https://github.com/DeveloperDavo/fizz-buzz-js) or [Java](https://github.com/DeveloperDavo/fizzBuzz).

--- 

Timeline:

- January 2018: First published [in Java](https://learnitmyway.com/tdd-example-java/)
- May 2020: Rewrite in JavaScript 