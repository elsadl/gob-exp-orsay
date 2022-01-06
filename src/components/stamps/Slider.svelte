<script>
  export let miniGames;
  export let id;

  console.log(miniGames);
</script>

<div>
  <div class="slider">
    <h2>Titre de l'oeuvre</h2>

    <p>Texte explicatif sur l’oeuvre. Il permet à l’utilisateur de re découvrir l’oeuvre en apprenant son histoire.</p>

    <div class="left-arrow">
      <img src="./images/left-arrow.png" alt="">
    </div>
    <div class="right-arrow">
      <img src="./images/right-arrow.png" alt="">
    </div>
  </div>

  <div class="slider-nav">
    {#each $miniGames as miniGame}
      {#if miniGame.success}
        <div class={miniGame.success ? `stamp-slider-nav ${miniGame.name}-success` : "stamp-slider-nav unachieved"}></div>
      {:else}
        <div class={miniGame.success ? `stamp-slider-nav ${miniGame.name}-success` : "stamp-slider-nav unachieved"}></div>
      {/if}
    {/each}
    <div class="stamp-slider-nav unachieved"></div>
    <div class="stamp-slider-nav unachieved"></div>
  </div>
</div>

<style>
  .slider {
    width: 548px;
    height: 290px;
    padding: 30px;
    background: #F2EDE7;
    border-radius: 20px;

    position: relative;
  }

  .left-arrow {
    position: absolute;
    top: 50%;
    left: -50px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .right-arrow {
    position: absolute;
    top: 50%;
    right: -50px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .slider h2 {
    margin: 0
  }

  .slider p {
    font-size: 1.5rem;
  }

  .slider-nav {
    display: flex;
    justify-content: space-between;
    align-self: center;
  }

  .stamp-slider-nav {
    width: 122px;
    height: 165px;
    margin-top: 30px;
  }

  .unachieved {
    background: url('/images/undiscoverd-stamp.png') center no-repeat;
    background-size: cover;
  }
</style>