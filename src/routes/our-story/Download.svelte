<script>
  import Download from "$lib/icons/Download.svelte";
</script>

<section class="space full-width">
  <div class="inner">
    <div class="">
      <h2>Download the Guide</h2>
      <p>Quick start with essential knowledge.</p>
      <a href="/" class="button top">Download now <Download /></a>
    </div>
    <div>
      <ul class="list">
        <li>Victims will have the knowledge and resources to seek help, escape dangerous situations, and begin their journey to recovery and empowerment.</li>
        <li>Without access to our resources, victims may remain trapped in abusive situations, facing further exploitation and danger.</li>
        <li>Hear from survivors who have utilized our resources to reclaim their lives and find safety.</li>
      </ul>
    </div>
    <a href="/" class="button bottom">Download now <Download /></a>
  </div>
</section>

<style>
  section {
    background-color: var(--teal);
    color: white;
  }

  .inner {
    display: grid;
    align-items: center;
    gap: var(--size-2);

    @media (width > 49rem) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (width < 49rem) {
      padding-inline: var(--size-2);
    }
  }

  .button {
    display: none;
    align-items: center;
    gap: var(--size-0-5);
    margin-block-start: var(--size-2);

    &.top {
      @media (width > 49rem) {
        display: inline-flex;
      }
    }
    &.bottom {
      @media (width < 49rem) {
        display: inline-flex;
        justify-self: center;
      }
    }
  }

  .list {
    font-size: calc(var(--size) * 1.25);
    /* font-weight: 600; */
    list-style-image: url('/Check.svg');
    
    & li {
      padding-inline-start: var(--size);
    }
  }

  .list > * + * {
    margin-block-start: var(--size-2);
  }
</style>