<script>
  export let options;
  export let navBtn;

  //   import MiniGame from "./components/mini-games/Container.svelte";

  // let current = options[0];
  let current = options[1];

  const startExp = () => {
    if (options[0].selected === true) options[0].selected = false;
    options[1].selected = true;
    current = options[1];
  };
</script>

<main>
  <!-- <MiniGame /> -->
  {#if current.selected === true && current.name === "Landing"}
    <svelte:component this={current.component} />
    <button class="start-cta" on:click={startExp}> Start experience </button>
  {:else if current.selected === true && current.name === "Game"}
    <svelte:component this={current.component} {navBtn} />
  {/if}
</main>

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
  }
</style>
