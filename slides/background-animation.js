import { html } from "../src/html.js";
import { backgroundClasses, Slide } from "../src/slide.js";

export default function () {
  return html`<${Slide}
    class="${backgroundClasses.animationGradient}" >

    <ul>
      <li>class="${backgroundClasses.animationGradient}"</li>
      <li>class="${backgroundClasses.animationRainbow}"</li>
    </ul>
  <//>`;
}
