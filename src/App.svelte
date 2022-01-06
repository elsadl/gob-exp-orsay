<script>
  import gsap, { Power3 } from 'gsap';
  import LaunchButton from "./components/LaunchButton.svelte";

  export let options;

  let current = options[0];
  // let current = options[1];

  $: started = false

  const startExp = () => {
    if (options[0].selected === true) options[0].selected = false;
    options[1].selected = true;
    current = options[1];
  };

  const start = () => {

    gsap.to('.portal', {
        opacity: 0,
        duration: 1.25,
        ease: Power3.easeOut,
    })

    setTimeout(() => {
      started = true
    }, 1250);
  }
</script>

{#if !started}
  <div class="portal">
    <span on:click={start}>Entrer</span>
  </div>
{:else}
  <main>
    {#if current.selected === true && current.name === "Landing"}
      <svelte:component this={current.component} />
      <LaunchButton on:start={startExp}>Rencontrer le <span class="prof">professeur</span></LaunchButton>
      <img class="logo" src="./images/orsay-gobelins.png" alt="">
    {:else if current.selected === true && current.name === "Game"}
      <svelte:component this={current.component} />
    {/if}
  </main>
{/if}

<style>
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 670px;
    width: 926px;
    position: relative;
  }

  .portal {
    width: 100%;
    height: 100vh;
    background: #000;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .portal span {
    color: #fff;
    font-size: 4em;
    cursor: pointer;
  }

  .logo {
    position: absolute;
    top: 30px;
    right: 30px;
  }

  .prof {
    color: #F73132;
  }
</style>
