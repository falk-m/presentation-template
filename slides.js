import { html } from "./src/html.js";
import IntroSlide from "./slides/intro.js";
import OutroSlide from "./slides/outro.js";
import OtherSlide from "./slides/other.js";
import BackgroundAnimation from "./slides/background-animation.js";
import BackgroundGradient from "./slides/background-gradient.js";
import BackgroundColor from "./slides/background-color.js";

export function Slides() {
  return html`<div class="slides">
    <${IntroSlide} />
    <${OtherSlide} />
    <${BackgroundAnimation} />
    <${BackgroundGradient} />
    <${BackgroundColor} />
    <${OutroSlide} />
  </div>`;
}