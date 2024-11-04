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