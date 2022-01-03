<script>
  import { onMount } from "svelte";

  import { distance } from "./../../utils";

  import Lamp from "./Lamp.svelte";
  import LineDrawing from "./LineDrawing.svelte";
  import LineModele from "./LineModele.svelte";

  let tracing = false;
  let success = false;

  let progress;
  let previousPoint;
  let currentPoint;
  let index = 0;

  $: lines = [
    {
      id: "1",
      code: `M96.3,36.8c-3.2,10.5-2.4,22.1,2.1,32s12.8,18.2,22.7,22.7c4.8,2.2,10,3.5,14.7,6c4.7,2.5,8.9,6.6,9.8,11.8
			c0.7,3.8-0.5,7.7-1.7,11.4c-2.5,7.7-4.9,15.3-7.4,23c-0.4,1.3-0.8,2.7-0.2,3.9c0.3,0.6,0.8,1.1,1.3,1.5c8.6,7,21.2,7.2,30.1,13.8
			c2.3,1.7,4.5,4.6,3.5,7.3`,
    },
    {
      id: "2",
      code: `M163.5,38.5C154.3,51,147.5,67.4,153,81.8c3.6,9.3,12.1,17.1,12,27.1c-0.1,9-7.1,18.2-3.1,26.2
			c1.7,3.3,5.3,6.3,4.4,9.9`,
    },
    {
      id: "3",
      code: `M201.7,35c0.5,27.8,1,56-5.9,82.9c-0.7,2.6-1.4,5.2-2.8,7.5c-1.3,2.1-3,3.9-4.8,5.6c-2.2,2.1-4.4,4.3-6.7,6.3
			c-2.3,2.1-4.6,4.1-7.4,5.4c-2.8,1.2-5.8,1.7-8.7,2.3c-3,0.6-6,1.6-8.2,3.6c-2.2,2-3.4,5.5-2.1,8.2`,
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
    // si on appuie sur le tracé actif, on lance le tracé
    if (e.path[0].id === "modele-" + lines[index].id) {
      tracing = true;
    }
  };

  let stopDetection = (e) => {
    // si on arrête d'appuyer, on stoppe le tracé
    if (tracing) {
      tracing = false;
      currentPoint = null;

      // si la ligne était complète, on passe à la suivante
      if (lines[index].progress <= 0 && index != lines.length - 1) {
        index += 1;
      } else if (lines[index].progress <= 0 && index === lines.length - 1) {
        // et si c'était la dernière on finit le mini-jeu
        success = true;
      }
    }
  };

  let traceLine = (e) => {
    if (tracing) {
      // on calcule la distance par rapport au point précédent
      previousPoint = currentPoint ? currentPoint : [e.clientX, e.clientY];
      currentPoint = [e.clientX, e.clientY];
      const dist = distance(previousPoint, currentPoint);
      if (dist >= -1) {
        // et on fait avancer la ligne
        lines[index].progress -= Math.abs(dist);
      } else {
        currentPoint = null;
      }
    }
  };
</script>

<div>
  <!-- svelte-ignore a11y-mouse-events-have-key-events -->
  <svg
    height="400"
    width="400"
    version="1.1"
    id="svg"
    on:mousedown={startDetection}
    on:mouseup={stopDetection}
    on:mousemove={traceLine}
  >
    <Lamp />
    {#each lines as line (line.id)}
      <LineModele {line} />
      <LineDrawing {line} />
    {/each}
  </svg>
  
  {#if success}
    <p>Bravo !!</p>
  {/if}
</div>
