import { html } from "../src/html.js";
import { backgroundGradients, Slide, slideTransition } from "../src/slide.js";

export default function () {
  return html`<${Slide}
    data-transition=${slideTransition.CONVEX}
    data-background-gradient=${backgroundGradients.linearGreen} >
    Slide 1
  <//>`;
}
