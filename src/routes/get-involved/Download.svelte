<script>
  import Download from '$lib/icons/Download.svelte'
</script>

<section class="space full-width">
  <div class="inner">
    <h2>If you're not ready to commit, download <span class="bold">our free guide</span> on recognizing and responding to human trafficking.</h2>
    <a href="/guide-share-the-signal.pdf" target="_blank" class="button">Download now <Download /></a>
  </div>
</section>

<style>
  section {
    background-color: var(--teal);
    color: white;
  }
  
  .inner {
    display: grid;
    gap: var(--size-2);

    @media (width > 32rem) {
      grid-template-columns: 2fr 1fr;
    }
  }

  h2 {
    flex: 2;
  }

  .button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    gap: var(--size-0-5);
    width: max-content;
    flex: 1;
    justify-self: center;
    align-self: center;
    text-align: center;

    &:hover {
      background-color: #eee;
    }
  }

  span {
    color: black;
  }
</style>