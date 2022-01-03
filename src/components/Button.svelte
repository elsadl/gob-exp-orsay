<script>
    export let icon;
    export let handleClick;
</script>

<button on:click={handleClick}>
    <img src="images/{icon}.png" alt="">
</button>

<style>
    button {
        padding: 10px;
        margin: 0;
        border-radius: 50%;
        
    }
</style>