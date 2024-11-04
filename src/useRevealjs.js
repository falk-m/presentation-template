
import Reveal from "revealjs";
import RevealMarkdown from "revealjs/plugin/markdown";
import RevealZoom from "revealjs/plugin/zoom";
import RevealNotes from "revealjs/plugin/notes";
import RevealSearch from "revealjs/plugin/search";
import RevealHighlight from "revealjs/plugin/highlight";

import { useRef, useEffect } from "preact/hooks";

export default (deckDivRef) => {
  const deckRef = useRef(null); // reference to deck reveal instance

  useEffect(() => {
    // Prevents double initialization in strict mode
    if (deckRef.current) return;

    deckRef.current = new Reveal(deckDivRef.current, {
      transition: "slide",
      controls: true,
      progress: true,
      center: true,
      hash: true,

      plugins: [
        RevealZoom,
        RevealNotes,
        RevealSearch,
        RevealMarkdown,
        RevealHighlight,
      ],
      // other config options
    });

    deckRef.current.initialize().then(() => {
      // good place for event handlers and plugin setups
    });

    return () => {
      try {
        if (deckRef.current) {
          deckRef.current.destroy();
          deckRef.current = null;
        }
      } catch (e) {
        console.warn("Reveal.js destroy call failed.");
      }
    };
  }, []);
};