<script>
  import { createEventDispatcher } from "svelte";

  const dispatch = createEventDispatcher();

  export let game;

  const collectStamp = () => {
    dispatch("stampCollected");
  };
</script>

<div>
  Youpi un timbre! {game.name}
  <p on:click={collectStamp}>Ajouter au passeport</p>
</div>
