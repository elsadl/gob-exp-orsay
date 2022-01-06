<script>
  import { createEventDispatcher } from 'svelte';

  const dispatch = createEventDispatcher();

  const handleClick = () => (
    dispatch("start")
  )
</script>

<button on:click={handleClick}><span><slot /></span></button>

<style>
  button {
    border-radius: 50px;
    padding: 20px 45px 25px 30px;
    margin-top: 40px;
    margin-left: 45px;
    cursor: pointer;
    background-color: white;
    box-shadow: 0px 8px 0px 0px var(--shadow);
    font-size: 1.5rem;
    border: 0;
    font-weight: 700;
    /* background-image: url("/images/next.svg"); */
  }

  button span::after {
    content: url("/images/next.svg");
    position: relative;
    top: 3px;
    left: 15px;
    display: inline-block;
  }
</style>
