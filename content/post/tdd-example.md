---
title: "TDD Example in Java"
author: developerdavo
type: post
date: 2018-01-22
excerpt: In this article, I demonstrate Test Driven Development in Java.
url: /tdd-example/
extraContent:
  - {url: "https://www.learnitmyway.com/learning-material-software-development/", 
  title: "Learning material – software development"}
  - {url: "https://www.learnitmyway.com/2017/07/02/learn-java-with-these-resources/", 
  title: "Learn Java with these resources"}
  - {url: "https://www.learnitmyway.com/2017/10/23/what-i-learned-by-developing-enterprise-software-for-the-first-time",
  title: "What I learned by developing enterprise software for the first time"}
  
---
_In this article, I demonstrate Test Driven Development in Java._

<!--more-->

I am going to demonstrate TDD by completing
<a href="https://en.wikipedia.org/wiki/Fizz_buzz" target="_blank" rel="noopener">FizzBuzz</a>.
A significant part of my job is helping software teams to become more agile and this is one of the sessions that I conduct.
I usually set the exercise up so that I write the first failing test and then ask someone from the audience to make it pass.
I then roll off and the same audience member writes a failing test for the next person until the exercise is complete.
I like this exercise because it is a really simple way of demonstrating TDD, pairing and continuous integration.

The exercise is complete when the following test passes:

```java
assertThat(fizzBuzz.execute(new int[]{1, 2, 3, 5, 6, 10, 15, 30}),
is("1, 2, Fizz, Buzz, Fizz, Buzz, FizzBuzz, FizzBuzz"));
```

The complete source code can be found on
<a href="https://github.com/DeveloperDavo/fizzBuzz" target="_blank" rel="noopener">GitHub</a>.

When demonstrating this exercise I like to make the following points:

* Don’t write any production code before you have a failing test (including compile errors!)
* Make each step as small and simple as possible.
* Commit as soon as you have a passing test.

Before you get started it is always a good idea to make sure you are able to run a test.
In this case I have also added the skeleton for the production code.

```java
public class FizzBuzzTest {

    @Test
    public void test() {
    }
}
```

```java
public class FizzBuzz {

    public void execute() {
    }
}
```

This ends up being part of my initial commit.

The first test can be written as follows:

```java
@Test
public void shouldProcessInput() {
    FizzBuzz fizzBuzz = new FizzBuzz();

    String output = fizzBuzz.processNumber(1);

    assertThat(output, is("1"));
}
```

Before running the test, you will need to fix the compile errors.
I would recommend doing this line per line.
After each line you should also make sure the test is still passing.
Once the compile errors are removed the test will fail.
The following snippet will make the test pass:

```java
public class FizzBuzz {

    public void execute() {
    }

    public String processNumber(int number) {
        return "1";
    }
}
```

How easy was that!
Don't forget to commit ;).

Below, I rename the test and inline the method call:

```java
    @Test
    public void shouldProcessNumber() {
        FizzBuzz fizzBuzz = new FizzBuzz();
        assertThat(fizzBuzz.processNumber(1), is("1"));
    }
```

Make sure the test is green and then commit!

I then add another assert statement to the test and update the code:

```java
    @Test
    public void shouldProcessNumber() {
        FizzBuzz fizzBuzz = new FizzBuzz();
        assertThat(fizzBuzz.processNumber(1), is("1"));
        assertThat(fizzBuzz.processNumber(2), is("2"));
    }
```

```java
    public String processNumber(int number) {
        return String.valueOf(number);
    }
```

I'm going to stop reminding you about committing from now on.

Here I add functionality for Fizz when the number is 3:

```java
    @Test
    public void shouldProcessNumber() {
        FizzBuzz fizzBuzz = new FizzBuzz();
        assertThat(fizzBuzz.processNumber(1), is("1"));
        assertThat(fizzBuzz.processNumber(2), is("2"));
        assertThat(fizzBuzz.processNumber(3), is("Fizz"));
    }
```

```java
    public String processNumber(int number) {
        if (number == 3) {
            return "Fizz";
        }
        return String.valueOf(number);
    }
```

I do the same for Buzz when the number is 5:

```java
    @Test
    public void shouldProcessNumber() {
        FizzBuzz fizzBuzz = new FizzBuzz();
        assertThat(fizzBuzz.processNumber(1), is("1"));
        assertThat(fizzBuzz.processNumber(2), is("2"));
        assertThat(fizzBuzz.processNumber(3), is("Fizz"));
        assertThat(fizzBuzz.processNumber(5), is("Buzz"));
    }
```

```java
    public String processNumber(int number) {
        if (number == 3) {
            return "Fizz";
        }

        if (number == 5) {
            return "Buzz";
        }

        return String.valueOf(number);
    }
```

Here I add functionality for Fizz if the number is a multiple of 3:

```java
    @Test
    public void shouldProcessNumber() {
        FizzBuzz fizzBuzz = new FizzBuzz();
        assertThat(fizzBuzz.processNumber(1), is("1"));
        assertThat(fizzBuzz.processNumber(2), is("2"));
        assertThat(fizzBuzz.processNumber(3), is("Fizz"));
        assertThat(fizzBuzz.processNumber(5), is("Buzz"));
        assertThat(fizzBuzz.processNumber(6), is("Fizz"));
    }
```

```java
    public String processNumber(int number) {
        if (number % 3 == 0) {
            return "Fizz";
        }

        if (number == 5) {
            return "Buzz";
        }

        return String.valueOf(number);
    }
```

The same for Buzz:

```java
    @Test
    public void shouldProcessNumber() {
        FizzBuzz fizzBuzz = new FizzBuzz();
        assertThat(fizzBuzz.processNumber(1), is("1"));
        assertThat(fizzBuzz.processNumber(2), is("2"));
        assertThat(fizzBuzz.processNumber(3), is("Fizz"));
        assertThat(fizzBuzz.processNumber(5), is("Buzz"));
        assertThat(fizzBuzz.processNumber(6), is("Fizz"));
        assertThat(fizzBuzz.processNumber(10), is("Buzz"));
    }
```

```java
    public String processNumber(int number) {
        if (number % 3 == 0) {
            return "Fizz";
        }

        if (number % 5 == 0) {
            return "Buzz";
        }

        return String.valueOf(number);
    }
```

Here I add FizzBuzz functionality:

```java
    @Test
    public void shouldProcessNumber() {
        FizzBuzz fizzBuzz = new FizzBuzz();
        assertThat(fizzBuzz.processNumber(1), is("1"));
        assertThat(fizzBuzz.processNumber(2), is("2"));
        assertThat(fizzBuzz.processNumber(3), is("Fizz"));
        assertThat(fizzBuzz.processNumber(5), is("Buzz"));
        assertThat(fizzBuzz.processNumber(6), is("Fizz"));
        assertThat(fizzBuzz.processNumber(10), is("Buzz"));
        assertThat(fizzBuzz.processNumber(15), is("FizzBuzz"));
    }
```

```java
    public String processNumber(int number) {
        if (number % 3 == 0 && number % 5 == 0) {
            return "FizzBuzz";
        }

        if (number % 3 == 0) {
            return "Fizz";
        }

        if (number % 5 == 0) {
            return "Buzz";
        }

        return String.valueOf(number);
    }
```

Here I extract some duplicate code:

[code]

I then add a completely new test case and make it green:

[code]
[code]

The final test:

[code]
[code]

The final refactoring:

[code]

## Final Thoughts
That's the end of the exercise. I hope you enjoyed it and were able to learn something for it!