---
title: "Applying the open-closed principle to UI components"
type: post
date: 2020-06-01
excerpt: In this article, I will demonstrate a simple example of applying the open/closed principle to a UI component in React or Angular.
url: open-closed-ui
canonical: true
shareImage: "https://res.cloudinary.com/developerdavo/image/upload/f_auto,w_1200/v1591008765/learnitmyway/robert-katzki-jbtfM0XBeRc-unsplash_ewwg0k.jpg"
twitterLink: "https://twitter.com/learnitmyway/status/1267410577565065216"
extraContent:
  - {url: "https://learnitmyway.com/learn-react-with-these-resources/", 
  title: "Learn React with these resources"}
  - {url: "https://www.learnitmyway.com/2016/11/11/learning-material-software-development/", 
  title: "Learning material - software development", extras: "(starting with Intro to CS)"}
  - {url: "https://learnitmyway.com/tdd-example/", 
  title: "A really simple example of TDD in JavaScript"}
publisherInfo: 
---

In this article, I will demonstrate a simple example of applying the open/closed principle to a UI component in React or Angular.

<!--more-->
<!-- og:description -->

![coloured frames](https://res.cloudinary.com/developerdavo/image/upload/f_auto,h_1000/v1591008765/learnitmyway/robert-katzki-jbtfM0XBeRc-unsplash_ewwg0k.jpg)

## Background

I had an aha moment this week regarding the [open/closed principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle), which states *"software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification"* and is the *O* in [SOLID](https://en.wikipedia.org/wiki/SOLID). I have always found this principle to be quite abstract and I didn't know if I was applying it until now.

The aha moment came to me when I wanted to change the style of an existing component. For simplicity's sake, let's say this was a button and I wanted to change the existing background colour. Let's see how this works in React and then Angular. Or you can [skip straight to Angular](#angular).

## React

Link to [source code](https://github.com/learnitmyway/open-closed-react).

I will start with a simple button component:

```javascript
// src/Button.js
import React from 'react'
import './Button.css'

const Button = () => (
  <button className="Button" type="button">
    Click Me!
  </button>
)

export default Button
```

that has the background color `aliceblue`:

```css
/* src/Button.css */
.Button {
  background-color: aliceblue;
}

```

and is used as follows:

```javascript
// src/App.js
import React from 'react'
import './App.css'
import Button from './Button'

const App = () => (
  <div className="App">
    <Button />
  </div>
)

export default App
```

Now our app's stakeholders have said they would like us to add a new button in `papayawhip` directly beside the existing button. They have also said there are more buttons to follow. So I parameterise the `className` in the `Button` component:

{{< highlight javascript "hl_lines=4-5" >}}
// src/Button.js
import React from 'react'

const Button = ({ className }) => (
  <button className={className} type="button">
    Click Me!
  </button>
)

export default Button
{{< / highlight >}}

and then use it as follows:

{{< highlight javascript "hl_lines=8-9" >}}
// src/App.js
import React from 'react'
import './App.css'
import Button from './Button'

const App = () => (
  <div className="App">
    <Button className="button-aliceblue" />
    <Button className="button-papayawhip" />
  </div>
)

export default App
{{< / highlight >}}

From now on, by passing `className` to `Button` as a prop I can update (extend) the styles without changing (modifying) the `Button` component:

```css
/* src/App.css */
.button-aliceblue {
  background-color: aliceblue;
}

.button-papayawhip {
  background-color: papayawhip;
}
```

This just fulfilled the open/closed principle!

### CSS-in-React

A similar approach can also be used with [styled-components](https://styled-components.com/docs/basics#extending-styles).

## Angular

Link to [source code](https://github.com/learnitmyway/open-closed-angular).

I will start with a simple button component:

```typescript
// src/app/button/button.component.ts 
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {}
```

```html
<!-- src/app/button/button.component.html -->
<button class="button" type="button">Click me!</button>
```

that has the background color `aliceblue`:

```css
/* src/app/button/button.component.css */
.button {
  background-color: aliceblue;
}
```

and is used as follows:

```html
<!-- src/app/app.component.html -->
<div class="content" role="main">
  <app-button></app-button>
</div>
```

Now our app's stakeholders have said they would like us to add a new button in `papayawhip` directly beside the existing button. They have also said there are more buttons to follow. So I parameterise the style of the `Button` component (I would have preferred to parameterise the CSS class name, like in the [React example above](#react), but I couldn't figure out how to do it):

{{< highlight typescript "hl_lines=10" >}}
// src/app/button/button.component.ts 
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() style: { [index: string]: string };
}
{{< / highlight >}}

and then use it as follows:

```html
<!-- src/app/button/button.component.html -->
<button [ngStyle]="style" type="button">Click me!</button>
```

From now on, by passing `style` to `app-button` as a property I can add a button and update (extend) the styles without changing (modifying) the `app-button` component:

{{< highlight html "hl_lines=4-6 8-12" >}}
<!-- src/app/app.component.html -->
<div class="content" role="main">
  <app-button
    [style]="{
      backgroundColor: 'aliceblue'
    }"
  ></app-button>
  <app-button
    [style]="{
      backgroundColor: 'papayawhip'
    }"
  ></app-button>
</div>

{{< / highlight >}}

This just fulfilled the open/closed principle!

## Final Thoughts

I hope this simple example has helped you understand how the open/closed principle can be applied to UI components. Feel free to look at the source code in [React](https://github.com/learnitmyway/open-closed-react) or [Angular](https://github.com/learnitmyway/open-closed-angular).
