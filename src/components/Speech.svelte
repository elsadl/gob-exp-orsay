<script>
  import gsap, { Power3 } from "gsap";
  import { afterUpdate, createEventDispatcher, onMount } from "svelte";

  import SpeechButton from "./SpeechButton.svelte";

  export let sentences;

  const dispatch = createEventDispatcher();

  $: count = 0;

  let tl = gsap.timeline();

  // onMount(() => {

  // })

  afterUpdate(() => {
    if (count === 0) {
      console.log("condition????");
      console.log(tl);
      // tl.from(".avatar", {
      //   y: "40",
      //   duration: 1,
      //   opacity: 0,
      //   ease: Power3.easeInOut,
      // });
    }
    // tl.to(".speech", {
    //   y: "0",
    //   duration: 1,
    //   opacity: 1,
    //   delay: -0.7,
    //   ease: Power3.easeInOut,
    // }).from(".char", {
    //   y: 5,
    //   opacity: 0,
    //   duration: 0.3,
    //   stagger: {
    //     each: 0.02,
    //     from: "start",
    //   },
    //   delay: -1.4,
    //   ease: Power3.easeInOut,
    // });
  });

  const nextSentence = () => {
    console.log("next sentence");

    // if (!tl.isActive()) {
    //   tl.play();
    count += 1;
    // } else if (tl.isActive()) {
    //   tl.progress(1).pause();
    // }

    if (sentences.length === count) {
      count = 0;
      dispatch("endIntro");
    }
  };
</script>

<section class="speech-container">
  <div>
    <div class="speech">
      <p class="sentence">
        {#if sentences[count]}
          <!-- {#each sentences[count].text as item}
            {#if item === " "}
              <span class="char space" />
            {:else} -->
              <span class="char">{@html sentences[count].text}</span>
            <!-- {/if} -->
          <!-- {/each} -->
        {/if}
      </p>
    </div>
    <div on:click={nextSentence}>
      <SpeechButton>Continuer</SpeechButton>
    </div>
  </div>
  <div class="avatar">
    <img :class={sentences[count].emotion} src="/images/Amigos.png" alt="" />
    {#if sentences[count].hand}
      <!-- à finir quand on aura les assets -->
      <p class="avatar-hand">{sentences[count].hand}</p>
      <!-- <img :class={sentences[count].hand} src="/images/Amigos.png" alt="" /> -->
    {/if}
  </div>
</section>

<style>
  .speech-container {
    position: relative;
    left: 40px;
    font-size: 1.25em;
    display: flex;
  }

  .speech {
    width: 400px;
    padding: 20px 30px;
    box-shadow: 10px 10px 0px var(--shadow);
    border-radius: 30px;
    /* opacity: 0;
    transform: translateY(-40px); */
    /* visibility: hidden; */
    /* provisoire */
    background-color: #fff;
  }

  p {
    line-height: 1.25;
    margin: 0;
    font-size: 1em;
  }

  .space {
    padding-right: 8px;
  }

  .char {
    display: inline-block;
    will-change: transform;
    /* padding-right: 8px; */
  }

  .avatar {
    position: relative;
    left: -40px;
  }

  .avatar-hand {
    position: absolute;
  }
</style>
