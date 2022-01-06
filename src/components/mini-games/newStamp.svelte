<script>
  import { createEventDispatcher } from "svelte";

  import Speech from "../Speech.svelte";
  import SpeechButton from "../SpeechButton.svelte";

  const dispatch = createEventDispatcher();

  export let game;

  const collectStamp = () => {
    dispatch("stampCollected");
  };
</script>

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
    <div on:click={collectStamp}>
      <SpeechButton>Ajouter au passeport</SpeechButton>
    </div>
  </div>
  <div class="avatar">
    <img src="/images/Amigos.png" alt="" />
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

  .stamp {
    height: 90px;
    float: right;
    transform: rotate(8deg);
  }

  .avatar {
    position: relative;
    left: -40px;
  }
</style>
