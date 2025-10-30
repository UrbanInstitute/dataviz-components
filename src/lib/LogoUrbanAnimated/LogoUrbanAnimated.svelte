<!-- A generative AI model wrote or edited portions of this file with the supervision of a human developer and careful human review. -->
<script>
  /**
   * @typedef {Object} Props
   * @property {number} [width=50] The width of the logo
   * @property {string} [duration="1500ms"] The animation duration (e.g., "1500ms")
   */

  /** @type {Props} */
  let { width = 50, duration = "1500ms" } = $props();

  let height = $derived(width * (90 / 80));
</script>

<svg
  {width}
  {height}
  viewBox="0 0 80 90"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
  role="img"
  aria-label="Urban Institute logo"
  style:--animation-duration={duration}
>
  <rect {width} {height} fill="white" />
  <path
    d="M80.0003 21.4967V48.6142C80.0003 51.9771 79.4916 54.8744 78.4744 57.306C77.5325 59.6282 76.0576 61.6987 74.1677 63.3518C72.2136 65.0093 69.9206 66.2236 67.4478 66.9106C61.7081 68.4529 55.6602 68.4529 49.9204 66.9106C47.4473 66.2244 45.1541 65.01 43.2005 63.3518C41.3107 61.6995 39.8368 59.6287 38.8976 57.306C37.8779 54.8744 37.368 51.9771 37.368 48.6142V21.4967H54.1046V47.0289C54.1046 47.9232 54.1343 48.7756 54.1937 49.5861C54.2394 50.3301 54.4153 51.0605 54.7134 51.7443C55.0023 52.3696 55.4833 52.8872 56.0871 53.2225C56.9055 53.5837 57.7908 53.7703 58.686 53.7703C59.5812 53.7703 60.4665 53.5837 61.2848 53.2225C61.8886 52.8872 62.3697 52.3696 62.6585 51.7443C62.9566 51.0605 63.1325 50.3301 63.1783 49.5861C63.2377 48.778 63.2674 47.9256 63.2674 47.0289V21.4967H80.0003Z"
    fill="#1A96D2"
  />
  <g>
    <path d="M3.94283 0V3.92092H0V0H3.94283Z" fill="#9B9DA1" class="fadein" />
    <path d="M22.7997 0V3.92092H18.8605V0H22.7997Z" fill="#9B9DA1" class="fadein" />
    <path d="M41.8451 0V3.92092H37.906V0H41.8451Z" fill="#9B9DA1" class="fadein" />
    <path d="M60.7985 0V3.92092H56.8593V0H60.7985Z" fill="#9B9DA1" class="fadein" />
    <path d="M79.7511 0V3.92092H75.812V0H79.7511Z" fill="#9B9DA1" class="fadein" />

    <path d="M3.93911 25.4435H0V21.5189H3.93911V25.4435Z" fill="#9B9DA1" class="fadein" />
    <path d="M22.8034 25.4435H18.8605V21.5189H22.8034V25.4435Z" fill="#9B9DA1" class="fadein" />

    <path d="M3.93911 46.9625H0V43.0378H3.93911V46.9625Z" fill="#9B9DA1" class="fadein" />
    <path d="M22.8034 46.9625H18.8605V43.0378H22.8034V46.9625Z" fill="#9B9DA1" class="fadein" />

    <path d="M3.93911 68.4812H0V64.5566H3.93911V68.4812Z" fill="#9B9DA1" class="fadein" />
    <path d="M22.8034 68.4812H18.8605V64.5566H22.8034V68.4812Z" fill="#9B9DA1" class="fadein" />

    <path d="M3.94283 86.0754V90.0001H0V86.0754H3.94283Z" fill="#9B9DA1" class="fadein" />
    <path d="M22.7997 86.0754V90.0001H18.8605V86.0754H22.7997Z" fill="#9B9DA1" class="fadein" />
    <path d="M41.9236 86.0754V90.0001H37.9807V86.0754H41.9236Z" fill="#9B9DA1" class="fadein" />
    <path d="M60.913 86.0754V90.0001H56.9702V86.0754H60.913Z" fill="#9B9DA1" class="fadein" />
    <path d="M79.9033 86.0754V90.0001H75.9604V86.0754H79.9033Z" fill="#9B9DA1" class="fadein" />
  </g>
</svg>

