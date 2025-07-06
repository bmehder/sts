<script>
	import Quote from '$lib/Quote.svelte'
	import Left from '$lib/icons/Left.svelte'
	import Right from '$lib/icons/Right.svelte'

	export let quotes = []

	let quoteIndex = 0
	let direction = 'forward'

	const handleClick = x => {
		if (x === 'left') {
			direction = 'forward'
			quoteIndex = quoteIndex === 0 ? quotes.length - 1 : quoteIndex - 1
		} else {
			direction = 'reverse'
			quoteIndex = quoteIndex === quotes.length - 1 ? 0 : quoteIndex + 1
		}
	}
</script>

<section class="full-width space">
	<div class="inner">
		<div>
			<h2><span>Lives Changed:</span><br />Real Stories of Rescue and Renewal.</h2>
		</div>
		<Quote
			quote={quotes[quoteIndex].content}
			cite={quotes[quoteIndex].cite}
			{direction}
		/>
	</div>
	<div class="controls">
		<Left on:click={() => handleClick('left')} />
		<Right on:click={() => handleClick('right')} />
	</div>
</section>

<style>
	section {
		/* padding-block-end: var(--size-6); */
		background-color: white;
		font-weight: 400;
	}

	.inner {
		max-width: 52rem;
		display: grid;
		gap: var(--size);
		margin: auto;

		@media (width > 32rem) {
			grid-template-columns: repeat(2, 1fr);
			gap: var(--size-2);
		}
	}

	span {
		color: var(--teal);
	}

	.controls {
		display: flex;
		justify-self: end;
		gap: var(--size-0-5);

		@media (width > 64rem) {
			padding-inline-end: var(--size-3);
		}
	}
</style>
