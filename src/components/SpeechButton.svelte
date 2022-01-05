<button><span><slot /></span></button>

<style>
  button {
    border-radius: 50px;
    padding: 10px 35px 15px 20px;
    margin-top: 40px;
    margin-left: 45px;
    cursor: pointer;
    background-color: white;
    box-shadow: 0px 8px 0px 0px var(--shadow);
    font-size: 1em;
    border: 0;
    font-weight: 500;
    /* background-image: url("/images/next.svg"); */
  }

  button span::after {
    content: url("/images/next.svg");
    position: relative;
    top: 3px;
    left: 15px;
    display: inline-block;
  }
</style>
