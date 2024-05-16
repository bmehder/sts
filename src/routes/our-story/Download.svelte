<script>
  import Download from "$lib/icons/Download.svelte";
</script>

<section class="space full-width">
  <div class="inner">
    <div class="">
      <h2>Download the Guide</h2>
      <p>Quick start with essential knowledge.</p>
      <a href="/" class="button">Download now <Download /></a>
    </div>
    <div>
      <ul class="list">
        <li>Victims will have the knowledge and resources to seek help, escape dangerous situations, and begin their journey to recovery and empowerment.</li>
        <li>Without access to our resources, victims may remain trapped in abusive situations, facing further exploitation and danger.</li>
        <li>Hear from survivors who have utilized our resources to reclaim their lives and find safety.</li>
      </ul>
    </div>
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

    @media (width > 48rem) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .button {
    display: inline-flex;
    align-items: center;
    gap: var(--size-0-5);
    margin-block-start: var(--size-2);
  }

  .list {
    font-size: calc(var(--size) * 1.25);
    font-weight: 600;
    list-style-image: url('/Check.svg');
    
    & li {
      padding-inline-start: var(--size);
    }
  }

  .list > * + * {
    margin-block-start: var(--size-2);
  }
</style>