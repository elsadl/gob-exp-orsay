<script>
  import { miniGames, miniGameIndex } from "../../stores";
  import { game } from "../../story/game";

  import Speech from "../Speech.svelte";
  import MiniGameSpeech from "./MiniGameSpeech.svelte";
  import NewStamp from "./NewStamp.svelte";

  const gameLoop = ["clue", "question", "mini-game", "answer", "stamp"];

  // DÉV !! à repasser à 0
  $: loopIndex = 0;
  // $: loopIndex = 4;

  $: activeGame = $miniGames[$miniGameIndex];

  $: conclusion = false;
  $: status = gameLoop[loopIndex];
  $: sentences = game[$miniGameIndex]
    ? [...game[$miniGameIndex][status]]
    : null;

  const handleStampCollected = () => {
    activeGame.success = true;
    $miniGames = [...$miniGames];
    nextSequence();
  };

  const nextSequence = () => {
    if (loopIndex === gameLoop.length - 1) {
      $miniGameIndex++;
      if ($miniGameIndex === $miniGames.length) {
        conclusion = true;
      } else {
        loopIndex = 0;
      }
    } else {
      loopIndex++;
    }
  };
</script>

<div class="mini-game-container">
  {#if !conclusion}
    {#if sentences.length > 0}
      {#if status === "mini-game"}
        <section>
          <MiniGameSpeech question={sentences[0]} />
        </section>
      {:else}
        <section>
          <Speech {sentences} on:endIntro={nextSequence} />
        </section>
      {/if}
    {/if}
    {#if status === "mini-game"}
      <svelte:component
        this={activeGame.component}
        on:endMiniGame={nextSequence}
      />
    {:else if status === "stamp"}
      <NewStamp game={activeGame} on:stampCollected={handleStampCollected} />
    {/if}
  {:else}
    <p>conclu</p>
  {/if}
</div>

<style>
  .mini-game-container {
    height: 670px;
    width: 926px;
    overflow: hidden;
    display: grid;
    align-items: center;
    justify-content: center;
  }
</style>
