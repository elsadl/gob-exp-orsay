<script>
  export let line;
  export let active;
</script>

<path
  class="modele {active ? '' : 'disabled'}"
  id={"modele-" + line.id}
  d={line.code}
  style="fill: transparent;"
/>

<style>
  .modele {
    stroke-width: 8px;
    stroke: #ffffff;
    opacity: 0.4;
    stroke-dasharray: 20px;
    stroke-linecap: round;
    cursor: pointer;
    transition: opacity 200ms;
  }

  .modele.disabled {
    opacity: 0.2;
  }
</style>