<style>
  .fadein {
    --opacity-start: 0.25;
    --opacity-end: 1;
  }

  @keyframes fadein-1 {
    0% {
      opacity: var(--opacity-start);
    }
    6% {
      opacity: var(--opacity-end);
    }
    100% {
      opacity: var(--opacity-end);
    }
  }
  .fadein:nth-child(1) {
    animation: fadein-1 var(--animation-duration) infinite;
  }

  @keyframes fadein-2 {
    0% {
      opacity: var(--opacity-start);
    }
    6% {
      opacity: var(--opacity-start);
    }
    13% {
      opacity: var(--opacity-end);
    }
    100% {
      opacity: var(--opacity-end);
    }
  }
  .fadein:nth-child(2) {
    animation: fadein-2 var(--animation-duration) infinite;
  }

  @keyframes fadein-3 {
    0% {
      opacity: var(--opacity-start);
    }
    13% {
      opacity: var(--opacity-start);
    }
    19% {
      opacity: var(--opacity-end);
    }
    100% {
      opacity: var(--opacity-end);
    }
  }
  .fadein:nth-child(3) {
    animation: fadein-3 var(--animation-duration) infinite;
  }

  @keyframes fadein-4 {
    0% {
      opacity: var(--opacity-start);
    }
    19% {
      opacity: var(--opacity-start);
    }
    25% {
      opacity: var(--opacity-end);
    }
    100% {
      opacity: var(--opacity-end);
    }
  }
  .fadein:nth-child(4) {
    animation: fadein-4 var(--animation-duration) infinite;
  }

  @keyframes fadein-5 {
    0% {
      opacity: var(--opacity-start);
    }
    25% {
      opacity: var(--opacity-start);
    }
    31% {
      opacity: var(--opacity-end);
    }
    100% {
      opacity: var(--opacity-end);
    }
  }
  .fadein:nth-child(5) {
    animation: fadein-5 var(--animation-duration) infinite;
  }

  @keyframes fadein-6 {
    0% {
      opacity: var(--opacity-start);
    }
    31% {
      opacity: var(--opacity-start);
    }
    38% {
      opacity: var(--opacity-end);
    }
    100% {
      opacity: var(--opacity-end);
    }
  }
  .fadein:nth-child(6) {
    animation: fadein-6 var(--animation-duration) infinite;
  }

  @keyframes fadein-7 {
    0% {
      opacity: var(--opacity-start);
    }
    38% {
      opacity: var(--opacity-start);
    }
    44% {
      opacity: var(--opacity-end);
    }
    100% {
      opacity: var(--opacity-end);
    }
  }
  .fadein:nth-child(7) {
    animation: fadein-7 var(--animation-duration) infinite;
  }

  @keyframes fadein-8 {
    0% {
      opacity: var(--opacity-start);
    }
    44% {
      opacity: var(--opacity-start);
    }
    50% {
      opacity: var(--opacity-end);
    }
    100% {
      opacity: var(--opacity-end);
    }
  }
  .fadein:nth-child(8) {
    animation: fadein-8 var(--animation-duration) infinite;
  }

  @keyframes fadein-9 {
    0% {
      opacity: var(--opacity-start);
    }
    50% {
      opacity: var(--opacity-start);
    }
    56% {
      opacity: var(--opacity-end);
    }
    100% {
      opacity: var(--opacity-end);
    }
  }
  .fadein:nth-child(9) {
    animation: fadein-9 var(--animation-duration) infinite;
  }

  @keyframes fadein-10 {
    0% {
      opacity: var(--opacity-start);
    }
    56% {
      opacity: var(--opacity-start);
    }
    63% {
      opacity: var(--opacity-end);
    }
    100% {
      opacity: var(--opacity-end);
    }
  }
  .fadein:nth-child(10) {
    animation: fadein-10 var(--animation-duration) infinite;
  }

  @keyframes fadein-11 {
    0% {
      opacity: var(--opacity-start);
    }
    63% {
      opacity: var(--opacity-start);
    }
    69% {
      opacity: var(--opacity-end);
    }
    100% {
      opacity: var(--opacity-end);
    }
  }
  .fadein:nth-child(11) {
    animation: fadein-11 var(--animation-duration) infinite;
  }

  @keyframes fadein-12 {
    0% {
      opacity: var(--opacity-start);
    }
    69% {
      opacity: var(--opacity-start);
    }
    75% {
      opacity: var(--opacity-end);
    }
    100% {
      opacity: var(--opacity-end);
    }
  }
  .fadein:nth-child(12) {
    animation: fadein-12 var(--animation-duration) infinite;
  }

  @keyframes fadein-13 {
    0% {
      opacity: var(--opacity-start);
    }
    75% {
      opacity: var(--opacity-start);
    }
    81% {
      opacity: var(--opacity-end);
    }
    100% {
      opacity: var(--opacity-end);
    }
  }
  .fadein:nth-child(13) {
    animation: fadein-13 var(--animation-duration) infinite;
  }

  @keyframes fadein-14 {
    0% {
      opacity: var(--opacity-start);
    }
    81% {
      opacity: var(--opacity-start);
    }
    88% {
      opacity: var(--opacity-end);
    }
    100% {
      opacity: var(--opacity-end);
    }
  }
  .fadein:nth-child(14) {
    animation: fadein-14 var(--animation-duration) infinite;
  }

  @keyframes fadein-15 {
    0% {
      opacity: var(--opacity-start);
    }
    88% {
      opacity: var(--opacity-start);
    }
    94% {
      opacity: var(--opacity-end);
    }
    100% {
      opacity: var(--opacity-end);
    }
  }
  .fadein:nth-child(15) {
    animation: fadein-15 var(--animation-duration) infinite;
  }

  @keyframes fadein-16 {
    0% {
      opacity: var(--opacity-start);
    }
    94% {
      opacity: var(--opacity-start);
    }
    100% {
      opacity: var(--opacity-end);
    }
  }
  .fadein:nth-child(16) {
    animation: fadein-16 var(--animation-duration) infinite;
  }
</style>
