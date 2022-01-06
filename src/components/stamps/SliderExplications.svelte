<script>
  export let content;

  console.log(content)
</script>

<div>
  <h2>{content.title}</h2>

  <p>{content.paragraph}</p>
</div>

<style>
  h2 {
    margin: 0
  }

  p {
    font-size: 1.5rem;
  }
</style>