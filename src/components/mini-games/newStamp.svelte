<script>
  import { createEventDispatcher } from "svelte";

  import gsap from "gsap";

  import SpeechButton from "../SpeechButton.svelte";

  const dispatch = createEventDispatcher();

  export let game;

  const initCollectStamp = () => {
    let tl = gsap.timeline({ onComplete: collectStamp });

    tl.add("start")
      .to(
        ".stamp",
        {
          y: "-230",
          x: "230",
          scale: 0.5,
          duration: 0.6,
          opacity: 0,
          // ease: Power3.easeInOut,
        },
        "start"
      )
      .to(
        ".fake-nav",
        {
          opacity: 1,
          duration: 0,
        },
        "start"
      )
      .to(".fake-nav", {
        scale: 1.2,
        duration: 0.5,
      })
      .to(".fake-nav", {
        scale: 1,
        duration: 0.3,
      });
  };

  const collectStamp = () => {
    setTimeout(() => {
      dispatch("stampCollected");
    }, 200);
  };
</script>

<div>
  <button class="fake-nav">
    <img src="images/passport.svg" alt="" />
  </button>
  <section class="speech-container">
    <div>
      <div class="speech">
        <p class="sentence">
          {game.sentence.text}
        </p>
        <img
          class="stamp"
          src={"/images/stamps/" + game.name + ".png"}
          alt="stamp"
        />
      </div>
      <div on:click={initCollectStamp}>
        <SpeechButton>Ajouter au passeport</SpeechButton>
      </div>
    </div>
    <div class="avatar">
      <img src="/images/Amigos.png" alt="" />
    </div>
  </section>
</div>

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

  .stamp {
    height: 90px;
    float: right;
    transform: rotate(8deg);
  }

  .avatar {
    position: relative;
    left: -40px;
  }

  .fake-nav {
    width: 68px;
    height: 68px;
    position: absolute;
    top: 32px;
    right: 32px;
    margin: 0;
    border-radius: 50%;
    background: #f0b5aa;
    border: none;
    box-shadow: 0px 8px 0px #d7cec8;
    cursor: pointer;
    pointer-events: none;
    z-index: 10;
    opacity: 0;
  }
</style>
