import { html } from "../src/html.js";
import { backgrounds, Slide, slideTransition } from "../src/slide.js";

export default function () {
  return html`<${Slide}
    data-transition=${slideTransition.CONVEX}
    data-background-gradient=${backgrounds.linearGreen} >
    Slide 1
  <//>`;
}
