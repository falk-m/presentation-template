import { html } from "./html.js";

export const backgrounds = {
  linearGreen: 'linear-gradient(109.6deg, rgb(0, 0, 0) 11.2%, rgb(11, 132, 145) 91.1%)',
  linearBlue: 'linear-gradient(to top, rgb(9, 32, 63) 0%, rgb(83, 120, 149) 100%)',
  linearPurple: 'linear-gradient(-20deg, #2b5876 0%, #4e4376 100%)',
  linearBlack: 'radial-gradient(circle at 10% 20%, rgb(69, 86, 102) 0%, rgb(34, 34, 34) 90%)',
}

export const slideTransition = {
  ZOOM: 'zoom',
  SLIDE: 'slide',
  FADE: 'fade',
  NONE: 'none',
  CONVEX: 'convex',
  CONCAVE: 'concave'
};

export function Slide(props) {
  return html`<section ...${props}>
    ${props.children}
  </section>`;
}