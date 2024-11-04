import { html } from "htm/preact";
import { Slide } from "../slides.js";

export default function () {
  return html`<${Slide}>
    <h1>Thanks</h1>
    <a href="?print-pdf">print view</a>
  <//>`;
}
