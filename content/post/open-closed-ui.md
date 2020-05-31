---
title: "Applying the open-closed principle to UI components"
type: post
date: 2020-05-31
excerpt: In this article I will demonstrate a simple example of applying the open/closed principle to a UI component in React or Angular.
url: open-closed-ui
canonical: true
extraContent:
publisherInfo: 
---

In this article I will demonstrate a simple example of applying the open/closed principle to a UI component in React or Angular.

<!--more-->
<!-- og:description -->

## Background

I had an aha moment this week regarding the [open/closed principle](https://en.wikipedia.org/wiki/Open%E2%80%93closed_principle), which states *"software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification"* and is the *O* in [SOLID](https://en.wikipedia.org/wiki/SOLID). I have always found this principle to be quite abstract and I didn't really know if I was really applying it until now.

The aha moment came to me when I wanted to change the style of an existing component. For simplicity's sake less say this was a button and I wanted to change the existing background colour. Let's see how this works in React and then Angular. Or you can [skip straight to Angular](#angular).

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

Now our app's stakeholders have said they would like us to add a new button in `papayawhip` directly beside the existing button. They have also said there are going to be more buttons to follow. So we decide to parameterise the `className` in the `Button` component:

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

By passing `className` to `Button` as a prop I can update (extend) the styles without changing (modifying) the `Button` component:

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

Now our app's stakeholders have said they would like us to add a new button in `papayawhip` directly beside the existing button. They have also said there are going to be more buttons to follow. So we decide to parameterise the style of the `Button` component (I would have preferred to parameterise the css class name, like in the [React example above](#react), but I couldn't figure out how to do it):

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

By passing `style` to `app-button` as a property I can add a button and update (extend) the styles without changing (modifying) the `app-button` component:

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
