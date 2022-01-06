<script>
  import { createEventDispatcher } from "svelte";

  import Speech from "./../Speech.svelte";
  import SpeechButton from "./../SpeechButton.svelte";

  const dispatch = createEventDispatcher();

  export let game;

  let sentences = [];
  sentences.push(game.sentence);

  console.log(sentences)

  const collectStamp = () => {
    dispatch("stampCollected");
  };
</script>

<div>
  <Speech {sentences} button={false} />
  <!-- Youpi un timbre! {game.name} -->
  <div class="btn">
    <SpeechButton on:click={collectStamp}>Ajouter au passeport</SpeechButton>
  </div>
</div>

<style>
  .btn {
    font-size: 1.25em;
  }
</style>