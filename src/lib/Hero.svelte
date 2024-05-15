<script>
  export let lead = ''
  export let main = ''
  export let description = ''
  export let src = ''
</script>

<div class="hero full-width" style="background-image: url({src});">
  <div class="inner fixed-flow">
    <div class="lead">{lead}</div>
    <div class="main balance">{main}</div>
    <div class="description">{@html description}</div>
    <a href="/" class="button">Donate now</a>
  </div>
  <div class="free-guide"><a href="/">DOWNLOAD FREE GUIDE ON SIGNS OF MODERN DAY TRAFFICKING -</a> its not what you think</div>
</div>

<style>
  .hero {
    border-image: fill 0 linear-gradient(transparent, #000a);
    padding-block: var(--size-6);
    background-size: cover;
    background-position: center;
  }

  .inner {
    max-width: 25rem;
    color: white;
  }

  .lead {
    color: var(--green);
    font-size: var(--size-1-5);
    font-weight: 600;
    text-shadow: 0 0 4px rgba(0, 0, 0, 0.5);
  }
  
  .main {
    font-size: var(--size-4);
    font-weight: 600;
    line-height: 1.1;
  }
  
  .description {
    font-size: var(--size-1-5);
    font-weight: 300;

    & span {
      font-style: italic;
    }
  }

  .fixed-flow > * + * {
    margin-block-start: 1.5rem;
  }

  .free-guide {
    padding-block-start: var(--size-4);
    color: white;
    font-weight: 600;

    & a {
      color: var(--yellow);
    }
  }
</style>

