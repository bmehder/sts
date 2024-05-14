<script>
	import Quote from '$lib/Quote.svelte'
	import Left from '$lib/icons/Left.svelte'
	import Right from '$lib/icons/Right.svelte'

	const quotes = [
		{
			content:
				"I was trapped, feeling invisible in plain sight until a stranger recognized the distress signal I learned from Share The Signal. That knowledge saved my life. Today, I'm free and rebuilding, thanks to that awareness.",
			cite: "Elena's Escape",
		},
		{
			content:
				"I never thought a simple hand gesture I saw on a Share The Signal poster would lead to my rescue. Someone saw it, knew what it meant, and acted. I owe my freedom to that person's decision to get involved.",
			cite: "Marks' moment",
		},
		{
			content:
				"Lost and scared, I had almost given up hope. But the Share The Signal campaign trained people to notice signs like mine. A trained volunteer saw my silent plea for help and intervened. I'm now safe, pursuing my dreams, a survivor.",
			cite: "Aisha's Turnaround",
		},
	]

	let quoteIndex = 0

	const handleClick = x => {
		if (x === 'left') {
			quoteIndex = quoteIndex === 0 ? quotes.length - 1 : quoteIndex - 1
		} else quoteIndex = quoteIndex === quotes.length - 1 ? 0 : quoteIndex + 1
	}
</script>

<section class=" full-width">
	<div class="inner">
		<div>
			<h2><span>Lives Changed:</span><br />Real Stories of Rescue and Renewal.</h2>
		</div>
		<Quote quote={quotes[quoteIndex].content} cite={quotes[quoteIndex].cite} />
	</div>
	<div class="controls">
		<Left on:click={() => handleClick('left')} />
		<Right on:click={() => handleClick('right')} />
	</div>
</section>

<style>
	section {
		padding-block-end: var(--size-6);
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
		color: var(--green);
	}

	.controls {
		display: flex;
		justify-self: end;
		gap: var(--size-0-5);
		padding-inline-end: var(--size-3);
	}
</style>
