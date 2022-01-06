<script>
  export let letter;
  export let wordLetters;

  import gsap, { Power3 } from 'gsap'; 
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
      e.target.classList.add('shaking')
      setTimeout(() => {
        e.target.classList.remove('shaking')
      }, 450);
    }
  };
</script>

<div id={"letter-" + letter} class="letter" data-letter={letter} on:click={selectLetter}>
  {letter}
</div>

<style>
    @keyframes shake {
        25% {
            transform:translateX(6px)
        }
        50% {
            transform:translateX(-4px);
        }
        75% {
            transform:translateX(2px);
        }
        100% {
            transform:translateX(0);
        }
    }
    .letter {
        cursor: pointer;
        text-align: center;
        font-family: "Vulf";
        font-size: 2.5rem;
        font-weight: 500;
    }

    :global(.letter.disabled) {
        opacity: 0.4;
        cursor: default;
    }

    :global(.shaking) {
        /* color: red; */
        animation: shake .4s ease-in-out forwards;
    }
</style>
