<section class="space full-width">
  <div class="inner">
    <div class="flow">
      <h2>Impact of Your Support</h2>
      <p class="h3">Your support empowers victims to seek help, escape dangerous situations, and rebuild their lives free from exploitation.</p>
      <a href="/" class="button">Donate now</a>
    </div>
    <div>
      <img src="/involved/brunette-woman.jpg" alt="brunette woman" />
    </div>
  </div>
</section>

<style>
  section {
    background-color: white;
  }

  .inner {
    display: grid;
    gap: var(--size-4);

    @media (width > 48rem) {
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
    }
  }

  h2 {
    color: var(--red);
  }

  .button {
    background-color: black;
    color: white;
  }

  img {
    aspect-ratio: 4/3;
    object-fit: cover;
    border-radius: var(--size-0-5);
  }
</style>