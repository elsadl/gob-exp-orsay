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
    stroke-width: 10px;
    stroke: rgba(0, 0, 0, 0.1);
  }
</style>
