<script>
  import { intro } from "../story/intro";
  import { passportOpen } from "../stores";

  import MiniGameContainer from "./mini-games/Container.svelte";
  import Passport from "./Passport.svelte";
  import Button from "./Button.svelte";
  import Speech from "./Speech.svelte";

  const { sentences: sentencesGroupe } = intro;

  $: isIntro = true;
  $: sentences = [...sentencesGroupe];

  const togglePassport = () => {
    $passportOpen = !$passportOpen;
  };

  const nextSequence = () => {
    console.log("on quitte l'intro");
    isIntro = false;
  };
</script>

<section>
  {#if isIntro}
    <Speech {sentences} on:endIntro={nextSequence} />
  {:else}
    <MiniGameContainer />
  {/if}

  {#if $passportOpen}
    <Passport />
  {:else}
    <div class="nav">
      <Button icon={"passport"} handleClick={togglePassport} />
    </div>
  {/if}
</section>

<style>
  section {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 670px;
    width: 926px;
    position: relative;
  }

  .nav {
    position: absolute;
    top: 32px;
    right: 32px;
    z-index: 2;
  }
</style>
