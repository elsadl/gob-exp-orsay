<script>
  import Word from "./Word.svelte";
  import Letters from "./Letters.svelte";

  import { miniGameIndex } from "../../../stores";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  const wordLetters = ["C", "H", "Ê", "N", "E"];

  let success = false;

  $: discoveredLetters = [];

  let handleNewLetter = (e) => {
    console.log(e.detail.letter);
    if (!discoveredLetters.includes(e.detail.letter)) {
      discoveredLetters.push(e.detail.letter);
    }
    discoveredLetters = discoveredLetters;

    if (discoveredLetters.length === wordLetters.length) {
      success = true;

      setTimeout(() => {
        dispatch("endMiniGame");
      }, 1500);

      // setTimeout(() => {
      //   console.log("suivaaant");
      //   $miniGameIndex++;
      // }, 1000);
    }
    console.log(discoveredLetters);
  };
</script>

<div id="letters-game">
  <Word {wordLetters} {discoveredLetters} />
  <Letters {wordLetters} on:newLetter={handleNewLetter} />
  <!-- {#if success}
    <p>Bravo !!</p>
  {/if} -->
</div>

<style>
  #letters-game {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  /* p {
    text-align: center;
  } */
</style>
