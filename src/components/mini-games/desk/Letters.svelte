<script>
  import Letter from "./Letter.svelte";

  export let wordLetters;

  let letters = [
    "C",
    "E",
    "T",
    "H",
    "N",
    "M",
    "S",
    "R",
    "A",
    "Ê",
    "B",
    "J",
    "O",
    "U",
  ];
</script>

<div id="letters-grid">
  {#each letters as letter}
    <Letter {wordLetters} {letter} on:newLetter />
  {/each}
</div>

<style>
  #letters-grid {
    width: 680px;
    margin: 0 auto;
    padding-top: 60px;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    row-gap: 25px;
  }
</style>
