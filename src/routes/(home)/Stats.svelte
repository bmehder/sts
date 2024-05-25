<script>
  export let items = []
</script>

<section class="full-width">
  <div class="inner auto-grid">
    {#each items as { title, content } }
      <div class="item">
        <div class="heading">{title}</div>
        <div class="content">{@html content}</div>
      </div>
    {/each}
  </div>
</section>

<style>
  section {
    padding-block-end: var(--size-6);
    background-color: white;
  }

  .inner {
    gap: var(--size);
    font-weight: 400;
  }
  
  .item {
    aspect-ratio: 1;
    display: grid;
    padding: var(--size-2);
    background-color: var(--red);
    color: white;
    border-radius: var(--size);
    box-shadow: 2px 2px 6px #bebebe;
  }

  .heading {
    font-size: var(--size-4);
    font-weight: 700;
  }
  
  .content {
    margin-block-start: auto;
  }

  .italic {
    font-weight: 300;
    font-style: italic;
  }
</style>