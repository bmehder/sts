<script>
  import Play from '$lib/icons/Play.svelte'
</script>

<header class="content-grid full-width">
  <div class="inner">
    <div class="logo">
      <a href="/"><img src="/logo.png" alt="Share the Signal Logo"></a>
    </div>
    <div class="navigation">
      <div class="secondary-navigation">
        <ul>
          <li><a href="/"><Play /><span>View Share The Signal video</span></a></li>
          <li><a class="button" href="/">Donate now</a></li>
        </ul>
      </div>
      <nav class="main-navigation">
        <ul>
          <li><a href="/our-story">Our Story</a></li>
          <li><a href="/our-work">Our Work</a></li>
          <li><a href="/get-involved">Get Involved</a></li>
          <li><a href="/resources">Resources</a></li>
          <li><a href="/">Homepage</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>

<style>
  header {
    padding-block: var(--size);
    background-color: white;
  }
  
  .inner {
    display: flex;
    justify-content: space-between;
  }

  .navigation {
    display: grid;
    align-items: center;
  }

  a {
    color: black;
    font-weight: 600;
    text-decoration: none;

    &:hover {
      color: var(--green);
    }
  }

  .secondary-navigation ul {
    justify-content: end;
    align-items: center;

    & a:not(.button) {
      color: var(--green);
      text-decoration: underline;
    }
    
    & .button {
      padding-block: 0;
      background-color: var(--green);
      color: white;
    }

    & li:first-of-type a {
      display: flex;
      align-items: center;
      gap: var(--size-0-5);
    }
  }

  ul {
    display: flex;
    gap: var(--size-2);
  }
</style>