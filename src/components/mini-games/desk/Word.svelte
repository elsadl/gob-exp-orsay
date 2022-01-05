<script>
    export let discoveredLetters;
    export let wordLetters;
</script>

<div id="word">
    {#each wordLetters as letter}
    <div class="guess-letter">
        <div>
          {discoveredLetters.includes(letter) ? letter : "_"}
        </div>
    </div>
    {/each}
</div>

<style>
    #word {
        display: flex;
        justify-content: center;
    }
    
    .guess-letter  {
        /* padding-left: 1em; */
        width: 68px;
        height: 68px;
        margin: .5em;
        font-size: 2.5em;
        padding: 10px;
        border-radius: 50%;
        background-color: #C0B8AD;

        position: relative;
    }

    .guess-letter div {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    
</style>