<script>
import { afterUpdate } from "svelte";

  import { miniGames, miniGameIndex } from "../../stores";
  import { game } from "../../story/game";
  import Speech from "../Speech.svelte";
  import NewStamp from "./newStamp.svelte";

  const gameLoop = ["clue", "question", "mini-game", "answer", "stamp"];

  $: loopIndex = 0;

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
    }

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

<div>
  {#if !conclusion}
    {#if status === "mini-game"}
      <svelte:component
        this={activeGame.component}
        on:endMiniGame={nextSequence}
      />
    {:else if status === "stamp"}
      <NewStamp game={activeGame} on:stampCollected={handleStampCollected} />
    {/if}
    {#if sentences.length > 0}
      <section>
        <Speech {sentences} on:endIntro={nextSequence} />
      </section>
    {/if}
  {:else}
    <p>conclu</p>
  {/if}
</div>
