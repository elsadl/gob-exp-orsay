<script>
  // export let stamp;
  export let id;
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  function showArtwork() {
    const currentId = this.getAttribute("id");

    dispatch("showArtwork", {
      id: currentId,
    });
  }
</script>

<div {id} on:click={showArtwork} />

<style>
  div {
    width: 210px;
    height: 230px;
  }

  div:first-child {
    transform: rotate(50deg);
    z-index: 2;
    background: url("/images/stamps/desk.png") center no-repeat;
    background-size: contain;
  }

  div:nth-child(2) {
    transform: rotate(-29.48deg);
    background: url("/images/stamps/lamp.png") center no-repeat;
    background-size: contain;
  }

  div:nth-child(3n) {
    transform: rotate(-57.66deg);
    background: url("/images/stamps/vitral.png") center no-repeat;
    background-size: contain;
  }

  div:last-child {
    transform: rotate(9deg);
    background: url("/images/stamps/placeholder.png") center no-repeat;
    background-size: contain;
  }
</style>
