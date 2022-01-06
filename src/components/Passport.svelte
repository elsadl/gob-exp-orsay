<script>
  import { miniGames, passportOpen } from "../stores";

  import Stamp from "./stamps/Stamp.svelte";
  import StampPlaceholder from "./stamps/StampPlaceholder.svelte";
  import Slider from "./stamps/Slider.svelte";
  import Button from "./Button.svelte";

  $: slider = false;
  $: id = null;

  const handleShowArtwork = (event) => {
    console.log("HEEEEERE MSF");
    slider = true;
    id = event.detail.id;
  };

  const togglePassport = () => {
    $passportOpen = !$passportOpen;
  };
</script>

<div class="passport">
  <div class="close-btn">
    <Button icon={"close"} handleClick={togglePassport} />
  </div>

  {#if !slider}
    <div class="stamp-container">
      {#each $miniGames as miniGame}
        {#if miniGame.success}
          <Stamp
            stamp={miniGame}
            id={miniGame.id}
            on:showArtwork={handleShowArtwork}
          />
        {:else}
          <StampPlaceholder />
        {/if}
      {/each}
      <StampPlaceholder />
      <StampPlaceholder />
    </div>
  {:else}
    <Slider {miniGames} {id} />
  {/if}
</div>

<style>
  .passport {
    width: 930px;
    height: 674px;
    position: absolute;
    z-index: 1;
    border-radius: 10px 40px 10px 10px;
    border: 1px solid #7b756d;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .close-btn {
    position: absolute;
    top: 32px;
    right: 32px;
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
