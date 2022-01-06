<script>
  import { miniGameIndex } from "./../../stores";

  let miniGame = miniGameIndex === 0 ? "desk" : "lamp";

  export let question;
</script>

<section class="{miniGame} speech-container">
  <div class="speech">
    <p class="sentence">
      {question.text}
    </p>
  </div>
  <!-- remplacer par avatar thinking ici -->
  <img class="avatar" src="/images/Amigos.png" alt="" />
</section>

<style>
  .speech-container {
    position: relative;
    left: 20px;
    font-size: 1.25em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 90px;
  }

  .speech-container.lamp {
    top: 80px;
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
  }

  .avatar {
    position: relative;
    left: -40px;
    height: 150px;
  }
</style>
