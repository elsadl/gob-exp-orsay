<script>
  import gsap, { Power3 } from 'gsap';
  import Word from "./Word.svelte";
  import Letters from "./Letters.svelte";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  const wordLetters = ["C", "H", "Ê", "N", "E"];

  $: discoveredLetters = [];

  let handleNewLetter = (e) => {
    if (!discoveredLetters.includes(e.detail.letter)) {
      discoveredLetters.push(e.detail.letter);
    }
    discoveredLetters = discoveredLetters;

    if (discoveredLetters.length === wordLetters.length) {

      setTimeout(() => {
        gsap
        .to('.guess-letter', {
          y: -40, 
          duration: .4, 
          stagger: {
            each: 0.05,
            from: "start"
          },
          ease: Power3.easeOut,
        })
        gsap.to('.guess-letter', {
          y: 0, 
          duration: .2, 
          stagger: {
            each: 0.02,
            from: "start"
          },
          delay: ".8",
          ease: Power3.easeIn,
        })
      }, 350);

      setTimeout(() => {
        dispatch("endMiniGame");
      }, 2200);
    }
  };
</script>

<div id="letters-game">
  <Word {wordLetters} {discoveredLetters} />
  <Letters {wordLetters} on:newLetter={handleNewLetter} />
</div>
