<script>
  export let line;
  export let active;
</script>

<path
  class="drawing {active ? '' : 'disabled'}"
  id={"drawing-" + line.id}
  style="fill: transparent; stroke-dasharray: {line.length + 2}; stroke-dashoffset: {line.progress >
  0
    ? line.progress
    : 0}"
  d={line.code}
/>

<style>
  .drawing {
    stroke-width: 8px;
    stroke: #F73132;
    stroke-linecap: round;
    pointer-events: none;
    opacity: 1;
    transition: opacity 200ms;
  }

  #drawing-2.disabled {
    opacity: 0;
  }
</style>
