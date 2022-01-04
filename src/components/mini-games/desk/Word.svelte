<script>
    export let discoveredLetters;
    export let wordLetters;
</script>

<div id="word">
    {#each wordLetters as letter}
    <div>
        {discoveredLetters.includes(letter) ? letter : "_"}
    </div>
    {/each}
</div>

<style>
    #word {
        display: flex;
        justify-content: center;
    }
    
    #word div + div {
        padding-left: 1em;
    }
</style>