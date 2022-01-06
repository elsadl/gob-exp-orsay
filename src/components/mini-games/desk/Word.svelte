<script>
    export let discoveredLetters;
    export let wordLetters;
</script>

<div id="word">
    {#each wordLetters as letter}
    <div class={discoveredLetters.includes(letter) ? "guess-letter found" : "guess-letter"}>
        <div>
          {discoveredLetters.includes(letter) ? letter : ""}
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
        margin-left: 12px;
        margin-right: 12px;
        font-size: 3rem;
        border-radius: 50%;
        border: solid 1px black;
        transition: all .4s ease-in-out;
        position: relative;
    }

    .guess-letter div {
      position: absolute;
      top: 46%;
      left: 50%;
      transform: translate(-50%, -50%);
      line-height: 0;
    }
</style>