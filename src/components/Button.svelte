<script>
    export let icon;
    export let handleClick;
</script>

<button on:click={handleClick}>
    <img src="images/{icon}.svg" alt="">
</button>

<style>
    button {
      width: 68px;
      height: 68px;
        margin: 0;
        border-radius: 50%;
        background: #F0B5AA;
        border: none;
        box-shadow: 0px 8px 0px #D7CEC8;
    }
</style>