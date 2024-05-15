<section class="space full-width">
  <div class="inner">
    <div class="flow">
      <h2>Avoiding Failure</h2>
      <p>Failure to educate oneself and take action against human trafficking perpetuates its prevalence, leaving victims without access to support and assistance.</p>
      <a href="/" class="button">Donate now</a>
    </div>
    <div>
      <img src="/resources/woman-freckles.jpg" alt="woman freckles" />
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