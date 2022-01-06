<script>
  import { miniGames, passportOpen } from "../stores";
  import EndButton from "./EndButton.svelte";

  const restart = () => {
    location.reload();
  }
</script>

<div class="conclusion">
  <h2>Oh oh cette section est toujours en construction !</h2>

  <div class="stamp-container">
    {#each $miniGames as miniGame}
      {#if miniGame.success}
        <div class="stamp"></div>
      {:else}
        <div class="undiscovered-stamp"></div>
      {/if}
    {/each}
    <div class="undiscovered-stamp"></div>
    <div class="undiscovered-stamp"></div>
  </div>
  

  <p>Reviens plus tard pour finir de collecter tous les timbres et découvrir le chapitre suivant !</p>

  <EndButton on:end={restart}>Recommencer</EndButton>
</div>

<style>
  .conclusion {
    width: 612px;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  h2 {
    font-size: 2.25rem;
    font-weight: 700;
  }

  .stamp,
  .undiscovered-stamp {
    width: 152px;
    height: 168px;
  }

  .stamp-container {
    display: flex;
    justify-content: space-between;
    align-self: center;
  }

  .stamp:first-child {
    background: url("/images/stamps/desk.png") center no-repeat;
    background-size: contain;
  }

  .stamp:nth-child(2n) {
    background: url("/images/stamps/lamp.png") center no-repeat;
    background-size: contain;
  }

  .undiscovered-stamp {
    background: url('/images/stamps/undiscovered-2.png') center no-repeat;
    background-size: contain;
  }

  p {
    text-align: center;
    font-size: 1.25rem;
  }
</style>