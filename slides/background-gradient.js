import { html } from "../src/html.js";
import { backgroundGradients, Slide } from "../src/slide.js";

export default function () {
  return html`<${Slide}
    data-background-gradient="${backgroundGradients.linearBlue}" >
    <ul>
      <li>data-background-gradient="${backgroundGradients.linearBlue}"</li>
      <li>data-background-gradient="${backgroundGradients.linearBlack}"</li>
      <li>data-background-gradient="${backgroundGradients.linearGreen}"</li>
      <li>data-background-gradient="${backgroundGradients.linearPurple}"</li>
    </ul>
  <//>`;
}
