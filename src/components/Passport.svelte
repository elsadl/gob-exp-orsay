<script>
  import { miniGames, miniGameIndex } from "../stores";

  import Stamp from "./stamps/Stamp.svelte";
  import StampPlaceholder from "./stamps/StampPlaceholder.svelte";
  import Slider from "./stamps/Slider.svelte"

  console.log($miniGames, $miniGameIndex);

  $: slider = false;
  $: id = null;

  const handleShowArtwork = (event) => {
    console.log('HEEEEERE MSF')
    slider = true
    id = event.detail.id
  }

</script>

<div class="passport">
  {#if !slider}
    <div class="stamp-container">
      {#each $miniGames as miniGame}
        {#if miniGame.success}
          <Stamp stamp={miniGame} id={miniGame.id} on:showArtwork={handleShowArtwork}/>
        {:else}
          <StampPlaceholder />
        {/if}
      {/each}
      <StampPlaceholder id="3" />
      <StampPlaceholder id="4" />
    </div>
  {:else}
    <Slider {miniGames} {id} />
  {/if}
</div>

<style>
  .passport {
    width: 96%;
    height: 93vh;
    position: absolute;
    z-index: 1;
    border-radius: 10px 40px 10px 10px;
    border: 1px solid #7B756D;
    background-color: white;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .stamp-container {
    width: 50%;
    height: auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
</style>
