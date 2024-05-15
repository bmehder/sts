<script>
  export let title = ''
  export let content = ''
  export let src = ''
</script>

<section class="full-width">
  <div class="inner">
    <div class="image" style="background-image: url({src});">
    </div>
    <div class="flow text">
      <h2>{title}</h2>
      <p class="h3">{@html content}</p>
    </div>
  </div>
</section>

<style>
  section {
    background-color: black;
    color: white;
  }

  .inner {
    display: grid;
    gap: var(--size-3);
    font-size: var(--size-2);

    & .image {
      width: 100%;
      height: 100%;
      background-size: cover;
    }

    & .text {
      padding-block: calc(var(--size-2) * 3);

      /* padding-block: var(--size-4); */
      padding-inline: var(--size-2);
    }
    
    & h2 {
      color: var(--green);
      line-height: 1.5;
    }
    
    & p {
      font-weight: 400;
      line-height: 1.5;
    }
    
    @media (width > 48rem) {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }
  }
</style>