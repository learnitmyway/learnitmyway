---
title: "A really simple example of TDD in Java"
author: David
type: post
date: 2018-01-22
excerpt: A step by step introduction to Test Driven Development in Java.
url: /tdd-example-java
canonical: true
extraContent:
  - {url: "https://www.learnitmyway.com/2017/07/02/learn-java-with-these-resources/", 
  title: "Learn Java with these resources"}
  - {url: "https://www.learnitmyway.com/2016/11/11/learning-material-software-development/", 
  title: "Learning material - software development", extras: "(starting with Intro to CS)"}
  - {url: "https://learnitmyway.com/learn-javascript-with-these-resources/", 
  title: "Testing Apollo Server with Typescript"}

---


A step by step introduction to Test Driven Development in Java.

<!--more-->

**Note:** There is a newer version of this [article in JavaScript](https://learnitmyway.com/tdd-example/).

## Background

This following exercise is based on a TDD workshop that I conducted for a client.

## Exercise

I am going to demonstrate TDD by completing [FizzBuzz](https://en.wikipedia.org/wiki/Fizz_buzz). I have chosen to show each step in Java because most of my work so far has been in this language. However, the same concepts apply to any object-oriented language. The complete source code can be found on Github in [Java](https://github.com/DeveloperDavo/fizzBuzz) or [JavaScript](https://github.com/DeveloperDavo/fizz-buzz-js).

The exercise is complete when the following input:

```java
[1, 2, 3, 5, 6, 10, 15, 30]
```

results in the following output:

```java
"1, 2, Fizz, Buzz, Fizz, Buzz, FizzBuzz, FizzBuzz"
```

## Things to keep in mind

When demonstrating this exercise I like to mention the following points:

- Don’t write any production code before you have a failing test (including compile errors!)
- Make each step as small and simple as possible.
- Commit as soon as you have a passing test.

## Implementation

Here is the starter code for the test:

```java
public class FizzBuzzTest {

    @Test
    public void test() {
    }
}
```

Make sure the test is green!

Here is the starter code for the app:

```java
public class FizzBuzz {

    public void execute() {
    }
}
```

Make sure the test is still green!

This is where my initial commit ends.

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
After each line, you should also make sure the test is still passing.
Once the compile errors are removed the test will fail.
The following snippet will make the test pass:

{{< highlight java "hl_lines=6-8" >}}
public class FizzBuzz {

    public void execute() {
    }

    public String processNumber(int number) {
        return "1";
    }
}
{{< / highlight >}}

How easy was that!
Don't forget to commit ;).

Below, I rename the test and inline the method call:

{{< highlight java "hl_lines=2 4" >}}
@Test
public void shouldProcessNumber() {
    FizzBuzz fizzBuzz = new FizzBuzz();
    assertThat(fizzBuzz.processNumber(1), is("1"));
}
{{< / highlight >}}

Make sure the test is green and then commit!

I then add another assert statement to the test and update the code:

{{< highlight java "hl_lines=5" >}}
@Test
public void shouldProcessNumber() {
    FizzBuzz fizzBuzz = new FizzBuzz();
    assertThat(fizzBuzz.processNumber(1), is("1"));
    assertThat(fizzBuzz.processNumber(2), is("2"));
}
{{< / highlight >}}

{{< highlight java "hl_lines=2" >}}
public String processNumber(int number) {
    return String.valueOf(number);
}
{{< / highlight >}}

I'm going to stop reminding you about committing from now on.

Here I add functionality for Fizz when the number is 3:

{{< highlight java "hl_lines=6" >}}
@Test
public void shouldProcessNumber() {
    FizzBuzz fizzBuzz = new FizzBuzz();
    assertThat(fizzBuzz.processNumber(1), is("1"));
    assertThat(fizzBuzz.processNumber(2), is("2"));
    assertThat(fizzBuzz.processNumber(3), is("Fizz"));
}
{{< / highlight >}}

{{< highlight java "hl_lines=2-4" >}}
public String processNumber(int number) {
    if (number == 3) {
        return "Fizz";
    }
    return String.valueOf(number);
}
{{< / highlight >}}

I do the same for Buzz when the number is 5:

{{< highlight java "hl_lines=7" >}}
@Test
public void shouldProcessNumber() {
    FizzBuzz fizzBuzz = new FizzBuzz();
    assertThat(fizzBuzz.processNumber(1), is("1"));
    assertThat(fizzBuzz.processNumber(2), is("2"));
    assertThat(fizzBuzz.processNumber(3), is("Fizz"));
    assertThat(fizzBuzz.processNumber(5), is("Buzz"));
}
{{< / highlight >}}

{{< highlight java "hl_lines=6-8" >}}
public String processNumber(int number) {
    if (number == 3) {
        return "Fizz";
    }

    if (number == 5) {
        return "Buzz";
    }

    return String.valueOf(number);
}
{{< / highlight >}}

Here I add functionality for Fizz if the number is a multiple of 3:

{{< highlight java "hl_lines=8" >}}
@Test
public void shouldProcessNumber() {
    FizzBuzz fizzBuzz = new FizzBuzz();
    assertThat(fizzBuzz.processNumber(1), is("1"));
    assertThat(fizzBuzz.processNumber(2), is("2"));
    assertThat(fizzBuzz.processNumber(3), is("Fizz"));
    assertThat(fizzBuzz.processNumber(5), is("Buzz"));
    assertThat(fizzBuzz.processNumber(6), is("Fizz"));
}
{{< / highlight >}}

{{< highlight java "hl_lines=2" >}}
public String processNumber(int number) {
    if (number % 3 == 0) {
        return "Fizz";
    }

    if (number == 5) {
        return "Buzz";
    }

    return String.valueOf(number);
}
{{< / highlight >}}

The same for Buzz:

{{< highlight java "hl_lines=9" >}}
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
{{< / highlight >}}

{{< highlight java "hl_lines=6" >}}
public String processNumber(int number) {
    if (number % 3 == 0) {
        return "Fizz";
    }

    if (number % 5 == 0) {
        return "Buzz";
    }

    return String.valueOf(number);
}
{{< / highlight >}}

Here I add FizzBuzz functionality:

{{< highlight java "hl_lines=10" >}}
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
{{< / highlight >}}

{{< highlight java "hl_lines=2-4" >}}
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
{{< / highlight >}}

Here I extract `isMultipleOf3(...)` and `isMultipleOf5(...)`:

{{< highlight java "hl_lines=2 6 10 17-19 21-23" >}}
public String processNumber(int number) {
    if (isMultipleOf3(number) && isMultipleOf5(number)) {
        return "FizzBuzz";
    }

    if (isMultipleOf3(number)) {
        return "Fizz";
    }

    if (isMultipleOf5(number)) {
        return "Buzz";
    }

    return String.valueOf(number);
}

private boolean isMultipleOf5(int number) {
    return number % 5 == 0;
}

private boolean isMultipleOf3(int number) {
    return number % 3 == 0;
}
{{< / highlight >}}

I then add a test case for `execute(...)` and make it green:

```java
@Test
public void shouldExecute() {
    FizzBuzz fizzBuzz = new FizzBuzz();

    assertThat(fizzBuzz.execute(new int[]{1}), is("1"));
}
```

```java
public String execute(int[] numbers) {
    return processNumber(numbers[0]);
}
```

The final test:

{{< highlight java "hl_lines=6-7" >}}
@Test
public void shouldExecute() {
    FizzBuzz fizzBuzz = new FizzBuzz();

    assertThat(fizzBuzz.execute(new int[]{1}), is("1"));
    assertThat(fizzBuzz.execute(new int[]{1, 2, 3, 5, 6, 10, 15, 30}), 
        is("1, 2, Fizz, Buzz, Fizz, Buzz, FizzBuzz, FizzBuzz"));
}
{{< / highlight >}}

The final refactoring:

```java
public String execute(int[] numbers) {
    return Arrays.stream(numbers)
            .mapToObj(this::processNumber)
            .collect(Collectors.joining(", "));
}
```

## Final Thoughts

That's the end of the exercise.
I hope you enjoyed it and were able to learn something new.
The most important take-away from this exercise is to take small steps!
In case you missed the link at the beginning, the complete source code can be found [on Github](https://github.com/DeveloperDavo/fizzBuzz).

Timeline:

- January 2018: First published
- May 2020: [Rewrite in JavaScript](https://learnitmyway.com/tdd-example/)
