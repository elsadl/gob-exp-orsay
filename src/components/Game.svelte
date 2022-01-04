<script>
  import { intro } from "../story/intro";
  import Button from "./Button.svelte";
  import Speech from "./Speech.svelte";
  export let navBtn;

  const { sentences: sentencesGroupe } = intro;

  let isPassport = navBtn[0];
  $: count = 0;
  $: sentences = [...sentencesGroupe];
  $: sentence = sentences[count].split("").map((item) => item);

  const handlePassClick = () => {
    if (isPassport.selected === true) {
      navBtn[0].selected = false;
    } else {
      navBtn[0].selected = true;
    }
    isPassport = navBtn[0];
  };

  const nextSentence = () => {
    count += 1;
    sentence = sentences[count].split("").map((item) => item);
  };
</script>

<section on:click={nextSentence}>
  <Speech {sentence} {count} />

  <div class="nav">
    <Button icon={"map"} handleClick={handlePassClick} />
  </div>

  {#if isPassport.selected === true}
    <svelte:component this={isPassport.component} />
  {/if}
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: calc(100vh - 8px);
    width: 100%;

    position: relative;
  }
  .nav {
    position: absolute;
    top: 10px;
    right: 10px;
  }
</style>
