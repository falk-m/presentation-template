import { html } from "htm/preact";
import { backgrounds, Slide, slideTransition } from "../slides.js";

export default function () {
  return html`<${Slide}
    data-transition=${slideTransition.CONVEX}
    data-background-gradient=${backgrounds.linearGreen} >
    Slide 1
  <//>`;
}
