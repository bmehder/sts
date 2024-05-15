<script>
  export let lead = ''
  export let main = ''
  export let description = ''
  export let src = ''
</script>

<div class="hero full-width" style="background-image: url({src});">
  <div class="inner fixed-flow">
    <div class="lead">{lead}</div>
    <div class="main">{main}</div>
    <div class="description">{@html description}</div>
    <a href="/" class="button">Donate now</a>
  </div>
</div>

<style>
  .hero {
    border-image: fill 0 linear-gradient(transparent, #000a);
    padding-block: var(--size-6);
    background-size: cover;
    background-position: center;
    text-align: center;
  }

  .inner {
    max-width: 54rem;
    margin-inline: auto;
    color: white;
  }

  .lead {
    color: var(--yellow);
    font-size: var(--size-1-5);
    font-weight: 600;
    text-shadow: 0 0 13px black;
  }
  
  .main {
    font-size: var(--size-2);
    font-weight: 600;
    line-height: 1.2;
  }
  
  .description {
    max-width: 32rem;
    margin-inline: auto;
    font-size: var(--size-1-5);
    font-weight: 300;

    & span {
      font-style: italic;
    }
  }

  .fixed-flow > * + * {
    margin-block-start: 1.5rem;
  }
</style>

