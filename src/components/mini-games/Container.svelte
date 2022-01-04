<script>
  import { miniGames, miniGameIndex } from "../../stores";
  import Speech from "../Speech.svelte";

  import { game } from "../../story/game";

  $: activeGame = $miniGames[$miniGameIndex];

  $: count = 0;
  $: status = "clue";
  $: sentences = [...game[$miniGameIndex][status]];
  $: sentence =
    count < sentences.length
      ? sentences[count].split("").map((item) => item)
      : null;

  const nextSentence = () => {
    count += 1;
    if (sentences.length === count) {
      nextSequence();
    }
    // else {
    //   sentence = sentences[count].split("").map((item) => item);
    // }
  };

  // après clue : attendre scan NFC puis passer à la question
  // après question : lancer mini jeu
  // après mini jeu : réponse mascotte
  // après réponse : collecter timbre
  // après timbre : passage à la séquence suivante (intro/clue jeu suivant)

  const nextSequence = () => {
    switch (status) {
      case "clue":
        console.log("scan nfc");
        setTimeout(() => {
          count = 0;
          status = "question";
        }, 1000);
        break;
      case "question":
        status = "mini-game";
        console.log("ici on lance le mini-jeu");
        break;
      case "mini-game":
        console.log("on a fini le mini-jeu");
        count = 0;
        status = "answer";
        break;
      case "answer":
        console.log("on affiche l'écran des timbres");
        break;
      default:
        console.log("oups");
    }
  };

</script>

<div>
  {#if status === "mini-game"}
    <svelte:component this={activeGame.component} on:endMiniGame={nextSequence} />
  {/if}
  {#if sentence}
    <section on:click={nextSentence}>
      <Speech {sentence} {count} />
    </section>
  {/if}
</div>
