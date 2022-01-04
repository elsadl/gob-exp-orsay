<script>
  import { miniGames, miniGameIndex } from "../../stores";
  import Speech from "../Speech.svelte";

  import { intro } from "../../story/intro";
  const { sentences } = intro;

  $: activeGame = $miniGames[$miniGameIndex];
</script>

<div>
  <!-- <svelte:component this={activeGame.component} /> -->
  <Speech sentence={sentences[0]} />
</div>
