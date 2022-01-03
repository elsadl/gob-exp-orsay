<script>
  export let letter;
  export let wordLetters;

  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  let selectLetter = (e) => {
    let selected = e.target.getAttribute("data-letter");
    console.log(selected);
    if (wordLetters.includes(selected)) {
      console.log("yup");
      dispatch("newLetter", {
        letter: selected,
      });
      document.getElementById("letter-" + selected).classList.add("disabled");
    } else {
      console.log("nope");
    }
  };
</script>

<div id={"letter-" + letter} class="letter" data-letter={letter} on:click={selectLetter}>
  {letter}
</div>

<style>
    .letter {
        cursor: pointer;
        text-align: center;
    }

    :global(.letter.disabled) {
        opacity: 0.2;
        cursor: default;
    }
    
</style>
