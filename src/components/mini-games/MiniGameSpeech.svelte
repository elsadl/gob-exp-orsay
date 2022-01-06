<script>
  import gsap, { Power3 } from "gsap";
  import { onMount } from "svelte";
  import { miniGameIndex } from "./../../stores";

  let miniGame = $miniGameIndex === 0 ? "desk" : "lamp";

  export let question;

  let tlMiniGame = gsap.timeline();

  onMount(() => {
    console.log('mounted')
    tlMiniGame
    .from(".avatar", {
        y: "40",
        duration: 0.8,
        opacity: 0,
        ease: Power3.easeInOut,
      })
    .to(".speech", {
      y: "0",
      duration: 0.8,
      opacity: 1,
      delay: -0.6,
      ease: Power3.easeInOut,
    })
  })
</script>

<section class="{miniGame} speech-container">
  <div class="speech">
    <p class="sentence">
      {question.text}
    </p>
  </div>
  <div class="avatar">
    <img src="/images/avatar/minigame.png" alt="" />
  </div>
</section>

<style>
  .speech-container {
    position: relative;
    left: 20px;
    font-size: 1.25em;
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
  }

  .speech-container.lamp {
    top: 60px;
  }

  .speech {
    width: 400px;
    padding: 20px 30px;
    box-shadow: 10px 10px 0px var(--shadow);
    border-radius: 30px;
    opacity: 0;
    transform: translateY(-40px);
    /* visibility: hidden; */
    /* provisoire */
    background-color: #fff;
  }

  p {
    line-height: 1.25;
    margin: 0;
  }

  .avatar {
    position: relative;
    left: -40px;
  }

</style>
