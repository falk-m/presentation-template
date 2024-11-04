# Reveal JS with ES Modules

This repository include a little reveal js slideshow demo.    
each slide is seperated in its own file.    
The project needs no complation.

```js
//slides/intro.js

import { html } from "../src/html.js";
import { Slide } from "../src/slide.js";

export default function () {
  return html`<${Slide}>
    <h1>Intro</h1>
  <//>`;
}
```

```js
//slides.js

import { html } from "./src/html.js";
import IntroSlide from "./slides/intro.js";
import OutroSlide from "./slides/outro.js";
import OtherSlide from "./slides/other.js";

export function Slides() {
  return html`<div class="slides">
    <${IntroSlide} />
    <${OtherSlide} />
    <${OutroSlide} />
  </div>`;
}
```

## ES Modules

Modern Browsers can load js files dynamic over the "import" attrebute.

```
import IntroSlide from "./slides/intro.js";
```

This reveal slideshow demo use preact, imported as ES module.    
Preact is a great project with the same api like react, but with a smaller footprint.   
And here we use it without compiling step.

## http server

The browser can import Es Module js files only over http/https.

You can use the php build in webserver e.g.    
```php -S localhost:8000```


## styles and transitions

Here examples to gefinde diffrent kinds of background effects:

```<${Slide} data-background-color="rgb(70, 70, 255)">```    
```<${Slide} data-background-gradient="radial-gradient(#283b95, #17b2c3)">```    
```<${Slide} data-background-gradient="linear-gradient(to bottom, #283b95, #17b2c3)">```    

[gradients.shecodes.io](https://gradients.shecodes.io/gradients/black/color) its a good source and inspiration for css gradiants.

The project includes enums für diffrent transition exxects and background gradients.

```jsx
<${Slide}
    data-transition=${slideTransition.CONVEX}
    data-background-gradient=${backgrounds.linearGreen} >
    Slide 1
<//>
```

# links

- [preactjs](https://preactjs.com/)
- [revealjs](https://revealjs.com/)

