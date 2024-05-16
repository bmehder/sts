<script>
	import Quote from '$lib/Quote.svelte'
	import Left from '$lib/icons/Left.svelte'
	import Right from '$lib/icons/Right.svelte'

	export let quotes = []

  console.log(quotes)

	let quoteIndex = 0

	const handleClick = x => {
		if (x === 'left') {
			quoteIndex = quoteIndex === 0
				? quotes.length - 1
				: quoteIndex - 1
		} else {
			quoteIndex = quoteIndex === quotes.length - 1
				? 0
				: quoteIndex + 1
		}
	}
</script>

<section class="space full-width">
  <div class="inner">
    <div class="flow">
      <h2>Inspiring Stories</h2>
      <p class="h3">Hear from volunteers, donors, and advocates who have made a difference through Share The Signal. Their stories inspire hope and demonstrate the impact of our work.</p>
    </div>
    <div style="margin-block-start: var(--size-4);">
      <Quote quote={quotes[quoteIndex].content} cite={quotes[quoteIndex].cite} />
    </div>
  </div>
  <div class="controls">
		<Left on:click={() => handleClick('left')} />
		<Right on:click={() => handleClick('right')} />
	</div>
</section>

<style>
  section {
    background-color: white;
  }

  h2 {
    color: var(--teal);
  }

  .inner {
		max-width: 52rem;
		display: grid;
    align-items: center;
		/* gap: var(--size); */
		margin: auto;

		@media (width > 32rem) {
			grid-template-columns: repeat(2, 1fr);
			gap: var(--size-4);
		}
	}

  .controls {
		display: flex;
		justify-self: end;
		gap: var(--size-0-5);
		padding-inline-end: var(--size-3);
	}
</style>