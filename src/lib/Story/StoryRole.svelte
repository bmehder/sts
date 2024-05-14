<section class="full-width">
  <div class="inner">
    <div class="image">
    </div>
    <div class="flow text">
      <h2>Our Role</h2>
      <p class="h2"><span class="bold">Share The Signal</span> serves as a <span class="bold">compassionate and knowledgeable guide</span> in the fight against human trafficking.</p>
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
      background-image: url('/story/hands-holding-each-other-support.jpg');
      background-size: cover;
    }

    & .text {
      padding-block: var(--size-4);
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