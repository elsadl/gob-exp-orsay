<script>
  export let line;
</script>

<path
  class="drawing"
  id={"drawing-" + line.id}
  style="fill: transparent; stroke-dasharray: {line.length}; stroke-dashoffset: {line.progress >
  0
    ? line.progress
    : 0}"
  d={line.code}
/>

<style>
  .drawing {
    stroke-width: 6px;
    stroke: red;
    pointer-events: none;
  }
</style>
