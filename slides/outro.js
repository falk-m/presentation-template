import { html } from "../src/html.js";
import { Slide } from "../src/slide.js";

export default function () {
  return html`<${Slide}>
    <h1>Thanks</h1>
    <a href="?print-pdf">print view</a>
  <//>`;
}
