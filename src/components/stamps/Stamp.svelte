<script>
  // export let stamp;
  export let id;
  import { createEventDispatcher } from 'svelte';
  
  const dispatch = createEventDispatcher();

  function showArtwork () {
    const currentId = this.getAttribute("id")
    
    dispatch('showArtwork', {
      id: currentId,
    })
  }
</script>

<div id={id} on:click={showArtwork}>
</div>

<style>
    div {
    width: 175px;
    height: 234px;
  }

  div:first-child {
    transform: rotate(50deg);
    z-index: 2;
    background: url('/images/bureau.png') center no-repeat;
    background-size: cover;
  }

  div:nth-child(2) {
    transform: rotate(-29.48deg);
    background: url('/images/lampe.png') center no-repeat;
    background-size: cover;
  }

  div:nth-child(3n) {
    transform: rotate(-57.66deg);
    background: url('/images/vitrail.png') center no-repeat;
    background-size: cover;
  }

  div:last-child {
    transform: rotate(9deg);
    background: url('/images/boiserie.png') center no-repeat;
    background-size: cover;
  }
</style>