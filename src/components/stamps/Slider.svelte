<script>
  import SliderExplications from "./SliderExplications.svelte";
  import { explications, miniGameIndex } from "../../stores";
  export let miniGames;
  export let id;

  $: count = id;

  const successArray = $miniGames.filter((item) => item.success);
  console.log(successArray);

  function handleClick() {
    const nextId = this.getAttribute("data-id");
    count = nextId;
  }

  const prevArtwork = () => {
    if (count !== 1 && successArray.length !== 1) {
      console.log("here");
      count -= 1;
    }
  };

  const nextArtwork = () => {
    if (
      count !== successArray[successArray.length - 1].id &&
      successArray.length !== 1
    ) {
      count++;
    }
  };
</script>

<div>
  <div class="slider">
    {#each $explications as exp}
      {#if exp.id == count}
        <SliderExplications content={exp} />
      {/if}
    {/each}

    <div
      class={successArray.length > 1 && Number(count) === 2
        ? "left-arrow"
        : "left-arrow diseabled"}
    >
      <img src="./images/left-arrow.png" alt="" on:click={prevArtwork} />
    </div>
    <div
      class={successArray.length > 1 && Number(count) === 1
        ? "right-arrow"
        : "right-arrow diseabled"}
    >
      <img src="./images/right-arrow.png" alt="" on:click={nextArtwork} />
    </div>
  </div>

  <div class="slider-nav">
    {#each $miniGames as miniGame}
      {#if miniGame.success}
        <div
          class={miniGame.success
            ? `stamp-slider-nav ${miniGame.name}-success`
            : "stamp-slider-nav unachieved"}
          data-current={miniGame.id == count ? "true" : "false"}
          data-id={miniGame.id}
          on:click={handleClick}
        />
      {:else}
        <div
          class={miniGame.success
            ? `stamp-slider-nav ${miniGame.name}-success`
            : "stamp-slider-nav unachieved"}
        />
      {/if}
    {/each}
    <div class="stamp-slider-nav unachieved" />
    <div class="stamp-slider-nav unachieved" />
  </div>
</div>

<style>
  .slider {
    width: 548px;
    height: 290px;
    padding: 30px;
    background: #f2ede7;
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

  .slider-nav {
    display: flex;
    justify-content: space-between;
    align-self: center;
    transition: all 0.4s ease-in-out;
  }

  .stamp-slider-nav {
    width: 122px;
    height: 165px;
    margin-top: 30px;
    transition: transform 200ms;
  }

  .unachieved {
    background: url("/images/stamps/undiscovered.png") center no-repeat;
    background-size: contain;
  }

  .diseabled {
    opacity: 0.3;
    cursor: initial;
    pointer-events: none;
  }
</style>
