<script>
  import { onMount } from "svelte";

  import { distance } from "../../../utils";

  import Lamp from "./Lamp.svelte";
  import LineDrawing from "./LineDrawing.svelte";
  import LineModele from "./LineModele.svelte";

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let tracing = false;

  let previousPoint;
  let currentPoint;
  let index = 0;

  $: lines = [
    {
      id: 1,
      code: `M86.2,39.6l-4.4,7.7C73,58.5,70.4,85.4,69.9,94.3s-1.3,13-3.3,18.2C55.2,123.2,90.7,187,90.7,187
		s-10.2,4.3-1.8,19c8.5,14.7,8.8,17.5,8.5,30.7c-2.8,37.3,23.2,81.5,23.2,81.5`,
    },
    {
      id: 2,
      code: `M369.3,344.5l1.9-3.7c3.7-0.4,22.9-99.7,21.1-126.5c-1.6-24-16-73-16-73s13.5,8.6,22.3,22
		c22.2,29.8,28.9,23.1,43.4,5.1c7.1-7.2,9.9-8.5,12.6-9.4c16.3-5.4,21.1,14.2,25.8,22.6c5.1,9.2,15.4,13.7,15.4,13.7`,
    },
  ];

  onMount(() => {
    for (let line of lines) {
      line.length = Math.floor(
        document.querySelector("#modele-" + line.id).getTotalLength()
      );
      line.progress = line.length;
    }
    lines = lines;
  });

  let startDetection = (e) => {
    console.log("start");
    console.log(e);
    
    // si on appuie sur le tracé actif, on lance le tracé
    // if (pointerType === "touch") {
    // } else {
    if (e.path[0].id === "modele-" + lines[index].id) {
      tracing = true;
      lines[index].startingPoint = [e.clientX, e.clientY];
    }
    // }
  };

  let stopDetection = (e) => {
    console.log("stop");
    console.log(e);

    // si on arrête d'appuyer, on stoppe le tracé
    if (tracing) {
      tracing = false;
      currentPoint = null;

      // si la ligne était complète, on passe à la suivante
      if (lines[index].progress <= 0 && index != lines.length - 1) {
        index += 1;
      } else if (lines[index].progress <= 0 && index === lines.length - 1) {
        // et si c'était la dernière on finit le mini-jeu
        setTimeout(() => {
          dispatch("endMiniGame");
        }, 1500);
      }
    }
  };

  let traceLine = (e) => {
    console.log("move");
    console.log(e);
    if (tracing) {
      // on calcule la distance par rapport au point précédent
      previousPoint = currentPoint ? currentPoint : [e.clientX, e.clientY];
      currentPoint = [e.clientX, e.clientY];
      const dist = distance(previousPoint, currentPoint);
      console.log({ dist });
      if (dist >= 0) {
        // et on fait avancer la ligne
        lines[index].progress -= dist;
      } else {
        currentPoint = null;
      }
    }
  };
</script>

<svelte:window on:pointermove={traceLine} on:pointerup={stopDetection} />

<div>
  <!-- svelte-ignore a11y-pointer-events-have-key-events -->
  <svg
    width="547"
    height="490"
    version="1.1"
    id="svg"
    viewBox="0 0 547.1 490"
    on:pointerdown={startDetection}
  >
    <Lamp />
    {#each lines as line (line.id)}
      <LineModele {line} active={line.id === index + 1} />
      <LineDrawing {line} active={line.id === index + 1} />
    {/each}
  </svg>
</div>

<style>
  svg {
    height: 600px;
  }
</style>
