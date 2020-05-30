---
title: "Applying the open-closed principle to UI components"
type: post
date: 2020-05-30
excerpt: In this article I will demonstrate how to use the opened/closed principle to your advantage when building a UI component in React or Angular.
url: open-closed-ui
canonical: true
extraContent:
publisherInfo: 
---

<!--more-->
<!-- og:description -->

TODO:

- READMEs in repos
- extra content
- launch check list

## Background

I had an aha moment this week regarding the [opened/closed principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle), which states *"software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification"* and is the *O* in [SOLID](https://en.wikipedia.org/wiki/SOLID). I have always found this principle to be quite abstract and I didn't really know if I was really applying it until now.

## React

Link to [source code](https://github.com/learnitmyway/open-closed-react).

I will start with React using a simple button:

```jsx
// src/Button.js
import React from 'react'

const Button = ({ className }) => (
  <button className={className} type="button">
    Click Me!
  </button>
)

export default Button

```

```jsx
// src/App.js
import React from 'react'
import './App.css'
import Button from './Button'

const App = () => (
  <div className="App">
    <Button className="button-bg-color" />
  </div>
)

export default App
```

By passing `button-bg-color` to `Button` as a prop I can update (extend) the styles without changing (modifying) the `Button` component.

```css
/* src/App.css */
.button-bg-color {
  background-color: papayawhip;
}
```

A similar approach can also be used with [styled-components](https://styled-components.com/docs/basics#extending-styles).

## Angular

Link to [source code](https://github.com/learnitmyway/open-closed-angular).

This is how I would do it in Angular:

```ts
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
```

```html
<!-- src/app/button/button.component.html -->
<button [ngStyle]="style" type="button">Click me!</button>
```

```html
<!-- src/app/app.component.html -->
<div class="content" role="main">
  <app-button
    [style]="{
      backgroundColor: 'papayawhip'
    }"
  ></app-button>
</div>
```

By passing `style` to `app-button` as a property I can update (extend) the styles without changing (modifying) the `app-button` component. Side note: I would have preferred to do it with a css class, like in the React example above, but I couldn't figure out how to do it.

## Final Thoughts

I hope this simple example has helped you understand how the open/closed principle can be applied to UI components. Feel free to look at the source code in [React](https://github.com/learnitmyway/open-closed-react) or [Angular](https://github.com/learnitmyway/open-closed-angular).