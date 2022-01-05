<script>
  import { miniGames, miniGameIndex } from "../stores";

  import Stamp from "./stamps/Stamp.svelte";
  import StampPlaceholder from "./stamps/StampPlaceholder.svelte";

  console.log($miniGames, $miniGameIndex);
</script>

<div class="passport">
  {#each $miniGames as miniGame}
    {#if miniGame.success}
      <Stamp stamp={miniGame} />
    {:else}
      <StampPlaceholder />
    {/if}
  {/each}
  <StampPlaceholder />
  <StampPlaceholder /> C'est le passeport !
</div>

<style>
  .passport {
    width: 80%;
    height: 80vh;
    position: absolute;
    z-index: 1;

    background-color: #a3a352;
  }
</style>
