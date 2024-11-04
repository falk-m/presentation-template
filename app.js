import { html } from "htm/preact";
import { useRef } from "preact/hooks";
import { Slides } from "./slides.js";
import useRevealJS from "./hooks/useRevealjs.js";

export default function () {
  const deckDivRef = useRef(null);

  useRevealJS(deckDivRef);

  return html`<div class="reveal" ref=${deckDivRef}>
    <${Slides} />
  </div>`;
}
