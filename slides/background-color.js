import { html } from "../src/html.js";
import { backgroundColors, Slide } from "../src/slide.js";

export default function () {
  return html`<${Slide}
    data-background-color="${backgroundColors.darkBlue}" >
    <ul>
      <li>data-background-color="${backgroundColors.darkBlue}"</li>
      <li>data-background-color="${backgroundColors.lightBlue}"</li>
      <li>data-background-color="${backgroundColors.green}"</li>
    </ul>
  <//>`;
}
