<script>
  import gsap, { Power3 } from "gsap";
  import { afterUpdate, createEventDispatcher, onMount } from "svelte";
  import { fade, fly } from 'svelte/transition';
  import { expoInOut } from 'svelte/easing';
  import SpeechButton from "./SpeechButton.svelte";

  export let sentences;

  const dispatch = createEventDispatcher();

  $: count = 0;
  $: visible = false;

  let tl = gsap.timeline();

  onMount(() => {
    console.log('mounted')
    visible = true
  })

  afterUpdate(() => {
    if (count === 0) {
      // console.log("condition????");
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

{#if visible}
<section class="speech-container">
  <div>
    <div class="speech" in:fly="{{ y: 40, duration: 900, delay: 350, easing: expoInOut }}">
      <p class="sentence">
        {#if sentences[count]}
          <!-- {#each sentences[count].text as item}
            {#if item === " "}
              <span class="char space" />
            {:else} -->
              <span class="char">{@html sentences[count].text}</span>
            <!-- {/if}
          {/each} -->
        {/if}
      </p>
    </div>
    <div on:click={nextSentence} in:fly="{{ y: 40, duration: 900, delay: 550, easing: expoInOut }}">
      <SpeechButton>Continuer</SpeechButton>
    </div>
  </div>
  <div class="avatar"  in:fly="{{ y: 40, duration: 900, easing: expoInOut }}">
    <img src="/images/avatar/{sentences[count].emotion}.png" alt="" />
    {#if sentences[count].hand}
      <img src="/images/avatar/{sentences[count].hand}.png" alt="" />
    {/if}
  </div>
</section>
{/if}

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

  .char {
    display: inline-block;
    will-change: transform;
    /* padding-right: 8px; */
  }
  .avatar {
    position: relative;
    left: -40px;
    display: grid;
  }

  .avatar img {
    grid-area: 1 / -1;
  }
</style>
