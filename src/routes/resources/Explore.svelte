<section class="space full-width">
  <h2 class="h3">Explore our resources</h2>

  <div class="items">
    <div class="item">
      <h3 class="h2" style="color: var(--yellow);">Educate yourself</h3>
      <p>Dive into our curated collection of articles, guides, videos, and toolkits to deepen your understanding of human trafficking, its signs, and its impact.</p>
    </div>
    <div class="item">
      <h3 class="h2" style="color: var(--red);">Raise Awareness</h3>
      <p>Spread the word by sharing these resources with your community, amplifying the message, and increasing awareness about human trafficking.</p>
    </div>
    <div class="item">
      <h3 class="h2" style="color: var(--teal);">Support Victims</h3>
      <p>Learn how to recognize signs of trafficking and provide support to victims by accessing our comprehensive support materials.</p>
    </div>
  </div>
</section>

<style>
  section {
    background-color: white;
  }

  h2 {
    color: #808080;
  }

  .items {
    margin-block-start: var(--size-2);
  }

  .item {
    display: grid;
    margin-inline: auto;
    padding-block: var(--size-4);
    padding-inline: var(--size-4);
    border-top: 1px solid #d9d9d9;
    
    @media (width > 32rem) {
      grid-template-columns: 12rem 1fr;
      align-items: center;
      gap: var(--size-2);
    }
  }
</style>