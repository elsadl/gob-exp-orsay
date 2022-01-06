<script>
  export let line;
</script>

<path
  class="modele"
  id={"modele-" + line.id}
  d={line.code}
  style="fill: transparent;"
/>

<style>
  .modele {
    stroke-width: 8px;
    stroke: #f73132;
    stroke-dasharray: 20px;
    stroke-linecap: round;
    cursor: pointer;
  }
</style>
